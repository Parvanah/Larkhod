import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/White_PNG_Format_z.png";
import user from "../../assets/user.png";
import arrow from "../../assets/Group_158.png";

const ChangeInfo = () => {
  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate("Sections");
  };
  return (
    <SafeAreaView style={styles.outContainer}>
      <TouchableOpacity
        style={styles.arrowStyle}
        onPress={() => navigation.goBack()}
      >
        <Image source={arrow} />
      </TouchableOpacity>
      <View style={styles.imageWrapper}>
        <Image source={user} style={styles.img} />
        <Text style={styles.usertext}>تغییر عکس نمایه</Text>
      </View>
      <View style={styles.InContainer}>
        <View style={styles.form}>
          <TextInput
            name="firstName"
            placeholder=" تغییر نام "
            style={styles.input}
          />
          <TextInput
            name="lastName"
            placeholder=" تغییر تخلص "
            style={styles.input}
          />
          <TextInput
            name="fullName"
            placeholder="تغییر نام کاربری "
            style={styles.input}
          />
          <TextInput
            name="email"
            placeholder="تغییر ایمیل ادرس"
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            name="age"
            placeholder="تغییر سن"
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            name="class"
            placeholder="تغییر صنف"
            keyboardType="numeric"
            style={styles.input}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={onSubmit}>
            <Text style={styles.submitText}>ذخیره کردن </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  outContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  InContainer: {
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    backgroundColor: "rgba(60,152,189,1)",
    flex: 3,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: "15%",
    paddingVertical: "20%",
  },
  usertext: {
    fontSize: 14,
    fontWeight: "bold",
    color: "lightgray",
    marginHorizontal: 10,
  },
  img: {
    height: 60,
    width: 60,
  },
  arrowStyle: {
    marginTop: "10%",
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  form: { width: "100%" },
  input: {
    borderTopColor: "#fff",
    borderTopWidth: 1,
    width: "100%",
    height: 40,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "right",
  },
  submitBtn: {
    backgroundColor: "white",
    width: "100%",
    marginVertical: 30,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  submitText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "rgba(60,152,189,1)",
  },
  // border: {
  //   borderBottomColor: "#fff",
  //   borderBottomWidth: 2,
  // },
  imageWrapper: {
    backgroundColor: "#fff",
    height: "20%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
export default ChangeInfo;
