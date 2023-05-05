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
  import logo from "../../assets/White_PNG_Format_z.png";
  import arrow from "../../assets/Group_158_a.png";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 6;
const SignUpVerification = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();
     return (
        <SafeAreaView style={styles.outContainer}>
          <TouchableOpacity
              style={styles.arrowStyle}
              onPress={() => navigation.navigate("SignUp")}
              >
              <Image source={arrow} />
          </TouchableOpacity>
            <Image source={logo} style={styles.imgStyle} />
        <View style={styles.InContainer}>
             <Text style={styles.title}>کود شش رقمی خود را وارد کنید</Text>
             <CodeField
             ref={ref}
             {...props}
             value={value}
             onChangeText={setValue}
             cellCount={CELL_COUNT}
             rootStyle={styles.codeFieldRoot}
             keyboardType="number-pad"
             textContentType="oneTimeCode"
             renderCell={({index, symbol, isFocused}) => (
        <View
             onLayout={getCellOnLayoutHandler(index)}
             key={index}
             style={[styles.cellRoot, isFocused && styles.focusCell]}>
             <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
             </Text>
        </View>
         )}
        />
          <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate("Information")}>
            <Text style={styles.submitText}>تایید</Text>
          </TouchableOpacity> 
          </View>
             </SafeAreaView>
            );
  };
const styles = StyleSheet.create({
  title: {
  textAlign: 'center', 
  fontSize: 16,
  color: "rgba(60,152,189,1)",
},
codeFieldRoot: {
  marginTop: 40,
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
    height: 90,
    width: 90,
    marginTop:  10,
    marginBottom: 60
  },
  arrowStyle: {
    marginTop: "10%",
    alignSelf: "flex-start",
    marginLeft: "10%"
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
    paddingVertical: "15%",  
    padding: 10,
     minHeight: 300
  },
  submitBtn: {
    backgroundColor: "rgba(60,152,189,1)",
    width: "100%",
    marginVertical: 40,
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

export default SignUpVerification;