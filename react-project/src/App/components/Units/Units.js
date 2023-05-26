import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Unit.css";
import sectionicon from "../../assets/Group_374.png";
// import {HiChevronLeft,HiChevronRight } from "react-icons/hi";
import photo3 from "../../assets/Group_158.png";
const Units = (props) => {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }


  // getting props that passed from Books to Unit
  const location = useLocation();
  const locationData = location.state;
  const units = locationData.units;
  const navigate = useNavigate();
  const slidLeft = () => {
    const slider = document.getElementById("m-section");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slidRight = () => {
    const slider = document.getElementById("m-section");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="units">
      <div className="t-section">
        <div className="svgArrow" onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={36}
            height={22}
            data-name="Group 411"
            {...props}
          >
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h36v22H0z" data-name="Rectangle 85" />
              </clipPath>
            </defs>
            <g clipPath="url(#a)" data-name="Group 158">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="m7.3 13.483 5.574 5.156a2.225 2.225 0 0 1 0 3.178 2.3 2.3 0 0 1-3.219 0L1 13.618a3.294 3.294 0 0 1-1-2.382 3.332 3.332 0 0 1 1-2.382L9.651.659a2.3 2.3 0 0 1 3.223 0 2.229 2.229 0 0 1 0 3.178L7.3 8.988h26.413a2.25 2.25 0 0 1 0 4.5H7.3Z"
                data-name="Path 433"
              />
            </g>
          </svg>
        </div>
        <h1>{t("units.1")}</h1>
        <p>{t("units.2")}</p>
      </div>
      <div className="unitWrapper">
        <div onClick={() => slidLeft()} className="arrow">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={13.435}
            height={28.158}
            {...props}
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
                  state={{ lessons: item.lessons, title: " فصل " + item.label }}
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
            {...props}
          >
            <path
              fill="#fff"
              d="m0 0 16.435 15.079L0 30.158v-8.29l7.384-6.786L0 8.327Z"
              data-name="Path 1005"
            />
          </svg>
        </div>
      </div>
      <div className="last">
        <h4>{t("units.3")}</h4>
        <div className="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={325.194}
            height={200.941}
            {...props}
          >
            <path
              fill="#fff"
              stroke="rgba(0,0,0,0)"
              d="M9.672 254.47c0 1.745-3.858 3.281-7.455-15.858-5.918-31.492 3.98-67.206 32.686-86.179 23.861-15.771 55.677-17.436 85.31-16.226 9.306.38 18.715.978 27.872-.554 31.806-5.319 52.29-36.086 51.947-65.039-.123-10.4-2.339-20.884-.346-31.131 2.806-14.421 14.206-27.044 28.9-33.476s32.284-6.85 47.77-2.136c19.544 5.95 35.038 19.208 52.707 28.762s-8.521 17.011 8.72 6.85c2.279 4.1-.474-4.561 0 0V254.47Z"
              opacity={0.52}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Units;
