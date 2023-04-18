import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import google from "../../assets/google.png";
import facebook from "../..//assets/facebook.png";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./SignUp.style";
import logo from "../../assets/White_PNG_Format_z.png";
import styles from "./SignUp.style";
import seen from "../../assets/Group_8.png";

const SignUp = () => {
  const navigation = useNavigation();

  const [seenVariable, setSeenVariable] = useState(true);

  const SeenPassword = () => {
    if (seenVariable == true) {
      setSeenVariable(false);
    } else {
      setSeenVariable(true);
    }
  };
  const submit = () => {
    // Regular Expression for Email validation
    const emailRegExpress =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    navigation.navigate("Sections");
  };
  return (
    <SafeAreaView style={Styles.outContainer}>
      <Image source={logo} style={Styles.imgStyle} />
      <View style={Styles.InContainer}>
        <View style={styles.navContainer}>
          <Pressable style={styles.btnSI}>
            <Text style={styles.btnTextSI}>ورود به حساب</Text>
          </Pressable>
          <Pressable style={styles.btnSO}>
            <Text style={styles.btnTextSO}>ایجاد حساب</Text>
          </Pressable>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="نام کاربری"
            keyboardType="ascii-capable"
            style={styles.input}
            textContentType="username"
            maxLength={15}
          />
          <TextInput
            placeholder="ایمیل آدرس"
            keyboardType="email-address"
            style={styles.input}
            textContentType="emailAddress"
          />
          <View style={styles.input}>
            <TextInput
              placeholder="رمز عبور"
              textContentType="password"
              secureTextEntry={seenVariable}
              maxLength={8}
            />
            <TouchableOpacity onPress={() => SeenPassword()}>
              <Image source={seen} />
            </TouchableOpacity>
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="تکرار رمز عبور"
              textContentType="password"
              secureTextEntry={seenVariable}
              maxLength={8}
            />
            <TouchableOpacity onPress={() => SeenPassword()}>
              <Image source={seen} />
            </TouchableOpacity>
          </View>

          <Pressable style={styles.submitBtn} onPress={submit}>
            <Text style={styles.submitText}>ایجاد حساب</Text>
          </Pressable>
        </View>

        <Text style={{ color: "lightgray" }}>
          _______________ویا_______________
        </Text>
        <View style={styles.linkedBtnWrapper}>
          <TouchableOpacity style={styles.linkBtn}>
            <Image source={google} />
            <Text style={styles.linkBtnText}>با حساب گوگل خود وارد شوید</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
