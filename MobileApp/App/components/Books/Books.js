import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
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
import { useTranslation } from "react-i18next";

const Books = () => {
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
        <View style={style.books}>
          <CustomText style={style.BooksText}>
            {t("Books.2")}  {route.params.grade}{" "}
          </CustomText>
        </View>
      </View>
      <View style={style.middle}>
        <SearchBar />
      </View>

      <View style={{ marginTop: 60, paddingBottom: 20 }}>
        <FlatList
          // key={Array.array.id}
          contentContainerStyle={style.scrolling}
          data={route.params.subjects}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={style.bookItem}
                onPress={() => {
                  if (item.parts[0].lessons === undefined) {
                    return navigation.navigate("Lessons", {
                      lessons: item.parts,
                      title: (t("Books.1")) + item.label,
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
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    // alignItems: "center",
    // alignItems: "center",
  },
  top: {
    height: 140,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginBottom: 0,
  },
  arrowStyle: {
    marginRight: "85%",
  },
  books: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    width: "87%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    marginTop: 10,
  },
  BooksText: {
    color: "#fff",
    fontSize: 20,
    // fontWeight: "bold",
  },

  middle: {
    marginTop: 0,
    height: "5%",
    alignItems: "center",
    // padding: 20,
    justifyContent: "center",
    position: "absolute",
    top: 160,
    zIndex: 100,
    width: "100%",
  },
  bookItem: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    marginVertical: 5,
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: "80%",
    borderRadius: 30,
    height: 150,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  bootItemText: {
    color: "#fff",
    fontSize: 22,
    // fontWeight: "bold",
    width: 200,
    // marginLeft: 20,
  },
  scrolling: {
    // width: "100%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    // width: "100%",
    paddingBottom: 150,
  },
});
export default Books;
