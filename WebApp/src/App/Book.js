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
const Book = ({ t }) => {

  var data;
  if (t("sectionlang") == "dari") {
    data = JsonFiles.dari_curriculum;
  } else {
    data = JsonFiles.pashto_curriculum;
  }

  const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	  }
  
  var primary = data.primary.grades;
  var secondary = data.secondary.grades;
  var high_school = data.high_school.grades;
 
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
 <div className='Download-all-b'>
     <div className="Bookheader">
       <div id="flesh-image-grade-B" > <Link to="/Header"><img className="flesh-image-grade-B" src={image5} /></Link> </div>
        <div className="icon-book">
         <img src={bookH}  className="bookH"/>
        </div>
      <div className='buttom-books'> 
      <div className='p-container-books'>  

{/* // <<<<<<< grad_update23_july */}
{/* //          <p className='p-books'> کتاب های مورد نظر صنف خود را</p>
//          <p id='p-books'>از اینجا انتخاب  کنید</p>
//          <p className='p-books'>{t("book1")}</p> */}
{/* // ======= */}
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
                state={{ subjects: item.subjects }}
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
                      to="/dowloading"
                      state={{ subjects: item.subjects }}
                    >
                      <img className="sanaf-grade" src={sanaf} />
{/* // <<<<<<< grad_update23_july
                      <div className="li-grade-b" src={sanaf}>{t("book2")} {item.label}</div>
// =======
//                       <div className="li-grade-n" src={sanaf}>{t("book2")} {item.label} {t("book3")}</div>
// >>>>>>> main */}
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
                      state={{ subjects: item.subjects }}
                    >
                      <img className="sanaf-grade-n" src={sanaf} />
{/* // <<<<<<< grad_update23_july
                      <div className="li-grade-b" src={sanaf}> {t("book2")}  {item.label}</div>
// =======
//                       <div className="li-grade-n" src={sanaf}> {t("book2")}  {item.label} {t("book3")}</div>
// >>>>>>> main */}
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
 </div>
  )
}
export default  withNamespaces()(Book) ;
