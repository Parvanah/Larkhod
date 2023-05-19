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
  StyleSheet,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
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
import NewSignUp from "../NewSignUp/NewSignUp";
import LogIn from "../LogIn/LogIn";

const SignUp = () => {
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
  const [switchSelector, setSwitchSelector] = useState(t(""));
  const handleSwitch = (value) => {
    if (value === t("SignUp.2")) {
      setSwitchSelector(value);
    } else if (value === t("SignUp.1")) {
      setSwitchSelector(value);
    }
  };
  const style = StyleSheet.create({
    btnSI: {
      paddingVertical: verticalScale(11),
      // paddingHorizontal: 26,
      backgroundColor:
        switchSelector == t("SignUp.2") ? "rgba(60,152,189,1)" : "#FFF",
      width: "50%",
      borderRadius: moderateScale(20),
    },
    btnSO: {
      // borderColor: "lightgray",
      // borderStyle: "solid",
      // borderWidth: 1,
      width: "50%",
      backgroundColor:
        switchSelector == t("SignUp.1") || switchSelector == ""
          ? "rgba(60,152,189,1)"
          : "#FFF",
      paddingVertical: verticalScale(11),
      // paddingHorizontal: 26,
      borderRadius: moderateScale(20),
    },
    btnTextSO: {
      fontSize: moderateScale(15),

      color:
        switchSelector == t("SignUp.1") || switchSelector == ""
          ? "#FFF"
          : "rgba(60,152,189,1)",
      textAlign: "center",
    },
    btnTextSI: {
      fontSize: moderateScale(15),

      color: switchSelector == t("SignUp.2") ? "#FFF" : "rgba(60,152,189,1)",
      textAlign: "center",
    },
  });
  return (
    //   moveToSlideFromRight = () => {
    //     this.props.navigation.navigate('SlideFromRight');
    // },
    //  <View style={styles.navContainer}>
    //       <TouchableOpacity
    //         style={styles.btnSI}
    //         onPress={() => navigation.navigate("LogIn")}
    //         // onPress={this.moveToSlideFromRight}
    //       >
    //         <CustomText style={styles.btnTextSI}>{t("SignUp.2")} </CustomText>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.btnSO}>
    //         <CustomText style={styles.btnTextSO}> {t("SignUp.1")}</CustomText>
    //       </TouchableOpacity>
    //     </View>
    //     <View style={styles.form}>
    //       <Formik
    //         validationSchema={signUpValidationSchema}
    //         initialValues={{
    //           email: "",
    //           password: "",
    //           confirmPassword: "",
    //         }}
    //         onSubmit={onSubmit}
    //       >
    //         {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
    //           <>
    //             <Field
    //               component={CustomInput}
    //               name="email"
    //               placeholder={t("SignUp.3")}
    //               keyboardType="email-address"
    //               onChangeText={handleChange("email")}
    //               onBlur={handleBlur("email")}
    //               value={values.email}
    //             />
    //             {/* <View style={styles.input}>  */}
    //             <Field
    //               component={CustomInput}
    //               name="password"
    //               placeholder={t("SignUp.4")}
    //               secureTextEntry
    //               onChangeText={handleChange("password")}
    //               onBlur={handleBlur("password")}
    //               value={values.password}
    //             />
    //             {/* </View>
    //          <View style={styles.input}>  */}
    //             <Field
    //               component={CustomInput}
    //               name="confirmPassword"
    //               placeholder={t("SignUp.5")}
    //               secureTextEntry
    //               onChangeText={handleChange("confirmPassword")}
    //               onBlur={handleBlur("confirmPassword")}
    //               value={values.confirmPassword}
    //             />
    //             {/* <TouchableOpacity onPress={() => SeenPassword()}>
    //           <Image source={seen} style={styles.seen}/>
    //         </TouchableOpacity>
    //         </View>  */}
    //             <TouchableOpacity
    //               style={styles.submitBtn}
    //               onPress={handleSubmit}
    //               disabled={!isValid}
    //             >
    //               <CustomText style={styles.submitText}>
    //                 {" "}
    //                 {t("SignUp.1")}
    //               </CustomText>
    //             </TouchableOpacity>
    //           </>
    //         )}
    //       </Formik>
    //     </View>
    //     <Text style={{ color: "lightgray" }}>
    //       _______________{t("SignUp.6")}______________
    //     </Text>
    //     <View style={styles.linkedBtnWrapper}>
    //       <TouchableOpacity style={styles.linkBtn}>
    //         <Image source={google} />
    //         <CustomText style={styles.linkBtnText}>{t("SignUp.7")}</CustomText>
    //       </TouchableOpacity>
    //     </View>

    <ScrollView contentContainerStyle={styles.outContainer}>
      <Image source={logo} style={Styles.imgStyle} />
      <View style={Styles.InContainer}>
        <View style={styles.navContainer}>
          <TouchableOpacity
            style={style.btnSI}
            onPress={() => handleSwitch(t("SignUp.2"))}
            // onPress={this.moveToSlideFromRight}
          >
            <CustomText style={style.btnTextSI}>{t("SignUp.2")} </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnSO}
            onPress={() => handleSwitch(t("SignUp.1"))}
          >
            <CustomText style={style.btnTextSO}> {t("SignUp.1")}</CustomText>
          </TouchableOpacity>
        </View>
        <View>
          {switchSelector === "" || switchSelector === t("SignUp.1") ? (
            <NewSignUp />
          ) : (
            <LogIn />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
