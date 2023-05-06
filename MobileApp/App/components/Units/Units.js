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

const Units = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={style.top}>
        <TouchableOpacity
          style={style.arrowStyle}
          onPress={() => navigation.navigate("Books")}
        >
          <Image source={arrow} />
        </TouchableOpacity>
        <Image source={Logo} />
        <View style={style.Units}>
          <Text style={style.UnitsText}>دورس کتاب دری</Text>
        </View>
      </View>
      <View style={style.middle}>
        <SearchBar />
      </View>
      <ScrollView contentContainerStyle={style.scrolling}>
        <View style={style.twoUnit}>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} style={{ position: "relative" }} />
            <Text style={style.unitTitle}>درس اول</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس دوم</Text>
          </TouchableOpacity>
        </View>
        <View style={style.twoUnit}>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس سوم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس چهارم</Text>
          </TouchableOpacity>
        </View>
        <View style={style.twoUnit}>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس پنجم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس ششم</Text>
          </TouchableOpacity>
        </View>
        <View style={style.twoUnit}>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس هفتم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس هشتم</Text>
          </TouchableOpacity>
        </View>
        <View style={style.twoUnit}>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس نهم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس دهم</Text>
          </TouchableOpacity>
        </View>
        <View style={style.twoUnit}>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس یازدهم</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.unitItem}>
            <Image source={unitIcon} />
            <Text style={style.unitTitle}>درس دوازدهم</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  top: {
    height: "25%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginBottom: 0,
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
  },
  UnitsText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  middle: {
    marginTop: 0,
    height: "5%",

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
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  unitTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    width: 90,
    textAlign: "center",
  },
});

export default Units;
