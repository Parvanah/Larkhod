
import { FaUser } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";

import img1 from '../src/App/assets/logo.png';
import img from '../src/App/assets/larg.png';
import imgg from '../src/App/assets/smal.png';


<link rel="stylesheet" href="./Header.css" />;
const Header = () => {
  return (
    <div className="full">
      <nav className="header">
        <Link to="/header"></Link>
        <div className="nav">
          <ul className="ul">
            <li className="li">
              <Link className="link_nav" to="/section">
                بخش ها
              </Link>
            </li>
            <hr className="vl" />
            <li className="li">
              <Link className="link_nav" to="/grad">
                صنف ها
              </Link>
            </li>
            <hr className="vl" />
            <li className="li">
              <Link className="link_nav" to="/book">
                کتاب ها
              </Link>
            </li>
            <hr className="vl" />
            <li className="li">
              <Link className="link_nav" to="/continue">
                ادامه
              </Link>
            </li>
            <hr className="vl" />
            <li className="li">
              <Link className="link_nav" to="/about">
                درباره ما
              </Link>
            </li>
            <hr className="vl" />
            <li className="li">
              <Link className="link_nav" to="/Suggestion">
                نظریات
              </Link>
            </li>
            <hr className="vi" />
            {/* <div className="contact"></div> */}
          </ul>

          <button className="button">
            <Link className="link_nav" to="/dari">
              زبان دری
            </Link>
          </button>
          <button className="button">
            <Link className="link_nav" to="/pashto">
              پښتو ژبه
            </Link>
          </button>

          <div className="icon">
            <Link className="link_nav" to="/changeprofile">
              <FaUser />
            </Link>
          </div>
        </div>
      </nav>
      <div className='home'>	
      <Link to="/section">
      	<svg class="Path_39" viewBox="385.11 697.15 30.158 16.435">
				<path id="Path_39" d="M 415.2678833007812 647.1500854492188 L 400.18896484375 663.585205078125 L 385.1099853515625 647.1500854492188 L 393.4033813476562 647.1500854492188 L 400.18896484375 654.5338745117188 L 406.9443359375 647.1500854492188 L 415.2678833007812 647.1500854492188 Z">
				</path>
			</svg></Link>	
		
    <div className='images_paragraph'>
    <div>
	<img className='imgg' src={imgg}/>
    <img className='imgone' src={img1}/>
	<img className='imggg' src={img}/>
            
    </div>
    <div >
		<samp className='paragraph'>
     سفر زیبای تعلیمی خود را 
	 </samp>
     <samp className='paragraph_1'><br /> !با ما ادامه دهید</samp> 
     </div>
<div className='space'></div>
     
</div>

<svg className='Path_7' viewBox="131.89 248.487 1920.661 112.903">
<linearGradient id="Union_1_dg" spreadMethod="pad" x1="0.5" x2="0.912" y1="0" y2="1.944">
			<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
			<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
			</linearGradient>
				<path id="Path_7" d="M 1052.548828125 411.3898620605469 L 131.8900146484375 411.3898620605469 L 131.8900146484375 286.3383178710938 C 770.7160034179688 235.870361328125 1413.725708007812 235.870361328125 2052.550537109375 286.338134765625 L 2052.548828125 911.3898620605469 Z">
				</path>
			</svg> 
			{/* <Link className="" to="/login">
			<button className='Login_button'>ورود/ایجاد حساب کاربری</button>
              </Link> */}
			 
   </div>
    </div>
  );
};

export default Header;
