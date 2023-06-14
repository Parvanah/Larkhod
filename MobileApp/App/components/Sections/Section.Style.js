import React from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  sectionMiddle: {
    flexDirection: "row",
    height: verticalScale(60),
    // marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionMiddleBtn: {
    height: verticalScale(50),
    justifyContent: "center",
    alignItems: "center",
    // padding: 50,
    width: "37%",
    backgroundColor: "#D4E4E8",
    height: verticalScale(50),
    borderRadius: moderateScale(15),
    marginHorizontal: horizontalScale(2),
  },
  sectionMiddleBtnText: {
    color: "#3C98BD",
    fontSize: moderateScale(15),
    // fontWeight: "bold",
    // padding: 0,
    // margin: 0,
  },
  circle: {
    marginTop: verticalScale(15),
    marginLeft: horizontalScale(180),
  },
  line: {
    // marginTop: 30,
  },
  svgWrapper: {
    marginTop: verticalScale(-12),
    marginBottom: verticalScale(50),
    width: "100%",
  },
  container: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    // width: "100%",
    // paddingHorizontal: 20,
  },
  top: {
    marginTop: verticalScale(-170),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    height: verticalScale(150),
    marginBottom: verticalScale(-20),
  },
  userName: {
    fontSize: moderateScale(20),

    color: "#fff",
    marginHorizontal: horizontalScale(20),
  },
  imageWrapper: {
    backgroundColor: "#fff",
    height: verticalScale(80),
    width: verticalScale(80),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(50),
    marginHorizontal: horizontalScale(20),
    // marginTop: -20,
  },
  img: {
    height: 40,
    width: 40,
  },
  middle: {
    // backgroundColor: "rgba(212,228,232,1)",
    // height: "5%",
    // width: "70%",
    // marginTop: 20,
    // padding: 10,
    // borderRadius: 10,
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15%",
    position: "absolute",
    top: verticalScale(150),
    // marginBottom: -10,
    // width: "100%",
    // backgroundColor: "green",
    // position: "absolute",
    // top: 160,
  },
  bottom: {
    backgroundColor: "#fff",
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(30),
    // flex: 1,
    // width: "100%",
    // marginTop: -10,
    //
    // marginRight: 50,
    // marginLeft: -7width: "100%",0,
    // paddingHorizontal: "10%",
    // backgroundColor: "lightgreen",
    // marginHorizontal: "10%",
  },
  bottomBtn: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    padding: "2%",
    marginVertical: verticalScale(10),

    width: "95%",
    height: verticalScale(150),
    borderRadius: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    // marginHorizontal: "10%",
  },
  btnText: {
    color: "#fff",
    fontSize: moderateScale(25),
    // fontWeight: "bold",
    // backgroundColor: "red",
    marginLeft: "20%",
  },
  icon: {
    width: 70,
    height: 70,
  },
});

export default Styles;
