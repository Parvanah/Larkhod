import React from "react";
import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  FeedBackContainer: {
    width: "100%",
    // height: 1000,
    // aspectRatio: 1,
    // flex: 1,
  },
  arrow: {
    marginTop: 20,
    marginLeft: 30,
  },
  top: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#3C98BD",
  },
  description: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#707070",
    textAlign: "center",
    width: 240,
  },
  svgWrapperFeedBack: {
    // marginTop: 50,
    // zIndex: 2,
    margin: 0,
    padding: 0,
    height: 730,
    // width: "100%",
    // aspectRatio: 1,
    // flex: 1,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    marginBottom: -700,
    // marginRight: 20,
    // backgroundColor: "pink",
    zIndex: 100,
    width: "90%",
    marginHorizontal: "10%",
    height: "100%",
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'sc',
    // alignItems: "flex-start",
    // marginTop: 50,
    paddingTop: 40,
  },
  input: {
    color: "#fff",
    fontWeight: "bold",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    height: 40,
    textAlign: "right",
  },
  inputMessege: {
    marginTop: 20,
    backgroundColor: "#fff",
    // height: 100,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    borderRadius: 15,
    // height: 120,
    padding: 10,
  },
  SubmitBtn: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  onFocuse: {
    backgroundColor: "green",
  },
});

export default Style;
