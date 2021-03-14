import * as React from "react";
import Svg, { Path } from 'react-native-svg';
import { mySvgIcon } from 'types/svg';

const IconShare: mySvgIcon = ({
  width,
  height,
  fillColor
}): JSX.Element => {
  return (
    <Svg
      width={Number(width) | 15}
      height={Number(height) | 15}
      viewBox="0 0 512 512"
      fill={String(fillColor ? fillColor : "#000000")}
    >
        <Path d="M506.256,163.568L376.963,34.918c-5.588-5.562-13.97-7.212-21.234-4.184c-7.277,3.021-12.014,10.123-12.014,17.998v58.399
			c-64.097,4.236-96.104,30.811-101.887,36.106c-80.432,66.943-71.537,158.226-68.834,176.387c0.039,0.26,0.078,0.526,0.123,0.786
			l2.599,14.944c1.397,8.031,7.628,14.34,15.633,15.828c1.195,0.221,2.391,0.331,3.574,0.331c6.764,0,13.151-3.522,16.711-9.467
			l7.79-12.982c42.584-70.822,95.207-82.225,124.29-82.323v60.589c0,7.894,4.763,15.003,12.066,18.017
			c7.303,3.008,15.691,1.319,21.253-4.269L506.328,191.13C513.917,183.502,513.884,171.157,506.256,163.568z M382.707,260.1v-31.389
			c0-9.571-6.939-17.725-16.387-19.245c-22.494-3.619-93.291-7.979-154.432,63.376c3.944-29.122,16.991-68.262,55.248-99.938
			c0.468-0.39,0.63-0.52,1.059-0.949c0.286-0.266,29.356-26.412,93.063-26.412h1.949c10.766,0,19.492-8.726,19.492-19.492V95.624
			l82.245,81.823L382.707,260.1z" />
        <Path d="M435.33,369.056c-10.766,0-19.492,8.726-19.492,19.492v55.228H38.985V157.889h116.954
			c10.766,0,19.492-8.726,19.492-19.492s-8.726-19.492-19.492-19.492H19.492C8.726,118.904,0,127.63,0,138.396v324.873
			c0,10.766,8.726,19.492,19.492,19.492H435.33c10.766,0,19.492-8.726,19.492-19.492v-74.721
			C454.822,377.782,446.096,369.056,435.33,369.056z" />
    </Svg>
  )
};

export default IconShare;

