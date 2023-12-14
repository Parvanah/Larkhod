import { useNavigate } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { FaUser } from "react-icons/fa";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { useState } from "react";
import img1 from "../../assets/logo.png";
import img from "../../assets/larg.png";
import imgg from "../../assets/smal.png";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import topimag from "../../assets/logo_3.png";
import middleimg from "../../assets/logo_2.png";
import arrowOpen from "../../assets/Path-1005.png";
import arrowClose from "../../assets/Path-1006.png";
import { ImCross } from "react-icons/im";
import i18n from "../../../i18n";
import bottomHome from "../../assets/Path_7.png";
import "./Home.css";
{
  /* <link rel="stylesheet" href="./Home.css" />; */
}
const Home = ({ t }, props) => {
  return (
    <div className="Home-wrapper">
      <div className="home">
        <Link to="/section">
          <svg class="home_svg" viewBox="385.11 697.15 30.158 16.435">
            <path
              id="home_svg"
              d="M 415.2678833007812 647.1500854492188 L 400.18896484375 663.585205078125 L 385.1099853515625 647.1500854492188 L 393.4033813476562 647.1500854492188 L 400.18896484375 654.5338745117188 L 406.9443359375 647.1500854492188 L 415.2678833007812 647.1500854492188 Z"
            ></path>
          </svg>
        </Link>
        <div className="images_paragraph_home">
          <div className="imgg_home">
            <img src={imgg} />
          </div>
          <div className="IconAndText">
            <img className="img_one_home" src={img1} />
            <div>
              <samp className="paragraph_home">{t("header1")}</samp>
              <samp className="paragraph_1_home">
                <br /> {t("header2")}
              </samp>
            </div>
          </div>
          <div className="imgg_home">
            <img src={img} />
          </div>
        </div>
        {/* <svg className="home_svg_one" viewBox="131.89 248.487 1920.661 112.903">
          <linearGradient
            id="Union_1_dg"
            spreadMethod="pad"
            x1="0.5"
            x2="0.912"
            y1="0"
            y2="1.944"
          >
            <stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
            <stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
          </linearGradient>
          <path
            id="home_svg_one"
            d="M 1052.548828125 411.3898620605469 L 131.8900146484375 411.3898620605469 L 131.8900146484375 286.3383178710938 C 770.7160034179688 235.870361328125 1413.725708007812 235.870361328125 2052.550537109375 286.338134765625 L 2052.548828125 911.3898620605469 Z"
          ></path>
        </svg> */}
        <img src={bottomHome} alt="botomHome" className="home_svg_one" />
      </div>
      {/* <div className="middle">
        <img src={middleimg} />
        <p>سفر زیبای تعلیمی خود را</p>
        <h1>با ما آغاز کنید</h1>
      </div> */}
    </div>
  );
};
export default withNamespaces()(Home);
