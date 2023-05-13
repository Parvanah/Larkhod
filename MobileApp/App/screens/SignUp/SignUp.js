import React, { useState } from "react";
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
import { Formik, Field } from 'formik'
import * as Yup from "yup";
import CustomInput from "./CustomInput";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
const SignUp = () =>{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     showSignUp: true,
  //   };
  // }
  // handlePress = () =>{
  //   this.setState({showSignUp: !this.state.showSignUp});
  // };
  // render(){
    const {t, i18n}= useTranslation(); 
    const signUpValidationSchema = Yup.object().shape({
      email: Yup
        .string()
        .email("لطفا ایمیل متعتبر تان را وارد نمایید")
        .required('ایمیل آدرس لازمی است'),
      password: Yup
        .string()
        .matches(/\w*[a-z]\w*/,  " رمز عبور باید یک حرف کوچک داشته باشد")
        .matches(/\w*[A-Z]\w*/,  " رمز عبور باید یک حرف بزرگ داشته باشد")
        .matches(/\d/, "رمز عبور باید یک عدد داشته باشد ")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "  عبور باید یک کارکتر خاص داشته یاشد")
        .min(8, ({ min }) => `  رمز عبور باید حداقل ${min} کارکتر باشد `)
        .required('رمز عبور لازمی است'),
      confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password')], 'رمز عبور مطابقت ندارد')
        .required('تایید رمز عبور لازمی است'),
    })
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
  //   moveToSlideFromRight = () => {
  //     this.props.navigation.navigate('SlideFromRight');
  // },
    <ScrollView contentContainerStyle={styles.outContainer}>
      <Image source={logo} style={Styles.imgStyle} />
      <View style={Styles.InContainer}>
      <View style={styles.navContainer}>
            <TouchableOpacity style={styles.btnSI} 
            onPress={() => navigation.navigate("LogIn")}
            // onPress={this.moveToSlideFromRight}
            > 
              <CustomText style={styles.btnTextSI}>{t("SignUp.2")} </CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSO} >
              <CustomText style={styles.btnTextSO}> {t("SignUp.1")}</CustomText>
            </TouchableOpacity>
          </View>
        <View style={styles.form}>
        <Formik  validationSchema={signUpValidationSchema}
             initialValues={{
              email: '',
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
                  name="email"
                  placeholder= {t("SignUp.3")}
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                 {/* <View style={styles.input}>  */}
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder= {t("SignUp.4")}
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
             {/* </View> 
             <View style={styles.input}>  */}
             <Field
                  component={CustomInput}
                  name="confirmPassword"
                  placeholder= {t("SignUp.5")}
                  secureTextEntry
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
             {/* <TouchableOpacity onPress={() => SeenPassword()}>
              <Image source={seen} style={styles.seen}/>
            </TouchableOpacity>  
            </View>  */}
          <TouchableOpacity style={styles.submitBtn}  onPress={handleSubmit}  disabled={!isValid} >
            <CustomText style={styles.submitText}> {t("SignUp.1")}</CustomText>
          </TouchableOpacity>
           </>
           )}
         </Formik>
        </View>
        <Text style={{ color: "lightgray" }}>
          _______________{t("SignUp.6")}______________
        </Text>
        <View style={styles.linkedBtnWrapper}>
          <TouchableOpacity style={styles.linkBtn}>
            <Image source={google} />
            <CustomText style={styles.linkBtnText}>{t("SignUp.7")}</CustomText>
          </TouchableOpacity>
        </View> 
      </View> 
    </ScrollView>
    
  );

}
export default SignUp;
















