import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Books.css";
import * as React from "react";
import bookicon from "../../assets/Group_360.png";
import imageb1 from "../../assets/B1.png";
import imageb2 from "../../assets/B2.png";
import imageB3 from "../../assets/B3.png";
import imageb4 from "../../assets/b4.png";
import { AuthContext } from "../../context/AuthContext";
import {useContext } from 'react';
const Books = (  {t}) => {


  const location = useLocation();
  const locationData = location.state;
  const subjects = locationData.subjects;
  console.log(subjects);
  const navigate = useNavigate();
  const leftScroll = () => {
    const slider = document.getElementById("ul");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const righScrool = () => {
    const slider = document.getElementById("ul");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const {currentBook,
    setCurrentBook ,currentLesson,
    setCurrentLesson,currentpart,
    setCurrentpart} = useContext(AuthContext);
  return (
    <div className="Books" id="Books">
      <div className="top">
        <div className="first-svgs">
          {/* <div id="mobile-svg">
             <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14}
              // {...props}
              >
    <defs>
      <clipPath id="a">
        <path
          fill="#3c98bd"
          d="M-.34-.485h22v14h-22z"
          data-name="Rectangle 85"
        />
      </clipPath>
    </defs>
    <g data-name="Group 271">
      <g
        clipPath="url(#a)"
        data-name="Group 158"
        transform="translate(.34 .486)"
      >
        <path
          fill="#3c98bd"
          fillRule="evenodd"
          d="m4.42 7.78 3.3 3.053a1.318 1.318 0 0 1 0 1.882 1.361 1.361 0 0 1-1.906 0L.69 7.86a1.951 1.951 0 0 1-.592-1.411 1.974 1.974 0 0 1 .591-1.411L5.814.185a1.364 1.364 0 0 1 1.909 0 1.32 1.32 0 0 1 0 1.882l-3.3 3.051h15.641a1.331 1.331 0 0 1 0 2.662H4.42Z"
          data-name="Path 433"
        />
      </g>
    </g>
  </svg>
  </div> */}
           <div className="arrowSvg" onClick={() => navigate("/grades")}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={22}
              data-name="Group 411"
              // {...props}
            >
              <defs>
                <clipPath id="a">
                  <path
                    fill="#707070"
                    d="M0 0h36v22H0z"
                    data-name="Rectangle 85"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#a)" data-name="Group 158">
                <path
                  fill="#707070"
                  fillRule="evenodd"
                  d="m7.3 13.483 5.574 5.156a2.225 2.225 0 0 1 0 3.178 2.3 2.3 0 0 1-3.219 0L1 13.618a3.294 3.294 0 0 1-1-2.382 3.332 3.332 0 0 1 1-2.382L9.651.659a2.3 2.3 0 0 1 3.223 0 2.229 2.229 0 0 1 0 3.178L7.3 8.988h26.413a2.25 2.25 0 0 1 0 4.5H7.3Z"
                  data-name="Path 433"
                />
              </g>
            </svg>
          </div> 
          <div className="left-svg">
            {" "}
         {/* <div className="mobileSvg" onClick={() => navigate("/")} >
            <svg 
    xmlns="http://www.w3.org/2000/svg"
    width={22.502}
    height={19.725}
    // {...props}
  >
    <path
      fill="#707070"
      d="M2.139 18.646a1.07 1.07 0 1 0-1.069 1.079 1.074 1.074 0 0 0 1.069-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.069-1.079Zm6.787 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079ZM2.139 12.79a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.069-1.079Zm6.787 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079ZM2.139 6.935a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.069-1.079Zm6.787 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079ZM2.139 1.08a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.08Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.08Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.069-1.08Zm6.787-.001a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Z"
    />
  </svg>
        </div> */}
            <div className="laptop-svg">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width={77.557}
                height={70.977}
                // {...props}
              >
                <path
                  fill="#707070"
                  d="M7.374 67.094a3.692 3.692 0 1 0-7.374 0 3.692 3.692 0 1 0 7.374 0Zm23.394 0a3.692 3.692 0 1 0-7.374 0 3.692 3.692 0 1 0 7.374 0Zm23.394 0a3.692 3.692 0 1 0-7.374 0 3.692 3.692 0 1 0 7.374 0Zm23.395 0a3.788 3.788 0 0 0-3.687-3.883 3.789 3.789 0 0 0-3.687 3.883 3.789 3.789 0 0 0 3.687 3.883 3.789 3.789 0 0 0 3.687-3.883ZM7.374 46.024a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.688-3.883Zm23.395 0a3.788 3.788 0 0 0-3.687-3.883 3.888 3.888 0 0 0 0 7.765 3.788 3.788 0 0 0 3.687-3.882ZM7.374 24.954a3.692 3.692 0 1 0-3.687 3.883 3.789 3.789 0 0 0 3.687-3.884Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.789 3.789 0 0 0 3.687-3.884Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.789 3.789 0 0 0 3.688-3.884Zm23.395-.001a3.789 3.789 0 0 0-3.687-3.883 3.888 3.888 0 0 0 0 7.766 3.789 3.789 0 0 0 3.687-3.883ZM7.374 3.883a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.688-3.883Zm23.395 0A3.788 3.788 0 0 0 73.87 0a3.888 3.888 0 0 0 0 7.766 3.789 3.789 0 0 0 3.687-3.883Z"
                />
              </svg> */}
              <img src={imageb1} className='image1' />
            </div>
     
          </div>
        </div>
        <div className="first-section">
         <h1>{t("books1")}</h1>
          <p> {t("books2")}</p>
        </div>
        <div className="third-section">
        {/* <div className="mobile-right">
                <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21.811}
    height={22.048}
    // {...props}
  >
    <g fill="none">
      <path d="m0 6.526 16.748 15.521L21.811-.001Z" />
      <path fill="#edc315" d="m21.81 0-5.063 22.047L0 6.526 21.81 0Z" />
    </g>
  </svg></div> */}
         <div className="laptop-right"> 
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width={74.741}
            height={73.209}
            // {...props}
          >
            <g fill="none">
              <path d="m0 21.671 57.391 51.538L74.74 0Z" />
              <path
                fill="#edc315"
                d="M61.055 14.38 20.078 26.26l31.465 28.256 9.512-40.138M74.74 0 57.39 73.21 0 21.671 74.74 0Z"
              />
            </g>
          </svg> */}
          <img src={imageb2} className='imageb2' />
          </div>
          {" "}
        </div>
      </div>
      <div className="middlebook" id="middlebook">
        <div onClick={() => leftScroll()} className="arrrow">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16.435}
            height={30.158}
            // {...props}
          >
            <path
              fill="#707070"
              d="M16.435 0 0 15.079l16.435 15.079v-8.293l-7.384-6.786 7.384-6.755Z"
              data-name="Path 968"
            />
          </svg>
        </div>
        <div className="middle" id="ul">
          {subjects.map((item) => {
            if (item.parts[0].lessons == undefined) {
              return (
                <Link
                onClick={()=> {
                  setCurrentLesson("lesson")
                  setCurrentpart(item.parts)
                  setCurrentBook(item.label)}}
                  to="/lessons"
                  state={{ lessons: item.parts, title: " مضمون " + item.label }}
                  id="link"
                >
                  <img src={bookicon} />
                  <div >
                    <p>{t("books6")}</p>
                  <p id="h5">{t("books4")} {item.label}</p>
                    <p>{t("books5")}</p>
                  </div>
                </Link>
              );
            } else {
              return (
                <Link
                onClick={()=> {     
                  setCurrentLesson("unit");
                  setCurrentpart(item.parts)
                   setCurrentBook(item.label)}}
                 to="/unit" state={{ units: item.parts }} id="link">
                  <img src={bookicon} />
                  <div >
                    <p id="h5">{t("books4")} {item.label}</p>
                    <p>{t("books5")}</p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
        <div onClick={() => righScrool()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16.435}
            height={30.158}
            // {...props}
          >
            <path
              fill="#707070"
              d="m0 0 16.435 15.079L0 30.158v-8.29l7.384-6.786L0 8.327Z"
              data-name="Path 967"
            />
          </svg>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-section">
          {" "}
          {/* <div className="laptop-left"> 
             <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22.205}
    height={21.58}
    // {...props}
  >
    <g fill="none">
      <path d="m7.255 21.58 14.95-17.26L-.003 0Z" />
      <path fill="#edc315" d="M7.255 21.58 0 0l22.206 4.32-14.95 17.26Z" />
    </g>
  </svg></div> */}
         <div className="laptop-right"> 
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width={85.325}
            height={84.161}
            // {...props}
          >
            <g fill="none">
              <path d="m27.877 84.161 57.448-67.312L-.003 0Z" />
              <path
                fill="#edc315"
                d="M31.79 64.172 66.63 23.35 14.885 13.133 31.79 64.172M27.877 84.16 0 0l85.325 16.848-57.448 67.312Z"
              />
            </g>
          </svg> */}
          <img src={imageB3} className='imageb2'/>
          </div>
        </div>
        <div className="p-section">
          <p>{t("books3")}</p>
        </div>
        <div className="last-svg">
          {/* <div className="mobile-last">
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22.502}
    height={19.725}
    // {...props}
  >
    <path
      fill="#707070"
      d="M2.139 18.646a1.07 1.07 0 1 0-1.069 1.079 1.074 1.074 0 0 0 1.069-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.069-1.079Zm6.787 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079ZM2.139 12.79a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.069-1.079Zm6.787 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079ZM2.139 6.935a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.069-1.079Zm6.787 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079ZM2.139 1.08a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.08Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.08Zm6.788 0a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.069-1.08Zm6.787-.001a1.07 1.07 0 1 0-1.07 1.079 1.074 1.074 0 0 0 1.07-1.079Z"
    />
  </svg></div> */}
          <div className="laptop-last">
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width={77.557}
            height={70.977}
            // {...props}
          >
            <path
              fill="#707070"
              d="M7.374 67.094a3.692 3.692 0 1 0-7.374 0 3.692 3.692 0 1 0 7.374 0Zm23.394 0a3.692 3.692 0 1 0-7.374 0 3.692 3.692 0 1 0 7.374 0Zm23.394 0a3.692 3.692 0 1 0-7.374 0 3.692 3.692 0 1 0 7.374 0Zm23.395 0a3.788 3.788 0 0 0-3.687-3.883 3.789 3.789 0 0 0-3.687 3.883 3.789 3.789 0 0 0 3.687 3.883 3.789 3.789 0 0 0 3.687-3.883ZM7.374 46.024a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.688-3.883Zm23.395 0a3.788 3.788 0 0 0-3.687-3.883 3.888 3.888 0 0 0 0 7.765 3.788 3.788 0 0 0 3.687-3.882ZM7.374 24.954a3.692 3.692 0 1 0-3.687 3.883 3.789 3.789 0 0 0 3.687-3.884Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.789 3.789 0 0 0 3.687-3.884Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.789 3.789 0 0 0 3.688-3.884Zm23.395-.001a3.789 3.789 0 0 0-3.687-3.883 3.888 3.888 0 0 0 0 7.766 3.789 3.789 0 0 0 3.687-3.883ZM7.374 3.883a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.688-3.883Zm23.395 0A3.788 3.788 0 0 0 73.87 0a3.888 3.888 0 0 0 0 7.766 3.789 3.789 0 0 0 3.687-3.883Z"
            />
          </svg> */}
          <img src={imageb4} className='image1'/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default  withNamespaces()(Books) ;

