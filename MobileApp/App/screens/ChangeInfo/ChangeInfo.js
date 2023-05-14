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
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";


const ChangeInfo = () => {

  const navigation = useNavigation();
  const onSubmit =()=>{
     navigation.navigate("Sections");
  }
  const {t, i18n}= useTranslation(); 
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
          <CustomText style={styles.usertext}> {t("ChangeInfo.1")} </CustomText>
        </View>
      <View style={styles.InContainer}>
        <View style={styles.form}>       
               <TextInput
                  name="firstName"
                  placeholder= {t("ChangeInfo.2")}
                  style={styles.input}
                />
                <TextInput
                  name="lastName"
                  placeholder= {t("ChangeInfo.2")}  
                  style={styles.input}
                />
                <TextInput
                  name="age"
                  placeholder= {t("ChangeInfo.4")}
                  keyboardType="numeric"
                  style={styles.input}
                />
                <TextInput
                  name="class"
                  placeholder= {t("ChangeInfo.5")}
                  keyboardType="numeric"
                  style={styles.input}
                />
          <TouchableOpacity style={styles.submitBtn}  onPress={onSubmit}  >
            <CustomText style={styles.submitText}>{t("ChangeInfo.6")}  </CustomText>
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
    paddingVertical: 10
  },
  InContainer: {
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    backgroundColor: "rgba(60,152,189,1)",
    flex: 3.5,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 35,
    paddingVertical: 80
  },
  usertext: {
    fontSize: 14,
    fontWeight: "bold",
    color: "lightgray",
  },
  img: {
    height: 60,
    width: 60,
  },
  arrowStyle: {
    marginTop: 40,
    alignSelf: "flex-start",
    marginLeft: 30
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
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 10
  },
});
export default ChangeInfo;














