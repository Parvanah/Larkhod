import React from "react";

import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  sectionMiddle: {
    flexDirection: "row",
    height: 70,
    // marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionMiddleBtn: {
    // height: 50,
    justifyContent: "center",
    alignItems: "center",
    // padding: 50,
    width: "37%",
    backgroundColor: "#D4E4E8",
    height: 40,
    borderRadius: 15,
    marginHorizontal: 2,
  },
  sectionMiddleBtnText: {
    color: "#3C98BD",
    // fontWeight: "bold",
    // padding: 0,
    // margin: 0,
  },
  circle: {
    marginTop: 15,
    marginLeft: 180,
  },
  line: {
    // marginTop: 30,
  },
  svgWrapper: {
    marginTop: -10,
    marginBottom: 50,
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
    marginTop: -120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: 20,

    color: "#fff",
    marginHorizontal: 20,
  },
  imageWrapper: {
    backgroundColor: "#fff",
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 20,
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
    top: 150,
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
    marginBottom: 30,
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
    marginVertical: 10,

    width: "95%",
    height: 130,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    // marginHorizontal: "10%",
  },
  btnText: {
    color: "#fff",
    fontSize: 25,
    // fontWeight: "bold",
    // backgroundColor: "red",
    marginLeft: "20%",
  },
});

export default Styles;
