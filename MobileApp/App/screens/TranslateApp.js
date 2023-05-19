import { useTranslation } from "react-i18next";
import SwitchSelector from "react-native-switch-selector";
const options = [
  {label: "Pashto", value: "pa"},
  {label: "Persian", value: "pe"},
];
import { Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const TranslateApp = () =>{
  const {t, i18n}= useTranslation(); 
  return(
    <SafeAreaView>
      <View>
        <View>
          <SwitchSelector options={options} hasPadding initial={0} 
          onPress={(language) =>{
            i18n.changeLanguage(language);
          }}
          />
        </View>
      </View>
      <View 
      padder 
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{fontSize: 26, textAlign:'center'}}>
          {t("SignUp.1")}
        </Text>
      </View>
    </SafeAreaView>
  );
};


export default TranslateApp;