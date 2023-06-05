import React from "react";
import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
const Style = StyleSheet.create({
  FeedBackContainer: {
    width: "100%",
  },
  arrow: {
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(30),
  },
  top: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,

    color: "#3C98BD",
  },
  description: {
    fontSize: moderateScale(12),

    color: "#707070",
    textAlign: "center",
    width: horizontalScale(240),
  },
  svgWrapperFeedBack: {
    marginTop: verticalScale(10),
    // zIndex: 2,
    margin: 0,
    padding: 0,
    height: verticalScale(730),
    // width: "100%",
    // aspectRatio: 1,
    // flex: 1,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "red",
  },

  form: {
    marginBottom: verticalScale(-720),
    // marginRight: 20,
    // backgroundColor: "pink",
    zIndex: 100,
    width: "90%",
    marginHorizontal: "10%",
    height: "100%",
    paddingHorizontal: horizontalScale(30),
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'sc',
    // alignItems: "flex-start",
    // marginTop: 50,
    paddingTop: verticalScale(40),
  },
  input: {
    color: "#000",

    borderBottomColor: "#fff",
    borderBottomWidth: horizontalScale(1),
    height: verticalScale(40),
    textAlign: "right",
    fontSize: moderateScale(15),
  },
  inputMessege: {
    marginTop: verticalScale(20),
    backgroundColor: "#fff",
    // height: 100,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    borderRadius: moderateScale(15),
    // height: 120,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    fontSize: moderateScale(15),
    textAlign: "right",
  },
  SubmitBtn: {
    backgroundColor: "#fff",
    marginTop: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderRadius: 15,
    alignItems: "center",
  },
  onFocuse: {
    backgroundColor: "green",
  },
});

export default Style;
