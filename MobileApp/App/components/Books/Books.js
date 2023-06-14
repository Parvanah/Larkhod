import React from "react";
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
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
import { StyleSheet } from "react-native";
import Logo from "../../assets/PNG_Format_e.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import arrow from "../../assets/Group_158.png";
import SearchBar from "../../screens/SearchBar";
import photo1 from "../../assets/Group_133.png";
import photo2 from "../../assets/Group_143_em.png";
import photo3 from "../../assets/Group_153.png";
import middleStyle from "../Sections/Section.Style";
import CustomText from "../../CustomText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";

const Books = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { t, i18n } = useTranslation();
  var [inputSearch, setInputSearch] = useState("");

  return (
    <View style={style.container}>
      <View style={style.top}>
        <TouchableOpacity
          style={style.arrowStyle}
          onPress={() => navigation.goBack()}
        >
          <Svg
            data-name="Group 160"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={10}
            viewBox="0 0 16 10"
            {...props}
          >
            <Defs>
              <ClipPath id="a">
                <Path
                  data-name="Rectangle 85"
                  fill="#1054a2"
                  d="M0 0H16V10H0z"
                />
              </ClipPath>
            </Defs>
            <G data-name="Group 158" clipPath="url(#a)">
              <Path
                data-name="Path 433"
                d="M3.247 6l2.48 2.294a.99.99 0 010 1.414 1.023 1.023 0 01-1.432 0L.445 6.059A1.465 1.465 0 010 5a1.483 1.483 0 01.444-1.06L4.294.293a1.025 1.025 0 011.434 0 .992.992 0 010 1.414L3.248 4H15a1 1 0 010 2H3.247z"
                fill="#1054a2"
                fillRule="evenodd"
              />
            </G>
          </Svg>
        </TouchableOpacity>
        <Image source={Logo} style={style.logo} />
        <View style={style.books}>
          <CustomText style={style.BooksText}>
            {t("Books.2")}
            {route.params.grade}
          </CustomText>
        </View>
      </View>
      <View style={style.middle}>
        <SearchBar setInputSearch={(value) => setInputSearch(value)} />
      </View>

      <FlatList
        // key={Array.array.id}

        contentContainerStyle={style.scrolling}
        data={route.params.subjects}
        renderItem={({ item }) => {
          if (inputSearch == "") {
            return (
              <TouchableOpacity
                style={style.bookItem}
                onPress={() => {
                  if (item.parts[0].lessons === undefined) {
                    return navigation.navigate("Lessons", {
                      lessons: item.parts,
                      title: t("Books.1") + item.label,
                      params: {
                        id: item.id,
                        name: item.name,
                      },
                    });
                  } else {
                    navigation.navigate("Units", {
                      units: item.parts,
                      subject: item.label,
                      params: {
                        id: item.id,
                        name: item.name,
                      },
                    });
                  }
                }}
              >
                <Image source={photo1} />
                <CustomText style={style.bootItemText}>{item.label}</CustomText>
              </TouchableOpacity>
            );
          } else if (item.label.includes(inputSearch)) {
            return (
              <TouchableOpacity
                style={style.bookItem}
                onPress={() => {
                  if (item.parts[0].lessons === undefined) {
                    return navigation.navigate("Lessons", {
                      lessons: item.parts,
                      title: t("Books.1") + item.label,
                      params: {
                        id: item.id,
                        name: item.name,
                      },
                    });
                  } else {
                    navigation.navigate("Units", {
                      units: item.parts,
                      subject: item.label,
                      params: {
                        id: item.id,
                        name: item.name,
                      },
                    });
                  }
                }}
              >
                <Image source={photo1} />
                <CustomText style={style.bootItemText}>{item.label}</CustomText>
              </TouchableOpacity>
            );
          }
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    // alignItems: "center",
    width: "100%",
  },
  top: {
    height: verticalScale(190),
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    marginBottom: verticalScale(5),
  },
  logo: {
    width: 90,
    height: 80,
    marginBottom: verticalScale(10),
  },
  arrowStyle: {
    marginRight: "85%",
    marginTop: verticalScale(10),
  },
  arrow: {
    width: horizontalScale(35),
    height: verticalScale(15),
  },
  books: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    width: "95%",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(9),
    borderRadius: moderateScale(50),
    alignItems: "center",
    marginBottom: verticalScale(-10),
  },
  BooksText: {
    color: "#fff",
    fontSize: moderateScale(18),
    // fontWeight: "bold",
  },

  middle: {
    marginTop: verticalScale(0),
    // height: "5%",
    alignItems: "center",
    // marginHorizontal: horizontalScale(10),
    justifyContent: "center",
    // position: "absolute",
    // top: verticalScale(200),
    zIndex: 100,
    width: "100%",
    marginBottom: verticalScale(10),
  },
  FlatListStyle: {
    width: "100%",
    marginVertical: verticalScale(0),
    paddingBottom: verticalScale(20),

    // flex: 1,
    alignItems: "center",
  },
  bookItem: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    marginVertical: verticalScale(5),
    paddingVertical: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
    width: "60%",

    borderRadius: moderateScale(30),
    height: verticalScale(180),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bootItemText: {
    color: "#fff",
    fontSize: moderateScale(22),
    // fontWeight: "bold",
    width: horizontalScale(200),
    textAlign: "right",
    // marginLeft: 20,
  },
  scrolling: {
    width: "80%",
    marginTop: verticalScale(0),
    // alignItems: "center",
    // justifyContent: "center",
    // marginBottom: 5,
    // // width: "100%",
    paddingBottom: verticalScale(30),
    width: "100%",
    marginVertical: verticalScale(0),
    // paddingBottom: verticalScale(20),
    // backgroundColor: "red",
    // flex: 1,
    alignItems: "center",
  },
});
export default Books;
