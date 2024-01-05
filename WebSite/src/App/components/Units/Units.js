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
  const grade_name = locationData.grade_name;

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
      <div className="section_one_unit">
        <div className="flesh_unit">
          <img
            className="flesh-image-grade-U"
            src={imageU}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="title_unit">
          <h1 id="header-gradename">{grade_name}</h1>
          <p className="h2">{t("units2")}</p>
        </div>
      </div>
      <div className="section_tow_unit">
        <div onClick={() => slidLeft()} className="arrow_unit">
          <img src={leftClick} alt="photo" />
        </div>
        <div className="m-section" id="m-section">
          {units.map((item) => {
            return (
              <Link
                to="/lessons"
                state={{
                  lessons: item.lessons,
                  title: `${grade_name} , ${item.label}`,
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
        <div onClick={() => slidRight()} className="arrow_unite">
          <img src={rightClick} />
        </div>
      </div>
      <div className="section_three_unit">
        <p className="p_unit">{t("units3")}</p>
        <div className="imagel_unite">
          <img src={imagel} className="imagel_unit" />
        </div>
      </div>
    </div>
  );
  // }
};

export default withNamespaces()(Units);
