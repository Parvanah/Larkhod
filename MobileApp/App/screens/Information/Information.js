import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/White_PNG_Format_z.png";
import user from "../../assets/user.png";
import arrow from "../../assets/Group_158_a.png";


const Information = () => {

  const navigation = useNavigation();
  const onSubmit =()=>{
     navigation.navigate("Sections");
  }
  return (
    <SafeAreaView style={styles.outContainer}>
      <Image source={logo} style={styles.imgStyle} />
      <View style={styles.InContainer}>
      <TouchableOpacity
          style={styles.arrowStyle}
          onPress={() => navigation.navigate("SignUp")}
        >
        <Image source={arrow} />
        </TouchableOpacity>

        <View style={styles.imageWrapper}>
          <Image source={user} style={styles.img} />
        </View>
        <View style={styles.form}>       
               <TextInput
                  name="firstName"
                  placeholder=" نام "
                />
                <TextInput
                  name="lastName"
                  placeholder=" تخلص "
                />
                <TextInput
                  name="fullName"
                  placeholder=" نام کاربری "
                />
                <TextInput
                  name="email"
                  placeholder=" ایمیل ادرس"
                  keyboardType="email-address"
                />
                <TextInput
                  name="age"
                  placeholder="سن"
                />
                <TextInput
                  name="class"
                  placeholder="صنف"
                />
          <TouchableOpacity style={styles.submitBtn}  onPress={onSubmit}  >
            <Text style={styles.submitText}>ایجاد حساب</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  outContainer: {
    backgroundColor: "rgba(60,152,189,1)",
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    height: 90,
    width: 90,
    marginVertical: 20,
  },
  InContainer: {
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
    backgroundColor: "#fff",
    flex: 3,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 20,
  },
  img: {
    height: 40,
    width: 40,
  },
  arrowStyle: {
    marginBottom: "30%",
  },
  form: { width: "100%" },
  input: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    width: "100%",
    height: 40,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "right",
  },
  submitBtn: {
    backgroundColor: "rgba(60,152,189,1)",
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
    color: "white",
  },
  border: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
  },
  imageWrapper: {
    backgroundColor: "#fff",
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 20,
  },
});
export default Information;














