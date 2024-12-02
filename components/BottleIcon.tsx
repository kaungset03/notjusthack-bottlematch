import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const BottleIcon = (props: SvgProps) => (
  <Svg
    fill={"none"}
    width="100px"
    height="180px"
    viewBox="0 0 24 24"
    id="soda-bottle-2"
    data-name="Line Color"
    className="icon line-color"
    {...props}
  >
    <Path
      id="primary"
      d="M9,21h6a1,1,0,0,0,1-1.08l-.21-2.46a23.7,23.7,0,0,1,.1-4.91h0A3.12,3.12,0,0,0,15,9.92h0a3.13,3.13,0,0,1-1-2.25V4a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1V7.67A3.13,3.13,0,0,1,9,9.92H9a3.12,3.12,0,0,0-.93,2.63h0a23.7,23.7,0,0,1,.1,4.91L8,19.92A1,1,0,0,0,9,21Z"
      fill={props.fill}
      stroke={"#000"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={0.5}
    />
  </Svg>
);
export default BottleIcon;
