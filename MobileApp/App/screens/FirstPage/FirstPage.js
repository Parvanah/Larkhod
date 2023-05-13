import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  Button,
  Pressable,
} from "react-native";
import styles from "./FirstPaage.style";
import logo from "../../assets/White_PNG_Format_z.png";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";

const options = [
  {label: "Pashto", value: "pa"},
  {label: "Persian", value: "pe"},
];

export default function FirstPage() {
  const {t,i18n}= useTranslation(); 
  const navigation = useNavigation();
  return (

    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.imgStyle} />
      <View style={styles.btnWrapper}>
        <Pressable
             style={styles.btn}
             options={options}
             onPress={() => {navigation.navigate("SignUp")
              i18n.changeLanguage("pe");
             }
           }
        >
          <CustomText style={styles.btnText}>زبان دری</CustomText>
        </Pressable>
        <Pressable
          style={styles.btn}
          options={options}
          onPress={() => {navigation.navigate("SignUp")
           i18n.changeLanguage("pa");
          }
        }
        >
          <CustomText style={styles.btnText}>پښتو ژبه</CustomText>
        </Pressable>
      </View>
      <View style={styles.textWrapper}>
        <CustomText style={styles.text}>به لارښود خوش آمدید</CustomText>
        <CustomText style={styles.text}>لارښود ته ښه راغلاست</CustomText>
      </View>
    </SafeAreaView>
  );
}
