import React, { useState } from "react";
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
const ForgotPassword = () => {
  const { t, i18n } = useTranslation();
  const emailValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("ForgotPassword.3"))
      .required(t("ForgotPassword.4")),
  });

  const [email, setEmail] = useState("");
  const doUser = async function () {
    const emailValue = email;
    Parse.User.requestPasswordReset(emailValue)
      .then(() => {
        Alert.alert(t("ForgotPassword.5"));
      })
      .catch((error) => {
        Alert.alert("Errors" * error.message);
      });
  };
  const navigation = useNavigation();
  const OnSubmit = () => {
    navigation.navigate("EnterCode");
  };
  return (
    <ScrollView contentContainerStyle={styles.outContainer}>
      <TouchableOpacity
        style={styles.arrowStyle}
        onPress={() => navigation.goBack()}
      >
        <Image source={arrow} />
      </TouchableOpacity>
      <View style={styles.textView}>
        <CustomText style={styles.text}> {t("ForgotPassword.1")} </CustomText>
        {/* <CustomText style={styles.text}>  {t("ForgotPassword.2")} </CustomText> */}
        <CustomText style={styles.text1}> {t("ForgotPassword.2")} </CustomText>
      </View>

      <View style={styles.InContainer}>
        <View style={styles.form}>
          <Formik
            validationSchema={emailValidationSchema}
            initialValues={{ email: "" }}
            onSubmit={OnSubmit}
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
  );
};
const styles = StyleSheet.create({
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
    backgroundColor: "rgba(60,152,189,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: verticalScale(50),
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
    borderTopRightRadius: moderateScale(55),
    borderTopLeftRadius: moderateScale(55),
    backgroundColor: "#fff",
    flex: 3,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(40),
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
