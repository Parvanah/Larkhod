import React, { useState } from "react";
import {SafeAreaView, View, Text, Image, Pressable, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import Styles from "./LogIn.style";
import styles from "../LogIn/LogIn.style";
import logo from "../../assets/White_PNG_Format_z.png";
import google from "../../assets/google.png";
import arrow from "../../assets/Group_158_a.png";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";

const LogIn = () => {
  const {t, i18n}= useTranslation(); 
  const loginValidationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email(t("LogIn.8"))
      .required(t("LogIn.9")),
    password: Yup
      .string()
      .required(t("LogIn.10")),
  })
  

  const navigation = useNavigation();
  const OnSubmit = () => {
      navigation.navigate("Sections");
  };
  const handle = () =>{
    navigation.navigate(ForgotPassword);
  }
    return (     
      <ScrollView contentContainerStyle={styles.outContainer}>
                <TouchableOpacity
          style={styles.arrowStyle}
          onPress={() => navigation.navigate("FirstPage")}
        >
        <Image source={arrow} />
        </TouchableOpacity>
       <Image source={logo} style={Styles.imgStyle} />
        <View style={Styles.InContainer}>

          <View style={styles.navContainer}>
            <TouchableOpacity style={styles.btnSI} > 
              <CustomText style={styles.btnTextSI}> {t("LogIn.2")} </CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSO} onPress={() => navigation.navigate("SignUp")}>
              <CustomText style={styles.btnTextSO}>{t("LogIn.1")} </CustomText>
            </TouchableOpacity>
          </View>

            <View style={styles.form}>
            <Formik  validationSchema={loginValidationSchema}
             initialValues={{ email: '', password: '' }}     onSubmit={values => OnSubmit(values)}
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
             placeholder= {t("LogIn.3")}
             onChangeText={handleChange('email')}
             onBlur={handleBlur('email')}
             value={values.email}
             keyboardType="email-address"
              variant="rounded"
              style={styles.input}
            />
             {(errors.email && touched.email) &&
                  <CustomText style={styles.errorText}>{errors.email}</CustomText>
                }
            <TextInput
              name="password"
              placeholder= {t("LogIn.4")}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              variant="rounded"
              style={styles.input}
            />
             {(errors.password && touched.password) &&
                  <CustomText style={styles.errorText}>{errors.password}</CustomText>
            }
          <TouchableOpacity onPress={handle}>
            <CustomText style={styles.afterPass}> {t("LogIn.5")} </CustomText>
          </TouchableOpacity> 
           <TouchableOpacity style={styles.submitBtn}  
             onPress={ handleSubmit}
             disabled={!isValid} 
              >
                <CustomText style={styles.submitText}> {t("LogIn.11")} </CustomText>
            </TouchableOpacity>
            </>
            )}
          </Formik>
          </View>
          <View style={styles.afterSubmit}>
            <CustomText style={{ color: "lightgray" }}>
              ___________{t("LogIn.6")}_____________
            </CustomText>
          </View>
          <View style={styles.linkedBtnWrapper}>
          <TouchableOpacity style={styles.linkBtn}>
            <Image source={google} />
          <CustomText style={styles.linkBtnText}>{t("LogIn.7")}</CustomText>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  export default LogIn;
  