import { AuthContext } from "../../context/AuthContext";
import {useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import "./Grades.css"
import sanaf from "../../assets/sanaf.png";
import images from "../../assets/images.png";
import image from "../../assets/Group_158_a@2x.png";
import im from "../../assets/gradesvg.png";
import kk from "../../assets/ls.png";
import React from "react";
import { Link, useLocation } from "react-router-dom";
<link rel="stylesheet" href="Grades.css" />;

const Grads = ({ t },props) => {
  

  const location = useLocation();
  const locationData = location.state;
  const grades = locationData.grades;
  const school_path = locationData.school_path;

      // const navigation = useNavigate();
//   if (userInfo === null) {
//     return navigation("/");
//   } else if (isLoading) {
//     return <h1>Loading.....</h1>;
//   } else if(userInfo !== null){
  return (
    <div  className="all-grade">
      <div className="section-one-grades">
      <img className="top-svg-gardes" src={im} />
      </div>
      <div className="section-two-grades">
     <Link to="/section"><img className="flesh-image-grade" src={image} /></Link> 
      </div>

      <div className="section-three-grades">
      <div className="one-gardes">
        <div className="one-one-grades">
        <span className='p-one-grade'>{t("grads1")} </span>
          <br />
          <span className='p-two-grade'>{t("grads2")}</span>
        <div className="button-grade">
          {grades.map((item) => {
            return (
              <Link
                className="link-grade"
                to="/books"
                state={{ 
                subjects: item.subjects,
                grade_path: school_path + item.grade_path,
              }}
              >
                <img className="sanaf-grade" src={sanaf} />
                <div className="li-grade">{item.label}</div>
              </Link>
            );
          })}
        </div>
        </div>
         <img id="svg-one-grade" className="svg-one-grade" src={kk} />
        </div>
        <div className="two-gardes">
        <img   id="svg-two-grade" className="svg-two-grade" src={kk} />
        <img id="image-grade" className="image-grade" src={images} />
        </div>
      </div>
    </div>
  );
        // }
};
export default  withNamespaces()(Grads) ;


