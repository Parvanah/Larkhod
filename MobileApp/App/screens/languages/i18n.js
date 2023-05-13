import i18next from "i18next";
import Pashto from "./Pashto.json";
import Persian from "./Persian.json";
import {initReactI18next} from 'react-i18next';

i18next.use( initReactI18next).init({
    lan: 'pe',
    resources:{
        pa:Pashto,
        pe:Persian,
    },
});
export default i18next;
