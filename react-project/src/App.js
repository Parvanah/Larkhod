
import Grades from './components/Grades';
import Header from './Header';
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Section from './components/Section';
import Contact from './components/Contact';
import Books from './components/Books';
import Continue from './components/Continue';
import Dari from './components/Zaban_Dari';
import Pashto from './components/Zaban_Pashto';
import Home from './components/Home';
import './components/index.css';

import High from './components/sections/High';
import Scondary from './components/sections/Scondary';
import Primary from './components/sections/Primary';

import FirstGrade from './components/sections/Primary/FirstGrade';
import Art_First from './components/sections/Primary/First_Grade/Art_First';
import Hand_Writing_First from './components/sections/Primary/First_Grade/Hand_Writing_First';
import Islamic_Hanafi_First from './components/sections/Primary/First_Grade/Islamic_Hanafi_First';
import Islamic_Jafari_First from './components/sections/Primary/First_Grade/Islamic_Jafari_First';
import Life_Skill_First from './components/sections/Primary/First_Grade/Life_Skill_First';
import Math_First from './components/sections/Primary/First_Grade/Math_First';
import Quran_First from './components/sections/Primary/First_Grade/Quran_First';
import ZabanDari_First from './components/sections/Primary/First_Grade/ZabanDari_First';

import SecondGrade from './components/sections/Primary/SecondGrade';
import Art_Second from './components/sections/Primary/Second_Grade/Art_Second';
import Hand_Writing_Second from './components/sections/Primary/Second_Grade/Hand_Writing_Second';
import Islamic_Hanafi_Second from './components/sections/Primary/Second_Grade/Islamic_Hanafi_Second';
import Islamic_Jafari_Second from './components/sections/Primary/Second_Grade/Islamic_Jafari_Second';
import Life_Skill_Second from './components/sections/Primary/Second_Grade/Life_Skill_Second';
import Math_Second from './components/sections/Primary/Second_Grade/Math_Second';
import Quran_Second from './components/sections/Primary/Second_Grade/Quran_Second';
import ZabanDari_Second from './components/sections/Primary/Second_Grade/ZabanDari_Second';

import ThirdGrade from './components/sections/Primary/ThirdGrade';
import Art_Third from './components/sections/Primary/Third_Grade/Art_Third';
import Hand_Writing_Third from './components/sections/Primary/Third_Grade/Hand_Writing_Third';
import Islamic_Hanafi_Third from './components/sections/Primary/Third_Grade/Islamic_Hanafi_Third';
import Islamic_Jafari_Third from './components/sections/Primary/Third_Grade/Islamic_Jafari_Third';
import Life_Skill_Third from './components/sections/Primary/Third_Grade/Life_Skill_Third';
import Math_Third from './components/sections/Primary/Third_Grade/Math_Third';
import Quran_Third from './components/sections/Primary/Third_Grade/Quran_Third';
import ZabanDari_Third from './components/sections/Primary/Third_Grade/ZabanDari_Third';

import FourthGrade from './components/sections/Primary/FourthGrade';
import FifthGrade from './components/sections/Primary/FifthGrade';
import SixthGrade from './components/sections/Primary/SixthGrade';
import SeventhGrade from './components/sections/Scondery/SeventhGrade';
import EightGrade from './components/sections/Scondery/EightGrade';
import NinthGrade from './components/sections/Scondery/NinthGrade';

import TenthGrade from './components/sections/High_School/TenthGrade';
import Biologyi_Ten from './components/sections/High_School/Tenth_Grade/Biologyi_Ten';
import Chemistryi_Ten from './components/sections/High_School/Tenth_Grade/Chemistryi_Ten';
import Clvici_Ten from './components/sections/High_School/Tenth_Grade/Clvici_Ten';
import Computer_Ten from './components/sections/High_School/Tenth_Grade/Computer_Ten';
import English_Ten from './components/sections/High_School/Tenth_Grade/English_Ten';
import Geographyi_Ten from './components/sections/High_School/Tenth_Grade/Geographyi_Ten';
import Geology_Ten from './components/sections/High_School/Tenth_Grade/Geology_Ten';
import Historyi_Ten from './components/sections/High_School/Tenth_Grade/Historyi_Ten'
import IslamicHanafi_Ten from './components/sections/High_School/Tenth_Grade/IslamicHanafi_Ten'
import IslamicJafari_Ten from './components/sections/High_School/Tenth_Grade/IslamicJafari_Ten'
import Math_Ten from './components/sections/High_School/Tenth_Grade/Math_Ten'
import Physic_Ten from './components/sections/High_School/Tenth_Grade/Physic_Ten'
import Tafseer_Ten from './components/sections/High_School/Tenth_Grade/Tafseer_Ten'
import ZabanDari_Ten from './components/sections/High_School/Tenth_Grade/ZabanDari_Ten';
import ZabanPashto_Ten from './components/sections/High_School/Tenth_Grade/ZabanPashto_Ten'

import EleventhGrade from './components/sections/High_School/EleventhGrade';
import Biologyi_Eleventh from './components/sections/High_School/Eleventh_Grade/Biologyi_Eleventh';
import Chemistryi_Eleventh from './components/sections/High_School/Eleventh_Grade/Chemistryi_Eleventh';
import Clvici_Eleventh from './components/sections/High_School/Eleventh_Grade/Clvici_Eleventh';
import Computer_Eleventh from './components/sections/High_School/Eleventh_Grade/Computer_Eleventh';
import English_Eleventh from './components/sections/High_School/Eleventh_Grade/English_Eleventh'
import Geographyi_Eleventh from './components/sections/High_School/Eleventh_Grade/Geographyi_Eleventh'
import Historyi_Eleventh from './components/sections/High_School/Eleventh_Grade/Historyi_Eleventh'
import IslamicHanafi_Eleventh from './components/sections/High_School/Eleventh_Grade/IslamicHanafi_Eleventh'
import IslamicJafari_Eleventh from './components/sections/High_School/Eleventh_Grade/IslamicJafari_Eleventh'
import Math_Eleventh from './components/sections/High_School/Eleventh_Grade/Math_Eleventh'
import Physic_Eleventh from './components/sections/High_School/Eleventh_Grade/Physic_Eleventh'
import Tafseer_Eleventh from './components/sections/High_School/Eleventh_Grade/Tafseer_Eleventh'
import ZabanDari_Eleventh from './components/sections/High_School/Eleventh_Grade/ZabanDari_Eleventh';
import ZabanPashto_Eleventh from './components/sections/High_School/Eleventh_Grade/ZabanPashto_Eleventh'

import TwelfthGrade from './components/sections/High_School/TwelfthGrade';
import Biologyi_Twelve from './components/sections/High_School/Twelfth_Grade/Biologyi_Twelve';
import Chemistryi_Twelve from './components/sections/High_School/Twelfth_Grade/Chemistryi_Twelve';
import Clvici_Twelve from './components/sections/High_School/Twelfth_Grade/Clvici_Twelve';
import Computer_Twelve from './components/sections/High_School/Twelfth_Grade/Computer_Twelve';
import English_Twelve from './components/sections/High_School/Twelfth_Grade/English_Twelve'
import Geographyi_Twelve from './components/sections/High_School/Twelfth_Grade/Geographyi_Twelve'
import Historyi_Twelve from './components/sections/High_School/Twelfth_Grade/Historyi_Twelve'
import IslamicHanafi_Twelve from './components/sections/High_School/Twelfth_Grade/IslamicHanafi_Twelve'
import IslamicJafari_Twelve from './components/sections/High_School/Twelfth_Grade/IslamicJafari_Twelve'
import Math_Twelve from './components/sections/High_School/Twelfth_Grade/Math_Twelve'
import Physic_Twelve from './components/sections/High_School/Twelfth_Grade/Physic_Twelve'
import Tafseer_Twelve from './components/sections/High_School/Twelfth_Grade/Tafseer_Twelve'
import ZabanDari_Twelve from './components/sections/High_School/Twelfth_Grade/ZabanDari_Twelve';
import ZabanPashto_Twelve from './components/sections/High_School/Twelfth_Grade/ZabanPashto_Twelve'




function App() {
  return (
    <Router>
      <Header />
      <div >
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route path="/section"> <Section /> </Route>
        <Route path="/grades"> <Grades /> </Route>
        <Route path="/books"> <Books /> </Route>
        <Route path="/continue"> <Continue /> </Route>
        <Route  path="/about"> <About /> </Route>
        <Route path="/contact"> <Contact /> </Route>
        <Route path="/dari"> <Dari /> </Route>
        <Route path="/pashto"> <Pashto /> </Route>

        <Route  path="/high"> <High/> </Route>
        <Route  path="/scondary"> <Scondary/> </Route>
        <Route  path="/primary"> <Primary/> </Route>

        <Route  path="/first_grade"> <FirstGrade/> </Route>
        <Route  path="/art_first"> <Art_First/> </Route>
        <Route  path="/hand_writing_first"> <Hand_Writing_First/> </Route>
        <Route  path="/islamic_hanafi_first"> <Islamic_Hanafi_First/> </Route>
        <Route  path="/islamic_jafari_first"> <Islamic_Jafari_First/> </Route>
        <Route  path="/life_skill_first"> <Life_Skill_First/> </Route>
        <Route  path="/Math_First"> <Math_First/> </Route>
        <Route  path="/quran_first"> <Quran_First/> </Route>
        <Route  path="/dri_first"> <ZabanDari_First/> </Route>

        <Route  path="/scond_grade"> <SecondGrade/> </Route>
        <Route  path="/art_second"> <Art_Second/> </Route>
        <Route  path="/hand_writing_second"> <Hand_Writing_Second/> </Route>
        <Route  path="/islamic_hanafi_second"> <Islamic_Hanafi_Second/> </Route>
        <Route  path="/islamicjafari_second"> <Islamic_Jafari_Second/> </Route>
        <Route  path="/life_skill_second"> <Life_Skill_Second/> </Route>
        <Route  path="/math_scond"> <Math_Second/> </Route>
        <Route  path="/quran_second"> <Quran_Second/> </Route>
        <Route  path="/dri_second"> <ZabanDari_Second/> </Route>

        <Route  path="/third_grade"> <ThirdGrade/></Route>
        <Route  path="/art_third"> <Art_Third/> </Route>
        <Route  path="/hand_writing_third"> <Hand_Writing_Third/> </Route>
        <Route  path="/islamic_hanafi_third"> <Islamic_Hanafi_Third/> </Route>
        <Route  path="/islamic_jafari_third"> <Islamic_Jafari_Third/> </Route>
        <Route  path="/life_skill_third"> <Life_Skill_Third/> </Route>
        <Route  path="/math_third"> <Math_Third/> </Route>
        <Route  path="/quran_third"> <Quran_Third/> </Route>
        <Route  path="/dri_third"> <ZabanDari_Third/> </Route>

        <Route  path="/fourth_grade">
           <FourthGrade/>
        </Route>

        <Route  path="/fifth_grade">
           <FifthGrade/>
        </Route>

        <Route  path="/sixth_grade">
           <SixthGrade/>
        </Route>

        <Route  path="/seventh_grade">
           <SeventhGrade/>
        </Route>

        <Route  path="/eighth_grade">
           <EightGrade/>
        </Route>

        <Route  path="/ninth_grade">
           <NinthGrade/>
        </Route>

        <Route  path="/tenth_grade"> <TenthGrade/> </Route>
        <Route  path="/biologyi_ten"> <Biologyi_Ten/> </Route>
        <Route  path="/chemistryi_ten"> <Chemistryi_Ten/> </Route>
        <Route  path="/clvici_ten"> <Clvici_Ten/> </Route>
        <Route  path="/computer_ten"> <Computer_Ten/> </Route>
        <Route  path="/english_ten"> <English_Ten/> </Route>
        <Route  path="/geographyi_ten"> <Geographyi_Ten/> </Route>
        <Route  path="/geologyi_ten"> <Geology_Ten/> </Route>
        <Route  path="/historyi_ten"> <Historyi_Ten/> </Route>
        <Route  path="/islamichanafi_ten"> <IslamicHanafi_Ten/> </Route>
        <Route  path="/islamicjafari_ten"> <IslamicJafari_Ten/> </Route>
        <Route  path="/math_ten"> <Math_Ten/> </Route>
        <Route  path="/physic_ten"> <Physic_Ten/> </Route>
        <Route  path="/tafseer_ten"> <Tafseer_Ten/> </Route>
        <Route  path="/dari_ten"> <ZabanDari_Ten/> </Route>
        <Route  path="/pashto_ten"> <ZabanPashto_Ten/> </Route>

        <Route  path="/eleventh_grade"> <EleventhGrade/> </Route>
        <Route  path="/biologyi_eleven"> <Biologyi_Eleventh/> </Route>
        <Route  path="/chemistryi_eleven"> <Chemistryi_Eleventh/> </Route>
        <Route  path="/clvici_eleven"> <Clvici_Eleventh/> </Route>
        <Route  path="/computer_eleven"> <Computer_Eleventh/> </Route>
        <Route  path="/english_eleven"> <English_Eleventh/> </Route>
        <Route  path="/geographyi_eleven"> <Geographyi_Eleventh/> </Route>
        <Route  path="/historyi_eleven"> <Historyi_Eleventh/> </Route>
        <Route  path="/islamichanafi_eleven"> <IslamicHanafi_Eleventh/> </Route>
        <Route  path="/islamicjafari_eleven"> <IslamicJafari_Eleventh/> </Route>
        <Route  path="/math_eleven"> <Math_Eleventh/> </Route>
        <Route  path="/physic_eleven"> <Physic_Eleventh/> </Route>
        <Route  path="/tafseer_eleven"> <Tafseer_Eleventh/> </Route>
        <Route  path="/dari_eleven"> <ZabanDari_Eleventh/> </Route>
        <Route  path="/pashto_eleven"> <ZabanPashto_Eleventh/> </Route>

        <Route  path="/twelfth_grade"> <TwelfthGrade/> </Route>
        <Route  path="/biologyi_twelve"> <Biologyi_Twelve/> </Route>
        <Route  path="/chemistryi_twelve"> <Chemistryi_Twelve/> </Route>
        <Route  path="/clvici_twelve"> <Clvici_Twelve/> </Route>
        <Route  path="/computer_twelve"> <Computer_Twelve/> </Route>
        <Route  path="/english_twelve"> <English_Twelve/> </Route>
        <Route  path="/geographyi_twelve"> <Geographyi_Twelve/> </Route>
        <Route  path="/historyi_twelve"> <Historyi_Twelve/> </Route>
        <Route  path="/islamichanafi_twelve"> <IslamicHanafi_Twelve/> </Route>
        <Route  path="/islamicjafari_twelve"> <IslamicJafari_Twelve/> </Route>
        <Route  path="/math_twelve"> <Math_Twelve/> </Route>
        <Route  path="/physic_twelve"> <Physic_Twelve/> </Route>
        <Route  path="/tafseer_twelve"> <Tafseer_Twelve/> </Route>
        <Route  path="/dari_twelve"> <ZabanDari_Twelve/> </Route>
        <Route  path="/pashto_twelve"> <ZabanPashto_Twelve/> </Route>
        
      </Switch> 
      </div>
    </Router>
  );
}

export default App;
