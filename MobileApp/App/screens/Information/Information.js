
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/White_PNG_Format_z.png";
import user from "../../assets/user.png";
import arrow from "../../assets/Group_158.png";
import CustomText from "../../CustomText";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from "react-i18next";


const InfoValidationSchema = Yup.object().shape({
  firstName: Yup.string()
  .min(2, "نام باید بالاتر از دو حرف باشد")
  .max(50, "نام باید کمتر از ۵۰ حرف باشد")
  .required("نام ضروری است"),
  lastName: Yup.string()
  .min(2, "تخلص باید بالاتر از دو حرف باشد")
  .max(50, "تخلص باید کمتر از ۵۰ حرف باشد")
  .required("تخلص ضروری است"),
  email: Yup.string()
  .email(" ایمیل آدرس معتبر تان را وارد نمایید")
  .required('ایمیل آدرس لازمی است'),
  class: Yup.number()
  .min(1, "صنف تان  درست نیست")
  .max(12, "صنف تان  درست نیست")
  .required("صنف ضروری است"),
  age: Yup.number()
  .min(12, "سن تان  درست نیست")
  .max(50, "سن تان  درست نیست")
  .required("سن ضروری است"),
})
const Information = () => {
  const navigation = useNavigation();
  const onSubmit =()=>{
     navigation.navigate("Sections");
  }
 
const {t, i18n}= useTranslation(); 
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
        <Formik  validationSchema={InfoValidationSchema}
             initialValues={{ name: '', lastName: '', email: '', class:'' }}     onSubmit={onSubmit}
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
                 placeholder= {t("Information.14")}
                 onChangeText={handleChange('firstName')}
                 onBlur={handleBlur('firstName')}
                 value={values.firstName}
                 keyboardType="first-name"
                  variant="rounded"
                  style={styles.input}
                />
                 {(errors.firstName && touched.firstName) &&
                  <CustomText style={styles.errorText}>{errors.firstName}</CustomText>
                }
                <TextInput
                 name="lastName"
                 placeholder= {t("Information.15")}
                 onChangeText={handleChange('lastName')}
                 onBlur={handleBlur('lastName')}
                 value={values.lastName}
                 keyboardType="last-name"
                  style={styles.input}
                />
                 {(errors.lastName && touched.lastName) &&
                  <CustomText style={styles.errorText}>{errors.lastName}</CustomText>
                }
                <TextInput
                   name="email"
                   placeholder= {t("Information.16")}
                   onChangeText={handleChange('email')}
                   onBlur={handleBlur('email')}
                   value={values.email}
                   keyboardType="email-address"
                    style={styles.input}
                />
                 {(errors.email && touched.email) &&
                  <CustomText style={styles.errorText}>{errors.email}</CustomText>
                }
                <TextInput
                  placeholder= {t("Information.17")}
                  name="age"
                  onChangeText={handleChange("age")}
                  onBlur={handleBlur("age")}
                  keyboardType="numeric"
                  value={values.age}
                  style={styles.input}
                />
                 {(errors.age && touched.age) &&
                  <CustomText style={styles.errorText}>{errors.age}</CustomText>
                }
                <TextInput
                  placeholder= {t("Information.18")}
                  name="class"
                  onChangeText={handleChange("class")}
                  onBlur={handleBlur("class")}
                  keyboardType="decimal-pad"
                  value={values.class}
                  style={styles.input}
                />
                 {(errors.class && touched.class) &&
                  <CustomText style={styles.errorText}>{errors.class}</CustomText>
                }
          <TouchableOpacity style={styles.submitBtn}  onPress={handleSubmit}   disabled={!isValid} >
            <CustomText style={styles.submitText}>{t("Information.19")}</CustomText>
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
    paddingTop: 50
  },
  InContainer: {
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    backgroundColor: "rgba(60,152,189,1)",
    flex: 3,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 35,
    paddingVertical: 60
  },
  usertext: {
    fontSize: 14,
    fontWeight: "bold",
    color: "lightgray",
    marginHorizontal: 10,
  },
  img: {
    height: 60,
    width: 60,
  },
  arrowStyle: {
    marginTop: 40,
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  form: { width: "100%"},
  input: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: "100%",
    height: 40,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "right",
    paddingTop: 10 
  },
  submitBtn: {
    backgroundColor: "white",
    width: "100%",
    marginVertical: 30,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  submitText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "rgba(60,152,189,1)",
  },
  // border: {
  //   borderBottomColor: "#fff",
  //   borderBottomWidth: 2,
  // },
  imageWrapper: {
    backgroundColor: "#fff",
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 10
  },
  errorText: {
    fontSize: 15,
    color: 'red',
    textAlign: "right"
  },
});
export default Information;














