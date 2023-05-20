import React from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  ClipPath,
  G,
  ForeignObject,
} from "react-native-svg";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import Style from "./FeedBack.style";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "../NewSignUp/CustomInput";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";

const FeedBack = (props) => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const FeedBackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "نام باید بالاتر از دو حرف باشد")
      .max(50, "نام باید کمتر از ۵۰ حرف باشد")
      .required("نام ضروری است"),
    phonNumber: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "شماره تیلفون اشتباه است"
      )
      .required("شماره ضروری است"),
    email: Yup.string()
      .email("لطفا ایمیل متعتبر تان را وارد کنید")
      .required("ایمیل آدرس الزامی است"),
    message: Yup.string()
      .min(4, "پیام خود را مکمل وارد کنید")
      .required("پیام ضروری است"),
    class: Yup.number()
      .min(1, "صنف تان  درست نیست")
      .max(12, "صنف تان  درست نیست")
      .required("صنف ضروری است"),
  });
  const onSubmitt = (values) => {
    if (!values) {
      Alert.alert("لطفأ تمام موارد را پر کنید");
    } else {
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={Style.FeedBackContainer}>
      <View style={Style.arrow}>
        <Svg
          data-name="Group 197"
          xmlns="http://www.w3.org/2000/svg"
          width={horizontalScale(16)}
          height={verticalScale(10)}
          viewBox="0 0 16 10"
          {...props}
          onPress={() => navigation.goBack()}
        >
          <Defs>
            <ClipPath id="a">
              <Path data-name="Rectangle 85" fill="#2f84b5" d="M0 0H16V10H0z" />
            </ClipPath>
          </Defs>
          <G data-name="Group 158" clipPath="url(#a)">
            <Path
              data-name="Path 433"
              d="M3.247 6l2.48 2.294a.99.99 0 010 1.414 1.023 1.023 0 01-1.432 0L.445 6.059A1.465 1.465 0 010 5a1.483 1.483 0 01.444-1.06L4.294.293a1.025 1.025 0 011.434 0 .992.992 0 010 1.414L3.248 4H15a1 1 0 010 2H3.247z"
              fill="#2f84b5"
              fillRule="evenodd"
            />
          </G>
        </Svg>
      </View>
      <View style={Style.top}>
        <CustomText style={Style.title}>{t("FeedBack.12")} </CustomText>
        <CustomText style={Style.description}> {t("FeedBack.13")}</CustomText>
      </View>

      <ScrollView contentContainerStyle={Style.svgWrapperFeedBack}>
        <Formik
          validationSchema={FeedBackSchema}
          initialValues={{
            name: "",
            phonNumber: "",
            class: "",
            email: "",
            message: "",
          }}
          onSubmit={(values) => onSubmitt(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <SafeAreaView style={Style.form}>
              <Field
                component={CustomInput}
                placeholder={t("FeedBack.14")}
                placeholderTextColor="#fff"
                keyboardType="ascii-capable"
                style={Style.input}
                name="name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />

              <Field
                component={CustomInput}
                placeholder={t("FeedBack.15")}
                placeholderTextColor="#fff"
                keyboardType="ascii-capable"
                style={Style.input}
                name="phonNumber"
                onChangeText={handleChange("phonNumber")}
                onBlur={handleBlur("phonNumber")}
                value={values.phonNumber}
              />
              <Field
                component={CustomInput}
                placeholder={t("FeedBack.16")}
                placeholderTextColor="lightgray"
                keyboardType="decimal-pad"
                style={Style.input}
                name="class"
                onChangeText={handleChange("class")}
                onBlur={handleBlur("class")}
                value={values.class}
              />
              <Field
                component={CustomInput}
                placeholder={t("FeedBack.17")}
                placeholderTextColor="#fff"
                keyboardType="email-address"
                style={Style.input}
                name="email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

              <Field
                component={CustomInput}
                placeholder={t("FeedBack.18")}
                placeholderTextColor="black"
                style={Style.inputMessege}
                editable
                multiline
                keyboardType="ascii-capable"
                name="message"
                onChangeText={handleChange("message")}
                onBlur={handleBlur("message")}
                value={values.message}
                // onFocus={() => Alert.alert("helloo")}
              />

              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={Style.SubmitBtn}
              >
                <CustomText style={{ fontSize: moderateScale(15) }}>
                  {t("FeedBack.19")}
                </CustomText>
              </TouchableOpacity>
            </SafeAreaView>
          )}
        </Formik>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={verticalScale(720.886)}
          preserveAspectRatio="none"
          viewBox="0 0 360 482.886"
          {...props}
        >
          <Defs>
            <LinearGradient
              id="a"
              x1={0.892}
              y1={1.259}
              x2={0.152}
              y2={-0.169}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0} stopColor="#3c98bd" />
              <Stop offset={1} stopColor="#1054a2" />
            </LinearGradient>
          </Defs>
          <Path
            data-name="Path 1076"
            d="M396.137 533.276v-411.5L378.6 96.845 357.881 67.39a43.6 43.6 0 00-3.081-3.89c-.437-.51-.893-.978-1.349-1.447A38.084 38.084 0 00333.2 51.022a34.029 34.029 0 00-6.6-.632H105.669c-12.211 0-23.73 6.258-31.276 17l-8.256 11.741-1.258 1.769-28.742 40.87v411.5z"
            transform="translate(-36.137 -50.39)"
            fill="url(#a)"
          />
        </Svg>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedBack;
