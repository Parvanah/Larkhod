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
import logo from "../../assets/White_PNG_Format_z.png";
import arrow from "../../assets/Group_158_a.png";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";

const CELL_COUNT = 6;
const SignUpVerification = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();
  const {t, i18n}= useTranslation(); 
  return (
    <ScrollView contentContainerStyle={styles.outContainer}>
      <TouchableOpacity
        style={styles.arrowStyle}
        onPress={() => navigation.navigate("SignUp")}>
        <Image source={arrow} />
      </TouchableOpacity>
      <Image source={logo} style={styles.imgStyle} />
      <View style={styles.textView} >
        {/* <CustomText style={styles.text}> {t("SignUpVerification.1")} </CustomText>
        <CustomText style={styles.text}> {t("SignUpVerification.2")} </CustomText>
        <CustomText style={styles.text}> {t("SignUpVerification.3")} </CustomText> */}
        <CustomText style={styles.text}> {t("SignUpVerification.3")}  </CustomText>
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
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <CustomText style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </CustomText>
            </View>
          )}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate("Information")}>
          <CustomText style={styles.submitText}>{t("SignUpVerification.1")} </CustomText>
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText style={styles.title}> {t("SignUpVerification.2")} </CustomText>
        </TouchableOpacity>
      </View>
      </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: '#ccc',
    paddingTop: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: "#fff",
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
    width: "70=%"
  },
  codeFieldRoot: {
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },
  cellText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  outContainer: {
    backgroundColor: "rgba(60,152,189,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  },
  imgStyle: {
    height: 90,
    width: 90,
    marginTop: 40
  },
  arrowStyle: {
    marginTop: 40,
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  InContainer: {
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
    backgroundColor: "#fff",
    width: "100%",
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 70,
    padding: 10,
    minHeight: 300
  },
  submitBtn: {
    backgroundColor: "rgba(60,152,189,1)",
    width: "100%",
    marginTop: 30,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  submitText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});

export default SignUpVerification;