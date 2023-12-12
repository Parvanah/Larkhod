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
import { FiMenu } from "react-icons/fi";
import topimag from "../../assets/logo_3.png";
import middleimg from "../../assets/logo_2.png";
import arrowOpen from "../../assets/Path-1005.png";
import arrowClose from "../../assets/Path-1006.png";
import { ImCross } from "react-icons/im";
import i18n from "../../../i18n";
import Home from "../Home/Home";
// import butimg from "../../assets/Path_7";
// import buttom_img from "../../assets/Path_7.png";
// import down_img from "../../assets/Path_39.png";
<link rel="stylesheet" href="./Header.css" />;

const Header = ({ t }, props) => {
  const { Loggout, userInfo, isLoading } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false);
  const [isOpen, setIsOpen] = useState("none");
  const [isClose, setIsClose] = useState("flex");
  const options = [{ name: "دری", value: "dari" }, { name: "پښتو" , value : "pashto"}];
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
    i18n.changeLanguage(option.value);
     setIsOpen("none");
     setIsClose("flex");
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
            {/* <hr className="vl_header" />
            <li className="li_header">
              <Link className="link_nav_header" to={nav} state={status}>
                {t("header6")}
              </Link>
            </li> */}
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
      </nav>
      <Home />
      <div className="mobile">
        <div className="top">
          <img src={topimag} />
          <h1>لارښود - Larkhod</h1>
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
          {/* <div className="lng">
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
          </div> */}
          <div className="menu" onClick={handleSideBar}>
            <FiMenu />
          </div>
        </div>
        <div className="middle">
          <img src={middleimg} />
          <p>سفر زیبای تعلیمی خود را</p>
          <h1>با ما آغاز کنید</h1>

          {/* <div className="imggg1">
          <img src={buttom_img} />
          </div>
         <div className="imggg2">
         <img src={down_img}/>
         </div> */}
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
              <Link className="link_nav_header" to="/section">
                {t("header3")}
              </Link>
            </li>
            <hr />
            <li className="li_header">
              <Link className="link_nav_header" to="/grad">
                {t("header4")}
              </Link>
            </li>
            <hr />
            <li className="li_header">
              <Link className="link_nav_header" to="/book">
                {t("header5")}
              </Link>
            </li>
            {/* <hr />
            <li className="li_header">
              <Link className="link_nav_header" to="/continue">
                {t("header6")}
              </Link>
            </li> */}
            <hr />
            <li className="li_header">
              <Link className="link_nav_header" to="/about">
                {t("header7")}
              </Link>
            </li>
            <hr />
            <li className="li_header">
              <Link className="link_nav_header" to="/Suggestion">
                {t("header8")}
              </Link>
            </li>
          </div>
        </div>
        {/* <div className="buttom">
        <div className="svg">
          <img src="butimg"></img>
        </div>
      </div> */}
      </div>
    </div>
  );
};
export default withNamespaces()(Header);
