import "./Home.css";
import img1 from '../assets/logo.png';
import img from '../assets/larg.png';
import imgg from '../assets/smal.png';
import { Link } from "react-router-dom";
import React from 'react'
<link rel="stylesheet" href="Home.css" />



const Home = () => {
  return (
   <div className='home'>		
			<svg class="Path_39" viewBox="385.11 647.15 30.158 16.435">
				<path id="Path_39" d="M 415.2678833007812 647.1500854492188 L 400.18896484375 663.585205078125 L 385.1099853515625 647.1500854492188 L 393.4033813476562 647.1500854492188 L 400.18896484375 654.5338745117188 L 406.9443359375 647.1500854492188 L 415.2678833007812 647.1500854492188 Z">
				</path>
			</svg>
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

<svg className='Path_7' viewBox="131.89 168.487 1920.661 162.903">
<linearGradient id="Union_1_dg" spreadMethod="pad" x1="0.5" x2="0.912" y1="0" y2="1.944">
			<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
			<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
			</linearGradient>
				<path id="Path_7" d="M 1052.548828125 411.3898620605469 L 131.8900146484375 411.3898620605469 L 131.8900146484375 286.3383178710938 C 770.7160034179688 235.870361328125 1413.725708007812 235.870361328125 2052.550537109375 286.338134765625 L 2052.548828125 911.3898620605469 Z">
				</path>
			</svg> 
			<Link className="" to="/login">
			<button className='Login_button'>ورود/ایجاد حساب کاربری</button>
              </Link>
			 
   </div>
  )
}
export default Home
