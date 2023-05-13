import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

const guidelineBaseWidth=375;
const guidelineBaseHeight=812;

const hScale = (size) => (width/guidelineBaseWidth)*size;
const vScale = (size) => (height/guidelineBaseHeight)*size;
const mScale = (size, factor = 0.5) => size + (hScale(size)-size)*factor;

export{hScale, vScale, mScale};