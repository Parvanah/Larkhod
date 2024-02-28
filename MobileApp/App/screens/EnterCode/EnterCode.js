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
  ScrollView,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/logo.png";
import arrow from "../../assets/Group_158_a.png";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
const CELL_COUNT = 6;
const EnterCode = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView contentContainerStyle={styles.outContainer}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={verticalScale(275.334)}
          preserveAspectRatio="none"
          viewBox="0 0 360 275.334"
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
              <Stop offset={1} stopColor="#0f53a1" />
            </LinearGradient>
          </Defs>
          <G data-name="Group 410">
            <Path
              data-name="Path 1077"
              d="M70 0h220c38.66 0 70 24.1 70 53.836v221.5H0v-221.5C0 24.1 31.34 0 70 0z"
              transform="translate(-132.517 160.426) rotate(180 246.258 57.454)"
              fill="url(#a)"
            />
          </G>
        </Svg>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.arrowStyle}
            onPress={() => navigation.goBack()}
          >
            <Image source={arrow} />
          </TouchableOpacity>
          <View style={styles.textView}>
            <CustomText style={styles.text}>
              {t("EnterCode.1")}
            </CustomText>
            <CustomText style={styles.text1}>
            {t("EnterCode.2")}
            </CustomText>
          </View>
        </View>
        <View style={styles.InContainer}>
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
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => navigation.navigate("NewPassword")}
          >
            <CustomText style={styles.submitText}>{t("EnterCode.3")}</CustomText>
          </TouchableOpacity>
          <Image source={Logo} style={styles.imgStyle} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  top: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(-280),
    marginBottom: verticalScale(10),
    // backgroundColor: "red",
  },
  text: {
    fontSize: moderateScale(28),
    color: "#fff",
    width: horizontalScale(200),
  },
  text1: {
    fontSize: moderateScale(16),
    color: "#fff",
    paddingTop: verticalScale(10),
  },
  textView: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginVertical: verticalScale(20),
  },
  codeFieldRoot: {
    marginTop: verticalScale(50),
    width: horizontalScale(300),
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: horizontalScale(40),
    height: horizontalScale(40),
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: moderateScale(40),
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: horizontalScale(2),
  },
  outContainer: {
    backgroundColor: "#FFF",

    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imgStyle: {
    marginTop: verticalScale(50),
    alignSelf: "center",
  },
  arrowStyle: {
    marginTop: verticalScale(40),
    alignSelf: "flex-start",
    marginLeft: horizontalScale(30),
    marginBottom: verticalScale(0),
  },
  InContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(0),
    paddingHorizontal: horizontalScale(10),
    minHeight: verticalScale(300),
  },
  submitBtn: {
    backgroundColor: "rgba(60,152,189,1)",
    width: "100%",
    marginTop: verticalScale(20),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(25),
  },
  submitText: {
    fontSize: verticalScale(15),
    fontWeight: "bold",
    color: "white",
  },
});

export default EnterCode;
