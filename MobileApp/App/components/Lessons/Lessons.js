import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  ScrollView,
  Platform,
} from "react-native";
import CustomText from "../../CustomText";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";
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
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import * as Notifications from "expo-notifications";
import { parseTrigger } from "expo-notifications/build/scheduleNotificationAsync";
// import { downloadToFolder } from "expo-file-dl";
const Lessons = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  var [num, setNum] = useState(1);
  const { t, i18n } = useTranslation();
  const subject_path = route.params.subject_path;
  const lesson_pages = route.params.lesson_path;
  const unit_page = route.params.unit_page;
  const [downloadCheck, setDownloadCheck] = useState();
  const pdf_path = route.params.pdf_path;
  var progressChek;
  console.log(pdf_path);
  console.log(route.params.BookName);
  const path = "../../assets";
  const downloadFile = async (url, fileName) => {
    // console.log("downlod called");
    alert("Downloading pdf book started");

    try {
      const downloadResumable = FileSystem.createDownloadResumable(
        url,
        FileSystem.documentDirectory + fileName,
        {},
        (downloadProgress) => {
          const progress =
            downloadProgress.totalBytesWritten /
            downloadProgress.totalBytesExpectedToWrite;
          progressChek = progress;
          // progress === 1
          //   ? console.log("pdf completely downloaded", progress)
          //   : "";
          // Math.sign(progress) === -1
          //   ? console.log(
          //       "pdf is not downloaed becouse of internet connection or other issues",
          //       progress
          //     )
          //   : "";
          // setDownloadCheck(progress);
        }
      );
      const result = await downloadResumable.downloadAsync();
      console.log(result);

      if (Platform.OS === "android") {
        const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (perm.status != "granted") {
          return;
        }

        const asset = await MediaLibrary.createAssetAsync(result.uri);
        const albom = await MediaLibrary.getAlbumAsync("Larkhoad_pdf_books");
        if (albom == null) {
          await MediaLibrary.createAlbumAsync(
            "Larkhoad_pdf_books",
            asset,
            false
          );
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], albom, false);
        }

        alert(`book downloaded on: ${MediaLibrary.getAssetInfoAsync(asset)}`);
        // }
      } else if (Platform.OS === "ios") {
        const UTI = "public.item";
        await Sharing.shareAsync(result.uri, { UTI });
      }
    } catch (err) {
      console.log("Error of download", err);
    }
  };
  // const save = (uri) => {
  //   shareAsync(uri);
  // };
  async function requstNotificationPermission() {
    const { status } = await Notifications.requestPermissionsAsync();
    let finalStatus = existingStatus;
    if (status === "granted") {
      console.log("Notification permission granted");
      schedualeNotification();
    } else {
      console.log("Notification permission denied");
    }
  }
  async function schedualeNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "book downloading",
        body: progressChek,
        data: { someData: "goes here " },
      },
      trigger: { seconds: 1 },
    });
  }
  Notifications.addNotificationReceivedListener((notification) => {
    console.log("notification recieved", notification);
  });
  Notifications.addNotificationResponseReceivedListener((response) => {
    console.log("notification Response Received", response);
  });
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.arrowStyle}
        onPress={() => navigation.goBack()}
      >
        <Svg
          data-name="Group 275"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={10}
          viewBox="0 0 16 10"
          {...props}
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
        height={verticalScale(170.069)}
        preserveAspectRatio="none"
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
          <CustomText style={style.topTitle}>
            {t("Lesson.1")}
            {route.params.title}
          </CustomText>
        </View>
      </Svg>
      <View style={style.pdfWrapper}>
        <TouchableOpacity
          style={style.pdf}
          activeOpacity={0.8}
          onPress={() => {
            requstNotificationPermission();
            downloadFile(pdf_path, route.params.BookName + " .pdf");
          }}
        >
          <Image source={require(path + "/Group_408.png")} />
          <CustomText style={style.pdfText}>{t("Lesson.2")}</CustomText>
        </TouchableOpacity>
      </View>
      {unit_page !== "" ? (
        <View style={style.unitbottom}>
          <TouchableOpacity
            style={style.unitbtn}
            onPress={() => {
              navigation.navigate("BookPages", {
                lessonTitle: route.params.title,
                lesson_path: unit_page,
                subject_path: subject_path,
              });
            }}
          >
            <CustomText style={style.unitbtnText}>00</CustomText>
            <CustomText style={style.unitbtnText}>{t("Lesson.3")}</CustomText>
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      )}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: verticalScale(245),
        }}
      >
        <FlatList
          contentContainerStyle={style.bottom}
          data={route.params.lessons}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={style.lessonBtn}
                onPress={() =>
                  navigation.navigate("BookPages", {
                    lessonTitle: item.label,
                    lesson_path: item.paths,
                    subject_path: subject_path,
                    params: {
                      id: item.id,
                      name: item.name,
                    },
                  })
                }
              >
                <CustomText style={style.lessonBtnText}>
                  0{index + 1}
                </CustomText>
                <CustomText style={style.lessonBtnText}>
                  {item.label}
                </CustomText>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3C98BD",
    alignItems: "center",
    width: "100%",
  },
  top: {
    // backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(30),
  },
  arrowStyle: {
    marginRight: "60%",
    marginLeft: verticalScale(-100),
    marginTop: verticalScale(0),
    marginBottom: verticalScale(-40),
    paddingTop: verticalScale(20),
    zIndex: 100,
    // paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    // backgroundColor: "red",
  },
  topTitle: {
    color: "rgba(60,152,189,1)",
    fontSize: moderateScale(15),
    marginTop: verticalScale(10),
    textAlign: "center",
    width: horizontalScale(300),
  },
  bottom: {
    paddingTop: verticalScale(0),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    // marginHorizontal: "20%",
  },
  lessonBtn: {
    backgroundColor: "#D4E4E8",
    width: "80%",
    marginVertical: verticalScale(3),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(40),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lessonBtnText: {
    color: "rgba(60,152,189,1)",
    fontSize: moderateScale(17),
    width: "100%",
  },
  pdfWrapper: {
    backgroundColor: "#FFF",
    width: "90%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: "40%",
    marginVertical: verticalScale(10),
    paddingVertical: verticalScale(10),
    // paddingHorizontal: horizontalScale(20),
    borderRadius: moderateScale(50),
  },
  pdf: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    // marginRight: horizontalScale(10),
    height: verticalScale(43),
  },
  pdfText: {
    marginHorizontal: 10,
    fontSize: moderateScale(15),
    color: "rgba(60,152,189,1)",
  },
  unitbottom: {
    paddingTop: verticalScale(0),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  unitbtn: {
    backgroundColor: "#D4E4E8",
    width: "90%",
    marginVertical: verticalScale(3),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(40),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  unitbtnText: {
    color: "rgba(60,152,189,1)",
    fontSize: moderateScale(17),
    width: "50%",
  },
});
export default Lessons;
