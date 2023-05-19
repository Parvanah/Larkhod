import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/White_PNG_Format_z.png";
import user from "../../assets/user.png";
import arrow from "../../assets/Group_158.png";
import CustomText from "../../CustomText";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../Resonsive/Matrix";

const Information = () => {
  const { t, i18n } = useTranslation();
  const InfoValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, t("Information.1"))
      .max(50, t("Information.2"))
      .required(t("Information.3")),
    lastName: Yup.string()
      .min(2, t("Information.4"))
      .max(50, t("Information.5"))
      .required(t("Information.6")),
    email: Yup.string().email(t("Information.7")).required(t("Information.8")),
    class: Yup.number()
      .min(1, t("Information.9"))
      .max(12, t("Information.9"))
      .required(t("Information.10")),
    age: Yup.number()
      .min(12, t("Information.11"))
      .max(50, t("Information.11"))
      .required(t("Information.12")),
  });
  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate("Sections");
  };
  return (
    <ScrollView contentContainerStyle={styles.outContainer}>
      <TouchableOpacity
        style={styles.arrowStyle}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Image source={arrow} />
      </TouchableOpacity>
      <View style={styles.imageWrapper}>
        <Image source={user} style={styles.img} />
        <CustomText style={styles.usertext}> {t("Information.13")} </CustomText>
      </View>
      <View style={styles.InContainer}>
        <View style={styles.form}>
          <Formik
            validationSchema={InfoValidationSchema}
            initialValues={{ name: "", lastName: "", email: "", class: "" }}
            onSubmit={onSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <TextInput
                  name="firstName"
                  placeholder={t("Information.14")}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  keyboardType="first-name"
                  variant="rounded"
                  style={styles.input}
                />
                {errors.firstName && touched.firstName && (
                  <CustomText style={styles.errorText}>
                    {errors.firstName}
                  </CustomText>
                )}
                <TextInput
                  name="lastName"
                  placeholder={t("Information.15")}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                  keyboardType="last-name"
                  style={styles.input}
                />
                {errors.lastName && touched.lastName && (
                  <CustomText style={styles.errorText}>
                    {errors.lastName}
                  </CustomText>
                )}
                <TextInput
                  name="email"
                  placeholder={t("Information.16")}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  style={styles.input}
                />
                {errors.email && touched.email && (
                  <CustomText style={styles.errorText}>
                    {errors.email}
                  </CustomText>
                )}
                <TextInput
                  placeholder={t("Information.17")}
                  name="age"
                  onChangeText={handleChange("age")}
                  onBlur={handleBlur("age")}
                  keyboardType="numeric"
                  value={values.age}
                  style={styles.input}
                />
                {errors.age && touched.age && (
                  <CustomText style={styles.errorText}>{errors.age}</CustomText>
                )}
                <TextInput
                  placeholder={t("Information.18")}
                  name="class"
                  onChangeText={handleChange("class")}
                  onBlur={handleBlur("class")}
                  keyboardType="decimal-pad"
                  value={values.class}
                  style={styles.input}
                />
                {errors.class && touched.class && (
                  <CustomText style={styles.errorText}>
                    {errors.class}
                  </CustomText>
                )}
                <TouchableOpacity
                  style={styles.submitBtn}
                  onPress={handleSubmit}
                  disabled={!isValid}
                >
                  <CustomText style={styles.submitText}>
                    {t("Information.19")}
                  </CustomText>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  outContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: verticalScale(50),
  },
  InContainer: {
    borderTopRightRadius: moderateScale(100),
    borderTopLeftRadius: moderateScale(100),
    backgroundColor: "rgba(60,152,189,1)",
    flex: 3,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: horizontalScale(35),
    paddingVertical: verticalScale(60),
  },
  usertext: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "lightgray",
    marginHorizontal: horizontalScale(10),
  },
  img: {
    height: verticalScale(60),
    width: horizontalScale(60),
  },
  arrowStyle: {
    marginTop: verticalScale(40),
    alignSelf: "flex-start",
    marginLeft: horizontalScale(30),
  },
  form: { width: "100%" },
  input: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: "100%",
    height: verticalScale(40),
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "right",
    paddingTop: verticalScale(10),
  },
  submitBtn: {
    backgroundColor: "white",
    width: "100%",
    marginVertical: verticalScale(30),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(25),
  },
  submitText: {
    fontSize: moderateScale(15),
    color: "rgba(60,152,189,1)",
  },
  // border: {
  //   borderBottomColor: "#fff",
  //   borderBottomWidth: 2,
  // },
  imageWrapper: {
    backgroundColor: "#fff",
    height: verticalScale(100),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(50),
    marginBottom: verticalScale(10),
  },
  errorText: {
    fontSize: moderateScale(15),
    color: "red",
    textAlign: "right",
  },
});
export default Information;
