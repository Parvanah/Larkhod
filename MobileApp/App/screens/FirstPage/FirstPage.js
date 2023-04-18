import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  Button,
  Pressable,
} from "react-native";
import styles from "./FirstPaage.style";
import logo from "../../assets/White_PNG_Format_z.png";

export default function FirstPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.imgStyle} />
      <View style={styles.btnWrapper}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.btnText}>زبان دری</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.btnText}>پښتو ژبه</Text>
        </Pressable>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>به لارښود خوش آمدید</Text>
        <Text style={styles.text}>لارښود ته ښه راغلاست</Text>
      </View>
    </SafeAreaView>
  );
}
