import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";

import arrow from "../../assets/Group_158.png";
import bookicon from "../../assets/Group_404.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import Svg, {
  Defs,
  ClipPath,
  Path,
  G,
  ForeignObject,
  Stop,
  LinearGradient,
} from "react-native-svg";
const Lessons = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  var [num, setNum] = useState(1);

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.arrowStyle}>
        <Svg
          data-name="Group 275"
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={10}
          viewBox="0 0 16 10"
          {...props}
          onPress={() => navigation.goBack()}
        >
          <Defs>
            <ClipPath id="a">
              <Path data-name="Rectangle 85" fill="#3c98bd" d="M0 0H16V10H0z" />
            </ClipPath>
          </Defs>
          <G data-name="Group 158" clipPath="url(#a)">
            <Path
              data-name="Path 433"
              d="M3.247 6l2.48 2.294a.99.99 0 010 1.414 1.023 1.023 0 01-1.432 0L.445 6.059A1.465 1.465 0 010 5a1.483 1.483 0 01.444-1.06L4.294.293a1.025 1.025 0 011.434 0 .992.992 0 010 1.414L3.248 4H15a1 1 0 010 2H3.247z"
              fill="#3c98bd"
              fillRule="evenodd"
            />
          </G>
        </Svg>
      </TouchableOpacity>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={170.069}
        viewBox="0 0 360 165.069"
        {...props}
      >
        <Path
          data-name="Path 2"
          d="M396.137 68.674v75.161L378.6 168.849 357.881 198.4a43.727 43.727 0 01-3.08 3.906c-.437.511-.893.982-1.349 1.452a38.047 38.047 0 01-20.252 11.067 33.919 33.919 0 01-6.6.634H105.669c-12.211 0-23.73-6.279-31.276-17.057l-8.256-11.78-1.258-1.779-28.742-41.007V68.674c0-9.04 5.96-16.607 13.67-18.039a14.347 14.347 0 012.661-.245h327.357c8.985 0 16.312 8.222 16.312 18.284z"
          transform="translate(-36.137 -50.39)"
          fill="#fff"
        />

        <View style={style.top}>
          <TouchableOpacity>
            <Image source={bookicon} />
          </TouchableOpacity>
          <Text style={style.topTitle}>درس های {route.params.title} </Text>
        </View>
      </Svg>
      <FlatList
        contentContainerStyle={style.bottom}
        data={route.params.lessons}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                style={style.lessonBtn}
                onPress={() =>
                  navigation.navigate("BookPages", {
                    lessonTitle: item.label,
                    params: {
                      id: item.id,
                      name: item.name,
                    },
                  })
                }
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
    backgroundColor: "#3C98BD",
  },
  top: {
    // backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    // paddingHorizontal: 20,
    // height: 200,
    // borderBottomLeftRadius: 90,
    // borderBottomRightRadius: 90,
    // width: "100%",
  },
  arrowStyle: {
    marginRight: 200,
    marginLeft: -40,
    marginTop: 10,
    marginBottom: -50,

    zIndex: 100,
    padding: 10,
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
