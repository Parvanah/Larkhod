import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/White_PNG_Format_z.png";
import arrow from "../../assets/Group_158_a.png";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
// import Spinner from "react-native-loading-spinner-overlay";
// import { AuthContext } from "../../context/AuthContext";

const CELL_COUNT = 6;
const SignUpVerification = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const { AfterVarify } = useContext(AuthContext);
  const navigation = useNavigation();
  // const { isLoading, verifyEmail } = useContext(AuthContext);
  const handleSubmit = (value) => {
    AfterVarify();
    // verifyEmail(value.cellCount);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView contentContainerStyle={styles.outContainer}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={verticalScale(420)}
          preserveAspectRatio="none"
          viewBox="0 0 360 358"
          {...props}
        >
          <Defs>
            <LinearGradient
              id="a"
              x1={0.22}
              y1={-0.035}
              x2={0.905}
              y2={1.793}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0} stopColor="#3c98bd" />
              <Stop offset={0.005} stopColor="#3c98bd" />
              <Stop offset={1} stopColor="#0f53a1" />
            </LinearGradient>
          </Defs>
          <Path
            data-name="Rectangle 267"
            d="M70 0h220a70 70 0 0170 70v288H0V70A70 70 0 0170 0z"
            transform="rotate(180 180 179)"
            fill="url(#a)"
          />
        </Svg>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.arrowStyle}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Image source={arrow} />
          </TouchableOpacity>
          <Image source={logo} style={styles.imgStyle} />
          <View style={styles.textView}>
            <CustomText style={styles.text}>
              {" "}
              {t("SignUpVerification.1")}{" "}
            </CustomText>
            <CustomText style={styles.text}>
              {" "}
              {t("SignUpVerification.2")}{" "}
            </CustomText>
            <CustomText style={styles.text}>
              {" "}
              {t("SignUpVerification.3")}{" "}
            </CustomText>
            {/* <CustomText style={styles.text}> وارد نمایید </CustomText> */}
          </View>
        </View>
        <View style={styles.InContainer}>
          {/* <Spinner visible={isLoading} /> */}
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}
              >
                <CustomText style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </CustomText>
              </View>
            )}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <CustomText style={styles.submitText}>
              {t("SignUpVerification.1")}
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomText style={styles.title}>
              {t("SignUpVerification.2")}
            </CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(14),
    color: "#ccc",
    paddingTop: verticalScale(10),
  },
  text: {
    textAlign: "center",
    fontSize: moderateScale(20),
    color: "#fff",
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
    paddingBottom: verticalScale(30),
    // backgroundColor: "yellow",
  },
  codeFieldRoot: {
    width: horizontalScale(300),
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: horizontalScale(40),
    height: verticalScale(50),
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: horizontalScale(2),
  },
  cellText: {
    color: "#000",
    fontSize: moderateScale(18),
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: moderateScale(2),
  },
  outContainer: {
    backgroundColor: "#FFF",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: verticalScale(50),
  },
  imgStyle: {
    height: verticalScale(90),
    width: horizontalScale(90),
    marginTop: verticalScale(40),
  },
  arrowStyle: {
    marginTop: verticalScale(40),
    alignSelf: "flex-start",
    marginLeft: verticalScale(40),
  },
  InContainer: {
    // borderTopRightRadius: moderateScale(55),
    // borderTopLeftRadius: moderateScale(55),
    backgroundColor: "#fff",
    width: "100%",
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: horizontalScale(30),
    paddingTop: verticalScale(20),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    minHeight: verticalScale(300),
  },
  submitBtn: {
    backgroundColor: "rgba(60,152,189,1)",
    width: "100%",
    marginTop: verticalScale(30),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  submitText: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    color: "white",
  },
  top: {
    alignItems: "center",
    // backgroundColor: "lightgreen",
    marginTop: verticalScale(-420),
    paddingBottom: verticalScale(90),
  },
});

export default SignUpVerification;
