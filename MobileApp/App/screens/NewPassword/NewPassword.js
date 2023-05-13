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
    ScrollView
  } from "react-native";
import { Formik, Field } from 'formik'
import * as Yup from "yup";
import CustomInput from "../SignUp/CustomInput";
import { useNavigation } from "@react-navigation/native";
import arrow from "../../assets/Group_158_a.png";
import Logo from "../../assets/logo.png";
import CustomText from "../../CustomText";
  
const NewPassword = () => {
    const EnterCodeValidationSchema = Yup.object().shape({
        password: Yup
          .string()
          .matches(/\w*[a-z]\w*/,  " رمز عبور باید یک حرف کوچک داشته باشد")
          .matches(/\w*[A-Z]\w*/,  " رمز عبور باید یک حرف بزرگ داشته باشد")
          .matches(/\d/, "رمز عبور باید یک عدد داشته باش")
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "  عبور باید یک کارکتر خاص داشته یاشد")
          .min(8, ({ min }) => `  رمز عبور باید حداقل ${min} کارکتر باشد `)
          .required('رمز عبور الزامی است'),
        confirmPassword: Yup
          .string()
          .oneOf([Yup.ref('password')], 'رمز عبور مطابقت ندارد')
          .required('تایید رمز عبور لازم است'),
      })
    const navigation = useNavigation();
    const onSubmit = (values) => {
       navigation.navigate("Sections");
          
    }
    return (
    <ScrollView contentContainerStyle={styles.outContainer}>
    <TouchableOpacity
          style={styles.arrowStyle}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
        <Image source={arrow} />
    </TouchableOpacity>
    <View style={styles.textView} >
           <CustomText style={styles.text}>  {t("NewPassword.10")}  </CustomText>
           <CustomText style={styles.text}>  {t("NewPassword.11")}   </CustomText>
           <CustomText style={styles.text1}> {t("NewPassword.12")} </CustomText>
    </View>
    <View style={styles.InContainer}>
    <View style={styles.form}>
    <Formik  validationSchema={EnterCodeValidationSchema}
       initialValues={{
       password: '',
       confirmPassword: '',
       }} 
       onSubmit={onSubmit}  
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
     name="password"
     placeholder= {t("NewPassword.13")}
     secureTextEntry
     onChangeText={handleChange('password')}
     onBlur={handleBlur('password')}
     value={values.password}
    />
    <Field
     component={CustomInput}
     name="confirmPassword"
     placeholder= {t("NewPassword.14")}
     secureTextEntry
     onChangeText={handleChange('confirmPassword')}
     onBlur={handleBlur('confirmPassword')}
     value={values.confirmPassword}
    />
  <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}  disabled={!isValid}>
    <CustomText style={styles.submitText}> {t("NewPassword.15")} </CustomText>
  </TouchableOpacity> 
  </>
    )}
 </Formik>
  <Image source={Logo} style={styles.imgStyle} />
  </View>
     </View>
     </ScrollView>
    );
  }

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold"
},
  text1:{
  fontSize: 16,
  color: "#fff",
  paddingTop: 10
},
textView:{
 justifyContent: "flex-end",
 alignItems: "flex-end",
 marginVertical: 40
},
  outContainer: {
    backgroundColor: "rgba(60,152,189,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  },
  imgStyle: {
    marginTop:  50,
    alignSelf: "center"
  },
  arrowStyle: {
    marginTop: 40,
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  InContainer: {
    borderTopRightRadius: 55, 
    borderTopLeftRadius: 55,
    backgroundColor: "#fff",
    flex: 3,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  form: { width: "100%", paddingVertical: 70 },
  input: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    height: 40,
    marginTop: 10,
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
  }
});

export default NewPassword;




