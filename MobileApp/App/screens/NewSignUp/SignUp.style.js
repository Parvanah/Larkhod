import React from "react";
import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
const Styles = StyleSheet.create({
  outContainer: {
    // backgroundColor: "rgba(60,152,189,1)",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: verticalScale(50),
    width: "100%",

    paddingBottom: horizontalScale(100),
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: horizontalScale(20),
  },
  imgStyle: {
    height: verticalScale(90),
    width: horizontalScale(90),
    marginVertical: verticalScale(40),
  },
  InContainer: {
    backgroundColor: "#FFF",
    // flex: 3,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: horizontalScale(40),
  },
  navContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: verticalScale(70),
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(25),
    width: "100%",
  },
  btnSI: {
    paddingVertical: verticalScale(11),
    // paddingHorizontal: 26,
    width: "50%",
  },
  btnSO: {
    // borderColor: "lightgray",
    // borderStyle: "solid",
    // borderWidth: 1,
    width: "50%",
    backgroundColor: "rgba(60,152,189,1)",
    paddingVertical: verticalScale(11),
    // paddingHorizontal: 26,
    borderRadius: moderateScale(20),
  },
  btnTextSO: {
    fontSize: moderateScale(15),

    color: "white",
    textAlign: "center",
  },
  btnTextSI: {
    fontSize: moderateScale(15),

    color: "rgba(60,152,189,1)",
    textAlign: "center",
  },
  form: { width: "95%", paddingTop: verticalScale(15) },
  input: {
    borderBottomColor: "lightgray",
    borderBottomWidth: horizontalScale(1),
    width: "100%",
    height: verticalScale(40),
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "right",
  },
  submitBtn: {
    backgroundColor: "rgba(60,152,189,1)",
    // width: "90%",
    marginVertical: verticalScale(30),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(25),
  },
  submitText: {
    fontSize: moderateScale(15),

    color: "white",
  },
  border: {
    borderBottomColor: "lightgray",
    borderBottomWidth: moderateScale(2),
  },
  placeholder: {
    color: "red",
  },
  afterSubmit: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkedBtnWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginVertical: verticalScale(20),
  },
  linkBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: verticalScale(40),
    marginTop: verticalScale(10),
    width: "95%",
    paddingHorizontal: horizontalScale(20),
    marginHorizontal: horizontalScale(20),
    borderColor: "lightgray",
    borderWidth: horizontalScale(1),
    borderStyle: "solid",
    borderRadius: moderateScale(25),
  },
  linkBtnText: {
    color: "lightgray",
  },
});
export default Styles;
