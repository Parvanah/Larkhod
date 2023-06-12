import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from "react-router-dom";
import * as React from "react";
import "./Lesson.css";
import photo1 from "../../assets/Group_406.png";
import { useState } from "react";
import photo2 from "../../assets/lesson_1.jpg";
import photo3 from "../../assets/Group_408.png";
import photo4 from "../../assets/Group_404.png";
import photo5 from "../../assets/Group_158_a@2x.png";
// import photo6 from "../../assets/Group407.png";
const Lessons = (props) => {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  var [num, setNum] = useState(1);
  const location = useLocation();
  const locationData = location.state;
  const lessons = locationData.lessons;
  const unit = locationData.title;
  const [title, setTitle] = useState("");
  return (
    <body> 
      <div className="lesson">
      
        <svg xmlns="http://www.w3.org/2000/svg" width={403} height={675} {...props}>
    <defs>
      <linearGradient
        id="a"
        x1={0.802}
        x2={0.459}
        y1={0.246}
        y2={1.696}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#3c98bd" />
        <stop offset={1} stopColor="#0f53a1" />
      </linearGradient>
    </defs>
    <path fill="url(#a)" d="M0 0h403v1080H0z" data-name="Rectangle 237" />
    <foreignObject
          width={"80%"}
          height={"90%"}
          x={40}
          y={50}
          className="sidebar"
        >
          <div className="arrow">
            <img src={photo5} />
          </div>
          <div className="header">
            <img src={photo4} />
          </div>
          <div className="text">
            <h3>{t("lessons.1")} {unit}</h3>
            <div className="sidebar-lessons">
              {lessons.map((item) => {
                return (
                  <div>
                    <div> 0{num}</div>
                    <div
                      onClick={() => {
                        setTitle(item.label);
                      }}
                      className="titles"
                    >
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
    </foreignObject>
        </svg>
      <div className="showLesson">
        <div className="title">
          <div>
            <h1> {unit}</h1>
            <p>{t("lessons.2")} {title}</p>
          </div>
          <img src={photo1}></img>
          
        </div>
        <div className="bottom">
          <div className="img">
            <img src={photo2}></img>
          </div>
        </div>
        <div className="midlle">
          <img src={photo3}></img>
          <p> {t("lessons.3")}</p>
          
        </div>
      </div>
      </div>
      <div className="mobile">
        <div className="mobileTop">
          {/* <img src={photo6} className="imgTop"></img> */}
       <div className="svg">
       <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} {...props}>
    <defs>
      <clipPath id="a">
        <path
          fill="none"
          d="M-.085-.085h70v70h-70z"
          data-name="Rectangle 275"
        />
      </clipPath>
    </defs>
    <g data-name="Group 407">
      <g
        clipPath="url(#a)"
        data-name="Group 406"
        transform="translate(.085 .086)"
      >
        <path
          fill="#e6f0fc"
          d="M34.915-.095A34.867 34.867 0 1 1 .048 34.772 34.867 34.867 0 0 1 34.915-.095"
          data-name="Path 1075"
        />
        <path
          fill="#ffc200"
          d="m39.96 50.03-2.393-3a2.179 2.179 0 0 1 3.409-2.715l8.691 10.912a2.179 2.179 0 0 1-3.407 2.71l-2.831-3.548-17.069.011-2.817 3.537a2.179 2.179 0 1 1-3.409-2.714l8.691-10.912a2.179 2.179 0 0 1 3.409 2.715l-2.4 3.013Z"
          data-name="Path 1076"
        />
        <path
          fill="#154e84"
          d="M36.716 47.705a3.269 3.269 0 1 1 5.113-4.073l8.691 10.911a3.27 3.27 0 0 1-5.115 4.073l-2.5-3.141-16.018.014-2.491 3.127a3.269 3.269 0 1 1-5.113-4.073l8.688-10.911a3.27 3.27 0 0 1 5.115 4.073l-.99 1.242h5.606Zm-9.145 3.426 3.809-4.783a1.089 1.089 0 1 0-1.7-1.358L20.988 55.9a1.089 1.089 0 1 0 1.7 1.358l3.143-3.948 18.119-.016 3.157 3.964a1.089 1.089 0 0 0 1.7-1.358l-8.682-10.91a1.089 1.089 0 1 0-1.7 1.358l3.8 4.77Z"
          data-name="Path 1077"
        />
        <path
          fill="#52abe2"
          d="M14.213 17.339h41.4a1.09 1.09 0 0 1 1.09 1.09V42.4a3.269 3.269 0 0 1-3.269 3.269H16.392a3.269 3.269 0 0 1-3.269-3.269V18.429a1.09 1.09 0 0 1 1.09-1.09"
          data-name="Path 1078"
        />
        <path
          fill="#ffc200"
          d="M37.094 17.339V12.98a2.179 2.179 0 0 0-4.358 0v4.358a2.179 2.179 0 0 0 4.358 0"
          data-name="Path 1079"
        />
        <path
          fill="none"
          stroke="#154e84"
          strokeWidth={2}
          d="M37.094 17.339V12.98a2.179 2.179 0 0 0-4.358 0v4.358a2.179 2.179 0 0 0 4.358 0Z"
          data-name="Path 1080"
        />
        <path
          fill="#154e84"
          d="M38.184 17.339v-4.358a3.269 3.269 0 0 0-6.538 0v4.358a3.269 3.269 0 0 0 6.538 0m-2.179 0a1.09 1.09 0 1 1-2.179 0v-4.358a1.09 1.09 0 1 1 2.179 0Z"
          data-name="Path 1081"
        />
        <path
          fill="#fff"
          d="M16.392 17.339h40.315a1.09 1.09 0 0 1 1.09 1.09V42.4H18.571a2.179 2.179 0 0 1-2.179-2.179Z"
          data-name="Path 1082"
        />
        <path
          fill="#154e84"
          d="M14.212 16.249h41.4a2.179 2.179 0 0 1 2.179 2.179v23.971a4.359 4.359 0 0 1-4.358 4.359H16.391a4.359 4.359 0 0 1-4.358-4.359V18.428a2.179 2.179 0 0 1 2.179-2.179m0 2.179v23.971a2.179 2.179 0 0 0 2.179 2.179h37.042a2.179 2.179 0 0 0 2.179-2.179V18.428Z"
          data-name="Path 1083"
        />
        <path
          fill="#ffc200"
          d="M26.198 38.041h17.433a1.09 1.09 0 0 0 0-2.179H26.198a1.09 1.09 0 1 0 0 2.179"
          data-name="Path 1084"
        />
      </g>
    </g>
          </svg>
       </div>
        </div>  
        <div className="between">
          <div className="img">
            <img src={photo2}></img>
          </div>
        </div> 
       <div>

</div>
      </div>
      
    </body>
  );
};

export default Lessons;



