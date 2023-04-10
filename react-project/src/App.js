
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

import TenthGrade from './components/sections/High_School/TenthGrade';
import EleventhGrade from './components/sections/High_School/EleventhGrade';
import TwelfthGrade from './components/sections/High_School/TwelfthGrade';

import Biologyi_Ten from './components/sections/High_School/Tenth_Grade/Biologyi_Ten';
import Chemistryi_Ten from './components/sections/High_School/Tenth_Grade/Chemistryi_Ten';
import Clvici_Ten from './components/sections/High_School/Tenth_Grade/Clvici_Ten';
import Computer_Ten from './components/sections/High_School/Tenth_Grade/Computer_Ten';
import English_Ten from './components/sections/High_School/Tenth_Grade/English_Ten'
import Geographyi_Ten from './components/sections/High_School/Tenth_Grade/Geographyi_Ten'
import Geology_Ten from './components/sections/High_School/Tenth_Grade/Geology_Ten'
import Historyi_Ten from './components/sections/High_School/Tenth_Grade/Historyi_Ten'
import IslamicHanafi_Ten from './components/sections/High_School/Tenth_Grade/IslamicHanafi_Ten'
import IslamicJafari_Ten from './components/sections/High_School/Tenth_Grade/IslamicJafari_Ten'
import Math_Ten from './components/sections/High_School/Tenth_Grade/Math_Ten'
import Physic_Ten from './components/sections/High_School/Tenth_Grade/Physic_Ten'
import Tafseer_Ten from './components/sections/High_School/Tenth_Grade/Tafseer_Ten'
import ZabanDari_Ten from './components/sections/High_School/Tenth_Grade/ZabanDari_Ten';
import ZabanPashto_Ten from './components/sections/High_School/Tenth_Grade/ZabanPashto_Ten'

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
      <Route exact path="/">
           <Home/>
        </Route>
      <Route path="/section">
           <Section />
        </Route>
        <Route  path="/high">
           <High/>
        </Route>

        <Route  path="/tenth_grade">
           <TenthGrade/>
        </Route>
        <Route  path="/biologyi_ten">
           <Biologyi_Ten/>
        </Route>
        <Route  path="/chemistryi_ten">
           <Chemistryi_Ten/>
        </Route>
        <Route  path="/clvici_ten">
           <Clvici_Ten/>
        </Route>
        <Route  path="/computer_ten">
           <Computer_Ten/>
        </Route>
        <Route  path="/english_ten">
           <English_Ten/>
        </Route>
        <Route  path="/geographyi_ten">
           <Geographyi_Ten/>
        </Route>
        <Route  path="/geology_ten">
           <Geology_Ten/>
        </Route>
        <Route  path="/historyi_ten">
           <Historyi_Ten/>
        </Route>
        <Route  path="/islamichanafi_ten">
           <IslamicHanafi_Ten/>
        </Route>
        <Route  path="/islamicjafari_ten">
           <IslamicJafari_Ten/>
        </Route>
        <Route  path="/math_ten">
           <Math_Ten/>
        </Route>
        <Route  path="/physic_ten">
           <Physic_Ten/>
        </Route>
        <Route  path="/tafseer_ten">
           <Tafseer_Ten/>
        </Route>
        <Route  path="/dari_ten">
           <ZabanDari_Ten/>
        </Route>
        <Route  path="/pashto_ten">
           <ZabanPashto_Ten/>
        </Route>

        <Route  path="/eleventh_grade">
           <EleventhGrade/>
        </Route>
        <Route  path="/biologyi_eleven">
           <Biologyi_Eleventh/>
        </Route>
        <Route  path="/chemistryi_eleven">
           <Chemistryi_Eleventh/>
        </Route>
        <Route  path="/clvici_eleven">
           <Clvici_Eleventh/>
        </Route>
        <Route  path="/computer_eleven">
           <Computer_Eleventh/>
        </Route>
        <Route  path="/english_eleven">
           <English_Eleventh/>
        </Route>
        <Route  path="/geographyi_eleven">
           <Geographyi_Eleventh/>
        </Route>
        <Route  path="/historyi_eleven">
           <Historyi_Eleventh/>
        </Route>
        <Route  path="/islamichanafi_eleven">
           <IslamicHanafi_Eleventh/>
        </Route>
        <Route  path="/islamicjafari_eleven">
           <IslamicJafari_Eleventh/>
        </Route>
        <Route  path="/math_eleven">
           <Math_Eleventh/>
        </Route>
        <Route  path="/physic_eleven">
           <Physic_Eleventh/>
        </Route>
        <Route  path="/tafseer_eleven">
           <Tafseer_Eleventh/>
        </Route>
        <Route  path="/dari_eleven">
           <ZabanDari_Eleventh/>
        </Route>
        <Route  path="/pashto_eleven">
           <ZabanPashto_Eleventh/>
        </Route>

        <Route  path="/twelfth_grade">
           <TwelfthGrade/>
        </Route>
        <Route  path="/biologyi_twelve">
           <Biologyi_Twelve/>
        </Route>
        <Route  path="/chemistryi_twelve">
           <Chemistryi_Twelve/>
        </Route>
        <Route  path="/clvici_twelve">
           <Clvici_Twelve/>
        </Route>
        <Route  path="/computer_twelve">
           <Computer_Twelve/>
        </Route>
        <Route  path="/english_twelve">
           <English_Twelve/>
        </Route>
        <Route  path="/geographyi_twelve">
           <Geographyi_Twelve/>
        </Route>
        <Route  path="/historyi_twelve">
           <Historyi_Twelve/>
        </Route>
        <Route  path="/islamichanafi_twelve">
           <IslamicHanafi_Twelve/>
        </Route>
        <Route  path="/islamicjafari_twelve">
           <IslamicJafari_Twelve/>
        </Route>
        <Route  path="/math_twelve">
           <Math_Twelve/>
        </Route>
        <Route  path="/physic_twelve">
           <Physic_Twelve/>
        </Route>
        <Route  path="/tafseer_twelve">
           <Tafseer_Twelve/>
        </Route>
        <Route  path="/dari_twelve">
           <ZabanDari_Twelve/>
        </Route>
        <Route  path="/pashto_twelve">
           <ZabanPashto_Twelve/>
        </Route>
        <Route  path="/scondary">
           <Scondary/>
        </Route>
        <Route  path="/primary">
           <Primary/>
        </Route>
        <Route path="/grades">
           <Grades />
        </Route>
        <Route path="/books">
           <Books />
        </Route>
        <Route path="/continue">
           <Continue />
        </Route>
        <Route  path="/about">
           <About />
        </Route>
        <Route path="/contact">
           <Contact />
        </Route>
        <Route path="/dari">
           <Dari />
        </Route>
        <Route path="/pashto">
           <Pashto />
        </Route>
      </Switch> 
      </div>
    </Router>
  );
}

export default App;
