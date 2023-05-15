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
import arrow from "../../assets/Group_158.png";
import Logo from "../../assets/PNG_Format_e.png";
import unitIcon from "../../assets/Group_161.png";
import SearchBar from "../../screens/SearchBar";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import styleSection from "../Sections/Section.Style";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
const Units = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {t, i18n}= useTranslation(); 
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
             {t("Units.1")}  {route.params.subject}
          </CustomText>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          height: "5%",
          backgroundColo: "red",
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
          width: "120%",
        }}
      >
        <SearchBar />
      </View>
      <FlatList
        data={route.params.units}
        numColumns={2}
        contentContainerStyle={style.scrolling}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={style.unitItem}
              onPress={() =>
                navigation.navigate("Lessons", {
                  lessons: item.lessons,
                  title: (t("Units.2")) + item.label,
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
    height: 200,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginBottom: -20,
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
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
  },
  UnitsText: {
    color: "#fff",
    fontSize: 20,
  },
  middle: {
    marginTop: 0,
    height: "5%",
    backgroundColo: "red",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  scrolling: {
    // width: "100%",
    marginTop: 10,
    alignItems: "center",
    marginBottom: 5,
  },
  twoUnit: {
    flexDirection: "row-reverse",
  },
  unitItem: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    margin: 10,
    padding: 35,
    borderRadius: 25,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  unitTitle: {
    color: "#fff",
    fontSize: 12,

    width: 90,
    textAlign: "center",
  },
});

export default Units;
