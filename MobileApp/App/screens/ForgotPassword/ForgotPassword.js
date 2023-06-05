import React, {   useContext, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";
import Parse from "parse/react-native";
import arrow from "../../assets/Group_158_a.png";
import Logo from "../../assets/logo.png";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../../context/AuthContext";

const ForgotPassword = (props) => {
  const { t, i18n } = useTranslation();
  const emailValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("ForgotPassword.3"))
      .required(t("ForgotPassword.4")),
  });
  const navigation = useNavigation();
  const { isLoading, forgotPassword } = useContext(AuthContext);
    const onSubmit = (values) => {
      forgotPassword(values.email);
      navigation.navigate("EnterCode");
    };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
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
            onPress={() => navigation.goBack()}
          >
            <Image source={arrow} />
          </TouchableOpacity>
          <View style={styles.textView}>
            <CustomText style={styles.text}>
              {" "}
              {t("ForgotPassword.1")}{" "}
            </CustomText>
            {/* <CustomText style={styles.text}>  {t("ForgotPassword.2")} </CustomText> */}
            <CustomText style={styles.text1}>
              {" "}
              {t("ForgotPassword.2")}{" "}
            </CustomText>
          </View>
        </View>

        <View style={styles.InContainer}>
          <View style={styles.form}>
            <Formik
              validationSchema={emailValidationSchema}
              initialValues={{ email: "" }}
               onSubmit={(values) => onSubmit(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
              }) => (
                <>
                 <Spinner visible={isLoading} />
                  <TextInput
                    name="email"
                    placeholder={t("ForgotPassword.6")}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                    variant="rounded"
                    style={styles.input}
                  />
                  {errors.email && touched.email && (
                    <CustomText style={styles.errorText}>
                      {errors.email}
                    </CustomText>
                  )}
                  <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={handleSubmit}
                    disabled={!isValid}
                  >
                    <CustomText style={styles.submitText}>
                      {t("ForgotPassword.7")}{" "}
                    </CustomText>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
            <Image source={Logo} style={styles.imgStyle} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  top: {
    // backgroundColor: "red",
    width: "100%",
    marginTop: verticalScale(-270),
    marginBottom: verticalScale(15),
  },
  text: {
    fontSize: moderateScale(40),
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
  },
  text1: {
    fontSize: moderateScale(18),
    color: "#fff",
    textAlign: "right",
  },
  textView: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginBottom: verticalScale(20),
    marginTop: verticalScale(30),
    width: "80%",
  },
  outContainer: {
    backgroundColor: "#FFF",

    justifyContent: "center",
    alignItems: "center",
    // paddingTop: verticalScale(50),
  },
  imgStyle: {
    marginTop: verticalScale(50),
    alignSelf: "center",
  },
  arrowStyle: {
    marginTop: verticalScale(40),
    alignSelf: "flex-start",
    marginLeft: horizontalScale(30),
  },
  InContainer: {
    // borderTopRightRadius: moderateScale(55),
    // borderTopLeftRadius: moderateScale(55),
    // backgroundColor: "red",
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: horizontalScale(30),
    // paddingVertical: verticalScale(40),
    marginTop: verticalScale(60),
  },
  form: { width: "100%", paddingVertical: verticalScale(40) },
  input: {
    borderBottomColor: "lightgray",
    borderBottomWidth: horizontalScale(1),
    height: verticalScale(40),
    marginTop: verticalScale(10),
    textAlign: "right",
  },
  submitBtn: {
    backgroundColor: "rgba(60,152,189,1)",
    width: "100%",
    marginVertical: verticalScale(30),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(25),
  },
  submitText: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "white",
  },
  errorText: {
    fontSize: moderateScale(15),
    color: "red",
    textAlign: "right",
  },
});
export default ForgotPassword;
