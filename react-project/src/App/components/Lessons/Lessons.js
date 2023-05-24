import { Link, useLocation } from "react-router-dom";
import * as React from "react";
import "./Lesson.css";
import photo1 from "../../assets/Group_406.png";
import { useState } from "react";
import photo2 from "../../assets/lesson_1.jpg";
import photo3 from "../../assets/Group_408.png";
import photo4 from "../../assets/Group_404.png";
import photo5 from "../../assets/Group_158_a@2x.png";
const Lessons = (props) => {
  var [num, setNum] = useState(1);
  const location = useLocation();
  const locationData = location.state;
  const lessons = locationData.lessons;
  const unit = locationData.title;
  const [title, setTitle] = useState("");
  
  return (
    <div>
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
          width={"100%"}
          height={"100%"}
          x={6}
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
            <h3> درس های {unit}</h3>
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
            <p>درس {title}</p>
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
          <p>دانلود فایل پی دی اف</p>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Lessons;
