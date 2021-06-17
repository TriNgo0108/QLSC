import * as React from "react"
import Svg, { Path, G, Circle } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function CalendarIcon() {
  return (
    <Svg
      height={35}
      viewBox="0 0 128 128"
      width={35}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M6.306 39.363h115.387v82.331H6.306z" fill="#dfeef4" />
      <Path d="M6.306 15.838h115.387v23.525H6.306z" fill="#f45858" />
      <Path
        d="M60.269 6.306h7.462v19.062h-7.462zM90.052 6.306h7.462v19.062h-7.462zM30.486 6.306h7.462v19.062h-7.462z"
        fill="#6d7a84"
      />
      <G fill="#3ea2e5">
        <Circle cx={27.661} cy={57.048} r={6.283} />
        <Circle cx={51.887} cy={57.048} r={6.283} />
        <Circle cx={76.113} cy={57.048} r={6.283} />
        <Circle cx={100.339} cy={57.048} r={6.283} />
        <Circle cx={27.661} cy={80.528} r={6.283} />
        <Circle cx={51.887} cy={80.528} r={6.283} />
        <Circle cx={76.113} cy={80.528} r={6.283} />
        <Circle cx={100.339} cy={80.528} r={6.283} />
        <Circle cx={27.661} cy={104.009} r={6.283} />
        <Circle cx={51.887} cy={104.009} r={6.283} />
        <Circle cx={76.113} cy={104.009} r={6.283} />
        <Circle cx={100.339} cy={104.009} r={6.283} />
      </G>
    </Svg>
  )
}
export default CalendarIcon;
