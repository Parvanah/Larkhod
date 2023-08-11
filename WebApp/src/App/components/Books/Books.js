import { withNamespaces } from 'react-i18next';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Books.css";
import * as React from "react";
import bookicon from "../../assets/Group_360.png";
import arrowB from "../../assets/arrowB.png";
import imageb1 from "../../assets/B1.png";
import imageb2 from "../../assets/B2.png";
import imageB3 from "../../assets/B3.png";
import imageb4 from "../../assets/B1.png";
import imagebm from "../../assets/mobileb.png";
import imgbm2 from "../../assets/mobileb2.png";
import MBarrow from "../../assets/MBarrow.png";
import mobileb3 from "../../assets/mobileb3.png";
import imgbm4 from "../../assets/imgbm2.png";
import scrolrm from "../../assets/scrolrm.png";
import scrollm from "../../assets/scrollm.png";
import { AuthContext } from "../../context/AuthContext";
import {useContext } from 'react';
const Books = ({t}, props) => {

  const { userInfo, isLoading } = useContext(AuthContext);
  const location = useLocation();
  const locationData = location.state;
  const subjects = locationData.subjects;
  console.log(subjects);
  const grade_path = locationData.grade_path;
  
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

    // const navigation = useNavigate();
//   if (userInfo === null) {
//     return navigation("/");
//   } else if (isLoading) {
//     return <h1>Loading.....</h1>;
//   } else if(userInfo !== null){
  return (
    <div className="Books" id="Books">
      <div className="top">
        <div className="first-svgs">
          {/* <div id="mobile-svg"> */}
           <img src={imgbm2} alt='photo' className='imgb2' />
           {/* </div>  */}
           <Link to="/grades">
            <div className="arrowSvg">
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
          </div> </Link>  
          
         
          {/* <div className="left-svg"> */}
            
         {/* <div className="mobileSvg" > */}
           <img src={MBarrow} alt='photo' className=' MBarrow' />
        {/* </div>  */}
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
     
          {/* </div> */}
        </div>
        <div className="first-section">
         <h1>{t("books1")}</h1>
          <p> {t("books2")}</p>
        </div>
        <div className="third-section">
         <div className="laptop-right"> 
          <img src={imageb2} className='imageb2' />
          <img src={imagebm} className='imgagebm' alt='photo'/>
          </div>
        </div>
      </div>
      <div className="middlebook" id="middlebook">
        <div onClick={() => leftScroll()} className="arrrow">
          <img src={scrollm} alt='photo'  className='scrollm'/>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width={16.435}
            height={60.158}
            // {...props}
          >
            <path
              fill="#707070"
              d="M16.435 0 0 15.079l16.435 15.079v-8.293l-7.384-6.786 7.384-6.755Z"
              data-name="Path 968"
            className='laptoparrowl' />
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
                  state={{ 
                   lessons: item.parts, title: " مضمون " + item.label,
                   subject_path: grade_path + item.subject_path,
                    }}
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
                 to="/unit" state={{

                   units: item.parts,
                   subject_path: grade_path + item.subject_path,
                   
                   }} id="link">
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
            height={60.158}
            // {...props}
          >
            <path
              fill="#707070"
              d="m0 0 16.435 15.079L0 30.158v-8.29l7.384-6.786L0 8.327Z"
              data-name="Path 967"
            className='laptoparrowr' />
          </svg>
          <img src={scrolrm} alt='photo'  className='scrolrm'/>
        </div>
      </div>
      <div className="bottom">
          
         <div className="laptop-right"> 
          <img src={imageB3} className='imageb2'/>
          </div>
          <img src={mobileb3} alt='photo' className='mobileb3'/ >
        {/* </div> */}
        <div className="p-section">
          <p>{t("books3")}</p>
        </div>
        <div className="last-svg">
          {/* <div className="laptop-last">
          <img src={imgbm4} className='image1'/>
          </div> */}
            <img src={imageb4} className='image4' />
          <img src={imgbm4} alt='photo' className='imgbm4' />
        </div>
      </div>
    </div>
  );
// }
};
export default  withNamespaces()(Books) ;

