import { getJson } from '@logic/Api';
import { coordsDistance } from '@utils/Geo';

import type { iCard } from 'types/card';
import { API_BASE } from '@env';

import { filters } from '@store/filters';

// Check if this could cause an error
const lastRequest = {
	lastLat: 181,
	lastLon: 181,
	lastCheckTime: 0,
	lastFilters: ''
};

const timeLimit = 1000 * 10; // ten seconds

export const loadUsers = async (lat: number, lon: number): Promise<iCard[]> => {
	const distance = coordsDistance(
		lat,
		lon,
		lastRequest.lastLat,
		lastRequest.lastLon
	);
	const filterString = filters.getActive(filters.items).join(',');
	const query = `${API_BASE}/v1/users/?lat=${lat}&lon=${lon}&services=${filterString}`;

	if (distance <= 1) {
		if (lastRequest.lastFilters === filterString) {
			return Promise.reject(
				new Error('Too close to previous location to force recalculate')
			);
		}
	}

	if (lastRequest.lastCheckTime + timeLimit >= new Date().getTime()) {
		return Promise.reject(
			new Error('Too many request in a time period to recalculate')
		);
	}

	// Update checks before making request
	lastRequest.lastCheckTime = new Date().getTime();
	lastRequest.lastFilters = filterString;
	lastRequest.lastLat = lat;
	lastRequest.lastLon = lon;

	if (__DEV__) {
		console.log('Started making request with query', query, lastRequest);
	}

	return getJson(query) as Promise<iCard[]>;
};
