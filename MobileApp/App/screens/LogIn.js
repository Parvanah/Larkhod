import React, { useState } from "react";
import {SafeAreaView, View, Text, Image, Pressable, TextInput, Button, TouchableOpacity } from "react-native";
import Styles from "./LogIn.style";
import styles from "../LogIn/LogIn.style";
import logo from "../assets/White_PNG_Format_z.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import arrow from "../assets/Group_158_a.png";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";

const loginValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: Yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

const LogIn = () => {
  const navigation = useNavigation();
  const OnSubmit = () => {
    navigation.navigate("Sections");
  };
    return (     
      <SafeAreaView style={Styles.outContainer}>
                <TouchableOpacity
          style={styles.arrowStyle}
          onPress={() => navigation.navigate("FirstPage")}
        >
        <Image source={arrow} />
        </TouchableOpacity>
       <Image source={logo} style={Styles.imgStyle} />
        <View style={Styles.InContainer}>

          <View style={styles.navContainer}>
            <TouchableOpacity style={styles.btnSI}> 
              <Text style={styles.btnTextSI}>ورود به حساب</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSO}>
              <Text style={styles.btnTextSO}>ایجاد حساب</Text>
            </TouchableOpacity>
          </View>

            <View style={styles.form}>
            <Formik  validationSchema={loginValidationSchema}
             initialValues={{ email: '', password: '' }}
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
             placeholder=" ایمیل آدرس"
            //  style={styles.textInput}
             onChangeText={handleChange('email')}
             onBlur={handleBlur('email')}
             value={values.email}
             keyboardType="email-address"
              // onBlur={() => emailValidator()}
              variant="rounded"
              // marginX={10}
              // marginY={5}
              style={styles.input}
            />
             {(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>
                }
            <TextInput
              name="password"
              placeholder="رمز عبور"
              // style={styles.textInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            variant="rounded"
            // marginX={10}
              style={styles.input}
            //   textContentType="password
            />
             {(errors.password && touched.password) &&
                  <Text style={styles.errorText}>{errors.password}</Text>
            }

           <Text style={styles.afterPass}> رمز عبوری تان را فراموش کرده اید؟</Text> 
           <TouchableOpacity style={styles.submitBtn}  
             onPress={ OnSubmit}
             disabled={!isValid} 
              >
                <Text style={styles.submitText}>وارد شدن </Text>
            </TouchableOpacity>
            </>
            )}
          </Formik>

          </View>
          <View style={styles.afterSubmit}>
            <Text style={{ color: "lightgray" }}>
              ___________و یا______________
            </Text>
          </View>
          <View style={styles.linkedBtnWrapper}>
          <TouchableOpacity style={styles.linkBtn}>
            <Image source={google} />
          <Text style={styles.linkBtnText}>با حساب گوگل خود وارد شوید  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBtn}>
            <Image source={facebook} />
          <Text style={styles.linkBtnText}>با حساب فیسبوک خود وارد شوید  </Text>
          </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  export default LogIn;
  