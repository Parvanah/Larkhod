import React from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3C98BD",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    flex: 1,
    fontStyle: "normal",
    // marginTop: 30,
  },

  scrollcontainer: {
    backgroundColor: " rgba(60,152,189,1)",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    // flex: 1,

    // marginTop: 30,
    width: horizontalScale(300),
    // marginTop: 80,
    // paddingBottom: 80,
    paddingVertical: "20%",
  },
  btnWrapper: {
    marginTop: verticalScale(60),
  },
  btn: {
    marginVertical: verticalScale(5),
    marginHorizontal: horizontalScale(5),
    paddingHorizontal: horizontalScale(50),
    paddingVertical: verticalScale(10),
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(30),
    opacity: 0.8,
  },
  btnText: {
    color: "#fff",
    fontSize: moderateScale(18),
  },
  imgStyle: {
    marginBottom: verticalScale(50),
    width: horizontalScale(150),
    height: verticalScale(150),
    marginTop: verticalScale(30),
  },
  text: {
    color: "#fff",
    fontSize: moderateScale(25),
  },
  textWrapper: {
    marginVertical: verticalScale(30),
    justifyContent: "center",
    alignItems: "center",
    width: horizontalScale(500),
    // margibBottom: 30,
    // backgroundColor: "red",
  },
});
export default styles;
