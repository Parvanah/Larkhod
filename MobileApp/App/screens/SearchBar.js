import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import Svg, { Rect, Path, Ellipse } from "react-native-svg";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      {/* <TextInput style={styles.searchbar} placeholder="جستجو">
        <Feather
          name="search"
          size={15}
          color="black"
          style={{ marginRight: 1 }}
        />
      </TextInput> */}

      <View style={styles.searchbar}>
        <Feather
          name="search"
          size={15}
          color="black"
          style={{ marginRight: 1 }}
        />
        <TextInput placeholder="جستجو" style={styles.serachText} />
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: "rgba(212,228,232,1)",
    width: "80%",
    height: 40,
    padding: 10,
    display: "flex",
    flexDirection: "row-reverse",
    color: "red",
    borderRadius: 20,
  },
  serachText: {
    width: "90%",
    textAlign: "right",
    marginRight: 10,
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    // width: "100%",
    // height: 35,
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "rgba(212,228,232,1)",
    borderRadius: 10,
    alignItems: "center",
    textAlign: "right",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 16,
    marginRight: 5,
    width: "90%",
  },
});

// import react, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import { SearchBar } from 'react-native-elements';
// export default class App extends React.Component{ state = {search: '',};
// updateSearch = search => {this.setState({search});};
// render(){
//   const {search} = this.state;
//   return(
//     <SearchBar  placeholder="type here" onChangeText={this.updateSearch} value={search} />
//   );
// }
// }
