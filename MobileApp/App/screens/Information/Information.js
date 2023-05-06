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
import Svg, { Path } from "react-native-svg";
import tele from "../../assets/Tele.png";

const Information = (props) => {
  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate("Sections");
  };
  return (
    <SafeAreaView style={styles.outContainer}>
      <TouchableOpacity
        style={styles.arrowStyle}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Image source={arrow} />
      </TouchableOpacity>

      <View style={styles.imageWrapper}>
        <Image source={user} style={styles.img} />
        <Text style={styles.usertext}>اپلود عکس نمایه</Text>
      </View>
      <Image source={tele} style={{ width: 100, height: 100 }} />
      <View style={{ marginTop: -120 }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={398.893}
          height={127.471}
          viewBox="0 0 398.893 127.471"
          {...props}
        >
          <Path
            data-name="Path 662"
            d="M398.774 126.985c-17.614-4.309-37.074-22.816-47.984-34.165-11.73-12.206-20.77-27.758-22-44.641-.538-7.409.554-15.21 4.738-21.35s11.932-10.189 19.169-8.517c5.512 1.274 9.884 5.51 13.113 10.158 4.512 6.5 7.4 14.478 6.268 22.306-2.109 14.609-17.986 24.194-32.74 23.749S311.16 66.02 299.55 56.896c-20.027-15.737-36.82-32.3-60.754-42.106C215.547 5.266 190.337.832 165.269.534 132.21.14 97.221 2.78 65.56 14.22 33.608 25.768-20.828 61.527 9.64 101.031c17.266 22.387 49.682 26.223 74.312 15.036 6.36-2.888 11.16-7.293 15.914-12.011"
            fill="none"
            stroke="#3c98bd"
            strokeMiterlimit={10}
            strokeWidth={1}
            strokeDasharray="4.026 4.026"
          />
        </Svg>
      </View>

      <View style={styles.InContainer}>
        <View style={styles.form}>
          <TextInput
            name="firstName"
            placeholder=" نام "
            style={styles.input}
          />
          <TextInput
            name="lastName"
            placeholder=" تخلص "
            style={styles.input}
          />
          <TextInput
            name="fullName"
            placeholder=" نام کاربری "
            style={styles.input}
          />
          <TextInput
            name="email"
            placeholder=" ایمیل ادرس"
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            name="age"
            placeholder="سن"
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            name="class"
            placeholder="صنف"
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
    paddingVertical: "15%",
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
    zIndex: 200,
  },
  form: { width: "100%" },
  input: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
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
export default Information;
