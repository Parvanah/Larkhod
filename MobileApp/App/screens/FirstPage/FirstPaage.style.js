import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: " rgba(60,152,189,1)",
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
    width: 200,
    // marginTop: 80,
    // paddingBottom: 80,
    paddingVertical: "20%",
  },
  btnWrapper: {},
  btn: {
    margin: 5,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    zIndex: 100,
  },
  imgStyle: {
    marginBottom: 80,
    marginTop: "30%",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  textWrapper: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    margibBottom: 30,
  },
});
export default styles;
