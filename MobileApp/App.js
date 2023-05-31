import React, { useContext } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNaigator from "./StackNavigator";
import i18next from "./App/screens/languages/i18n";
import { AuthProvider } from "./App/context/AuthContext";
import { AuthContext } from "./App/context/AuthContext";
import StackNaigatorApp from "./StackNavigatorApp";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNaigator />
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      </NavigationContainer>
    </AuthProvider>
  );
}
