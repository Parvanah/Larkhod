import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  ClipPath,
  G,
  ForeignObject,
  Rect,
} from "react-native-svg";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "../../assets/Group_406.png";
import lesson from "../../assets/lesson12.1.jpg";
import pdfIcon from "../../assets/Group_408.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

function BookPages(props) {
  const path = "../../assets";
  const navigation = useNavigation();
  const route = useRoute();
  const {t, i18n}= useTranslation();
  return (
    <View style={Style.cotainer}>
      <TouchableOpacity style={Style.arrowStyle}>
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
              <Path data-name="Rectangle 85" fill="#fff" d="M0 0H16V10H0z" />
            </ClipPath>
          </Defs>
          <G data-name="Group 158" clipPath="url(#a)">
            <Path
              data-name="Path 433"
              d="M3.247 6l2.48 2.294a.99.99 0 010 1.414 1.023 1.023 0 01-1.432 0L.445 6.059A1.465 1.465 0 010 5a1.483 1.483 0 01.444-1.06L4.294.293a1.025 1.025 0 011.434 0 .992.992 0 010 1.414L3.248 4H15a1 1 0 010 2H3.247z"
              fill="#fff"
              fillRule="evenodd"
            />
          </G>
        </Svg>
      </TouchableOpacity>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={166.78}
        viewBox="0 0 360 166.076"
        {...props}
      >
        <Defs>
          <LinearGradient
            id="a"
            x1={0.5}
            x2={0.5}
            y2={1}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#3c98bd" />
            <Stop offset={1} stopColor="#0f53a1" />
          </LinearGradient>
        </Defs>
        <Path
          data-name="Path 2"
          d="M396.137 49.383v94.452L378.6 168.849 357.881 198.4a43.727 43.727 0 01-3.08 3.906c-.437.511-.893.982-1.349 1.452a38.047 38.047 0 01-20.252 11.067 33.919 33.919 0 01-6.6.634H105.669c-12.211 0-23.73-6.279-31.276-17.057l-8.256-11.78-1.258-1.779-28.742-41.007V49.383z"
          transform="translate(-36.137 -49.383)"
          fill="url(#a)"
        />

        <View style={Style.interContainer}>
          <Image source={Icon} style={Style.img} />

          <Text style={Style.Title}> {t("BookPages.2")} {route.params.lessonTitle}</Text>
        </View>
      </Svg>
      <ScrollView contentContainerStyle={Style.scrollOption}>
        <View style={Style.lessonFrame}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={300}
            height={400}
            viewBox="0 0 274 385"
            {...props}
          >
            <G
              data-name="Rectangle 49"
              fill="#fff"
              stroke="#3c98bd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              strokeDasharray="5 5"
            >
              <Rect width={274} height={385} rx={19} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={273}
                height={384}
                rx={18.5}
                fill="none"
              />
            </G>
            <Image source={lesson} style={Style.lessonImag} />
          </Svg>
        </View>
        <TouchableOpacity style={Style.pdf} activeOpacity={0.5}>
          <Image source={require(path + "/Group_408.png")} />
          <Text style={Style.pdfText}> {t("BookPages.1")} </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const Style = StyleSheet.create({
  cotainer: {
    // display: "flex",
    // width: "100%",
    // alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  arrowStyle: {
    // marginRight: 200,
    marginLeft: -300,
    marginTop: 20,
    marginBottom: -50,
    zIndex: 300,
    // padding: 10,
  },
  interContainer: {
    // height: "100%",
    // width: "100%",
    // paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  img: {
    marginBottom: 10,
  },
  scrollOption: {
    width: "100%",
    alignItems: "center",
  },
  Title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    margin: 0,
  },
  lessonFrame: {
    height: 400,
    width: 300,
    marginVertical: 30,
  },
  lessonImag: {
    height: 390,
    width: 278,
    margin: 13,
    marginTop: 5,
    // marginVertical: 30,
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: "rgba(60, 152, 189, 1)",
    // borderStyle: "dashed",
  },
  pdf: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
    // width: "80%",
    marginRight: 140,
  },
  pdfText: {
    marginHorizontal: 10,
  },
});
export default BookPages;
