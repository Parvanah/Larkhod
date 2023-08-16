import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "../NewSignUp/CustomInput";
import { useNavigation } from "@react-navigation/native";
import arrow from "../../assets/Group_158_a.png";
import Logo from "../../assets/logo.png";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../../context/AuthContext";

const NewPassword = (props) => {
  const { t, i18n } = useTranslation();
  const EnterCodeValidationSchema = Yup.object().shape({
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, t("NewPassword.1"))
      .matches(/\w*[A-Z]\w*/, t("NewPassword.2"))
      .matches(/\d/, t("NewPassword.3"))
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, t("NewPassword.4"))
      .required(t("NewPassword.5")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("NewPassword.6"))
      .required(t("NewPassword.7")),
  });
  const navigation = useNavigation();
  const { isLoading, changePassword } = useContext(AuthContext);
  const onSubmit = (values) => {
    changePassword(values.password, values.confirmPassword);
    // navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView contentContainerStyle={styles.outContainer}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={verticalScale(275.334)}
          preserveAspectRatio="none"
          viewBox="0 0 360 275.334"
          {...props}
        >
          <Defs>
            <LinearGradient
              id="a"
              x1={0.22}
              y1={-0.035}
              x2={0.905}
              y2={1.793}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0} stopColor="#3c98bd" />
              <Stop offset={1} stopColor="#0f53a1" />
            </LinearGradient>
          </Defs>
          <G data-name="Group 410">
            <Path
              data-name="Path 1077"
              d="M70 0h220c38.66 0 70 24.1 70 53.836v221.5H0v-221.5C0 24.1 31.34 0 70 0z"
              transform="translate(-132.517 160.426) rotate(180 246.258 57.454)"
              fill="url(#a)"
            />
          </G>
        </Svg>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.arrowStyle}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Image source={arrow} />
          </TouchableOpacity>
          <View style={styles.textView}>
            <CustomText style={styles.text}> {t("NewPassword.8")} </CustomText>
            <CustomText style={styles.text}> {t("NewPassword.9")} </CustomText>
            <CustomText style={styles.text1}> {t("NewPassword.10")}</CustomText>
          </View>
        </View>
        <View style={styles.InContainer}>
          <View style={styles.form}>
            <Formik
              validationSchema={EnterCodeValidationSchema}
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => onSubmit(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                isValid,
              }) => (
                <View>
                  {/* <Field
                  component={CustomInput}
                  name="password"
                  placeholder={t("NewPassword.11")}
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                
                <Field
                  component={CustomInput}
                  name="confirmPassword"
                  placeholder={t("NewPassword.12")}
                  secureTextEntry
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                />{" "} */}
                  <Spinner visible={isLoading} />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder={t("NewPassword.11")}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  <Field
                    component={CustomInput}
                    name="confirmPassword"
                    placeholder={t("NewPassword.12")}
                    secureTextEntry
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                  />
                  <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => {
                      handleSubmit;
                      navigation.navigate("SignUp");
                    }}
                    disabled={!isValid}
                  >
                    <CustomText style={styles.submitText}>
                      {t("NewPassword.13")}
                    </CustomText>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
            <Image source={Logo} style={styles.imgStyle} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    // backgroundColor: "red",
    width: "100%",
    marginTop: verticalScale(-270),
    marginBottom: verticalScale(15),
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
  },
  text1: {
    fontSize: 16,
    color: "#fff",
    paddingTop: 10,
  },
  textView: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginVertical: 40,
  },
  outContainer: {
    // backgroundColor: "rgba(60,152,189,1)",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 50,
  },
  imgStyle: {
    marginTop: 50,
    alignSelf: "center",
  },
  arrowStyle: {
    marginTop: 40,
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  InContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  form: { width: "100%", paddingBottom: verticalScale(20) },
  input: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    height: 40,
    marginTop: 10,
    backgroundColor: "green",
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
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default NewPassword;
