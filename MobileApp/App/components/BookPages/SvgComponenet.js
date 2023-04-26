import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  ClipPath,
  G,
} from "react-native-svg";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
function SvgComponent(props) {
  const navigation = useNavigation();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={"100%"}
      height={166.076}
      viewBox="0 0 360 166.076"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#3c98bd" />
          <Stop offset={1} stopColor="#0f53a1" />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Path 2"
        d="M396.137 49.383v94.452L378.6 168.849 357.881 198.4a43.727 43.727 0 01-3.08 3.906c-.437.511-.893.982-1.349 1.452a38.047 38.047 0 01-20.252 11.067 33.919 33.919 0 01-6.6.634H105.669c-12.211 0-23.73-6.279-31.276-17.057l-8.256-11.78-1.258-1.779-28.742-41.007V49.383z"
        transform="translate(-36.137 -49.383)"
        fill="url(#a)"
      />

      <TouchableOpacity
        style={Style.svgCompo}
        onPress={() => navigation.goBack()}
      >
        <Svg
          data-name="Group 275"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={10}
          viewBox="0 0 16 10"
          {...props}
        >
          <Defs>
            <ClipPath id="a">
              <Path data-name="Rectangle 85" fill="#fff" d="M0 0H16V10H0z" />
            </ClipPath>
          </Defs>
          <G data-name="Group 158" clipPath="url(#a)">
            <Path
              data-name="Path 433"
              d="M3.247 6l2.48 2.294a.99.99 0 010 1.414 1.023 1.023 0 01-1.432 0L.445 6.059A1.465 1.465 0 010 5a1.483 1.483 0 01.444-1.06L4.294.293a1.025 1.025 0 011.434 0 .992.992 0 010 1.414L3.248 4H15a1 1 0 010 2H3.247z"
              fill="#fff"
              fillRule="evenodd"
            />
          </G>
        </Svg>
      </TouchableOpacity>
    </Svg>
  );
}
const Style = StyleSheet.create({
  svgCompo: {
    width: 40,
    marginHorizontal: 30,
    marginVertical: 20,
  },
});
export default SvgComponent;
