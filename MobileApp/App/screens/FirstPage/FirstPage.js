import React from "react";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import styles from "./FirstPaage.style";
import logo from "../../assets/White_PNG_Format_z.png";

import CustomText from "../../CustomText";

export default function FirstPage(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
        <Image source={logo} style={styles.imgStyle} />

        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("SignUp")}
          >
            <CustomText style={styles.btnText}>زبان دری</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("SignUp")}
          >
            <CustomText style={styles.btnText}>پښتو ژبه</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.textWrapper}>
          <CustomText style={styles.text}>به لارښود خوش آمدید</CustomText>
          <CustomText style={styles.text}>لارښود ته ښه راغلاست</CustomText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
