import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mySvgIcon } from 'types/svg';

const IconMenu: mySvgIcon = ({ width, height, fillColor }): JSX.Element => {
	return (
		<Svg
			width={Number(width) | 34}
			height={Number(height) | 34}
			viewBox="0 0 512 512"
			fill={String(fillColor || '#000000')}
		>
			<Path d="M501.333,96H10.667C4.779,96,0,100.779,0,106.667s4.779,10.667,10.667,10.667h490.667c5.888,0,10.667-4.779,10.667-10.667 S507.221,96,501.333,96z" />
			<Path d="M501.333,245.333H10.667C4.779,245.333,0,250.112,0,256s4.779,10.667,10.667,10.667h490.667 c5.888,0,10.667-4.779,10.667-10.667S507.221,245.333,501.333,245.333z" />
			<Path d="M501.333,394.667H10.667C4.779,394.667,0,399.445,0,405.333C0,411.221,4.779,416,10.667,416h490.667 c5.888,0,10.667-4.779,10.667-10.667C512,399.445,507.221,394.667,501.333,394.667z" />
		</Svg>
	);
};

export default IconMenu;
