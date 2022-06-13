import React, { FC, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Linking,
	Alert,
	Pressable
} from 'react-native';

import Button from '@components/Button/Button';
import { IconPhone, IconNavigate } from '@icons/index';
import { colorList } from '@dictionaries/colors';
import { COLORS, SERVICES } from '@dictionaries/index';
import { hexToRgbA } from '@utils/Colors';

import i18n from 'i18n-js';
import { ICard } from 'types/card';

const makeCall = (phoneNumber: string | undefined) => {
	Alert.alert(
		i18n.t('Ask for help'),
		i18n.t(
			'Are you sure to make this call? Contacts in this application serves for emergency situations only'
		),
		[
			{
				text: i18n.t('Cancel'),
				style: 'cancel'
			},
			{
				text: i18n.t('Call'),
				onPress: () => Linking.openURL(`tel:${phoneNumber}`)
			}
		],
		{ cancelable: true }
	);
};

const navigate = (lat: number, lon: number) => {
	if (!lat || !lon) return;

	Linking.openURL(
		`https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${lat},${lon}`
	);
};

const getServices = (services: Array<number> | undefined) => {
	if (!services) return '';

	return services.map((item, index, array) => {
		const text: string = Object.values(SERVICES)[item].toString();
		return i18n.translate(text) + (array.length - 1 > index ? ', ' : '');
	});
};

const Vcard: FC<ICard> = ({
	name,
	surname,
	phone,
	lat,
	lon,
	services,
	distance,
	note,
	index
}) => {
	const color = colorList[Number(index)];
	const [noteShowed, setNoteShowed] = useState(false);
	const showNote = () => {
		setNoteShowed(!noteShowed);
	};
	const noteNotEmpty = typeof note !== 'undefined' ? note : ' ';

	return (
		<Pressable onPress={() => showNote()}>
			<View style={s.container}>
				<View style={s.sideLine} />
				<View style={s.pointPosition}>
					<View style={[s.shadow, { borderColor: hexToRgbA(color) }]}>
						<View style={s.shadowSpace}>
							<View
								style={[s.point, { backgroundColor: color }]}
							/>
						</View>
					</View>
				</View>

				<View style={s.distance}>
					<Text style={s.distanceText}>{distance} km</Text>
				</View>

				<View style={s.name}>
					<Text style={[s.nameText, { color }]}>
						{name} {surname}
					</Text>
					<Text>
						{i18n.translate('offers')}
						{getServices(services)}
					</Text>
				</View>

				<View style={s.contact}>
					<Button
						onPress={() => makeCall(phone)}
						icon={() => IconPhone}
						iconWidth={16}
						iconHeight={16}
						iconFillColor={COLORS.DARKTEXT}
						iconHoverFillColor={COLORS.WHITE}
						styles={{ button: s.buttonSpace }}
					>
						{i18n.t('call')}
					</Button>
					<Button
						onPress={() => navigate(lat, lon)}
						icon={() => IconNavigate}
						iconWidth={16}
						iconHeight={16}
						iconFillColor={COLORS.DARKTEXT}
						iconHoverFillColor={COLORS.WHITE}
					>
						{i18n.t('navigate')}
					</Button>
				</View>
				{noteShowed && (
					<View>
						<Text>{i18n.t('note')}</Text>
						<Text>{noteNotEmpty}</Text>
					</View>
				)}
			</View>
		</Pressable>
	);
};

const s = StyleSheet.create({
	container: {
		paddingLeft: 90,
		paddingRight: 20,
		paddingBottom: 10
	},
	name: {
		paddingBottom: 4
	},
	nameText: {
		fontSize: 20,
		paddingBottom: 8
	},
	pointPosition: {
		position: 'absolute',
		left: 56,
		top: 3,
		width: 19,
		height: 19
	},
	distance: {
		position: 'absolute',
		top: 6,
		left: 0,
		width: 47
		// borderColor: 'black',
		// borderWidth: 1
	},
	distanceText: {
		fontSize: 10,
		textAlign: 'right'
	},
	sideLine: {
		width: 1,
		position: 'absolute',
		top: 30,
		bottom: 5,
		left: 65,
		backgroundColor: COLORS.LIGHTTEXT
	},
	contact: {
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	buttonSpace: {
		marginRight: 8
	},

	point: {
		width: 13,
		height: 13,
		borderRadius: 13
	},
	shadowSpace: {
		width: 17,
		height: 17,
		borderRadius: 17,
		borderColor: 'rgba(0, 0, 0, 0)',
		borderWidth: 2
	},
	shadow: {
		width: 19,
		height: 19,
		borderRadius: 19,
		borderColor: 'rgba(255, 0, 0, 0.5)',
		borderWidth: 1
	}
});

export default Vcard;
