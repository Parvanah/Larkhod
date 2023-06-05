import * as React from "react";
import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
const Style = StyleSheet.create({
  containerAboutUS: {
    width: "100%",
  },
  svgWrapperAboutUs: {
    // marginTop: 80,
    // marginLeft: -100,
    // height: "100%",
    alignItems: "center",
    width: "100%",
    // backgroundColor: "gray",
    justifyContent: "center",
    // padding: 40,
    marginBottom: verticalScale(30),
    marginTop: "-10%",
  },
  image: {
    marginTop: verticalScale(40),

    justifyContent: "center",
    alignItems: "center",
  },
  topSvg: {},
  arrow: {
    // backgroundColor: "red",
    marginBottom: verticalScale(-50),
    paddingTop: verticalScale(30),
    zIndex: 100,
    marginLeft: horizontalScale(30),
  },
  mainContentText: {
    width: "77%",
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(-250),
    marginTop: verticalScale(-20),
    height: verticalScale(700),
  },
  title: {
    fontSize: moderateScale(20),
    // fontWeight: "bold",
    color: "#3C98BD",
    marginBottom: verticalScale(10),
    marginTop: "30%",
    textAlign: "right",
  },
  description: {
    color: "#707070",
    fontSize: moderateScale(14),
    textAlign: "right",
  },
  svg: {
    height: verticalScale(500),
    margin: 0,
    width: "100%",
    marginTop: verticalScale(-260),
    marginBottom: "10%",
  },
});
export default Style;
