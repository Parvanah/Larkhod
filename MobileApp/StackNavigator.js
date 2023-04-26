import React from "react";

import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./App/screens/FirstPage/FirstPage";
import LogIn from "./App/screens/LogIn/LogIn";
import SignUp from "./App/screens/SignUp/SignUp";
import Sections from "./App/components/Sections/Sections";
import Books from "./App/components/Books/Books";
import Units from "./App/components/Units/Units";
import Grades from "./App/components/Grades/Grades";
import Lessons from "./App/components/Lessons/Lessons";
import BookPages from "./App/components/BookPages/Bookpages";

const Stack = createNativeStackNavigator();
const StackNaigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="FirstPage"
    >
      <Stack.Group>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Sections" component={Sections} />
        <Stack.Screen name="Grades" component={Grades} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="Units" component={Units} />
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="BookPages" component={BookPages} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default StackNaigator;
