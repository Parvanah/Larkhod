import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNaigator from "./StackNavigator";
import i18next from "./App/screens/languages/i18n";
import { AuthProvider } from "./App/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <StackNaigator />
      <StatusBar barStyle="default" />
    </NavigationContainer>
    </AuthProvider>
  );
}
