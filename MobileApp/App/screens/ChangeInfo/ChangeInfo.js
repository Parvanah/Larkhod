import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/White_PNG_Format_z.png";
import telegram from "../../assets/tele.png";
import user from "../../assets/user.png";
import arrow from "../../assets/Group_158.png";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../../context/AuthContext";

const ChangeInfo = (props) => {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [age, setAge] = useState(null);
  const [grade, setGrade] = useState(null);

  const { isLoading, changeInfo } = useContext(AuthContext);

  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const onSubmit = () => {
    changeInfo(firstName);
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.arrowStyle}
          onPress={() => navigation.goBack()}
        >
          <Image source={arrow} />
        </TouchableOpacity>
        <View style={styles.lineWrapper}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={"100%"}
            height={verticalScale(127.471)}
            preserveAspectRatio="none"
            viewBox="0 0 408.929 127.471"
            {...props}
          >
            <Path
              data-name="Path 662"
              d="M408.812 126.985c-18.06-4.309-38.008-22.816-49.193-34.167-12.025-12.206-21.293-27.758-22.55-44.641-.551-7.409.568-15.21 4.857-21.35s12.226-10.188 19.648-8.516c5.651 1.274 10.133 5.51 13.443 10.158 4.625 6.5 7.586 14.478 6.426 22.306-2.163 14.609-18.439 24.194-33.565 23.749s-28.892-8.508-40.791-17.629c-20.532-15.737-37.748-32.3-62.285-42.106C220.967 5.265 195.122.831 169.422.533 135.53.14 99.659 2.78 67.197 14.22 34.439 25.77-21.369 61.53 9.865 101.033c17.7 22.387 50.934 26.223 76.185 15.036 6.52-2.888 11.442-7.293 16.316-12.011"
              fill="none"
              stroke="#3c98bd"
              strokeMiterlimit={10}
              strokeWidth={1}
              strokeDasharray="4.026 4.026"
            />
          </Svg>
          <Image source={telegram} style={styles.telegram} />
        </View>
        <View style={styles.imageWrapper}>
          <Image source={user} style={styles.img} />
        </View>
        <TouchableOpacity style={styles.textUserWapper}>
          <CustomText style={styles.usertext}>{t("ChangeInfo.1")}</CustomText>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.svgWrapper}>
        <View style={styles.form}>
          <Spinner visible={isLoading} />
          <TextInput
            name="firstName"
            placeholder={t("ChangeInfo.2")}
            style={styles.input}
            onChangeText={(value) => setfirstName(value)}
          />
          <TextInput
            name="lastName"
            placeholder={t("ChangeInfo.3")}
            style={styles.input}
          />
          <TextInput
            name="age"
            placeholder={t("ChangeInfo.4")}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            name="garde"
            placeholder={t("ChangeInfo.5")}
            keyboardType="numeric"
            style={styles.input}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={onSubmit}>
            {/* onPress={()=> {changeInfo(firstName, lastName, age, grade)}} > */}
            <CustomText style={styles.submitText}>
              {" "}
              {t("ChangeInfo.6")}{" "}
            </CustomText>
          </TouchableOpacity>
        </View>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={verticalScale(650.502)}
          preserveAspectRatio="none"
          viewBox="0 0 360 484.502"
          {...props}
        >
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
          <Path
            data-name="Path 501"
            d="M396.137 534.892V122.013L378.6 97l-20.719-29.553a43.727 43.727 0 00-3.08-3.906 31.312 31.312 0 00-1.349-1.452A38.047 38.047 0 00333.2 51.024a33.919 33.919 0 00-6.6-.634H105.669c-12.211 0-23.73 6.279-31.276 17.057l-8.256 11.78-1.258 1.779-28.742 41.007v412.879z"
            transform="translate(-36.137 -50.39)"
            fill="url(#a)"
          />
        </Svg>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: verticalScale(20),
    backgroundColor: "#FFF",
    width: "100%",
  },
  top: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    // height: verticalScale(170),
    marginBottom: verticalScale(10),
    // backgroundColor: "green",
  },
  lineWrapper: {
    width: "100%",
    height: verticalScale(30),
  },
  telegram: {
    marginLeft: "20%",
    marginTop: verticalScale(-60),
    borderRadius: moderateScale(40),
    zIndex: 0,
  },
  outContainer: {
    backgroundColor: "#fff",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: verticalScale(50),
    width: "100%",
  },
  InContainer: {
    // borderTopRightRadius: moderateScale(100),
    // borderTopLeftRadius: moderateScale(100),
    backgroundColor: "red",
    flex: 3,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: horizontalScale(35),
    paddingVertical: verticalScale(60),
    zIndex: 100,
    // marginTop: verticalScale(-300),
  },
  textUserWapper: {},
  usertext: {
    fontSize: moderateScale(14),
    color: "lightgray",
    marginHorizontal: horizontalScale(10),
  },
  img: {
    height: verticalScale(50),
    width: horizontalScale(50),
  },
  arrowStyle: {
    marginTop: verticalScale(20),
    alignSelf: "flex-start",
    marginLeft: horizontalScale(30),
  },
  form: {
    marginBottom: verticalScale(-650.502),
    // marginRight: 20,
    // backgroundColor: "pink",
    zIndex: 100,
    width: "90%",
    marginHorizontal: "10%",
    height: "100%",
    paddingHorizontal: horizontalScale(30),
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'sc',
    // alignItems: "flex-start",
    // marginTop: 50,
    paddingTop: verticalScale(40),
  },
  svgWrapper: {
    marginTop: verticalScale(0),
    // zIndex: 2,
    margin: 0,
    padding: 0,
    height: verticalScale(650),
    // width: "100%",
    // aspectRatio: 1,
    // flex: 1,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: "100%",
    height: verticalScale(40),
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "right",
    paddingTop: verticalScale(10),
  },
  submitBtn: {
    backgroundColor: "white",
    width: "100%",
    marginVertical: verticalScale(30),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(25),
  },
  submitText: {
    fontSize: moderateScale(15),
    color: "rgba(60,152,189,1)",
  },
  // border: {
  //   borderBottomColor: "#fff",
  //   borderBottomWidth: 2,
  // },
  imageWrapper: {
    backgroundColor: "#fff",
    height: verticalScale(100),
    width: horizontalScale(100),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(50),
    marginBottom: verticalScale(10),
    borderWidth: horizontalScale(2),
    borderColor: "gray",
  },
  errorText: {
    fontSize: moderateScale(15),
    color: "red",
    textAlign: "right",
  },
});
export default ChangeInfo;
{
  /* <View style={styles.form}>
  <TextInput name="firstName" placeholder=" تغییر نام " style={styles.input} />
  <TextInput name="lastName" placeholder=" تغییر تخلص " style={styles.input} />
  <TextInput
    name="age"
    placeholder="تغییر سن"
    keyboardType="numeric"
    style={styles.input}
  />
  <TextInput
    name="class"
    placeholder="تغییر صنف"
    keyboardType="numeric"
    style={styles.input}
  />
  <TouchableOpacity style={styles.submitBtn} onPress={onSubmit}>
    <CustomText style={styles.submitText}>ذخیره کردن </CustomText>
  </TouchableOpacity>
</View>; */
}
// form: { width: "100%" },
//   input: {
//     borderTopColor: "#fff",
//     borderTopWidth: 1,
//     width: "100%",
//     height: verticalScale(40),
//     flexDirection: "row-reverse",
//     justifyContent: "space-between",
//     alignItems: "center",
//     textAlign: "right",
//   },
//   submitBtn: {
//     backgroundColor: "white",
//     width: "100%",
//     marginVertical: verticalScale(30),
//     height: verticalScale(40),
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: moderateScale(25),
//   },
//   submitText: {
//     fontSize: moderateScale(15),

//     color: "rgba(60,152,189,1)",
//   },
