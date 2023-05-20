import React from "react";
import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";

const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: horizontalScale(10),
    marginBottom: verticalScale(100),
  },
  outContainer: {
    width: "100%",
  },

  navContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: verticalScale(70),
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: horizontalScale(70),
    borderRadius: moderateScale(25),
    width: "100%",
  },
  btnSI: {
    paddingVertical: verticalScale(11),
    // paddingHorizontal: 26,
    backgroundColor: "rgba(60,152,189,1)",
    borderRadius: moderateScale(20),
    width: "50%",
  },
  btnSO: {
    // borderColor: "lightgray",
    // borderStyle: "solid",
    // borderWidth: 1,
    paddingVertical: verticalScale(11),
    // paddingHorizontal: 26,
    borderRadius: moderateScale(20),
    width: "50%",
  },
  btnTextSO: {
    fontSize: moderateScale(15),
    color: "rgba(60,152,189,1)",
    textAlign: "center",
  },
  btnTextSI: {
    fontSize: moderateScale(15),
    color: "white",
    textAlign: "center",
  },
  form: { width: "100%" },
  input: {
    borderBottomColor: "lightgray",
    borderBottomWidth: horizontalScale(1),
    height: verticalScale(40),
    marginTop: verticalScale(10),
    textAlign: "right",
  },
  submitBtn: {
    backgroundColor: "rgba(60,152,189,1)",
    width: "100%",
    marginVertical: verticalScale(30),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(25),
  },
  submitText: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    color: "white",
  },
  afterSubmit: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    borderBottomColor: "lightgray",
    borderBottomWidth: horizontalScale(2),
  },
  linkedBtnWrapper: {
    justifyContent: "center",
    alignItems: "center",
    // width: "95%",
    marginVertical: verticalScale(10),
  },
  linkedGoogle: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginVertical: verticalScale(10),
  },
  linkBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: verticalScale(40),
    // marginTop: verticalScale(10),
    width: "100%",
    paddingHorizontal: horizontalScale(20),
    borderColor: "lightgray",
    borderWidth: horizontalScale(1),
    borderStyle: "solid",
    borderRadius: moderateScale(25),
  },
  linkBtnText: {
    color: "lightgray",
  },
  afterPass: {
    fontSize: moderateScale(14),
    color: "lightgray",
    textAlign: "left",
  },
  errorText: {
    fontSize: moderateScale(15),
    color: "red",
    textAlign: "right",
  },
  arrowStyle: {
    marginTop: verticalScale(15),
    alignSelf: "flex-start",
    marginLeft: horizontalScale(30),
  },
});
export default Styles;
