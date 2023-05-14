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
import Logo from "../../assets/logo.png";
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
const EnterCode = () => {
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
      <View style={styles.textView} >
        <CustomText style={styles.text}> {t("EnterCode.1")}  </CustomText>
         {/* <CustomText style={styles.text}>  {t("EnterCode.2")} </CustomText>
        <CustomText style={styles.text}>   {t("EnterCode.3")}    </CustomText> */}
        <CustomText style={styles.text1}>  {t("EnterCode.2")} </CustomText> 
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
        <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate("NewPassword")}>
          <CustomText style={styles.submitText} > {t("EnterCode.3")} </CustomText>
        </TouchableOpacity>
        <Image source={Logo} style={styles.imgStyle} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    textAlign:"right"
},
  text1:{
  fontSize: 16,
  color: "#fff",
  paddingTop: 10,
  textAlign:"right"
},
textView:{
 justifyContent: "flex-end",
 alignItems: "flex-end",
 marginVertical: 40,
 width: "80%",
 marginBottom: 20,
},
  codeFieldRoot: {
    marginTop: 50,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
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
    padding: 10,
    minHeight: 300
  },
  submitBtn: {
    backgroundColor: "rgba(60,152,189,1)",
    width: "100%",
    marginTop: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  submitText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  }
});

export default EnterCode;