import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Unit.css";
import sectionicon from "../../assets/Group_374.png";
// import {HiChevronLeft,HiChevronRight } from "react-icons/hi";
import photo3 from "../../assets/Group_158.png";
const Units = ({ t }) => {
  

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
        <div className="mobile-arrow"> 
        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14}
        //  {...props}
         >
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M-.34-.485h22v14h-22z" data-name="Rectangle 85" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" data-name="Group 158" transform="translate(.34 .485)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m4.42 7.78 3.3 3.053a1.318 1.318 0 0 1 0 1.882 1.361 1.361 0 0 1-1.906 0L.69 7.86a1.951 1.951 0 0 1-.592-1.411 1.974 1.974 0 0 1 .591-1.411L5.814.185a1.364 1.364 0 0 1 1.909 0 1.32 1.32 0 0 1 0 1.882l-3.3 3.051h15.641a1.331 1.331 0 0 1 0 2.662H4.42Z"
        data-name="Path 433"
      />
    </g>
  </svg>
  </div>
          <div className="laptop-arrow" onClick={() => navigate("/")}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={36}
            height={22}
            data-name="Group 411"
            // {...props}
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
          </svg></div>
        </div>

       <div id="laptop-top">
         <p id="p1">{t("units1")}</p>
         <p>{t("units2")}</p>
        <div id="mobile-p"> 
           <svg xmlns="http://www.w3.org/2000/svg" width={355} height={115}
            // {...props}
            >
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
  </div>
        </div>
      </div>
      <div className="unitWrapper">
        <div onClick={() => slidLeft()} className="arrow">
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
      <div className="last">
         <p>{t("units3")}</p> 
 
        <div className="svg">
     <div id="last-mobile"> 
     <div> <div className="mobile-p">
          <svg xmlns="http://www.w3.org/2000/svg" width="1416" height="25" viewBox="0 0 1416 25">
  <text id="فصل_ها_را_به_دقت_مطالعه_نموده_و_تمرین_ها_را_انجام_دهید" data-name="فصل‌ها را به دقت مطالعه نموده و تمرین‌ها را انجام دهید" fill="#fff" font-size="15" font-family="SegoeUI, Segoe UI" letter-spacing="-0.04em" opacity="0.5"><tspan x="549.954" y="16">فصل‌ها را به دقت مطالعه نموده و تمرین‌ها را انجام دهید</tspan></text>
</svg>
</div></div>
       <div className="mobile-svg"> 
       <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200.604}
    height={163.229}
    // {...props}
  >
    <path
      fill="#fff"
      stroke="rgba(0,0,0,0)"
      strokeWidth={1.00052}
      d="M15.73 147.008c-9.36-2.234-13.13-21.162-13.764-30.373-1.044-15.154 5.109-31.567 18.732-39.193 11.325-6.34 25.459-5.642 38.485-3.685 4.09.612 8.217 1.333 12.337 1.036 14.313-1.03 24.892-14.612 26.185-28.308.463-4.919.008-9.976 1.4-14.725 1.958-6.68 7.622-12.114 14.432-14.467a29.325 29.325 0 0 1 21.201 1.216c8.335 3.72 14.517 10.707 21.844 16.044s17.414 9.065 25.535 5.067c.803 2.043 2.846 2.932 2.827 5.108l-.891 107.38-166.41-3.192Z"
      opacity={0.52}
    />
  </svg>
  </div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default  withNamespaces()(Units) ;


