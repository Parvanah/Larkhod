import logo from './assets/PNG_Format.png';
import dot from './assets/dot_one.png'; 
import selesh from './assets/Group_158_.png';
import React from 'react'
import "./About.css"
import { Link, useNavigate } from "react-router-dom";
 <link rel="stylesheet" href="./About.css" />;

const About = () => {
  return (
    <div id='all-section'>
      <div id='section-one'>
      <Link to="/header"><img id="selesh" src={selesh}/></Link>
      <img className='dot' src={dot}/>
      </div>
        <div id='section-two'>
        <img id="logoooo" src={logo}/>
        <div className='about'>
          <h2 id='title'>درباره ما</h2>
          <p id='paragraph'> لارخود یک پلتفورم آموزش آنلاین است که به دلیل وضعیت نا مناسب تعلیم و تحصیل برای قشر اناث در افغانستان ایجاد شده است تا دختران این سرزمین از حق تعلیم و تحصیل محروم نباشن.لارخود یک پلتفورم آموزش آنلاین است که به دلیل وضعیت نا مناسب تعلیم و تحصیل برای قشر اناث در افغانستان ایجاد شده است تا دختران این سرزمین از حق تعلیم و تحصیل محروم نباشن.لارخود یک پلتفورم آموزش آنلاین است که به دلیل وضعیت نا مناسب تعلیم و تحصیل برای قشر اناث در افغانستان ایجاد شده است تا دختران این سرزمین از حق تعلیم و تحصیل محروم نباشن.لارخود یک پلتفورم آموزش آنلاین است که به دلیل وضعیت نا مناسب تعلیم</p>
        </div>
        </div>
        <img id="section-three" src={dot}/>
    </div>
  )
}
export default About