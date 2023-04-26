import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";
import SvgComponent from "./SvgComponenet";
import styles from "../../screens/FirstPage/FirstPaage.style";

const BookPages = () => {
  return (
    <View style={Style.svgCompo}>
      <SvgComponent></SvgComponent>
    </View>
  );
};
const Style = StyleSheet.create({
  svgCompo: {
    width: "100%",
  },
});
export default BookPages;
