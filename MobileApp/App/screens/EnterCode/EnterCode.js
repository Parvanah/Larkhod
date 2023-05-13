import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
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
const CELL_COUNT = 6;
const EnterCode = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.outContainer}>
      <TouchableOpacity
        style={styles.arrowStyle}
        onPress={() => navigation.navigate("SignUp")}>
        <Image source={arrow} />
      </TouchableOpacity>
      <View style={styles.textView} >
        <CustomText style={styles.text}> ما یک کد شش  </CustomText>
        <CustomText style={styles.text}> رقمی را به ایمیل   </CustomText>
        <CustomText style={styles.text}>  شما ارسال کردیم   </CustomText>
        <CustomText style={styles.text1}>  لطفا کد را اینجا وارد نمایید </CustomText>
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
          <CustomText style={styles.submitText} > تایید کردن</CustomText>
        </TouchableOpacity>
        <Image source={Logo} style={styles.imgStyle} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold"
},
  text1:{
  fontSize: 16,
  color: "#fff",
  paddingTop: 10
},
textView:{
 justifyContent: "flex-end",
 alignItems: "flex-end",
 marginVertical: 40
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