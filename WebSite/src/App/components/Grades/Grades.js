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
  const grades =
    t("sectionlang") === "dari"
      ? locationData.Dari.grades
      : locationData.Pashto.grades;
  const school_path =
    t("sectionlang") === "dari"
      ? locationData.Dari.school_path
      : locationData.Pashto.school_path;
    const section_Name = t("sectionlang") === "dari"
      ? locationData.Dari.section_Name
      : locationData.Pashto.section_Name;

  // const navigation = useNavigate();
  //   if (userInfo === null) {
  //     return navigation("/");
  //   } else if (isLoading) {
  //     return <h1>Loading.....</h1>;
  //   } else if(userInfo !== null){
  return (
    <div className="alll_darde">
    <div className="all-grade">
<div className="section_one_garde">
<img className="top-svg-gardes" src={im} />
        <Link id="flesh-image-grade" to="/section">
          <img className="flesh-image-grade" src={image} />
      </Link>
</div>
<div className="section_two_garde">
<div className="section_two_one_garde" >
<img id="svg-two-grade" className="svg-two-grade" src={kk} />
</div>
<div className="section_two_two_garde">
<div className="one-gardes">
          <div className="one-one-grades">
            <span className="p-one-grade">{ t("sectionlang")=== "dari"? `${t("grads1")} ${section_Name}`: `${section_Name} ${t("grads1")} ` }</span>
            <br />
            <span className="p-two-grade">{t("grads2")} </span>
            <div className="button-grade">
              {grades.map((item) => {
                return (
                  <Link
                    className="link-grade"
                    to="/books"
                    state={{
                      subjects: item.subjects,
                      grade_path: school_path + item.grade_path,
                      grade_name: item.label 
                      
                    }}
                  >
                    <img className="sanaf-grade" src={sanaf} />
                    <div className="li-grade">{item.label}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
</div>
<div className="section_two_three_garde">
<img id="image-grade" className="image-grade" src={images} />
</div>
</div>
    </div>





    <div className="all-grade-mobile">
    <div className="section_one_garde-mobile">
    <img className="top-svg-gardes-mobile" src={im} />
        <Link id="flesh-image-grade-mobile" to="/section">
          <img className="flesh-image-grade-mobile" src={image} />
      </Link>
</div>
<div className="section_two_garde-mobile">
<div className="one-gardes">
          <div className="one-one-grades">
            <span className="p-one-grade">{ t("sectionlang")=== "dari"? `${t("grads1")} ${section_Name}`: `${section_Name} ${t("grads1")} ` }</span>
            <br />
            <span className="p-two-grade">{t("grads2")} </span>
            <div className="button-grade">
              {grades.map((item) => {
                return (
                  <Link
                    className="link-grade"
                    to="/books"
                    state={{
                      subjects: item.subjects,
                      grade_path: school_path + item.grade_path,
                      grade_name: item.label 
                      
                    }}
                  >
                    <img className="sanaf-grade" src={sanaf} />
                    <div className="li-grade">{item.label}</div>
                  </Link>
                );
              })}
            </div>
          </div>
 </div>
</div>
<div className="section_three_garde-mobile">
<img id="svg-two-grade-mobile" className="svg-two-grade-mobile" src={kk} />
<img id="image-grade" className="image-grade-mobile" src={images} />

</div>
    </div>
    </div>
  );
};
export default  withNamespaces()(Grads) ;



