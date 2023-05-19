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
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/White_PNG_Format_z.png";
import user from "../../assets/user.png";
import arrow from "../../assets/Group_158.png";
import CustomText from "../../CustomText";

const ChangeInfo = () => {
  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate("Sections");
  };
  return (
    <SafeAreaView style={styles.outContainer}>
      <TouchableOpacity
        style={styles.arrowStyle}
        onPress={() => navigation.navigate("Sections")}
      >
        <Image source={arrow} />
      </TouchableOpacity>
      <View style={styles.imageWrapper}>
        <Image source={user} style={styles.img} />
        <CustomText style={styles.usertext}>تغییر عکس نمایه</CustomText>
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
            <CustomText style={styles.submitText}>ذخیره کردن </CustomText>
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
    paddingVertical: verticalScale(10),
  },
  InContainer: {
    borderTopRightRadius: moderateScale(100),
    borderTopLeftRadius: moderateScale(100),
    backgroundColor: "rgba(60,152,189,1)",
    flex: 3.5,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: horizontalScale(35),
    paddingVertical: verticalScale(80),
  },
  usertext: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "lightgray",
  },
  img: {
    height: verticalScale(60),
    width: horizontalScale(60),
  },
  arrowStyle: {
    marginTop: verticalScale(40),
    alignSelf: "flex-start",
    marginLeft: horizontalScale(30),
  },
  form: { width: "100%" },
  input: {
    borderTopColor: "#fff",
    borderTopWidth: 1,
    width: "100%",
    height: verticalScale(40),
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "right",
  },
  submitBtn: {
    backgroundColor: "white",
    width: "100%",
    marginVertical: verticalScale(30),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(25),
  },
  submitText: {
    fontSize: moderateScale(15),

    color: "rgba(60,152,189,1)",
  },
  // border: {
  //   borderBottomColor: "#fff",
  //   borderBottomWidth: 2,
  // },
  imageWrapper: {
    backgroundColor: "#fff",
    height: verticalScale(100),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(50),
    marginBottom: verticalScale(10),
  },
});
export default ChangeInfo;
