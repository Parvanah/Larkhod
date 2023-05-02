import React from "react";
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
const Grades = (props) => {
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
      <TouchableOpacity
        style={style.arrowStyle}
        onPress={() => navigation.navigate("Sections")}
      >
        <Image source={arrow} />
      </TouchableOpacity>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={360}
        height={162.314}
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
        <View style={styleSection.top}>
          <Text style={styleSection.userName}>Khatima Sajadi</Text>
          <View style={styleSection.imageWrapper}>
            <Image source={user} style={styleSection.img} />
          </View>
        </View>
      </Svg>

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
    // marginBottom: "30%",

    marginRight: 200,
    marginLeft: -40,
    marginTop: -5,
    marginBottom: -50,

    zIndex: 100,
    padding: 10,
  },
});

export default Grades;
