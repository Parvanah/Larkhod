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
import logo from "../../assets/White_PNG_Format_z.png";
import arrow from "../../assets/Group_158_a.png";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";

const CELL_COUNT = 6;
const SignUpVerification = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.outContainer}>
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
          onPress={() => navigation.navigate("Information")}
        >
          <CustomText style={styles.submitText}>
            {t("SignUpVerification.5")}{" "}
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText style={styles.title}>
            {" "}
            {t("SignUpVerification.6")}{" "}
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    fontSize: moderateScale(24),
    color: "#fff",
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(10),
    marginTop: verticalScale(20),
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
    backgroundColor: "rgba(60,152,189,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: verticalScale(50),
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
    borderTopRightRadius: moderateScale(55),
    borderTopLeftRadius: moderateScale(55),
    backgroundColor: "#fff",
    width: "100%",
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: horizontalScale(30),
    paddingTop: verticalScale(70),
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
});

export default SignUpVerification;
