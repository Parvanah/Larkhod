// import React from 'react'
// import './Grad.css';

//  const Grad = () => {
//  return (
//     <div>
//     </div>
//     )
// }

//  export default Grad;
import * as React from "react";
import { useRef } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import sanaf from "./assets/sanaf.png";
import images from "./assets/images.png";
import image from "./assets/Group_158_a@2x.png";
import line from "./assets/Line 117.png";
import Gimgae from "./assets/Group 483.png";
import pathimg from "./assets/Path 968.png";
import { Link, useLocation } from "react-router-dom";
import JSONFiles from './Json Files/SchoolSubjects.json';
import { AuthContext } from "../App/context/AuthContext";
import {useContext } from 'react';

import "./Grades.css";
const Grads = (props) => {
  const { t } = useTranslation();
  var data = JSONFiles.dari_curriculum ;
  var primary = data.primary.grades;
  var secondary = data.secondary.grades;
  var high_school = data.high_school.grades;
  const {currentState,
    setCurrentState 
    } = useContext(AuthContext);
    const [srollState, setScrollState] = React.useState();
    const bottom = useRef(null);
    const top = useRef(null)
    const scrollBottom = ()=>{
     bottom.current.scrollIntoView({behavier: "smooth"});
     setScrollState("bottom")
  
    }
    const scrollTop = ()=>{
      top.current.scrollIntoView({behavier: "smooth"});
      setScrollState("top")
     }
   return (

        <div className='all-grade-n'>
     <div className="all-grade-N">
    <div> 
      <Link to="/Header"><img className="flesh-image-grade-b" src={image} /></Link> 
      </div>
     <div> 
       <div className="grade-container">
          <span className='p-one-grade-n'>{t("grads.1")} </span>
          <br />
          <span className='p-two-grade-n'>{t("grads.2")}</span>
        </div>
        <div id="class-container-n"  ref={top}>
              <div className="button-grade-N">
                {primary.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"
                      to="/books"
                state={{ subjects: item.subjects }}
                    >
                      <img className="sanaf-grade-n" src={sanaf} />
                      <div className="li-grade-n"  onClick={()=>setCurrentState(item.label)}>{item.label}</div>
                    </Link>
                  );
                })}
              </div>
              <div className="button-grade-N">
                {secondary.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"  
                      to="/books"
                      state={{ subjects: item.subjects }}
                    >
                      <img className="sanaf-grade" src={sanaf} />
                      <div className="li-grade-n"  onClick={()=>setCurrentState(item.label)}>{item.label}</div>
                    </Link>
                  );
                })}
              </div>
              <div className="button-grade-N">
                {high_school.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"  
                      to="/books"
                      state={{ subjects: item.subjects }}
                    >
                      <img className="sanaf-grade-n" src={sanaf} />
                      <div className="li-grade-n" onClick={()=>setCurrentState(item.label)}>{item.label}</div>
                    </Link>
                  );
                })}
              </div>
        </div>
       <div>
       <img src={line} className="line-g" />
       </div>
       <div>
       <img src={pathimg} className="pathimg-G"  onClick={()=>{
      if(srollState == "bottom"){
        scrollTop()
      }else{
        scrollBottom()
      }
    }}/>
       </div>
      
       
        </div>
        <div className="icon-grade">
        <img src={ Gimgae}  className="Gimage" /> 
       </div>
   </div>
   </div> 
   )
}
export default Grads;

