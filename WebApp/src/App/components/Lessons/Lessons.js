import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import * as React from "react";
import "./Lesson.css";
import photo1 from "../../assets/Group_406.png";
import { useState } from "react";
import photo2 from "../../assets/lesson_1.jpg";
import photo3 from "../../assets/Group_408.png";
import photo4 from "../../assets/Group_404.png";
import photo5 from "../../assets/Group_158_a@2x.png";
import photo6 from "../../assets/Group 407.png";
// import top1 from "../../assets/Path 2@2x.png";
import Down1 from "../../assets/Group_408.png";
import photo7 from "../../assets/Group_158_f.png";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
const Lessons = ({ t }) => {
  const { userInfo, isLoading } = useContext(AuthContext);

  var [num, setNum] = useState(1);
  const location = useLocation();
  const locationData = location.state;
  const lessons = locationData.lessons;
  console.log(lessons);
  const unit = locationData.title;

  const [lesson_path, setLessonPath] = useState();
  const subject_path = locationData.subject_path;
  // console.log(subject_path + lesson_path[0]);
  // console.log(subject_path + lesson_path[1]);

  const [title, setTitle] = useState("");

  // const navigation = useNavigate();
  //   if (userInfo === null) {
  //     return navigation("/");
  //   } else if (isLoading) {
  //     return <h1>Loading.....</h1>;
  //   } else if(userInfo !== null){
  const [sidebar, setSidebar] = useState("none");
  const handleSideBar = () => {
    if (sidebar === "none") {
      setSidebar("inline-block");
    } else {
      setSidebar("none");
    }
  };
  return (
    <body>
      <div className="lesson">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={403}
          height={580}
          //  {...props}
        >
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
              <h3>
                {t("lessons1")} {unit}
              </h3>
              <div className="sidebar-lessons">
                {lessons.map((item) => {
                  return (
                    <div>
                      <div> 0{num}</div>
                      <div
                        onClick={() => {
                          setTitle(item.label);
                          setLessonPath(subject_path + item.paths[0]);
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
              <p>
                {t("lessons2")} {title}
              </p>
            </div>
            <img src={photo1}></img>
          </div>
          <div className="bottom">
            <div className="img">
              <img src={lesson_path}></img>
            </div>
          </div>
          <div className="midlle">
            <img src={photo3}></img>
            <p> {t("lessons3")}</p>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="mobileTop">
          <img src={photo6} className="imgTop"></img>
         
          <div className="mobile-background">
            <div className="title-mob1">
              <h1> {unit}</h1>
              <p>درس {title}</p>
            </div>
            {/* <div className="mob-svg">
                <svg
    xmlns="http://www.w3.org/2000/svg"
    width={360}
    height={166.076}
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#3c98bd" />
        <stop offset={1} stopColor="#0f53a1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M396.137 49.383v94.452L378.6 168.849 357.881 198.4a43.727 43.727 0 0 1-3.08 3.906c-.437.511-.893.982-1.349 1.452a38.047 38.047 0 0 1-20.252 11.067 33.919 33.919 0 0 1-6.6.634H105.669c-12.211 0-23.73-6.279-31.276-17.057l-8.256-11.78-1.258-1.779-28.742-41.007V49.383Z"
      data-name="Path 2"
      transform="translate(-36.137 -49.383)"
    />
          </svg>
            </div> */}
            {/* <img src={top1}></img> */}
          </div>
          <Link to="/Grades">
            <img className="arrow-mob" src={photo7} />
          </Link>
          <div className="menu-mob" onClick={handleSideBar}>
            <FiMenu />
          </div>
          <div
            className="menu_bar"
            style={{
              display: `${sidebar}`,
            }}
          >
            <div className="cross-mob" onClick={handleSideBar}>
              <ImCross />
            </div>
            <div className="mob-side">
              <img src={photo4} />
            </div>
            <div className="text-mob">
              <h3> درس های {unit}</h3>
              <div className="sidebar-mobile">
                {lessons.map((item,index) => {
                  return (
                    <div>
                      <div> 0{index+1}</div>
                      <div
                        onClick={() => {
                          setTitle(item.label);
                        }}
                        className="titles-mob"
                      >
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <img src={photo6} className="imgTop" />
        </div>
        <div className="mobile-middle">
          <div className="img">
          <img src={lesson_path}></img>
          </div>
        </div>
        <div className="mobile-bottom">
          <button></button>
          <img src={Down1} />
          <button />
          <p>دانلود فایل پی دی اف</p>
        </div>
      </div>
    </body>
  );
  // }
};
export default withNamespaces()(Lessons);