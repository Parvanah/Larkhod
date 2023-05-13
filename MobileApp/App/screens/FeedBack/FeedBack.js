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
import Style from "./FeedBack.style";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "../SignUp/CustomInput";
import { SafeAreaView } from "react-native-safe-area-context";

const FeedBack = (props) => {
  const navigation = useNavigation();

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
      .email("لطفا ایمیل متعتبر تان را وارد نمایید")
      .required("ایمیل آدرس لازمی است"),
    message: Yup.string()
      .min(4, "پیام خود را مکمل وارد نمایید")
      .required("پیام ضروری است"),
    class: Yup.number()
      .min(1, "صنف تان  درست نیست")
      .max(12, "صنف تان  درست نیست")
      .required("صنف ضروری است"),
  });
  const onSubmitt = () => {
      navigation.goBack()
  };
  return (
    <View style={Style.FeedBackContainer}>
      <View style={Style.arrow}>
        <Svg
          data-name="Group 197"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={10}
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
        <Text style={Style.title}>ارسال نظر</Text>
        <Text style={Style.description}>
          پیشنهادات و نظریات خود را جهت بهبود روند درس‌ها از این دریچه با ما به
          اشتراک بگذارید
        </Text>
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
          onSubmit={onSubmitt}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <SafeAreaView style={Style.form}>
              <Field
                component={CustomInput}
                placeholder="نام"
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
                placeholder="شماره تماس"
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
                placeholder="صنف"
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
                placeholder="ایمیل آدرس"
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
                placeholder="درج پیام ..."
                placeholderTextColor="black"
                style={Style.inputMessege}
                editable
                multiline
                keyboardType="ascii-capable"
                name="message"
                onChangeText={handleChange("message")}
                onBlur={handleBlur("message")}
                value={values.message}
              
              />

              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={Style.SubmitBtn}
              >
                <Text>ارسال نظر</Text>
              </TouchableOpacity>
            </SafeAreaView>
          )}
        </Formik>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={540}
          preserveAspectRatio="none"
          viewBox="0 0 360 516.377"
          {...props}
        >
          <View>
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
          </View>
          <Path
            data-name="Path 1076"
            d="M396.137 566.767V126.725L378.6 100.067l-20.723-31.5a46.29 46.29 0 00-3.08-4.163c-.437-.545-.893-1.046-1.349-1.548a37.434 37.434 0 00-20.248-11.79 31.9 31.9 0 00-6.6-.676H105.669c-12.211 0-23.73 6.692-31.276 18.179l-8.256 12.556-1.258 1.9-28.742 43.7v440.042z"
            transform="translate(-36.137 -50.39)"
            fill="url(#a)"
          />
        </Svg>
      </ScrollView>
    </View>
  );
};

export default FeedBack;
