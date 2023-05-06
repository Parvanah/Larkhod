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

const Books = () => {
  const navigation = useNavigation();
  const route = useRoute();

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
          <Text style={style.BooksText}>کتاب های {route.params.grade} </Text>
        </View>
      </View>
      <View style={style.middle}>
        <SearchBar />
      </View>

      <FlatList
        // key={Array.array.id}
        contentContainerStyle={style.scrolling}
        data={route.params.subjects}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={style.bookItem}>
              <Image source={photo1} />
              <Text style={style.bootItemText}>{item.label}</Text>
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
    // alignItems: "center",
  },
  top: {
    height: "25%",
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
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
  },
  BooksText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  middle: {
    marginTop: 0,
    height: "5%",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  bookItem: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    marginVertical: 5,
    padding: 35,
    width: 300,
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bootItemText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    width: 130,
  },
  scrolling: {
    // width: "100%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    width: "100%",
  },
});
export default Books;
