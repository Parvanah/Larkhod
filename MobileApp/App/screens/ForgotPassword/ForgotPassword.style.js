import React from "react";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  outContainer: {
    backgroundColor: "rgba(60,152,189,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    height: 90,
    width: 90,
    marginTop:  10,
    marginBottom: 60
  },
  arrowStyle: {
    marginTop: "10%",
    alignSelf: "flex-start",
    marginLeft: "10%"
  },
  InContainer: {
    borderTopRightRadius: 55, 
    borderTopLeftRadius: 55,
    backgroundColor: "#fff",
    flex: 3,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: "40%"
  },
  form: { width: "100%" },
  input: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    width: "100%",
    height: 40,
  },
  submitBtn: {
    backgroundColor: "rgba(60,152,189,1)",
    width: "100%",
    marginVertical: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  submitText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  }
});
export default Styles;
