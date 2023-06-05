import { GiHamburgerMenu } from 'react-icons/gi';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { FaUser } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
import img1 from '../../assets/logo.png';
import img from '../../assets/larg.png';
import imgg from '../../assets/smal.png';
import topimag from '../../assets/logo_3.png';
import icon from '../../assets/Group_168.png';
import middleimg from '../../assets/logo_2.png'
// import topimag from '../src/App/assets/White_PNG_Format_bt.png';

<link rel="stylesheet" href="./Header.css" />;
const Header = (props) => {
  const [show,setShow]=useState(false);
  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <div className="full_header">
    <nav className="header">
        <Link to="/header"></Link>
        <div className="nav_header">
          <ul className="ul_header">
            <li className="li_header">
              <Link className="link_nav_header" to="/section">
              {t("header.3")}
              </Link>
            </li>
            <hr className="vl_header" />
            <li className="li_header">
              <Link className="link_nav_header" to="/grad">
              {t("header.4")}
              </Link>
            </li>
            <hr className="vl_header" />
            <li className="li_header">
              <Link className="link_nav_header" to="/book">
              {t("header.5")}
              </Link>
            </li>
            <hr className="vl_header" />
            <li className="li_header">
              <Link className="link_nav_header" to="/continue">
              {t("header.6")}
              </Link>
            </li>
            <hr className="vl_header" />
            <li className="li_header">
              <Link className="link_nav_header" to="/about">
              {t("header.7")}
              </Link>
            </li>
            <hr className="vl_header" />
            <li className="li_header">
              <Link className="link_nav_header" to="/Suggestion">
              {t("header.8")}
              </Link>
            </li>
            <hr className="vi_header" />
            {/* <div className="contact"></div> */}
          </ul>
          <div className="icon_header">
            <Link className="link_nav_header" to="/changeprofile">
              <FaUser />
            </Link>
          </div>
        </div>
    </nav>
    <div className='home'>	
      <Link to="/section">
      	<svg class="home_svg" viewBox="385.11 697.15 30.158 16.435">
				<path id="home_svg" d="M 415.2678833007812 647.1500854492188 L 400.18896484375 663.585205078125 L 385.1099853515625 647.1500854492188 L 393.4033813476562 647.1500854492188 L 400.18896484375 654.5338745117188 L 406.9443359375 647.1500854492188 L 415.2678833007812 647.1500854492188 Z">
				</path>
			</svg></Link>	
		
    <div className='images_paragraph_home'>
    <div>
	<img className='imgg_home' src={imgg}/>
    <img className='img_one_home' src={img1}/>
	<img className='imggg_home' src={img}/>
            
    </div>
    <div >
		<samp className='paragraph_home'>
    {t("header.1")}
	 </samp>
     <samp className='paragraph_1_home'><br />  {t("header.2")}</samp> 
     </div>
<div className='space_home'></div>
     
</div>

<svg className='home_svg_one' viewBox="131.89 248.487 1920.661 112.903">
<linearGradient id="Union_1_dg" spreadMethod="pad" x1="0.5" x2="0.912" y1="0" y2="1.944">
			<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
			<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
			</linearGradient>
				<path id="home_svg_one" d="M 1052.548828125 411.3898620605469 L 131.8900146484375 411.3898620605469 L 131.8900146484375 286.3383178710938 C 770.7160034179688 235.870361328125 1413.725708007812 235.870361328125 2052.550537109375 286.338134765625 L 2052.548828125 911.3898620605469 Z">
				</path>
			</svg> 
    </div>
    <div className="mobile">
        <div className="top">
        <img src={topimag}/>
          <h1>لارښود - Larkhod</h1>
          <div className="icon_header">
            <Link className="link_nav_header" to="/changeprofile">
              <FaUser />
            </Link>
          </div>
         <div>
         <div className={show?'sidebar1':'sidebar'}>
          <ul>
            <div className="menu" onClick={()=>setShow(!show)}>
            <GiHamburgerMenu className="icon" />
            </div>
            <li className="li_header">
              <Link className="link_nav_header" to="/section">
              {t("header.3")}
              </Link>
            </li>
            <li className="li_header">
              <Link className="link_nav_header" to="/grad">
              {t("header.4")}
              </Link>
            </li>
            <li className="li_header">
              <Link className="link_nav_header" to="/book">
              {t("header.5")}
              </Link>
            </li>
            <li className="li_header">
              <Link className="link_nav_header" to="/continue">
              {t("header.6")}
              </Link>
            </li>
            <li className="li_header">
              <Link className="link_nav_header" to="/about">
              {t("header.7")}
              </Link>
            </li>
            <li className="li_header">
              <Link className="link_nav_header" to="/Suggestion">
              {t("header.8")}
              </Link>
            </li>
          </ul>
          </div>
         </div>
        </div>
        <div className="middle">
          <img src={middleimg}/>
          <p>سفر زیبای تعلیمی خود را</p>
          <h1>با ما آغاز کنید</h1>
        </div>
        <div className="bottom">
          <svg className="Path_7" viewBox="131.89 248.487 359.958 74.042">
					<path id="Path_7" d="M 491.8476867675781 322.5292663574219 L 131.8900146484375 322.5292663574219
           L 131.8900146484375 265.6912231445312 C 251.6147155761719 242.7526550292969 372.12353515625 242.7526550292969 491.8480529785156 265.6911315917969
            L 491.8476867675781 322.5292663574219 Z">
					</path>
				</svg>
          </div>
        </div>
    </div>
  );
};

export default Header;
