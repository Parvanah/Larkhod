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
  const [IsLoading, setIsLoading] = useState();
  const [FirstColor, setFirstColor] = useState("#3c98bd");
  const [secondColor, setsecondColor] = useState("#0f53a1");
  const [nextBtn, setNextbtn] = useState({
    FirstColor: "#3c98bd",
    secondColor: "#0f53a1",
  });
  const [backBtn, setBackbtn] = useState({
    FirstColor: "#3c98bd",
    secondColor: "#0f53a1",
  });

  const [pageNum, setPageNum] = useState(0);
  const subject_path = locationData.subject_path;
  const [lesson_path, setLessonPath] = useState(lessons[0]);
  console.log(lesson_path);
  const handelPage = () => {
    if (pageNum === lesson_path.paths.length - 1) {
      setPageNum(pageNum);
    } else {
      setPageNum(pageNum + 1);
    }
  };
  const handlePageBack = () => {
    if (pageNum === 0) {
      setPageNum(pageNum);
    } else {
      setPageNum(pageNum - 1);
    }
  };
  const [title, setTitle] = useState(lessons[0].label);

  const navigation = useNavigate();
  //   if (userInfo === null) {
  //     return navigation("/");
  //   } else if (isLoading) {
  //     return <h1>Loading.....</h1>;
  //   } else if(userInfo !== null){
  const [sidebar, setSidebar] = useState("none");
  //const width = "100%";
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
                        setPageNum(0);
                        setIsLoading(true);
                        setTitle(item.label);
                        setLessonPath(item);
                        setIsLoading(false);
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
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <h1>{`${unit} _ ${title}`}</h1>
              )}
            </div>
            <img src={photo1}></img>
          </div>
          <div className="bottom">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div className="img">
                <img src={subject_path + lesson_path.paths[pageNum]}></img>
              </div>
            )}
          </div>
          <div className="midlle">
            <div className="pdf-Download-ls">
              <img src={photo3}></img>
              <p> {t("lessons3")}</p>
            </div>
            <div className="next-back-ls">
              <button
                className="next-ls"
                onClick={handelPage}
                style={
                  pageNum == lesson_path.paths.length - 1
                    ? {
                        backgroundImage: `linear-gradient(to left , rgb(192,192,192), #707070)`,
                      }
                    : {
                        backgroundImage: `linear-gradient(to left , ${backBtn.FirstColor},
    ${backBtn.secondColor})`,
                      }
                }
              >
                next
              </button>
              <button
                onClick={handlePageBack}
                className="back-ls"
                style={
                  pageNum == 0
                    ? {
                        backgroundImage: `linear-gradient(to left , rgb(192,192,192), #707070)`,
                      }
                    : {
                        backgroundImage: `linear-gradient(to left , ${backBtn.FirstColor},
    ${backBtn.secondColor})`,
                      }
                }
              >
                back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
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
            <img src={photo4} alt="pic" />
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
                        console.log(item);
                        setPageNum(0);
                        setIsLoading(true);
                        setTitle(item.label);
                        setLessonPath(item);
                        setIsLoading(false);
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
        <div className="mobileTop">
          <img className="BackGround_color" src={topHeader} alt="pic" />
          <div className="mobile-background">
            <div className="arrowLesson">
              <img
                alt="pic"
                className="arrow-mob"
                src={photo7}
                onClick={() => navigation(-1)}
              />
              <div className="menu-mob" onClick={handleSideBar}>
                <FiMenu color="white" />
              </div>
            </div>
            <img src={photo6} className="imgTop" alt="pic"></img>
            <div className="title-mob1">
              <p>{`${unit}- ${title}`}</p>
            </div>
          </div>
        </div>
        <div className="mobile-middle">
          <div className="img">
            {console.log(subject_path + lesson_path.paths[pageNum])}
            <img
              src={subject_path + lesson_path.paths[pageNum]}
              loading=""
              alt="pic"
            ></img>
          </div>
        </div>
        <div className="mobile-bottom">
          <div className="pdf-Download-ls">
            <img src={Down1} />
            <button />
            <p className="mobile-bottom-p">دانلود فایل پی دی اف</p>
          </div>
          <div className="next-back-ls">
            <button
              className="next-ls"
              onClick={handelPage}
              style={
                pageNum == lesson_path.paths.length - 1
                  ? {
                      backgroundImage: `linear-gradient(to left , rgb(192,192,192), #707070)`,
                    }
                  : {
                      backgroundImage: `linear-gradient(to left , ${backBtn.FirstColor},
    ${backBtn.secondColor})`,
                    }
              }
            >
              next
            </button>
            <button
              onClick={handlePageBack}
              className="back-ls"
              style={
                pageNum == 0
                  ? {
                      backgroundImage: `linear-gradient(to left , rgb(192,192,192), #707070)`,
                    }
                  : {
                      backgroundImage: `linear-gradient(to left , ${backBtn.FirstColor},
    ${backBtn.secondColor})`,
                    }
              }
            >
              back
            </button>
          </div>
        </div>
      </div>
    </body>
  );
  // }
};
export default withNamespaces()(Lessons);
