import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./SignUp.style";
import logo from "../../assets/White_PNG_Format_z.png";
import styles from "./SignUp.style";
import seen from "../../assets/Group_8.png";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
import NewSignUp from "../NewSignUp/NewSignUp";
import LogIn from "../LogIn/LogIn";

const SignUp = () => {
  const { t, i18n } = useTranslation();

  const navigation = useNavigation();

  const [switchSelector, setSwitchSelector] = useState(t(""));
  const handleSwitch = (value) => {
    if (value === t("SignUp.2")) {
      setSwitchSelector(value);
    } else if (value === t("SignUp.1")) {
      setSwitchSelector(value);
    }
  };
  const style = StyleSheet.create({
    btnSI: {
      paddingVertical: verticalScale(11),
      // paddingHorizontal: 26,
      backgroundColor:
        switchSelector == t("SignUp.2") ? "rgba(60,152,189,1)" : "#FFF",
      width: "50%",
      borderRadius: moderateScale(20),
    },
    btnSO: {
      // borderColor: "lightgray",
      // borderStyle: "solid",
      // borderWidth: 1,
      width: "50%",
      backgroundColor:
        switchSelector == t("SignUp.1") || switchSelector == ""
          ? "rgba(60,152,189,1)"
          : "#FFF",
      paddingVertical: verticalScale(11),
      borderRadius: moderateScale(20),
    },
    btnTextSO: {
      fontSize: moderateScale(15),

      color:
        switchSelector == t("SignUp.1") || switchSelector == ""
          ? "#FFF"
          : "rgba(60,152,189,1)",
      textAlign: "center",
    },
    btnTextSI: {
      fontSize: moderateScale(15),

      color: switchSelector == t("SignUp.2") ? "#FFF" : "rgba(60,152,189,1)",
      textAlign: "center",
    },
  });
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.outContainer}>
        <Image source={logo} style={Styles.imgStyle} />
        <View style={Styles.InContainer}>
          <View style={styles.navContainer}>
            <TouchableOpacity
              style={style.btnSI}
              onPress={() => handleSwitch(t("SignUp.2"))}
            >
              <CustomText style={style.btnTextSI}>{t("SignUp.2")} </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btnSO}
              onPress={() => handleSwitch(t("SignUp.1"))}
            >
              <CustomText style={style.btnTextSO}> {t("SignUp.1")}</CustomText>
            </TouchableOpacity>
          </View>
          <View>
            {switchSelector === "" || switchSelector === t("SignUp.1") ? (
              <NewSignUp />
            ) : (
              <LogIn />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
