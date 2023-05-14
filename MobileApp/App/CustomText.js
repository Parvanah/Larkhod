import React from "react";
import { useState, useEffect } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
const CustomText = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../assets/fonts/Bahij_Helvetica_Neue_75_Bold.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text style={{ ...props.style, fontFamily: "custom-font"}}>
      {props.children}
    </Text>
  );
};
export default CustomText;
