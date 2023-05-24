import React from "react";
// import React, {useContext} from 'react';
import { AuthContext } from "./App/context/AuthContext";
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
import Information from "./App/screens/Information/Information";
import ChangeInfo from "./App/screens/ChangeInfo/ChangeInfo";
import ForgotPassword from "./App/screens/ForgotPassword/ForgotPassword";
import SignUpVerification from "./App/screens/SignUpVerification/SignUpVerification";
import NewPassword from "./App/screens/NewPassword/NewPassword";
import AboutUs from "./App/screens/AboutUs/AboutUs";
import FeedBack from "./App/screens/FeedBack/FeedBack";
import TranslateApp from "./App/screens/TranslateApp";
import NewSignUp from "./App/screens/NewSignUp/NewSignUp";
import EnterCode from "./App/screens/EnterCode/EnterCode";
const Stack = createNativeStackNavigator();
const StackNaigator = () => {
  // const {userInfo} = useContext(AuthContext);z
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="FirstPage"
    >
      {/* {userInfo.access_token ? '' : ''} */}
      <Stack.Group>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="SignUpVerification"
          component={SignUpVerification}
        />
        <Stack.Screen name="TranslateApp" component={TranslateApp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EnterCode" component={EnterCode} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Sections" component={Sections} />
        <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
        <Stack.Screen name="Grades" component={Grades} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="Units" component={Units} />
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="BookPages" component={BookPages} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="NewSignUp" component={NewSignUp} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default StackNaigator;
