import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
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

const SignUp = () => {
  const signUpValidationSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/(\w.+\s).+/, "حداقل دو نام وارد کنید")
      .required("نام کامل الزامی است"),
    email: Yup.string()
      .email("لطفا آیمیل متعتبر تان را وارد کنید")
      .required("ایمیل ادرس الزامی است"),
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, " رمز عبور باید یک حرف کوچک داشته باشد")
      .matches(/\w*[A-Z]\w*/, " رمز عبور باید یک حرف بزرگ داشته باشد")
      .matches(/\d/, "رمز عبور باید یک عدد داشته باش")
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        " رمز عبور باید یک کاراکتر خاص داشته باش"
      )
      .min(8, ({ min }) => `  رمز عبور باید حداقل ${min} کارکتر باشد `)
      .required("رمز عبور الزامی است"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "رمز عبور مطابقت ندارد")
      .required("تایید رمز عبور لازم است"),
  });
  const onSubmit = (values) => {
    if (!values) {
      Alert("please fill the form");
    } else {
      navigation.navigate("Information");
    }
  };

  const navigation = useNavigation();
  const [seenVariable, setSeenVariable] = useState(true);
  const SeenPassword = () => {
    if (seenVariable == true) {
      setSeenVariable(false);
    } else {
      setSeenVariable(true);
    }
  };
  return (
    <ScrollView contentContainerStyle={Styles.outContainer}>
      <Image source={logo} style={Styles.imgStyle} />
      <View style={Styles.InContainer}>
        <View style={styles.navContainer}>
          <Pressable
            style={styles.btnSI}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Text style={styles.btnTextSI}>ورود به حساب</Text>
          </Pressable>
          <Pressable style={styles.btnSO}>
            <Text style={styles.btnTextSO}>ایجاد حساب</Text>
          </Pressable>
        </View>
        <View style={styles.form}>
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => onSubmit(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
              <>
                <Field
                  component={CustomInput}
                  name="fullName"
                  placeholder=" نام کاربری"
                />
                <Field
                  component={CustomInput}
                  name="email"
                  placeholder=" ایمیل ادرس"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {/* <View style={styles.input}>  */}
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder="رمز عبور"
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
                  placeholder=" تکرار رمز عبور"
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
                  onPress={handleSubmit}
                  disabled={!isValid}
                >
                  <Text style={styles.submitText}>ایجاد حساب</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
        <Text style={{ color: "lightgray" }}>
          _______________ویا_______________
        </Text>
        <View style={styles.linkedBtnWrapper}>
          <TouchableOpacity style={styles.linkBtn}>
            <Image source={google} />
            <Text style={styles.linkBtnText}>با حساب گوگل خود وارد شوید</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.linkBtn}>
            <Image source={facebook} />
            <Text style={styles.linkBtnText}>با حساب فیسبوک خود وارد شوید</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;
