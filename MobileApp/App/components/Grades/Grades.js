import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  ClipPath,
  G,
} from "react-native-svg";
import classLogo from "../../assets/Group_211_y.png";
import styleSection from "../Sections/Section.Style";
import SearchBar from "../../screens/SearchBar";
import { StyleSheet } from "react-native";
import user from "../../assets/user.png";
// import route.params.gradeimg.img from "../../assets/Group_211_y.png";
import arrow from "../../assets/Group_158_a.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import Styles from "../Sections/Section.Style";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";

const Grades = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  var [inputSearch, setInputSearch] = useState("");

  const { t, i18n } = useTranslation();
  const onSubmit = () => {
    navigation.navigate("ChangeInfo");
  };
  const Renderitem = ({ item }) => {
    if (inputSearch == "") {
      return (
        <TouchableOpacity
          key={item.id}
          style={{ width: "100%" }}
          onPress={() =>
            navigation.navigate("Books", {
              grade: item.label,
              subjects: item.subjects,
              params: {
                id: item.id,
                name: item.name,
              },
            })
          }
        >
          <View style={style.grades}>
            <CustomText style={style.gradesText}>{item.label}</CustomText>
            <Image source={classLogo} style={style.gradeLogo} />
          </View>
        </TouchableOpacity>
      );
    } else if (item.label.includes(inputSearch)) {
      return (
        <TouchableOpacity
          key={item.id}
          style={{ width: "100%" }}
          onPress={() =>
            navigation.navigate("Books", {
              grade: item.label,
              subjects: item.subjects,
              params: {
                id: item.id,
                name: item.name,
              },
            })
          }
        >
          <View style={style.grades}>
            <CustomText style={style.gradesText}>{item.label}</CustomText>
            <Image source={classLogo} style={style.gradeLogo} />
          </View>
        </TouchableOpacity>
      );
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <View style={style.arrow}>
        <Svg
          data-name="Group 197"
          xmlns="http://www.w3.org/2000/svg"
          width={horizontalScale(16)}
          height={verticalScale(15)}
          viewBox="0 0 16 10"
          {...props}
          onPress={() => navigation.goBack()}
        >
          <Defs>
            <ClipPath id="a">
              <Path data-name="Rectangle 85" fill="#fff" d="M0 0H16V10H0z" />
            </ClipPath>
          </Defs>
          <G data-name="Group 158" clipPath="url(#a)">
            <Path
              data-name="Path 433"
              d="M3.247 6l2.48 2.294a.99.99 0 010 1.414 1.023 1.023 0 01-1.432 0L.445 6.059A1.465 1.465 0 010 5a1.483 1.483 0 01.444-1.06L4.294.293a1.025 1.025 0 011.434 0 .992.992 0 010 1.414L3.248 4H15a1 1 0 010 2H3.247z"
              fill="#fff"
              fillRule="evenodd"
            />
          </G>
        </Svg>
      </View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={verticalScale(170.069)}
        preserveAspectRatio="none"
        viewBox="0 0 360 162.314"
        {...props}
      >
        <Defs>
          <LinearGradient
            id="a"
            x1={0.892}
            y1={-0.259}
            x2={0.152}
            y2={1.169}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#3c98bd" />
            <Stop offset={1} stopColor="#1054a2" />
          </LinearGradient>
        </Defs>
        <Path
          data-name="Path 598"
          d="M396.137 68.369v73.907l-17.533 24.6-20.723 29.06a43.114 43.114 0 01-3.08 3.841c-.437.5-.893.965-1.349 1.428a38.238 38.238 0 01-20.249 10.88 34.478 34.478 0 01-6.6.623H105.669c-12.211 0-23.73-6.174-31.276-16.772l-8.256-11.584-1.258-1.75-28.742-40.326V68.369c0-8.889 5.96-16.33 13.67-17.738a14.583 14.583 0 012.661-.241h327.357c8.985 0 16.312 8.085 16.312 17.979z"
          transform="translate(-36.137 -50.39)"
          fill="url(#a)"
        />
      </Svg>
      <View style={styleSection.top}>
        <CustomText style={style.userName}>Khatima Sajadi</CustomText>
        <TouchableOpacity style={style.imageWrapper} onPress={onSubmit}>
          <Image source={user} style={style.img} />
        </TouchableOpacity>
      </View>
      <View style={style.middle}>
        <SearchBar setInputSearch={(value) => setInputSearch(value)} />
      </View>

      <View style={style.bottom}>
        <View style={style.select}>
          <CustomText style={style.selectText}>{t("Grades.1")}</CustomText>
        </View>
        <FlatList
          contentContainerStyle={{
            width: "70%",
            marginVertical: verticalScale(0),
            paddingBottom: verticalScale(20),

            // flex: 1,
            alignItems: "center",
            // // justifyContent: "center",
            // paddingTop: 0,
          }}
          data={route.params.classes}
          renderItem={({ item }) => {
            return <Renderitem item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  arrow: {
    // backgroundColor: "red",
    marginBottom: verticalScale(-40),
    paddingTop: verticalScale(15),
    zIndex: 100,
    marginLeft: horizontalScale(20),
  },
  container: {
    // justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "#fff",
    flex: 1,
    // alignItems: "center",
    // width: "100%",
    // paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  top: {
    marginTop: verticalScale(-120),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: moderateScale(20),

    color: "#fff",
    marginHorizontal: 20,
  },
  imageWrapper: {
    backgroundColor: "#fff",
    height: verticalScale(60),
    width: verticalScale(60),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(50),
    marginHorizontal: horizontalScale(20),
    // marginTop: -20,
  },
  img: {
    // marginTop: verticalScale(8),
    height: verticalScale(30),
    width: horizontalScale(30),
  },
  middle: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: verticalScale(170),
    zIndex: 100,
    width: "100%",
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    // height: "66%",
    // backgroundColor: "#fff",
    width: "100%",
    marginTop: verticalScale(130),
    // position: "absolute",

    flex: 1,
  },
  select: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    width: "80%",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(50),
    alignItems: "center",
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  selectText: {
    color: "#fff",
    fontSize: moderateScale(20),
  },
  grades: {
    width: "85%",
    paddingHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(50),
    backgroundColor: "rgba(212,228,232,1)",
    marginVertical: verticalScale(5),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    // flex: 1,
  },
  gradesText: {
    color: "rgba(60, 152, 189, 1)",
    fontSize: moderateScale(20),
    // marginLeft: horizontalScale(100),
    // marginRight: "7%",
    width: horizontalScale(200),
    textAlign: "right",
  },
  gradeLogo: {
    width: horizontalScale(25),
    height: verticalScale(25),
  },
  arrowStyle: {
    // marginBottom: "30%",

    marginRight: horizontalScale(200),
    marginLeft: verticalScale(20),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(-60),
    // backgroundColor: "red",
    zIndex: 100,
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
  },
});

export default Grades;
