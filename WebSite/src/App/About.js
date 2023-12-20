import { AuthContext } from "./context/AuthContext";
import {useContext } from 'react';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import logo from './assets/blueo.png';
import dot from './assets/dot_one.png'; 
import selesh from './assets/Group_158_.png';
import React from 'react'
import img3 from '../App/assets/svg_phone.png';
import img1 from '../App/assets/logo_1.png';  
import "./About.css"
import { Link, useNavigate } from "react-router-dom";
 <link rel="stylesheet" href="./About.css" />;

const About = ({ t }) => {
  const { userInfo, isLoading } = useContext(AuthContext);


          // const navigation = useNavigate();
//   if (userInfo === null) {
//     return navigation("/");
//   } else if (isLoading) {
//     return <h1>Loading.....</h1>;
//   } else if(userInfo !== null){
  return (
      <div id="all_section_about" className='all_section_about'>
        <div className="section-one-and-two-grades">
        <div className="section-zero">
        <img className="image_phone_one_about" src={img3}/>
      <Link to="/header"><img className="selesh_aboutt"  src={selesh}/></Link>
        </div>
      <div className="section_one_about"> 
      <Link to="/home"><img className="selesh_about"  src={selesh}/></Link>
        <img className="image_phone_three_about" src={img1}/> 
      <img className="dot_about" src={dot}/>
      </div>
        </div>
      

        <div className="section_two_about">
        <img className="logoooo_about" src={logo}/>
        <div className='about'>
          <h1 className="title_about" id=''>{t("about1")}</h1>
          <p className="paragraph_about">{t("about2")}</p>
        </div>
        </div>

<div className="gg">
        <div className="section_three_about" >
        <img  className="dott-about" src={dot}/>
        <svg className="phone_svg_two_about" id='phone_svg_two_about' viewBox="188.817 59.877 398.097 126.488">
		   <path  d="M 586.9140625 186.3651733398438 C 569.2977294921875 182.0558471679688 549.8399658203125 163.5489196777344 538.929931640625 152.1982421875 C 527.2001953125 139.9925231933594 518.16015625 124.440559387207 516.9344482421875 107.557502746582 C 516.3968505859375 100.1481704711914 517.488525390625 92.34755706787109 521.6719970703125 86.207763671875 C 525.8541259765625 80.06661224365234 533.5972900390625 76.01994323730469 540.8369140625 77.69168853759766 C 546.3486328125 78.96533966064453 550.7210693359375 83.20217132568359 553.9495849609375 87.84942626953125 C 558.46142578125 94.34490966796875 561.349365234375 102.3274688720703 560.218017578125 110.1554107666016 C 558.1085205078125 124.7648086547852 542.2322998046875 134.3493194580078 527.47802734375 133.9047088623047 C 512.724853515625 133.4587249755859 499.2961730957031 125.396842956543 487.689697265625 116.2760467529297 C 467.6628723144531 100.539421081543 450.8701171875 83.97648620605469 426.9361877441406 74.17032623291016 C 403.6875610351562 64.64599609375 378.4772033691406 60.21216201782227 353.4091186523438 59.9139289855957 C 320.3503112792969 59.51993179321289 285.3612060546875 62.1602668762207 253.6964416503906 73.60260009765625 C 221.7443389892578 85.1502685546875 167.3084259033203 120.9096374511719 197.7761688232422 160.4133605957031 C 215.0422668457031 182.800048828125 247.4581298828125 186.6360321044922 272.0884399414062 175.4495391845703 C 278.448486328125 172.5615997314453 283.2489013671875 168.1565093994141 288.0028686523438 163.4380950927734">
       
    </path>
	</svg>
       </div>
       </div>
    </div>
  )
// }
}
export default  withNamespaces()(About) ;