import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  ForeignObject,
} from "react-native-svg";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
import user from "../../assets/user.png";
import styles from "./Section.Style";
import White from "../../assets/background.png";
import primary from "../../assets/primary.png";
import secondary from "../../assets/secondary.png";
import high from "../../assets/high.png";
import SeatchBar from "../../screens/SearchBar";
import { useNavigation } from "@react-navigation/native";
import gradeLogo from "../../assets/Group_211_y.png";
import classNine from "../grade_9_dari.json";
import classTwo from "../grade_2_dari.json";
import JsonFiles from "../SchoolSubjects.json";
import CustomText from "../../CustomText";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

const Sections = (props) => {
  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate("ChangeInfo");
  };
  const { t, i18n } = useTranslation();
  var data;
  if (t("Sections.lang") == "Dari") {
    data = JsonFiles.dari_curriculum;
  } else {
    data = JsonFiles.pashto_curriculum;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.svgWrapper}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={verticalScale(170.069)}
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
            data-name="Path 501"
            d="M396.137 68.674v75.161L378.6 168.849 357.881 198.4a43.727 43.727 0 01-3.08 3.906c-.437.511-.893.982-1.349 1.452a38.047 38.047 0 01-20.252 11.067 33.919 33.919 0 01-6.6.634H105.669c-12.211 0-23.73-6.279-31.276-17.057l-8.256-11.78-1.258-1.779-28.742-41.007V68.674c0-9.04 5.96-16.607 13.67-18.039a14.347 14.347 0 012.661-.245h327.357c8.985 0 16.312 8.222 16.312 18.284z"
            transform="translate(-36.137 -50.39)"
            fill="url(#a)"
          />

          <ForeignObject
            width={100}
            height={100}
            x={170}
            y={134}
            style={styles.circle}
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
            height={104.266}
            viewBox="0 0 331.258 104.266"
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
        <View style={styles.top}>
          <CustomText style={styles.userName}>Khatima Sajadi</CustomText>
          <TouchableOpacity style={styles.imageWrapper} onPress={onSubmit}>
            <Image source={user} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionMiddle}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.sectionMiddleBtn}
          onPress={() => navigation.navigate("FeedBack")}
        >
          <CustomText style={styles.sectionMiddleBtnText}>
            {t("Sections.2")}
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.sectionMiddleBtn}
          onPress={() => navigation.navigate("AboutUs")}
        >
          <CustomText style={styles.sectionMiddleBtnText}>
            {t("Sections.1")}
          </CustomText>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.bottom}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.bottomBtn}
          onPress={() =>
            navigation.navigate("Grades", {
              classes: data.primary.grades,
            })
          }
        >
          <CustomText style={styles.btnText}>{t("Sections.9")} </CustomText>
          <Image source={primary} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.bottomBtn}
          onPress={() =>
            navigation.navigate("Grades", {
              classes: data.secondary.grades,
            })
          }
        >
          <CustomText style={styles.btnText}>{t("Sections.13")}</CustomText>
          <Image source={secondary} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.bottomBtn}
          onPress={() =>
            navigation.navigate("Grades", {
              classes: data.high_school.grades,
            })
          }
        >
          <CustomText style={styles.btnText}>{t("Sections.17")} </CustomText>
          <Image source={high} style={styles.icon} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sections;
