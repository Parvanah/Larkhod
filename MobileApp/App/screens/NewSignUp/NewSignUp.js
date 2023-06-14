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
} from "react-native";
import google from "../../assets/google.png";
import facebook from "../..//assets/facebook.png";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./SignUp.style";
import logo from "../../assets/White_PNG_Format_z.png";
import styles from "./SignUp.style";
import seen from "../../assets/Group_8.png";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../../context/AuthContext";
import React, { useContext, useState } from "react";
const NewSignUp = () => {
  const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const { isLoading, verifyEmail, register } = useContext(AuthContext);

  const { t, i18n } = useTranslation();
  const signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(2, t("Information.1"))
    .max(50, t("Information.2"))
    .required(t("Information.3")),
  lastName: Yup.string()
    .min(2, t("Information.4"))
    .max(50, t("Information.5"))
    .required(t("Information.6")),
    email: Yup.string().email(t("SignUp.8")).required(t("SignUp.9")),
    grade: Yup.number()
    .min(1, t("Information.9"))
    .max(12, t("Information.9"))
    .required(t("Information.10")),
  age: Yup.number()
    .min(12, t("Information.11"))
    .max(50, t("Information.11"))
    .required(t("Information.12")),
  phonNumber: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      t("Information.20")
    )
    .required(t("Information.21")),
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, t("SignUp.10"))
      .matches(/\w*[A-Z]\w*/, t("SignUp.11"))
      .matches(/\d/, t("SignUp.12"))
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, t("SignUp.13"))
      .required(t("SignUp.14")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("SignUp.15"))
      .required(t("SignUp.16")),
  });
  const navigation = useNavigation();
  const onSubmit = (values) => {
    register(values.firstName,
      values.lastName,
      values.age,
      values.grade,
      values.phonNumber,
       values.password,
       values.confirmPassword);
    // navigation.navigate("SignUpVerification");
  };
  const [seenVariable, setSeenVariable] = useState(true);
  const SeenPassword = () => {
    if (seenVariable == true) {
      setSeenVariable(false);
    } else {
      setSeenVariable(true);
    }
  };

  return (
    <ScrollView>
      <Spinner visible={isLoading} />
      <View style={styles.form}>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            grade: "",
            age: "",
            phonNumber: "",
            password: "",
            confirmPassword: "",

          }}
          onSubmit={(values) => onSubmit(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <>
              <Spinner visible={isLoading} />
              <Field
                component={CustomInput}
                name="firstName"
                placeholder={t("Information.14")}
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                keyboardType="first-name"
                variant="rounded"
                style={styles.input}
              />
              <Field
                component={CustomInput}
                name="lastName"
                placeholder={t("Information.15")}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                keyboardType="last-name"
                style={styles.input}
              />
              <Field
                component={CustomInput}
                name="email"
                placeholder={t("SignUp.3")}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <Field
                component={CustomInput}
                placeholder={t("Information.17")}
                name="age"
                onChangeText={handleChange("age")}
                onBlur={handleBlur("age")}
                keyboardType="numeric"
                value={values.age}
                style={styles.input}
              />
              <Field
                component={CustomInput}
                placeholder={t("Information.18")}
                name="grade"
                onChangeText={handleChange("grade")}
                onBlur={handleBlur("grade")}
                keyboardType="decimal-pad"
                value={values.grade}
                style={styles.input}
              />
              <Field
                component={CustomInput}
                placeholder={t("Information.22")}
                name="phonNumber"
                onChangeText={handleChange("phonNumber")}
                onBlur={handleBlur("phonNumber")}
                keyboardType="decimal-pad"
                value={values.phonNumber}
                style={styles.input}
              />
              {/* <View style={styles.input}>  */}
              <Field
                component={CustomInput}
                name="password"
                placeholder={t("SignUp.4")}
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {/* </View> 
             <View style={styles.input}>  */}
              <Field
                component={CustomInput}
                name="confirmPassword"
                placeholder={t("SignUp.5")}
                secureTextEntry
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                // style={styles.placeholder}
              />
              {/* <TouchableOpacity onPress={() => SeenPassword()}>
              <Image source={seen} style={styles.seen}/>
            </TouchableOpacity>  
            </View>  */}
              <TouchableOpacity
                style={styles.submitBtn}
                // onPress={handleSubmit}
                // onPress={() => {
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <CustomText style={styles.submitText}>
                  {" "}
                  {t("SignUp.1")}
                </CustomText>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
      <View style={styles.afterSubmit}>
        <CustomText style={{ color: "lightgray" }}>
          _______________{t("SignUp.6")}______________
        </CustomText>
      </View>
      <View style={styles.linkedBtnWrapper}>
        <TouchableOpacity style={styles.linkBtn}>
          <Image source={google} />
          <CustomText style={styles.linkBtnText}>{t("SignUp.7")}</CustomText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default NewSignUp;
