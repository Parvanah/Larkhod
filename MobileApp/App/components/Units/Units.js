import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import arrow from "../../assets/Group_158.png";
import Logo from "../../assets/PNG_Format_e.png";
import unitIcon from "../../assets/Group_161.png";
import SearchBar from "../../screens/SearchBar";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import styleSection from "../Sections/Section.Style";
import CustomText from "../../CustomText";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Units = () => {
  const navigation = useNavigation();
  const route = useRoute();
  var [inputSearch, setInputSearch] = useState("");
  const { t, i18n } = useTranslation();
  return (
    <View style={style.container}>
      <View style={style.top}>
        <TouchableOpacity
          style={style.arrowStyle}
          onPress={() => navigation.goBack()}
        >
          <Image source={arrow} />
        </TouchableOpacity>
        <Image source={Logo} />
        <View style={style.Units}>
          <CustomText style={style.UnitsText}>
            {t("Sections.lang") == "Dari"
              ? `فصل های مضمون ${route.params.subject}`
              : route.params.subject + t("Units.1")}
          </CustomText>
        </View>
      </View>
      <View
        style={{
          marginTop: verticalScale(20),
          height: "5%",
          backgroundColo: "red",
          paddingVertical: verticalScale(20),
          paddingHorizontal: horizontalScale(20),
          justifyContent: "center",
          alignItems: "center",
          width: "120%",
        }}
      >
        <SearchBar setInputSearch={(value) => setInputSearch(value)} />
      </View>
      <FlatList
        data={route.params.units}
        numColumns={2}
        contentContainerStyle={style.scrolling}
        renderItem={({ item }) => {
          if (item.label.includes(inputSearch)) {
            return (
              <TouchableOpacity
                style={style.unitItem}
                onPress={() =>
                  navigation.navigate("Lessons", {
                    lessons: item.lessons,
                    title: t("Units.2") + item.label,
                    params: {
                      id: item.id,
                      name: item.name,
                    },
                  })
                }
              >
                <Image source={unitIcon} style={{ position: "relative" }} />
                <CustomText style={style.unitTitle}>{item.label}</CustomText>
              </TouchableOpacity>
            );
          } else if (inputSearch === "") {
            return (
              <TouchableOpacity
                style={style.unitItem}
                onPress={() =>
                  navigation.navigate("Lessons", {
                    lessons: item.lessons,
                    title: "فصل " + item.label,
                    params: {
                      id: item.id,
                      name: item.name,
                    },
                  })
                }
              >
                <Image source={unitIcon} style={{ position: "relative" }} />
                <CustomText style={style.unitTitle}>{item.label}</CustomText>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  top: {
    height: verticalScale(200),
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    marginBottom: verticalScale(-20),
    position: "relative",
  },
  arrowStyle: {
    marginRight: "85%",
  },

  Units: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(30),
    marginTop: verticalScale(20),
  },
  UnitsText: {
    color: "#fff",
    fontSize: moderateScale(15),
  },
  middle: {
    marginTop: verticalScale(0),
    height: "5%",
    backgroundColo: "red",
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  scrolling: {
    // width: "100%",
    marginTop: verticalScale(10),
    alignItems: "center",
    marginBottom: verticalScale(5),
  },
  twoUnit: {
    flexDirection: "row-reverse",
  },
  unitItem: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
    // paddingVertical: verticalScale(35),
    // paddingHorizontal: horizontalScale(35),
    borderRadius: moderateScale(25),
    width: horizontalScale(150),
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(230),
  },
  unitTitle: {
    color: "#fff",
    fontSize: moderateScale(12),

    width: horizontalScale(90),
    textAlign: "center",
  },
});

export default Units;
