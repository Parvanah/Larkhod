import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "./ForgotPassword.style";
import styles from "./ForgotPassword.style";
import logo from "../../assets/White_PNG_Format_z.png";
import Parse from "@parse/react-native";
import arrow from "../../assets/Group_158_a.png";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const doUser = async function () {
    const emailValue = email;
    Parse.User.requestPasswordReset(emailValue)
      .then(() => {
        Alert.alert("Pssoword successfully reset, check your email");
      })
      .catch((error) => {
        Alert.alert("Errors" * error.message);
      });
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.outContainer}>
      <TouchableOpacity
        style={styles.arrowStyle}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Image source={arrow} />
      </TouchableOpacity>
      <Image source={logo} style={Styles.imgStyle} />
      <View style={Styles.InContainer}>
        <View style={styles.form}>
          <TextInput
            name="email"
            placeholder=" ایمیل آدرس"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            variant="rounded"
            style={styles.input}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={() => doUser}>
            <Text style={styles.submitText}>تنظیم مجدد رمز عبور</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ForgotPassword;
