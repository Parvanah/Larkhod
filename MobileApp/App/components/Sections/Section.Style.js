import React from "react";

import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
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
  },
  container: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  top: {
    marginTop: -120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
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
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    // marginBottom: -10,
    width: "100%",
    // backgroundColor: "green",
  },
  bottom: {
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
    marginTop: 0,
  },
  bottomBtn: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    padding: 20,
    margin: 10,

    width: 280,
    height: 130,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  btnText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Styles;
