import { useNavigate } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import React, { Component, useEffect } from "react";
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
import Home from "../Home/Home";
import logoSideBar from "../../assets/logo_5.png";
import MobileArrowClose from "../../assets/Path 2777.png";
import MobileArrowOpen from "../../assets/Path 2778.png";

// import butimg from "../../assets/Path_7";
// import buttom_img from "../../assets/Path_7.png";
// import down_img from "../../assets/Path_39.png";
<link rel="stylesheet" href="./Header.css" />;

const Header = ({ t }, props) => {
  const navigate = useNavigate();
  const { Loggout, userInfo, isLoading } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false);
  const [isOpen, setIsOpen] = useState("none");
  const [isClose, setIsClose] = useState("flex");
  const [isOpenBookMenue, setIsOpenBookMenue] = useState(false);
  //const [isCloseBookMenue, setIsCloseBookMenue] = useState("flex");
  const options = [
    { name: "دری", value: "dari" },
    { name: "پښتو", value: "pashto" },
  ];
  const bookOptions = [t("header13"), t("header14")];
  const [selectedOption, setSelectedOption] = useState(
    t("sectionlang") === "pashto" ? options[1].name : options[0].name
  );
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
  const [sidebar, setSidebar] = useState("none");
  const handleSideBar = () => {
    if (sidebar === "none") {
      setSidebar("inline-block");
    } else {
      setSidebar("none");
    }
  };
  const handleToggle = () => {
    if (isOpen === "none") {
      setIsOpen("flex");
      setIsClose("none");
    } else {
      setIsOpen("none");
      setIsClose("flex");
    }
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option.name);

    setIsOpen("none");
    setIsClose("flex");
    if (
      (window.location.pathname === "/grades" ||
        window.location.pathname === "/books" ||
        window.location.pathname === "/unit" ||
        window.location.pathname === "/lessons") &&
      t("sectionlang") !== option.value
    ) {
      navigate("/section");
    } else if (
      window.location.pathname === "/downloading" &&
      t("sectionlang") !== option.value
    ) {
      navigate("/book");
    }
    i18n.changeLanguage(option.value);
  };
  const handleBookMenueToggle = () => {
    if (isOpenBookMenue) {
      setIsOpenBookMenue(false);
    } else {
      setIsOpenBookMenue(true);
    }
  };
  const handleBookOptionClick = (option) => {
    if (option === t("header13")) {
      navigate("/book");
    } else if (option === t("header14")) {
      navigate("/readingBook");
    }
    setIsOpenBookMenue(false);
  };
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
  const handleProfileToggle = () => {
    if (openProfile) {
      setOpenProfile(false);
    } else {
      setOpenProfile(true);
    }
  };
  const handleProfileOption = () => {
    setOpenProfile(false);
  };

  // useEffect(() => {
  //   if (window.location.pathname !== "/header") {
  //     openProfile(false);
  //   }
  // });

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
            <li className="li_header_book">
              <div className="selctedoption ">
                <div onClick={handleBookMenueToggle}>
                  {t("header5")}
                  <img
                    src={isOpenBookMenue ? arrowClose : arrowOpen}
                    alt="arrowIcon"
                  />
                </div>
                <div className="bookMenue">
                  {isOpenBookMenue && (
                    <ul className="dropdown-menu">
                      {bookOptions.map((i) => (
                        <li
                          key={i}
                          onClick={() => {
                            handleBookOptionClick(i);
                          }}
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
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
            <hr className="vl_header" />
            <li className="li_header">
              <Link className="link_nav_header" to="/header">
                {t("header12")}
              </Link>
            </li>
            <hr className="vl_header" />
          </ul>
          <div className="lng">
            <div className="selctedoption" onClick={handleToggle}>
              <div>{selectedOption || t("header11")}</div>
              <div onClick={handleToggle} style={{ display: isClose }}>
                <img src={arrowOpen} />
              </div>
              <div style={{ display: isOpen }}>
                <img src={arrowClose} />
              </div>
            </div>
            <div className="lng-menu">
              {isOpen === "flex" && (
                <ul className="dropdown-menu">
                  {options.map((option) => (
                    <li key={option} onClick={() => handleOptionClick(option)}>
                      {option.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="icon_header">
            <FaUser onClick={() => setOpenProfile((prev) => !prev)} />
            <div className="insideProfile">
              {openProfile && (
                <div className="flex flex-col dropDownProfile">
                  <ul className="flex flex-col gap-4">
                    <Link to="/changeprofile">
                      {" "}
                      <li className="changefrofilr_button_header">
                        {t("header9")}
                      </li>{" "}
                    </Link>
                    <li>
                      {" "}
                      <Link
                        className="logout_button_header"
                        to="/"
                        onClick={() => Loggout()}
                      >
                        {t("header10")}
                        <input type="button" />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="mobile">
        <div className="top">
          <div className="leftTop">
            <img src={topimag} />
            <h1>لارښود - Larkhod</h1>
          </div>
          <div className="lng">
            <div className="selctedoption">
              <div>{selectedOption || t("header11")}</div>
              <div onClick={handleToggle} style={{ display: isClose }}>
                <img src={arrowOpen} />
              </div>
              <div style={{ display: isOpen }} onClick={handleToggle}>
                <img src={arrowClose} />
              </div>
            </div>
            <div className="lng-menu">
              {isOpen === "flex" && (
                <ul className="dropdown-menu">
                  {options.map((option) => (
                    <li key={option} onClick={() => handleOptionClick(option)}>
                      {option.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="icon_header">
            <FaUser onClick={handleProfileToggle} />
            <div className="insideProfile">
              {openProfile === true && (
                <div
                  className="flex flex-col dropDownProfile"
                  style={{ display: openProfile ? "flex" : "none" }}
                >
                  <ul className="flex flex-col gap-4">
                    <div
                      onClick={() => {
                        openProfile(false);
                        navigate("/changeprofile");
                      }}
                    >
                      {" "}
                      <li className="changefrofilr_button_header">
                        {t("header9")}
                      </li>{" "}
                    </div>
                    <li>
                      {" "}
                      <div
                        className="logout_button_header"
                        onClick={() => {
                          Loggout();
                          handleProfileOption();
                        }}
                      >
                        {t("header10")}
                        <input type="button" />
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="menu" onClick={handleSideBar}>
            <FiMenu className="menuIcon" />
          </div>
        </div>
        <div
          className="side_bar"
          style={{
            display: `${sidebar}`,
          }}
        >
          <div className="cross" onClick={handleSideBar}>
            <ImCross />
          </div>
          <div className="side">
            <li className="li_header">
              <Link
                className="link_nav_header"
                to="/section"
                onClick={handleSideBar}
              >
                {t("header3")}
              </Link>
            </li>

            <li className="li_header">
              <Link
                className="link_nav_header"
                to="/grad"
                onClick={handleSideBar}
              >
                {t("header4")}
              </Link>
            </li>
            <hr />
            <li className="li_header_book">
              <div className="selctedoption ">
                <div onClick={handleBookMenueToggle}>
                  {t("header5")}
                  <img
                    src={isOpenBookMenue ? MobileArrowOpen : MobileArrowClose}
                    alt="arrowIcon"
                  />
                </div>
                <div className="bookMenue">
                  {isOpenBookMenue && (
                    <ul className="dropdown-menu">
                      {bookOptions.map((i) => (
                        <li
                          key={i}
                          onClick={() => {
                            handleBookOptionClick(i);
                            handleSideBar();
                          }}
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
            <li className="li_header">
              <Link
                className="link_nav_header"
                to="/about"
                onClick={handleSideBar}
              >
                {t("header7")}
              </Link>
            </li>
            <li className="li_header">
              <Link
                className="link_nav_header"
                to="/Suggestion"
                onClick={handleSideBar}
              >
                {t("header8")}
              </Link>
            </li>
            <li className="li_header">
              <img src={logoSideBar} />
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withNamespaces()(Header);
