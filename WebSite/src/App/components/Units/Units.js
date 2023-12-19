import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { withNamespaces } from "react-i18next";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Unit.css";
import sectionicon from "../../assets/Group_374.png";
import imageU from "../../assets/Group_158_a@2x.png";
import imagel from "../../assets/Shape.png";
import unitm from "../../assets/unitm.png";
import rightClick from "../../assets/rightClick.png";
import leftClick from "../../assets/leftClick.png";

const Units = ({ t }) => {
  const { userInfo, isLoading } = useContext(AuthContext);
  // getting props that passed from Books to Unit
  const location = useLocation();
  const locationData = location.state;
  const units = locationData.units;
  const subject_path = locationData.subject_path;

  const navigate = useNavigate();
  const slidLeft = () => {
    const slider = document.getElementById("m-section");
    slider.scrollLeft = slider.scrollLeft - 160;
  };
  const slidRight = () => {
    const slider = document.getElementById("m-section");
    slider.scrollLeft = slider.scrollLeft + 160;
  };
  // const navigation = useNavigate();
  //   if (userInfo === null) {
  //     return navigation("/");
  //   } else if (isLoading) {
  //     return <h1>Loading.....</h1>;
  //   } else if(userInfo !== null){
  return (
    <div className="full_unit">
      <div className="units">
        <div className="t-section">
          <div className="svgArrow">
            <img
              className="flesh-image-grade-U"
              src={imageU}
              onClick={() => navigate(-1)}
            />
            {/* <img src={unitm} className="unitm" onClick={() => navigate(-1)} /> */}
          </div>

          <div id="laptop-top">
            <h1 id="p1">{t("units1")}</h1>
            <h2 className="h2">{t("units2")}</h2>

          </div>
        </div>
        <div className="unitWrapper">
          <div onClick={() => slidLeft()} className="arrow">
            <img src={leftClick} alt="photo" />
          </div>
          <div className="m-section" id="m-section">
            {/* <div id="ul"> */}
            {units.map((item) => {
              return (
                //with units
                <Link
                  to="/lessons"
                  state={{
                    lessons: item.lessons,
                    title: item.label,
                    unitPath: item.paths,
                    subject_path: subject_path,
                  }}
                >
                  <img src={sectionicon} />
                  <h3>{item.label}</h3>
                </Link>
              );
            })}
          </div>
          <div onClick={() => slidRight()} className="arrow">
            <img src={rightClick} />
          </div>
        </div>
        <div className="last">
          <p>{t("units3")}</p>
          <div className="svg_wrapper">
            <img src={imagel} className="imagel" />
          </div>
        </div>
      </div>
      <div className="Munit">
        <div className="svgArrowM">
          <img
            className="flesh-image-grade-U"
            src={imageU}
            onClick={() => navigate(-1)}
          />
          <div className="t-sectionM">
            <div className="laptop-top">
              <h1 id="p1">{t("units1")}</h1>
              <h2>{t("units2")}</h2>
            </div>
          </div>
          {/* <img src={unitm}  className="unitm"  onClick={()=> navigate(-1)}  /> */}
        </div>

        <div className="unitWrapper_M">
          <div onClick={() => slidLeft()} className="arrowMU">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={13.435}
              height={28.158}
              // {...props}
            >
              <path
                fill="#fff"
                d="M16.435 0 0 15.079l16.435 15.079v-8.293l-7.384-6.786 7.384-6.755Z"
                data-name="Path 1006"
              />
            </svg>
          </div>
          <div className="m-section" id="m-section">
            <div id="ul">
              {units.map((item) => {
                return (
                  //with units
                  <Link
                    to="/lessons"
                    state={{
                      lessons: item.lessons,
                      title: " فصل "+ item.label,
                      unitPath: item.paths,
                      subject_path: subject_path,
                    }}
                  >
                    <img src={sectionicon} />
                    <h3>{item.label}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
          <div onClick={() => slidRight()} className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={13.435}
              height={27.158}
              // {...props}
            >
              <path
                fill="#fff"
                d="m0 0 16.435 15.079L0 30.158v-8.29l7.384-6.786L0 8.327Z"
                data-name="Path 1005"
              />
            </svg>
          </div>
        </div>
        <div className="lastMU">
          <div className="PMU">
            {" "}
            <p>{t("units3")}</p>
          </div>
          <div className="MUimage">
            <img src={imagel} className="imagelMU" />
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default withNamespaces()(Units);
