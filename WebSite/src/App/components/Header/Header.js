import { useNavigate } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState, useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FiMenu } from "react-icons/fi";
import topimag from "../../assets/logo_3.png";
import arrowOpen from "../../assets/Path-1005.png";
import arrowClose from "../../assets/Path-1006.png";
import { ImCross } from "react-icons/im";
import i18n from "../../../i18n";
import logoSideBar from "../../assets/logo_5.png";
import MobileArrowClose from "../../assets/Path 2777.png";
import MobileArrowOpen from "../../assets/Path 2778.png";




const Header = ({ t }, props) => {
  const navigate = useNavigate();
  const { Loggout, userInfo, isLoading } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false);
  const [isOpen, setIsOpen] = useState("none");
  const [isClose, setIsClose] = useState("flex");
  const [isOpenBookMenue, setIsOpenBookMenue] = useState(false);
  const [isOpenProfileMenue, setIsOpenProfileMenue] = useState(false);
  //const [isCloseBookMenue, setIsCloseBookMenue] = useState("flex");
  const options = [
    { name: "زبان دری", value: "dari" },
    { name: "پښتو ژبه", value: "pashto" },
  ];
  const bookOptions = [t("header13"), t("header14")];
  const profileOptions = [t("header9"), t("header10")];
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
  const handleprofileMenueToggle = () => {
    if (isOpenProfileMenue) {
      setIsOpenProfileMenue(false);
    } else {
      setIsOpenProfileMenue(true);
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
  const handleProfileOptionClick = (optionn) => {
    if (optionn === t("header9")) {
      navigate("/changeprofile");
    } else if (optionn === t("header10")) {
      return Loggout()
    }
    setIsOpenProfileMenue(false);
  };
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
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen("none");
        setIsClose("flex");
        setIsOpenProfileMenue(false);
        setIsOpenBookMenue(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="full_header">
      <nav className="header">
        <Link to="/home"></Link>
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
            <li  className="li_header_book">
              <div className="selctedoption">
                <div onClick={handleBookMenueToggle}>
                  {t("header5")}
                  <img
                    src={isOpenBookMenue ? arrowClose : arrowOpen}
                    alt="arrowIcon"
                  />
                </div>
                <div className="bookMenue">
                  {isOpenBookMenue  && (
                    <ul  className="dropdown-menu">
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
              <Link className="link_nav_header" to="/home">
                {t("header12")}
              </Link>
            </li>
            <hr className="vl_header" />
          </ul>
          <div onClick={handleToggle} className="all_buttonss">
            {options.map((option) => (
              <button className="button_singupp"
                key={option} onClick={() =>
                  handleOptionClick(option)}>
                {option.name}
              </button>
            ))}
          </div>
          <div className="profileMenue"  onClick={handleprofileMenueToggle} >
            <FaUser
              className="icon_header"
              src={isOpenProfileMenue ? arrowClose : arrowOpen}
              alt="arrowIcon"
            />
            <div>
              {isOpenProfileMenue && (
                <ul className="dropdown-menu-profile">
                  {profileOptions.map((i) => (
                    <li
                      key={i}
                      onClick={() => {
                        handleProfileOptionClick(i);
                      }}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div ref={dropdownRef} className="mobile">
        <div className="top">
          <div className="leftTop">
            <img src={topimag} />
            <h1>لارښود - Larkhoad</h1>
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
            <div className="profileMenue" onClick={handleprofileMenueToggle} >
            <FaUser
              className="icon_header"
              src={isOpenProfileMenue ? arrowClose : arrowOpen}
              alt="arrowIcon"
            />
            <div >
              {isOpenProfileMenue && (
                <ul className="dropdown-menu-profile">
                  {profileOptions.map((i) => (
                    <li
                      key={i}
                      onClick={() => {
                        handleProfileOptionClick(i);
                      }}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
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
            <li className="li_header"><Link
              className="link_nav_header"
              to="/home"
              onClick={handleSideBar}
            >
              {t("header12")}
            </Link></li>
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
