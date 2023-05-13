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
  import { useNavigation } from "@react-navigation/native";
  import Parse from 'parse/react-native';
  import arrow from "../../assets/Group_158_a.png";
  import Logo from "../../assets/logo.png";
  import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomText from "../../CustomText"
const emailValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("ایمیل آدرس معتبر تان را وارد نمایید")
    .required('ایمیل آدرس لازمی است'),
})
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const doUser = async function(){
        const emailValue = email;
        Parse.User.requestPasswordReset(emailValue).then(()=>{
          Alert.alert("ایمیل تان را چیک کنید")
        }).catch((error) => {
            Alert.alert("Errors" * error.message)
        }) 
    };
    const navigation = useNavigation();
    const OnSubmit = () => {

        navigation.navigate("NewPassword");
    
    };
    return (
    <ScrollView contentContainerStyle={styles.outContainer}>
    <TouchableOpacity
          style={styles.arrowStyle}
          onPress={() => navigation.navigate("LogIn")}
        >
        <Image source={arrow}  />
    </TouchableOpacity>
    <View style={styles.textView} >
           <CustomText style={styles.text}> {t("ForgotPassword.1")}  </CustomText>
           <CustomText style={styles.text}>  {t("ForgotPassword.2")} </CustomText>
           <CustomText style={styles.text}> {t("ForgotPassword.3")}  </CustomText>
           <CustomText style={styles.text1}> {t("ForgotPassword.4")} </CustomText>
    </View>
    <View style={styles.InContainer}>
    <View style={styles.form}>
    <Formik  validationSchema={emailValidationSchema}
             initialValues={{ email: ''}}     onSubmit={OnSubmit}
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
             placeholder= {t("ForgotPassword.9")}
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
  <TouchableOpacity style={styles.submitBtn} onPress={ handleSubmit}  disabled={!isValid} >
    <CustomText style={styles.submitText}>{t("ForgotPassword.10")} </CustomText>
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
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
},
  text1:{
  fontSize: 18,
  color: "#fff",
},
textView:{
 justifyContent: "flex-end",
 alignItems: "flex-end",
 marginBottom: 10,
 marginTop: 30
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
    paddingVertical: 40
  },
  form: { width: "100%", paddingVertical: 40},
  input: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    height: 40,
    marginTop: 10,
    textAlign: "right"
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
  errorText: {
    fontSize: 10,
    color: 'red',
    textAlign: "right"
  },
});
export default ForgotPassword;




