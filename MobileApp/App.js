import React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNaigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNaigator />
      <StatusBar barStyle={"default"} />
    </NavigationContainer>
  );
}
