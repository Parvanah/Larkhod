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
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from "../../context/AuthContext";
import React, {useContext, useState} from 'react';
const NewSignUp = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, register} = useContext(AuthContext);

  const { t, i18n } = useTranslation();
  const signUpValidationSchema = Yup.object().shape({
    email: Yup.string().email(t("SignUp.8")).required(t("SignUp.9")),
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
  const onSubmit = () => {
    navigation.navigate("SignUpVerification");
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
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <>
              <Field
                component={CustomInput}
                name="email"
                placeholder={t("SignUp.3")}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
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
              />
              {/* <TouchableOpacity onPress={() => SeenPassword()}>
              <Image source={seen} style={styles.seen}/>
            </TouchableOpacity>  
            </View>  */}
              <TouchableOpacity
                style={styles.submitBtn}
                // onPress={handleSubmit}
                onPress={() => {
                  register(name, email, password);
                }}
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
        <Text style={{ color: "lightgray" }}>
          _______________{t("SignUp.6")}______________
        </Text>
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
