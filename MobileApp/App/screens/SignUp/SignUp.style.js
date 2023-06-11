import React from "react";
import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
const Styles = StyleSheet.create({
  outContainer: {
    backgroundColor: "rgba(60,152,189,1)",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: verticalScale(50),
  },
  imgStyle: {
    height: 110,
    width: 110,
    marginBottom: verticalScale(20),
    marginTop: verticalScale(0),
  },
  InContainer: {
    borderTopRightRadius: moderateScale(55),
    borderTopLeftRadius: moderateScale(55),
    backgroundColor: "#fff",
    flex: 3,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: horizontalScale(40),
  },
  navContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: verticalScale(40),
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(20),
    width: "100%",
    zIndex: 100,
  },
});
export default Styles;
