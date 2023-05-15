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
import { useTranslation } from "react-i18next";
const ForgotPassword = () => {
  const {t, i18n}= useTranslation(); 
  const emailValidationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email(t("ForgotPassword.3"))
      .required(t("ForgotPassword.4"))
  })

    const [email, setEmail] = useState('');
    const doUser = async function(){
        const emailValue = email;
        Parse.User.requestPasswordReset(emailValue).then(()=>{
          Alert.alert(t("ForgotPassword.5"))
        }).catch((error) => {
            Alert.alert("Errors" * error.message)
        }) 
    };
    const navigation = useNavigation();
    const OnSubmit = () => {

        navigation.navigate("EnterCode");
    
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
           {/* <CustomText style={styles.text}>  {t("ForgotPassword.2")} </CustomText> */}
           <CustomText style={styles.text1}> {t("ForgotPassword.2")}  </CustomText>
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
             placeholder= {t("ForgotPassword.6")}
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
    <CustomText style={styles.submitText}>{t("ForgotPassword.7")} </CustomText>
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
    textAlign:"right",
},
  text1:{
  fontSize: 18,
  color: "#fff",
  textAlign:"right",

},
textView:{
 justifyContent: "flex-start",
 alignItems: "flex-end",
 marginBottom: 20,
 marginTop: 30,
 width: "80%",
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
    fontSize: 15,
    color: 'red',
    textAlign: "right"
  },
});
export default ForgotPassword;




