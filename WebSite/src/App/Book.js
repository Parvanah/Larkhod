import { AuthContext } from "./context/AuthContext";
import {useContext } from 'react';
import { useNavigate } from "react-router-dom";
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import * as React from "react"
import { useRef } from 'react';
import JSONFiles from './Json Files/SchoolSubjects.json';
import { Link, useLocation } from "react-router-dom"
import image5 from "./assets/Group_158_a@2x.png";
import sanaf from "./assets/sanaf.png";
import bookH from "./assets/Group 463.png";
import pathimg from "./assets/Path 968.png";
import line from "./assets/Line 117.png";
import JsonFiles from "./Json Files/SchoolSubjects.json";

import './books.css';
const base_path = "https://larkhoad.s3.ap-south-1.amazonaws.com";
const Book = ({ t }) => {
  const { userInfo, isLoading } = useContext(AuthContext);
  var data;
  if (t("sectionlang") == "dari") {
    data = JsonFiles.dari_curriculam;
  } else {
    data = JsonFiles.pashto_curriculam;
  }

  const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	  }
  
  var primary = data.primary.grades;
  var primary_path = base_path + data.primary.base_path ;
  var secondary = data.secondary.grades;
  var secondary_path = base_path + data.secondary.base_path;
  var high_school = data.high_school.grades;
  var high_school_path = base_path + data.high_school.base_path;
 
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

             // const navigation = useNavigate();
//   if (userInfo === null) {
//     return navigation("/");
//   } else if (isLoading) {
//     return <h1>Loading.....</h1>;
//   } else if(userInfo !== null){
  return (
 <div className='Download-all-b'>
     <div className="Bookheader">
       <div id="flesh-image-grade-B" > <Link to="/Header"><img className="flesh-image-grade-B" src={image5} /></Link> </div>
        <div className="icon-book">
         <img src={bookH}  className="bookH"/>
        </div>
      <div className='buttom-books'> 
      <div className='p-container-books'>  


          {/* <p className='p-books'> کتاب های مورد نظر صنف خود را</p>
         <p id='p-books'>از اینجا انتخاب  کنید</p> */}
         {/* <p className='p-books'>{t("book1")}</p> */}
 
         <p className='p-books'>{t("book1")}</p>
         <p id='p-books'> {t("book4")}</p>
      </div>
    <div id='h-books'>
    <div ref={top} >
    {primary.map((item) => {
      
                  return (
                    <Link
                      className="link-grade-n"
                      to="/downloading"
                state={{ subjects: item.subjects , grade_path :  primary_path + item.grade_path , grade_name: item.label}}
                    >
                      <img className="sanaf-grade-n" src={sanaf} />
                      <div className="li-grade-b"  src={sanaf} >{t("book2")} {item.label} {t("book3")}</div>
                    </Link>
                  );
                })}
    </div>
                 <div ref={bottom}>
                {secondary.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"  
                      to="/downloading"
                      state={{ subjects: item.subjects , grade_path :  secondary_path + item.grade_path , grade_name: item.label }}
                    >
                      <img className="sanaf-grade" src={sanaf} />

                      {/* // <div className="li-grade-b" src={sanaf}>{t("book2")} {item.label}</div> */}

                      <div className="li-grade-n" src={sanaf}>{t("book2")} {item.label} {t("book3")}</div>

                    </Link>
                  );
                })}
              </div>
              <div > 
                {high_school.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"  
                      to="/downloading"
                      state={{ subjects: item.subjects , grade_path :  high_school_path + item.grade_path , grade_name: item.label}}
                    >
                      <img className="sanaf-grade-n" src={sanaf} />
{/*  <div className="li-grade-b" src={sanaf}> {t("book2")}  {item.label}</div> */}

                      <div className="li-grade-n" src={sanaf}> {t("book2")}  {item.label} {t("book3")}</div>

                    </Link>
                  );
                })}
                </div>
    </div> 
   
 <div id="line">
 <img src={line}  className="line"/>
 </div>
    
    <div id="line">
    <img src={pathimg} className="pathimg-b" onClick={()=>{
      if(srollState == "bottom"){
        scrollTop()
      }else{
        scrollBottom()
      }
    }}/>
    </div>
       </div>
      
       </div>
       <div className="BookheaderM">
       <div id="flesh-image-grade-BM" > <Link to="/Header"><img className="flesh-image-grade-B" src={image5} /></Link> </div>
       <div className='p-container-booksM'>  
          {/* <p className='p-books'> کتاب های مورد نظر صنف خود را</p>
         <p id='p-books'>از اینجا انتخاب  کنید</p> */}
         {/* <p className='p-books'>{t("book1")}</p> */}
 
         <p className='p-books'>{t("book1")}</p>
         <p id='p-books'> {t("book4")}</p>
      </div>
      <div className='buttom-booksM'> 
    <div id='h-booksM'>
    <div ref={top} >
    {primary.map((item) => {
      
                  return (
                    <Link
                      className="link-grade-n"
                      to="/downloading"
                state={{ subjects: item.subjects , grade_path :  primary_path + item.grade_path , grade_name: item.label}}
                    >
                      <img className="sanaf-grade-n" src={sanaf} />
                      <div className="li-grade-b"  src={sanaf} >{t("book2")} {item.label} {t("book3")}</div>
                    </Link>
                  );
                })}
    </div>
                 <div ref={bottom}>
                {secondary.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"  
                      to="/downloading"
                      state={{ subjects: item.subjects , grade_path :  secondary_path + item.grade_path , grade_name: item.label }}
                    >
                      <img className="sanaf-grade" src={sanaf} />

                      {/* // <div className="li-grade-b" src={sanaf}>{t("book2")} {item.label}</div> */}

                      <div className="li-grade-n" src={sanaf}>{t("book2")} {item.label} {t("book3")}</div>

                    </Link>
                  );
                })}
              </div>
              <div > 
                {high_school.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"  
                      to="/downloading"
                      state={{ subjects: item.subjects , grade_path :  high_school_path + item.grade_path , grade_name: item.label}}
                    >
                      <img className="sanaf-grade-n" src={sanaf} />
{/*  <div className="li-grade-b" src={sanaf}> {t("book2")}  {item.label}</div> */}

                      <div className="li-grade-n" src={sanaf}> {t("book2")}  {item.label} {t("book3")}</div>

                    </Link>
                  );
                })}
                </div>
    </div> 
   
 <div id="line">
 <img src={line}  className="line"/>
 </div>
    
    <div id="line">
    <img src={pathimg} className="pathimg-b" onClick={()=>{
      if(srollState == "bottom"){
        scrollTop()
      }else{
        scrollBottom()
      }
    }}/>
    </div>
       </div>
       <div className="icon-book">
         <img src={bookH}  className="bookH"/>
        </div>
       </div>
 </div>
  )
// }
}
export default  withNamespaces()(Book) ;
