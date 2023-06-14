import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import CustomText from "../../CustomText";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import arrow from "../../assets/Group_158.png";
import bookicon from "../../assets/Group_404.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import Svg, {
  Defs,
  ClipPath,
  Path,
  G,
  ForeignObject,
  Stop,
  LinearGradient,
} from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

const Lessons = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  var [num, setNum] = useState(1);
  const { t, i18n } = useTranslation();
  const path = "../../assets";
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.arrowStyle}>
        <Svg
          data-name="Group 275"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={10}
          viewBox="0 0 16 10"
          {...props}
        >
          <Defs>
            <ClipPath id="a">
              <Path data-name="Rectangle 85" fill="#3c98bd" d="M0 0H16V10H0z" />
            </ClipPath>
          </Defs>
          <G data-name="Group 158" clipPath="url(#a)">
            <Path
              data-name="Path 433"
              d="M3.247 6l2.48 2.294a.99.99 0 010 1.414 1.023 1.023 0 01-1.432 0L.445 6.059A1.465 1.465 0 010 5a1.483 1.483 0 01.444-1.06L4.294.293a1.025 1.025 0 011.434 0 .992.992 0 010 1.414L3.248 4H15a1 1 0 010 2H3.247z"
              fill="#3c98bd"
              fillRule="evenodd"
            />
          </G>
        </Svg>
      </TouchableOpacity>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={verticalScale(170.069)}
        preserveAspectRatio="none"
        viewBox="0 0 360 165.069"
        {...props}
      >
        <Path
          data-name="Path 2"
          d="M396.137 68.674v75.161L378.6 168.849 357.881 198.4a43.727 43.727 0 01-3.08 3.906c-.437.511-.893.982-1.349 1.452a38.047 38.047 0 01-20.252 11.067 33.919 33.919 0 01-6.6.634H105.669c-12.211 0-23.73-6.279-31.276-17.057l-8.256-11.78-1.258-1.779-28.742-41.007V68.674c0-9.04 5.96-16.607 13.67-18.039a14.347 14.347 0 012.661-.245h327.357c8.985 0 16.312 8.222 16.312 18.284z"
          transform="translate(-36.137 -50.39)"
          fill="#fff"
        />

        <View style={style.top}>
          <TouchableOpacity>
            <Image source={bookicon} />
          </TouchableOpacity>
          <CustomText style={style.topTitle}>
            {t("Lesson.1")}
            {route.params.title}
          </CustomText>
        </View>
      </Svg>
      <View style={style.pdfWrapper}>
        <TouchableOpacity style={style.pdf} activeOpacity={0.5}>
          <Image source={require(path + "/Group_408.png")} />
          <CustomText style={style.pdfText}>{t("Lesson.2")}</CustomText>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: verticalScale(245),
        }}
      >
        <FlatList
          contentContainerStyle={style.bottom}
          data={route.params.lessons}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={style.lessonBtn}
                onPress={() =>
                  navigation.navigate("BookPages", {
                    lessonTitle: item.label,
                    params: {
                      id: item.id,
                      name: item.name,
                    },
                  })
                }
              >
                <CustomText style={style.lessonBtnText}>
                  0{index + 1}
                </CustomText>
                <CustomText style={style.lessonBtnText}>
                  {item.label}
                </CustomText>
                {/* {setNum(num + 1)} */}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3C98BD",
    alignItems: "center",
    width: "100%",
  },
  top: {
    // backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(30),
    // paddingHorizontal: 20,
    // height: 200,
    // borderBottomLeftRadius: 90,
    // borderBottomRightRadius: 90,
    // width: "100%",
  },
  arrowStyle: {
    marginRight: "60%",
    marginLeft: verticalScale(-100),
    marginTop: verticalScale(0),
    marginBottom: verticalScale(-40),
    paddingTop: verticalScale(20),
    zIndex: 100,
    // paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    // backgroundColor: "red",
  },
  topTitle: {
    color: "rgba(60,152,189,1)",
    fontSize: moderateScale(15),
    marginTop: verticalScale(10),
    textAlign: "center",
    width: horizontalScale(300),
  },
  bottom: {
    paddingTop: verticalScale(0),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    width: "60%",

    // marginHorizontal: "20%",
  },
  lessonBtn: {
    backgroundColor: "#fff",
    width: "80%",
    marginVertical: verticalScale(3),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(40),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lessonBtnText: {
    color: "rgba(60,152,189,1)",
    fontSize: moderateScale(17),
    width: "100%",
  },
  pdfWrapper: {
    backgroundColor: "#FFF",
    width: "90%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: "40%",
    marginVertical: verticalScale(10),
    paddingVertical: verticalScale(10),
    // paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(50),
  },
  pdf: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    // marginRight: horizontalScale(10),
    height: verticalScale(43),
  },
  pdfText: {
    marginHorizontal: 10,
    fontSize: moderateScale(15),
    color: "rgba(60,152,189,1)",
  },
});
export default Lessons;
