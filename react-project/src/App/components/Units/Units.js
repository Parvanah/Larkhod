import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Unit.css";
import sectionicon from "../../assets/Group_374.png";
// import {HiChevronLeft,HiChevronRight } from "react-icons/hi";
import photo3 from "../../assets/Group_158.png";
import image from "../../assets/Group_158_a@2x.png";
import photou from "../../assets/Shapeu.png";
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
        <div className="svgArrow">
          <div className="laptop-arrow">
          <Link to="/Books"><img className="flesh-image-grade-u" src={image} /></Link>
            {/* <svg
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
          </svg> */}
          </div>
        </div>

       <div id="laptop-top">
         <p id="p1">{t("units.1")}</p>
         <p>{t("units.2")}</p>
        {/* <div id="mobile-p"> 
           <svg xmlns="http://www.w3.org/2000/svg" width={355} height={115} {...props}>
    <text
      fill="#fff"
      data-name="\u06A9\u062A\u0627\u0628 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0634\u0645\u0627 \u062F\u0631 \u0641\u0635\u0644\u200C\u0647\u0627\u06CC \u0630\u06CC\u0644 \u062A\u0642\u0633\u06CC\u0645 \u0634\u062F\u0647 \u0627\u0633\u062A \u0641\u0635\u0644 \u0647\u0627\u06CC \u062A\u0642\u0633\u06CC\u0645 \u0634\u062F\u0647\u200C\u06CC \u06A9\u062A\u0627\u0628 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0648\u062F\u0647 \u0648 \u0645\u0637\u0627\u0644\u0639\u0647 \u0646\u0645\u0627\u06CC\u06CC\u062F"
      fontFamily="SegoeUI, Segoe UI"
      fontSize={25}
      letterSpacing="-.04em"
    >
      <tspan x={87.963} y={27}>
        {
          "\u06A9\u062A\u0627\u0628 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0634\u0645\u0627"
        }
      </tspan>
      <tspan x={17.237} y={54}>
        {
          "\u062F\u0631 \u0641\u0635\u0644\u200C\u0647\u0627\u06CC \u0630\u06CC\u0644 \u062A\u0642\u0633\u06CC\u0645 \u0634\u062F\u0647 \u0627\u0633\u062A"
        }
      </tspan>
      <tspan fontSize={21}>
        <tspan xmlSpace="preserve" x={48.924} y={81}>
          {
            "\u0641\u0635\u0644  \u0647\u0627\u06CC \u062A\u0642\u0633\u06CC\u0645 \u0634\u062F\u0647\u200C\u06CC \u06A9\u062A\u0627\u0628 \u0631\u0627"
          }
        </tspan>
        <tspan y={81} />
        <tspan x={64.104} y={108}>
          {
            "\u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0648\u062F\u0647 \u0648 \u0645\u0637\u0627\u0644\u0639\u0647 \u0646\u0645\u0627\u06CC\u06CC\u062F"
          }
        </tspan>
      </tspan>
    </text>
  </svg>
  </div> */}
        </div>
      </div>
      <div className="unitWrapper">
        <div onClick="() => slidLeft() "className="arrow">
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
         <p>{t("units.3")}</p> 
      
    <div id='photou'>  
       <img src={photou} className='photou' />
       </div>
      </div>
    </div>
  );
};

export default Units;

