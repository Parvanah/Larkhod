import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import whiteLogo from "../../assets/White_PNG_Format.png";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import styles from "./FirstPaage.style";
import logo from "../../assets/White_PNG_Format_z.png";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const options = [
  { label: "Pashto", value: "pa" },
  { label: "Persian", value: "pe" },
];

export default function FirstPage(props) {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const { backendError, setBackendError } = useContext(AuthContext);
  const handleChangePersion = () => {
    i18n.changeLanguage("pe");
    setBackendError("");
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
        <View>
          <Image source={logo} style={styles.imgStyle} />
        </View>
        <View style={styles.btnWrapper}>
          <Pressable style={styles.btn} onPress={handleChangePersion}>
            <CustomText style={styles.btnText}>زبان دری</CustomText>
          </Pressable>
          <Pressable
            style={styles.btn}
            // options={options}
            onPress={() => {
              setBackendError("");
              navigation.navigate("SignUp");
              i18n.changeLanguage("pa");
            }}
          >
            <CustomText style={styles.btnText}>پښتو ژبه</CustomText>
          </Pressable>
        </View>
        <View style={styles.textWrapper}>
          <CustomText style={styles.text}>به لارښود خوش آمدید</CustomText>
          <CustomText style={styles.text}>لارښود ته ښه راغلاست</CustomText>
        </View>
      </ScrollView>
    </View>
  );
}
