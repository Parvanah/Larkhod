import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { withNamespaces } from "react-i18next";
import JsonFiles from "../../Json Files/SchoolSubjects.json";
import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Sections.css";
import image4 from "../../assets/Group_158_bu.png";
import image1 from "../../assets/Group_201_ww@2x.png";
import image2 from "../../assets/Group_203@2x.png";
import image3 from "../../assets/Group_205@2x.png";
import shape1 from "../../assets/Shape-1.png";
import shape2 from "../../assets/shape-2.png";
import Shape3 from "../../assets/Shape-3.png";
import { basePath } from "../../BasePath/BasePath";
import dot from '../../../App/assets/dot_one.png';
import svgone from '../../../App/assets/section_one.png';
import svgtwo from '../../../App/assets/section_two.png';
const Section = ({ t }, props) => {
  const navigate = useNavigate();
  const { userInfo, isLoading } = useContext(AuthContext);
  const base_path = basePath;

  var dataDari = JsonFiles.dari_curriculam;

  var dataPashto = JsonFiles.pashto_curriculam;

  // const navigation = useNavigate();
  // if (userInfo == null) {
  //   return navigation("/");
  // } else if (isLoading) {
  //   return <h1>Loading.....</h1>;
  // } else {
  return (
    <div className="full-section">
      <div className="section">
        <div className="section_one_images">
        <div className="prevuse_section">
            <img className="prevuse" onClick={() => navigate("/home")} src={image4} />
            <img className="svgone_section" src={svgone} />
          </div>
          <img className="dot_section" src={dot} />
        </div>
        <div className="section_two_title">
          <div className="title_section">
            <h1 className="title_one_section">{t("section1")}</h1>
            <p className="title_two_section">{t("section2")}</p>
            <img className="svg-mobile-section-one" src={shape1} />
          </div>
        </div>
        {/* ul-section */}
        <ul className="section_three_ul">
        <li>
            <Link
              to="/grades"
              state={{
                Dari: {
                  grades: dataDari.primary.grades,
                  school_path: base_path + dataDari.primary.base_path,
                },
                Pashto: {
                  grades: dataPashto.primary.grades,
                  school_path: base_path + dataPashto.primary.base_path,
                },
              }}
            >
              <img src={image1} />
              <h1>{t("section3")}</h1>
              <p>{t("section4")}</p>
              <p>{t("section13")}</p>
              <p>{t("section14")}</p>
            </Link>
          </li>
          <li>
            <Link
              to="/grades"
              state={{
                Dari: {
                  grades: dataDari.secondary.grades,
                  school_path: base_path + dataDari.secondary.base_path,
                },
                Pashto: {
                  grades: dataPashto.secondary.grades,
                  school_path: base_path + dataPashto.secondary.base_path,
                },
              }}
            >
              <img className="imag_sectin_l" src={image2} />
              <h1>{t("section5")} </h1>
              <p>{t("section6")}</p>
              <p>{t("section11")}</p>
              <p>{t("section12")}</p>
            </Link>
          </li>
          <li>
            <Link
              to="/grades"
              state={{
                Dari: {
                  grades: dataDari.high_school.grades,
                  school_path: base_path + dataDari.high_school.base_path,
                },
                Pashto: {
                  grades: dataPashto.high_school.grades,
                  school_path: base_path + dataPashto.high_school.base_path,
                },
              }}
            >
              <img className="imag_sectin_l" src={image3} />
              <h1>{t("section7")} </h1>
              <p>{t("section8")}</p>
              <p>{t("section9")}</p>
              <p>{t("section10")}</p>
              <p></p>
            </Link>
          </li>
        </ul>
        <div className="section_four_images">
          <img className="dot_sectionn" src={dot} />
          <img className="svgtwo_section" src={svgtwo} />
          <img className="svg-mobile-section-two" src={Shape3} />
        </div>
      </div>









      {/* <div className="mobile-section">
        <div className="mob-sec-header">
          <div className="prevuse" onClick={() => navigate(-1)}>
            <img src={image4} />
          </div>
          <div id="title">
            <h1>{t("section1")}</h1>
            <p>{t("section2")}</p>
          </div>
          <div className="shape-1">
            <img src={shape1} />
          </div>
          <div className="shape-2">
            <img src={shape2} />
          </div>
        </div>
        <div className="mob-sec-article">
          <ul id="ul-section">
            <li>
              <Link
                to="/grades"
                state={{
                  Dari: {
                    grades: dataDari.primary.grades,
                    school_path: base_path + dataDari.primary.base_path,
                  },
                  Pashto: {
                    grades: dataPashto.primary.grades,
                    school_path: base_path + dataPashto.primary.base_path,
                  },
                }}
              >
                <img src={image1} />
                <h1>{t("section3")}</h1>
                <p>{t("section4")}</p>
              <p>{t("section13")}</p>
              <p>{t("section14")}</p>
              </Link>
            </li>
            <li>
              <Link
                to="/grades"
                state={{
                  Dari: {
                    grades: dataDari.secondary.grades,
                    school_path: base_path + dataDari.secondary.base_path,
                  },
                  Pashto: {
                    grades: dataPashto.secondary.grades,
                    school_path: base_path + dataPashto.secondary.base_path,
                  },
                }}
              >
                <img src={image2} />
                <h1>{t("section5")} </h1>
                <p>{t("section6")}</p>
              <p>{t("section11")}</p>
              <p>{t("section12")}</p>
              </Link>
            </li>
            <li>
              <Link
                to="/grades"
                state={{
                  Dari: {
                    grades: dataDari.high_school.grades,
                    school_path: base_path + dataDari.high_school.base_path,
                  },
                  Pashto: {
                    grades: dataPashto.high_school.grades,
                    school_path: base_path + dataPashto.high_school.base_path,
                  },
                }}
              >
                <img src={image3} />
                <h1>{t("section7")} </h1>
                <p>{t("section8")}</p>
              <p>{t("section9")}</p>
              <p>{t("section10")}</p>
                <p></p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mob-sec-bottom">
          <div className="shape-3">
            <img src={shape2} />
          </div>
          <div className="shape-4">
            <img src={Shape3} />
          </div>
        </div>
        <div />
      </div> */}
    </div>
  );
  //  }
};

export default withNamespaces()(Section);
