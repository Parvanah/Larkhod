import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import arrow from "../../assets/Group_158.png";
import bookicon from "../../assets/Group_404.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
const Lessons = () => {
  const navigation = useNavigation();
  const route = useRoute();
  var [num, setNum] = useState(1);

  return (
    <View style={style.container}>
      <View style={style.top}>
        <TouchableOpacity
          style={style.arrowStyle}
          onPress={() => navigation.goBack()}
        >
          <Image source={arrow} />
        </TouchableOpacity>
        <Image source={bookicon} />
        <Text style={style.topTitle}>درس های {route.params.title} </Text>
      </View>

      <FlatList
        contentContainerStyle={style.bottom}
        data={route.params.lessons}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                style={style.lessonBtn}
                onPress={() => navigation.navigate("BookPages")}
              >
                <Text style={style.lessonBtnText}>0{num}</Text>
                <Text style={style.lessonBtnText}>{item.label}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(60,152,189,1)",
  },
  top: {
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    height: 200,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,

    width: "100%",
  },
  arrowStyle: {
    marginRight: "85%",
  },
  topTitle: {
    color: "rgba(60,152,189,1)",
    fontSize: 25,
    marginTop: 10,
    textAlign: "center",
  },
  bottom: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  lessonBtn: {
    backgroundColor: "#fff",
    width: 300,
    marginVertical: 3,
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lessonBtnText: { color: "rgba(60,152,189,1)", fontSize: 17 },
});
export default Lessons;
