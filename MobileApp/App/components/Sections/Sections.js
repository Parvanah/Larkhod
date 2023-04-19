import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
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

const Sections = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.userName}>Khatima Sajadi</Text>
        <View style={styles.imageWrapper}>
          <Image source={user} style={styles.img} />
        </View>
      </View>
      <View style={styles.middle}>
        <SeatchBar />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() =>
            navigation.navigate("Grades", {
              classes: [
                {
                  grade: "صنف اول",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classTwo.dari_curriculum.subjects,
                  id: 1,
                },
                {
                  grade: "صنف دوم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classTwo.dari_curriculum.subjects,
                  id: 2,
                },
                {
                  grade: "صنف سوم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classTwo.dari_curriculum.subjects,
                  id: 3,
                },
                {
                  grade: "صنف چهارم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classTwo.dari_curriculum.subjects,
                  id: 4,
                },
                {
                  grade: "صنف پنجم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classTwo.dari_curriculum.subjects,
                  id: 5,
                },
                {
                  grade: "صنف ششم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classTwo.dari_curriculum.subjects,
                  id: 6,
                },
              ],
            })
          }
        >
          <Text style={styles.btnText}>بخش ابتداییه</Text>
          <Image source={primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() =>
            navigation.navigate("Grades", {
              classes: [
                {
                  grade: "صنف هفتم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classNine.dari_curriculum.subjects,
                  id: 1,
                },
                {
                  grade: "صنف هشتم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classNine.dari_curriculum.subjects,
                  id: 2,
                },
                {
                  grade: "صنف نهم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classNine.dari_curriculum.subjects,
                  id: 3,
                },
              ],
            })
          }
        >
          <Text style={styles.btnText}>بخش متوسطه</Text>
          <Image source={secondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() =>
            navigation.navigate("Grades", {
              classes: [
                {
                  grade: "صنف دهم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classNine.dari_curriculum.subjects,
                  id: 1,
                  subject: [{}, {}, {}],
                },
                {
                  grade: "صنف یازدهم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classNine.dari_curriculum.subjects,
                  id: 2,
                },
                {
                  grade: "صنف دوازدهم",
                  img: require("../../assets/Group_211_y.png"),
                  subjects: classNine.dari_curriculum.subjects,
                  id: 3,
                },
              ],
            })
          }
        >
          <Text style={styles.btnText}>بخش لیسه</Text>
          <Image source={high} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sections;
