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
    marginTop: 10,
    marginBottom: 60
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
  },
  navContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 25,
    width: "100%",
  },
  btnSI: {
    paddingVertical: 11,
    paddingHorizontal: 26,
    backgroundColor: "rgba(60,152,189,1)",
    borderRadius: 20,
    width: "59%",
  },
  btnSO: {
    // borderColor: "lightgray",
    // borderStyle: "solid",
    // borderWidth: 1,
    paddingVertical: 11,
    paddingHorizontal: 26,
    borderRadius: 20,
  },
  btnTextSO: {
    fontSize: 15,
    fontWeight: "bold",
    color: "rgba(60,152,189,1)",
    textAlign: "center",
  },
  btnTextSI: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  form: { width: "100%" },
  input: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    width: "100%",
    height: 40,
    marginTop: 10
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
  },
  afterSubmit: {
    flexDirection: "row",
  },
  border: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
  },
 linkedBtnWrapper:{
  justifyContent: "center",
  alignItems: "center",
  width: "85%",
  marginVertical: 10,
 },
 linkBtn:{
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: 40,
  marginTop: 10,
  width: "100%",
  paddingHorizontal: 20,
  borderColor: "lightgray",
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 25,
 },
 linkBtnText: {
  color: "lightgray",
 },
  afterPass:{
    fontSize: 12,
    color: "lightgray",
    marginRight: 130
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  arrowStyle: {
    marginTop: "10%",
    alignSelf: "flex-start",
    marginLeft: "10%"
  },
});
export default Styles;
