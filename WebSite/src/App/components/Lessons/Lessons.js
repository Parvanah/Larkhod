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
import scrollArrow from "../../assets/Path_1005.png";
import topHeader from "../../assets/Path 2.png";
// import top1 from "../../assets/Path 2@2x.png";
import Down1 from "../../assets/Group_408.png";
import photo7 from "../../assets/Group_158_f.png";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
const Lessons = ({ t }, props) => {
  const { userInfo, isLoading } = useContext(AuthContext);

  var [num, setNum] = useState(1);
  const location = useLocation();
  const locationData = location.state;
  const lessons = locationData.lessons;
  console.log(lessons);
  const unit = locationData.title;
  const DownloadPdf = (url, fileName) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.target = "bank";
    aTag.click();
    aTag.remove();
  };
  const [pageNum, setPageNum] = useState(0);
  const subject_path = locationData.subject_path;
  const [lesson_path, setLessonPath] = useState(
    subject_path + lessons[0].paths[pageNum]
  );
  const handelPage = () => {
    setPageNum(pageNum + 1);
  };
  const [title, setTitle] = useState(lessons[0].label);

  const navigation = useNavigate();
  //   if (userInfo === null) {
  //     return navigation("/");
  //   } else if (isLoading) {
  //     return <h1>Loading.....</h1>;
  //   } else if(userInfo !== null){
  const [sidebar, setSidebar] = useState("none");
  const width = "100%";
  const handleSideBar = () => {
    if (sidebar === "none") {
      setSidebar("inline-block");
    } else {
      setSidebar("none");
    }
  };
  return (
    <body className="Lesson_body">
      <div className="lesson">
        <div className="sidebar">
          <div className="arrow" onClick={() => navigation(-1)}>
            <img src={photo5} />
          </div>
          <div className="header_lesson">
            <img src={photo4} />
          </div>
          <div className="text">
            <h3 className="Lesson_title">
              {t("lessons1")} {unit}
            </h3>
            <div className="sidebar-lessons">
              <div className="inside_sidebar-lessons">
                {lessons.map((item, index) => {
                  return (
                    <div
                      className="lesson_item"
                      style={
                        title === item.label
                          ? { background: "#FFF", color: "#3C98BD" }
                          : {}
                      }
                      onClick={() => {
                        setTitle(item.label);
                        setLessonPath(subject_path + item.paths[pageNum]);
                      }}
                    >
                      <div> 0{index + 1}</div>
                      <div className="titles_lesson">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="scrollArrow">
            <img src={scrollArrow} />
          </div>
        </div>
        <div className="showLesson">
          <div className="title">
            <div className="main_lesson_title">
              <h1>{`${unit} _ ${title}`}</h1>
            </div>
            <img src={photo1}></img>
          </div>
          <div className="bottom">
            <div className="img">
              <img src={lesson_path}></img>
            </div>
          </div>
          <div className="midlle">
            <div className="pdf-Download-ls">
              <img src={photo3}></img>
              <p> {t("lessons3")}</p>
            </div>
            <div className="next-back-ls">
              <button className="next-ls" onClick={handelPage}>
                next
              </button>
              <button className="back-ls">back</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="mobileTop">
          <img className="BackGround_color" src={topHeader} />
          <div className="mobile-background">
            <div className="arrowLesson">
              <img
                className="arrow-mob"
                src={photo7}
                onClick={() => navigation(-1)}
              />
              <div className="menu-mob" onClick={handleSideBar}>
                <FiMenu color="white" />
              </div>
            </div>
            <img src={photo6} className="imgTop"></img>
            <div className="title-mob1">
              <p>{`${unit}- ${title}`}</p>
            </div>
          </div>
        </div>
        <div className="mobile-middle">
          <div className="img">
            <img src={lesson_path}></img>
          </div>
        </div>
        <div className="mobile-bottom">
          <div className="pdf-Download-ls">
            <img src={Down1} />
            <button />
            <p className="mobile-bottom-p">دانلود فایل پی دی اف</p>
          </div>
          <div className="next-back-ls">
            <button className="next-ls">next</button>
            <button className="back-ls">back</button>
          </div>
        </div>
        <div
          className="menu_bar"
          style={{
            display: `${sidebar}`,
          }}
        >
          <div className="cross-mob" onClick={handleSideBar}>
            <ImCross color="#3C98BD" />
          </div>
          <div className="mob-side">
            <img src={photo4} />
          </div>
          <div className="text-mob">
            <h3 className="text-mob-title"> درس های {unit}</h3>
            <div className="sidebar-mobile-wrapper">
              <div className="sidebar-mobile">
                {lessons.map((item, index) => {
                  return (
                    <div
                      className="mob-item"
                      style={
                        title === item.label
                          ? { background: "#3C98BD", color: "#FFF" }
                          : {}
                      }
                      onClick={() => {
                        setTitle(item.label);
                        setLessonPath(subject_path + item.paths[0]);
                      }}
                    >
                      <div> 0{index + 1}</div>
                      <div className="titles-mob">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
  // }
};
export default withNamespaces()(Lessons);