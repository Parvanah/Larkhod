import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";

import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  return (
    <View style={styles.container}>
      {/* <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      > */}
      {/* Input field */}
      {/* <TextInput
          style={styles.input}
          placeholder="جستجو"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          // onFocus={() => {
          //   setClicked(true);
          // }}
        />
        {/* search Icon */}
        <Feather
          name="search"
          size={15}
          color="black"
          style={{ marginRight: 1 }}
        /> 

        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {/* {clicked && (
          <Entypo
            name="cross"
            size={15}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )} */}
    </View>
      
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    height: 35,
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
