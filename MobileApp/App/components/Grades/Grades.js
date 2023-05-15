import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";
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
const Grades = (props) => {
  const {t, i18n}= useTranslation();
  const route = useRoute();
  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate("ChangeInfo");
  };
  const Renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={{ width: "100%" }}
        onPress={() =>
          navigation.navigate("Books", {
            grade: item.grade,
            subjects: item.subjects,
            params: {
              id: item.id,
              name: item.name,
            },
          })
        }
      >
        <View style={style.grades}>
          <CustomText style={style.gradesText}>{item.grade}</CustomText>
          <Image source={item.img} style={{ margin: 0 }} />
        </View>
      </TouchableOpacity>
    );
  };
  var [inputSearch, setInputSearch] = useState("");
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.arrowStyle}
        onPress={() => navigation.navigate("Sections")}
      >
        <Image source={arrow} />
      </TouchableOpacity>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={162.314}
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
        <SearchBar />
      </View>

      <View style={style.bottom}>
        <View style={style.select}>
          <CustomText style={style.selectText}>
            {t("Grades.1")}
          </CustomText>
        </View>
        <FlatList
          contentContainerStyle={{
            width: "100%",
            marginVertical: 5,
            paddingBottom: 20,

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
    </View>
  );
};
const style = StyleSheet.create({
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
    marginTop: -120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: 20,

    color: "#fff",
    marginHorizontal: 20,
  },
  imageWrapper: {
    backgroundColor: "#fff",
    height: 70,
    width: 70,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 20,
    // marginTop: -20,
  },
  img: {
    marginTop: 8,
    height: 40,
    width: 40,
  },
  middle: {
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15%",
    position: "absolute",
    top: 165,
    // left: 20,
    zIndex: 100,
    width: "100%",
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    // height: "66%",
    // backgroundColor: "#fff",
    width: "100%",
    marginTop: 130,
    // position: "absolute",

    flex: 1,
  },
  select: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    width: "80%",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  selectText: {
    color: "#fff",
    fontSize: 20,
  },
  grades: {
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "rgba(212,228,232,1)",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    // flex: 1,
  },
  gradesText: {
    color: "rgba(60, 152, 189, 1)",
    fontSize: 20,
    marginLeft: 100,
    // marginRight: "7%",
    width: 100,
  },
  arrowStyle: {
    // marginBottom: "30%",

    marginRight: 200,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: -60,
    // backgroundColor: "red",
    zIndex: 100,
    padding: 10,
  },
});

export default Grades;
