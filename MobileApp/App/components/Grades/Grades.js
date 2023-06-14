import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  ClipPath,
  G,
  ForeignObject,
} from "react-native-svg";
import classLogo from "../../assets/Group 544.png";
import SearchBar from "../../screens/SearchBar";
import { StyleSheet } from "react-native";
import user from "../../assets/user.png";
// import route.params.gradeimg.img from "../../assets/Group_211_y.png";
import arrow from "../../assets/Group_158_a.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import Styles from "../Sections/Section.Style";
import CustomText from "../../CustomText";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Grades = (props) => {
  const { userInfo } = useContext(AuthContext);
  const route = useRoute();
  const navigation = useNavigation();
  var [inputSearch, setInputSearch] = useState("");

  const { t, i18n } = useTranslation();
  const onSubmit = () => {
    navigation.navigate("ChangeInfo");
  };
  const Renderitem = ({ item }) => {
    if (inputSearch == "") {
      return (
        <TouchableOpacity
          key={item.id}
          style={{ width: "100%" }}
          onPress={() =>
            navigation.navigate("Books", {
              grade: item.label,
              subjects: item.subjects,
              params: {
                id: item.id,
                name: item.name,
              },
            })
          }
        >
          <View style={style.grades}>
            <CustomText style={style.gradesText}>{item.label}</CustomText>
            <Image source={classLogo} style={style.gradeLogo} />
          </View>
        </TouchableOpacity>
      );
    } else if (item.label.includes(inputSearch)) {
      return (
        <TouchableOpacity
          key={item.id}
          style={{ width: "100%" }}
          onPress={() =>
            navigation.navigate("Books", {
              grade: item.label,
              subjects: item.subjects,
              params: {
                id: item.id,
                name: item.name,
              },
            })
          }
        >
          <View style={style.grades}>
            <CustomText style={style.gradesText}>{item.label}</CustomText>
            <Image source={classLogo} style={style.gradeLogo} />
          </View>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={style.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={verticalScale(190.069)}
        preserveAspectRatio="none"
        viewBox="0 0 360 165.069"
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
        <ForeignObject
          width={100}
          height={100}
          x={170}
          y={134}
          style={style.circle}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={97.309}
            height={30.601}
            viewBox="0 0 97.309 30.601"
            {...props}
          >
            <Path
              data-name="Path 504"
              d="M243.046 144.346a37.938 37.938 0 01-6.6.565h-90.709a54.2 54.2 0 0197.309-.565z"
              transform="translate(-145.737 -114.31)"
              fill="#fff"
              opacity={0.25}
            />
          </Svg>
        </ForeignObject>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={331.258}
          height={verticalScale(104.266)}
          viewBox="0 0 331.258 104.266"
          preserveAspectRatio="none"
          {...props}
        >
          <Path
            data-name="Path 502"
            d="M180.812 145.886c-3.915-2.388-6.519-6.467-5.422-10.905a6.914 6.914 0 018.876-5.082 10.736 10.736 0 017.279 9.04c.219 3.53-1.653 6.883-4.057 9.57a21.536 21.536 0 01-6.676-2.623zm117.576-68.123c4.037 1.653 8.142 4.614 9.12 8.842.869 3.759-1.3 8.728-5.945 8.933-4.077.18-7.382-3.547-8.342-6.9-1.194-4.174 1.283-8.245 4.407-11.094.016-.014.035-.025.051-.041.237.085.476.163.709.26zm72.8-10.172a88.76 88.76 0 00-58.341-.017c-5.231 1.835-11.209 4.23-15.62 7.916a31.118 31.118 0 00-10.608-1.342c-8.53.391-16.659 3.924-23.348 8.731-7.582 5.419-13.141 12.706-18.007 20.282-10.17 15.8-18.463 34.143-37.29 42.637a35.109 35.109 0 01-18.408 3.075 17.774 17.774 0 003.226-5.843c1.95-6.285-2.205-14.065-9.569-15.1-7.564-1.053-11.446 6.948-9.259 12.774 1.859 4.977 6.817 7.848 12.193 9.19l-.073.068c-7.017 6.642-17.388 10.668-26.9 12.995a80.307 80.307 0 01-31.312 1.308c-10.608-1.665-20.759-5.045-31.039-7.933-14.271-3.992-30.4-6.982-44.927-2.837l1.258 1.478c10.443-2.752 22.272-1.936 32.588.323 10.261 2.242 20.158 5.674 30.31 8.239 10.006 2.514 20.231 3.975 30.6 3.16a81.488 81.488 0 0027.778-7.295c4.812-2.242 10.061-5.147 13.834-9.071a32.832 32.832 0 006.361.442c8.694-.306 16.768-4.043 23.493-8.986 15.583-11.5 22.236-29.489 33.208-44.335 5.45-7.372 12.193-13.759 20.832-17.836 7.217-3.38 15.747-4.977 23.548-2.769a17.473 17.473 0 00-3.536 4.977 10.331 10.331 0 00.128 9.36 11.065 11.065 0 007.728 5.945c8 1.257 11.227-7.933 8.238-13.487-1.841-3.448-5.158-5.877-8.985-7.423a44.11 44.11 0 019.787-5.368 85 85 0 0114.471-4.518 87.95 87.95 0 0130.984-1.121 83.538 83.538 0 0128.633 9.716v-2a84.785 84.785 0 00-11.974-5.335z"
            transform="translate(-51.907 -62.652)"
            fill="#fff"
            opacity={0.25}
          />
        </Svg>
      </Svg>
      <View style={style.top}>
        <View style={style.arrow}>
          <Svg
            data-name="Group 197"
            xmlns="http://www.w3.org/2000/svg"
            width={horizontalScale(16)}
            height={verticalScale(15)}
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
        </View>
        <CustomText style={style.userName}>Khatima</CustomText>
        <TouchableOpacity style={style.imageWrapper} onPress={onSubmit}>
          <Image source={user} style={style.img} />
        </TouchableOpacity>
      </View>
      <View style={style.middle}>
        <SearchBar setInputSearch={(value) => setInputSearch(value)} />
      </View>

      <View style={style.bottom}>
        <View style={style.select}>
          <CustomText style={style.selectText}>{t("Grades.1")}</CustomText>
        </View>
        <FlatList
          contentContainerStyle={{
            width: "70%",
            marginVertical: verticalScale(0),
            paddingBottom: verticalScale(20),

            // flex: 1,
            alignItems: "center",
            // // justifyContent: "center",
            // paddingTop: 0,
          }}
          data={route.params.classes}
          renderItem={({ item }) => {
            return <Renderitem item={item} />;
          }}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  circle: {
    marginTop: verticalScale(15),
    marginLeft: horizontalScale(180),
  },
  arrow: {
    // backgroundColor: "red",
    marginBottom: verticalScale(90),
    // paddingTop: verticalScale(20),
    marginTop: verticalScale(-10),
    paddingRight: horizontalScale(30),
    zIndex: 100,
    marginLeft: horizontalScale(-20),
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  top: {
    marginTop: verticalScale(-170),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    height: verticalScale(150),
    marginBottom: verticalScale(-40),
  },
  userName: {
    fontSize: moderateScale(20),

    color: "#fff",
    marginHorizontal: 20,
  },
  imageWrapper: {
    backgroundColor: "#fff",
    height: verticalScale(80),
    width: verticalScale(80),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(50),
    marginHorizontal: horizontalScale(20),
    // marginTop: -20,
  },
  img: {
    height: 40,
    width: 40,
  },
  middle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(70),
    zIndex: 100,
    width: "100%",
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    // height: "66%",
    // backgroundColor: "#fff",
    width: "100%",
    marginTop: verticalScale(5),
    // position: "absolute",

    flex: 1,
  },
  select: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    width: "80%",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(50),
    alignItems: "center",
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  selectText: {
    color: "#fff",
    fontSize: moderateScale(20),
  },
  grades: {
    width: "85%",
    paddingHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(50),
    backgroundColor: "rgba(212,228,232,1)",
    marginVertical: verticalScale(5),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    // flex: 1,
  },
  gradesText: {
    color: "rgba(60, 152, 189, 1)",
    fontSize: moderateScale(20),
    // marginLeft: horizontalScale(100),
    // marginRight: "7%",
    width: horizontalScale(200),
    textAlign: "right",
  },
  gradeLogo: {
    width: 28,
    height: 28,
  },
  arrowStyle: {
    // marginBottom: "30%",

    marginRight: horizontalScale(200),
    marginLeft: verticalScale(20),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(-60),
    // backgroundColor: "red",
    zIndex: 100,
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
  },
});

export default Grades;
