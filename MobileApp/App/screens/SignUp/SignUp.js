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
} from "react-native";
import google from "../../assets/google.png";
import facebook from "../..//assets/facebook.png";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./SignUp.style";
import logo from "../../assets/White_PNG_Format_z.png";
import styles from "./SignUp.style";
import seen from "../../assets/Group_8.png";
import { Formik, Field } from 'formik'
import * as Yup from "yup";
import CustomInput from "./CustomInput";

const SignUp = () => {
  const signUpValidationSchema = Yup.object().shape({
    fullName: Yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    email: Yup
      .string()
      .email("Please enter valid email")
      .required('Email is required'),
    password: Yup
      .string()
      .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: Yup
      .string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  })

  const navigation = useNavigation();
  const [seenVariable, setSeenVariable] = useState(true);
  const SeenPassword = () => {
    if (seenVariable == true) {
      setSeenVariable(false);
    } else {
      setSeenVariable(true);
    }
  };
  const SubmitLog =() =>{
    navigation.navigate("LogIn");
  }
  const onSubmit =()=>{
     navigation.navigate("Information");
  }
  // function required(fullName) 
  // {
  //   if (fullName == 0)
  //    { 
  //       alert("please fill the form");  	
  //       return false; 
  //    }  	
  //    return navigation.navigate("Sections"); 
  //   return true
  //  } 
  return (
    <SafeAreaView style={Styles.outContainer}>
      <Image source={logo} style={Styles.imgStyle} />
      <View style={Styles.InContainer}>
        <View style={styles.navContainer}>
          <Pressable style={styles.btnSI}  onPress={SubmitLog}>
            <Text style={styles.btnTextSI}>ورود به حساب</Text>
          </Pressable>
          <Pressable style={styles.btnSO} >
            <Text style={styles.btnTextSO}>ایجاد حساب</Text>
          </Pressable>
        </View>
        <View style={styles.form}>
        <Formik  validationSchema={signUpValidationSchema}
             initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }} 
            
          > 
            {({  
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isValid,
           }) => (
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
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {/* <View style={styles.input}> */}
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder="رمز عبور"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
            {/* </View> */}
            {/* <View style={styles.input}> */}
             <Field
                  component={CustomInput}
                  name="confirmPassword"
                  placeholder=" تکرار رمز عبور"
                  secureTextEntry
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
            {/* <TouchableOpacity onPress={() => SeenPassword()}>
              <Image source={seen} style={styles.seen}/>
            </TouchableOpacity> */}
            {/* </View> */}
          <TouchableOpacity style={styles.submitBtn}  onPress={onSubmit}  disabled={!isValid} >
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
          <TouchableOpacity style={styles.linkBtn}>
            <Image source={facebook} />
            <Text style={styles.linkBtnText}>با حساب فیسبوک خود وارد شوید</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;














