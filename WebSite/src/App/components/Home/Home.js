import { withNamespaces } from "react-i18next";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import React from "react";
import img1 from "../../assets/logo.png";
import img from "../../assets/larg.png";
import imgg from "../../assets/smal.png";
import Path from "../../assets/Path 2777.png";
import bottomHome from "../../assets/Path_8.png";
import "./Home.css";
const Home = ({ t }, props) => {
  return (
    <div className="Home-wrapper">
      <div className="all_home">
        <div className="section_one_home">
          <img className="section_one_image_one_home" src={img1} />
        </div>
        <div className="section_two_home">
          <img className="section_two_image_one_home" src={imgg} />
          <div className="section_two_paragraph_home">
            <samp className="section_two_para_one_home">{t("header1")}</samp>
            <samp className="section_two_para_two_home">
              <br /> {t("header2")}
            </samp>
          </div>
          <img className="section_two_image_two_home" src={img} />
        </div>
        <div className="section_three_home">

          <img src={bottomHome} alt="botomHome" className="section_three_image_one_home" />
          <Link to="/section">
            <img src={Path} alt="Path" className="section_three_image_two_home" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default withNamespaces()(Home);
