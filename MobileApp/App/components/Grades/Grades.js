import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import classLogo from "../../assets/Group_211_y.png";
import styleSection from "../Sections/Section.Style";
import SearchBar from "../../screens/SearchBar";
import { StyleSheet } from "react-native";
import user from "../../assets/user.png";
// import route.params.gradeimg.img from "../../assets/Group_211_y.png";
import arrow from "../../assets/Group_158_a.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
const Grades = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const Renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={style.grades}
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
        <Text style={style.gradesText}>{item.grade}</Text>
        <Image source={item.img} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styleSection.container}>
      <View style={styleSection.top}>
        <TouchableOpacity
          style={style.arrowStyle}
          onPress={() => navigation.navigate("Sections")}
        >
          <Image source={arrow} />
        </TouchableOpacity>
        <Text style={styleSection.userName}>Khatima Sajadi</Text>
        <View style={styleSection.imageWrapper}>
          <Image source={user} style={styleSection.img} />
        </View>
      </View>
      <View style={styleSection.middle}>
        <SearchBar />
      </View>

      <View style={style.bottom}>
        <View style={style.select}>
          <Text style={style.selectText}>صنف تان را انتخاب کنید</Text>
        </View>
        <FlatList
          style={{ width: "90%" }}
          data={route.params.classes}
          renderItem={({ item }) => {
            return <Renderitem item={item} />;
          }}
        />
        {/* <TouchableOpacity
          style={style.grades}
          onPress={() => navigation.navigate()}
        >
          <Text style={style.gradesText}>{route.params.grade1}</Text>
          <Image source={route.params.gradeimg1.img} />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.grades}
          onPress={() => navigation.navigate()}
        >
          <Text style={style.gradesText}>{route.params.grade2}</Text>
          <Image source={route.params.gradeimg2.img} />
        </TouchableOpacity>
        <TouchableOpacity style={style.grades}>
          <Text style={style.gradesText}>{route.params.grade3}</Text>
          <Image source={route.params.gradeimg3.img} />
        </TouchableOpacity>
        <TouchableOpacity style={style.grades}>
          <Text style={style.gradesText}>{route.params.grade4}</Text>
          <Image source={route.params.gradeimg4.img} />
        </TouchableOpacity>
        <TouchableOpacity style={style.grades}>
          <Text style={style.gradesText}>{route.params.grade5}</Text>
          <Image source={route.params.gradeimg5.img} />
        </TouchableOpacity>
        <TouchableOpacity style={style.grades}>
          <Text style={style.gradesText}>{route.params.grade6}</Text>
          <Image source={route.params.gradeimg6.img} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  bottom: {
    // justifyContent: "center",
    alignItems: "center",
    height: "66%",
    backgroundColor: "#fff",
    width: "100%",
  },
  select: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    width: "85%",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  selectText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  grades: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "rgba(212,228,232,1)",
    marginVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  gradesText: {
    color: "rgba(60, 152, 189, 1)",
    fontSize: 20,
  },
  arrowStyle: {
    marginBottom: "30%",
  },
});

export default Grades;
