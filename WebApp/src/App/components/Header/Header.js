import { useNavigate } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { useState } from "react";
import img1 from "../../assets/logo.png";
import img from "../../assets/larg.png";
import imgg from "../../assets/smal.png";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

<link rel="stylesheet" href="./Header.css" />;
const Header = ({ t }, props) => {
  const { Loggout, userInfo, isLoading } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false);
  const {
    currentState,
    setCurrentState,
    currentBook,
    setCurrentBook,
    currentLesson,
    setCurrentLesson,
    currentpart,
    setCurrentpart,
  } = useContext(AuthContext);

  console.log(currentLesson);
  console.log(currentpart);
  var nav;
  var status;
  if (currentLesson == "lesson") {
    nav = "/lessons";
    status = { lessons: currentpart, title: " مضمون " + currentBook };
  } else {
    nav = "/unit";
    status = { units: currentpart };
  }
  const navigation = useNavigate();
  if (userInfo === null) {
    return navigation("/");
  } else if (isLoading) {
    return <h1>Loading.....</h1>;
  } else if (userInfo !== null) {
    return (
      <div className="full_header">
        <nav className="header">
          <Link to="/header"></Link>
          <div className="nav_header">
            <ul className="ul_header">
              <li className="li_header">
                <Link className="link_nav_header" to="/section">
                  {t("header3")}
                </Link>
              </li>
              <hr className="vl_header" />
              <li className="li_header">
                <Link className="link_nav_header" to="/grad">
                  {t("header4")}
                </Link>
              </li>
              <hr className="vl_header" />
              <li className="li_header">
                <Link className="link_nav_header" to="/book">
                  {t("header5")}
                </Link>
              </li>
              <hr className="vl_header" />
              <li className="li_header">
                <Link className="link_nav_header" to={nav} state={status}>
                  {t("header6")}
                </Link>
              </li>
              <hr className="vl_header" />
              <li className="li_header">
                <Link className="link_nav_header" to="/about">
                  {t("header7")}
                </Link>
              </li>
              <hr className="vl_header" />
              <li className="li_header">
                <Link className="link_nav_header" to="/Suggestion">
                  {t("header8")}
                </Link>
              </li>
              <hr className="vi_header" />
            </ul>
            <div
              className="icon_header"
              onClick={() => setOpenProfile((prev) => !prev)}
            >
              <FaUser />
            </div>
            {openProfile && (
              <div className="flex flex-col dropDownProfile">
                <ul className="flex flex-col gap-4">
                  <Link to="/changeprofile">
                    {" "}
                    <li className="changefrofilr_button_header">
                      عکس نمایه
                    </li>{" "}
                  </Link>
                  <li className="changefrofilr_button_header">
                    {" "}
                    <Link to="/" onClick={() => Loggout()}>
                      <input type="button" value="خروج" />
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
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
            <div>
              <img className="imgg_home" src={imgg} />
              <img className="img_one_home" src={img1} />
              <img className="imggg_home" src={img} />
            </div>
            <div>
              <samp className="paragraph_home">{t("header1")}</samp>
              <samp className="paragraph_1_home">
                <br /> {t("header2")}
              </samp>
            </div>
            <div className="space_home"></div>
          </div>

          <svg
            className="home_svg_one"
            viewBox="131.89 248.487 1920.661 112.903"
          >
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
          </svg>
        </div>
      </div>
    );
  }
};
export default withNamespaces()(Header);
