
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import {  useLocation } from "react-router-dom";
import * as React from "react";
import "./Lesson.css";
import photo1 from "../../assets/Group_406.png";
import { useState } from "react";
import photo4 from "../../assets/Group_404.png";
import photo5 from "../../assets/Group_158_a@2x.png";
import photo6 from "../../assets/Group 407.png";
import scrollArrow from "../../assets/Path_1005.png";
import topHeader from "../../assets/Path 2.png";
import photo7 from "../../assets/Group_158_f.png";
import { ImCross } from "react-icons/im";
import ScrollArrow from "../../assets/Path 1005.png";
const Lessons = ({ t }, props) => {
  const location = useLocation();
  const locationData = location.state;
  const lessons = locationData.lessons;
  const unit = locationData.title;
  const unitsPath = locationData.unitPath;
  const [IsLoading, setIsLoading] = useState(true);
  const [IsErrorOnImageLoad, setIsErrorOnImageLoad] = useState(false);
  const backBtn= {
    FirstColor: "#3c98bd",
    secondColor: "#0f53a1",
  };
  const [pageNum, setPageNum] = useState(0);
  const subject_path = locationData.subject_path;
  const [lesson_path, setLessonPath] = useState(
    unitsPath ? { label: unit, paths: unitsPath } : lessons[0]
  );
  const handelPage = () => {
    setIsLoading(true);
    setIsErrorOnImageLoad(false);
    if (pageNum === lesson_path.paths.length - 1) {
      setPageNum(pageNum);
    } else {
      setPageNum(pageNum + 1);
    }
  };
  const handlePageBack = () => {
    setIsLoading(true);
    setIsErrorOnImageLoad(false);
    if (pageNum === 0) {
      setPageNum(pageNum);
    } else {
      setPageNum(pageNum - 1);
    }
  };
  const handleClick = (title, lesson_path) => {
    setPageNum(0);
    setIsLoading(true);
    setIsErrorOnImageLoad(false);
    setTitle(title);
    setLessonPath(lesson_path);
    setSidebar("none");
  };
  const [title, setTitle] = useState(
    unitsPath ? t("lessons6") : lessons[0].label
  );

  const navigation = useNavigate();
  const [sidebar, setSidebar] = useState("none");
  const handleSideBar = () => {
    if (sidebar === "none") {
      setSidebar("inline-block");
    } else {
      setSidebar("none");
    }
  };
  const ScrollSideBarUp = () => {
    const content = document.getElementById("sidebar-lessons");
    const MobileContent = document.getElementById("sidebar-mobile");
    content.scrollBy({
      top: +50,
      behavior: "smooth",
    });
    MobileContent.scrollBy({
      top: +50,
      behavior: "smooth",
    });
  };
  return (
    <body className="Lesson_body">
      <div className="lesson">
        <div className="sidebar">
          <div className="arrow" onClick={() => navigation(-1)}>
            <img src={photo5} alt=""/>
          </div>
          <div className="header_lesson">
            <img src={photo4} alt=""/>
          </div>
          <div className="text">
            <h4 className="Lesson_title">
              {t("sectionlang") === "dari"
                ? `${t("lessons1")} ${unit}`
                : `د ${unit}  ${t("lessons1")}`}
            </h4>
            <div className="sidebar-lessons">
              <div className="inside_sidebar-lessons" id="sidebar-lessons">
                {unitsPath ? (
                  <div
                    className="lesson_item"
                    style={
                      title === t("lessons6")
                        ? { background: "#FFF", color: "#3C98BD" }
                        : {}
                    }
                    onClick={() => {
                      handleClick(t("lessons6"), {
                        label: unit,
                        paths: unitsPath,
                      });
                    }}
                  >
                    <div> 00</div>
                    <div className="titles_lesson">{t("lessons6")}</div>
                  </div>
                ) : (
                  <div></div>
                )}
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
                        handleClick(item.label, item);
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
            <img src={scrollArrow} onClick={ScrollSideBarUp} alt=""/>
          </div>
        </div>
        <div className="showLesson">
          <div className="title">
            <div className="main_lesson_title">
              <h1>{`${unit} _ ${title}`}</h1>
            </div>
            <img src={photo1} alt=""></img>
          </div>
          <div className="bottom">
            {IsLoading ? (
              <div className="spinner">
                <TailSpin
                  width={"80px"}
                  color="#474646"
                  height={"80px"}
                  margin-left={"20%"}
                />
              </div>
            ) : (
              <div className="img">
                {!IsErrorOnImageLoad ? (
                  <img
                  alt=""
                    src={
                      `${subject_path + lesson_path.paths[pageNum]}?t=` +
                      pageNum
                    }
                    style={IsLoading ? { opacity: 0 } : { opacity: 1 }}
                    onLoad={() => {
                      setIsLoading(false);
                    }}
                    onError={() => {
                      setIsLoading(false);
                      setIsErrorOnImageLoad(true);
                    }}
                  ></img>
                ) : (
                  <div className="ErrorOnLoading">{t("lessons7")}</div>
                )}
              </div>
            )}
          </div>
          <div className="midlle">
            <div className="next-back-ls">
              <button
                className="next-ls"
                onClick={handelPage}
                disabled={pageNum === lesson_path.paths.length - 1 || IsLoading}
                style={
                  pageNum === lesson_path.paths.length - 1
                    ? {
                        backgroundImage: `linear-gradient(to left , rgb(192,192,192), #707070)`,
                      }
                    : {
                        backgroundImage: `linear-gradient(to left , ${backBtn.FirstColor},
    ${backBtn.secondColor})`,
                      }
                }
              >
                {t("lessons4")}
              </button>
              <button
                onClick={handlePageBack}
                className="back-ls"
                disabled={pageNum === 0 || IsLoading}
                style={
                  pageNum === 0
                    ? {
                        backgroundImage: `linear-gradient(to left , rgb(192,192,192), #707070)`,
                      }
                    : {
                        backgroundImage: `linear-gradient(to left , ${backBtn.FirstColor},
    ${backBtn.secondColor})`,
                      }
                }
              >
                {t("lessons5")}
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
            <h4 className="text-mob-title">{t("sectionlang") === "dari"
                ? `${t("lessons1")} ${unit}`
                : `د ${unit}  ${t("lessons1")}`}</h4>
            <div className="sidebar-mobile-wrapper">
              <div className="sidebar-mobile" id="sidebar-mobile">
                {unitsPath ? (
                  <div
                    className="mob-item"
                    style={
                      title === t("lessons6")
                        ? { background: "#3C98BD", color: "#FFF" }
                        : {}
                    }
                    onClick={() => {
                      handleClick(t("lessons6"), {
                        label: unit,
                        paths: unitsPath,
                      });
                    }}
                  >
                    <div> 00</div>
                    <div className="titles-mob">{t("lessons6")}</div>
                  </div>
                ) : (
                  <div></div>
                )}
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
                        handleClick(item.label, item);
                      }}
                    >
                      <div> 0{index + 1}</div>
                      <div className="titles-mob">{item.label}</div>
                    </div>
                  );
                })}
              </div>
              <div className="scrollSideBar-mobile">
                <img src={ScrollArrow} onClick={ScrollSideBarUp} alt=""/>
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
                {t("lessons8")}
              </div>
            </div>
            <img src={photo6} className="imgTop" alt="pic"></img>
            <div className="title-mob1">
              {IsLoading ? (
                <div>
                  <TailSpin width={"20px"} color=" #474646" height={"20px"} />
                </div>
              ) : (
                <p>{`${unit}- ${title}`}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mobile-middle">
          <div className="img">
            {!IsErrorOnImageLoad ? (
                  <img
                    src={
                      `${subject_path + lesson_path.paths[pageNum]}?t=` +
                      pageNum
                    }
                    style={IsLoading ? { opacity: 0 } : { opacity: 1 }}
                    onLoad={() => {
                      setIsLoading(false);
                    }}
                    onError={() => {
                      setIsLoading(false);
                      setIsErrorOnImageLoad(true);
                    }}
                    alt="pic"
                  ></img>
                ) : (
                  <div className="ErrorOnLoading">{t("lessons7")}</div>
                )}
          </div>
        </div>
        <div className="mobile-bottom">
          <div className="next-back-ls">
            <button
              className="next-ls"
              onClick={handelPage}
              disabled={pageNum === lesson_path.paths.length - 1 || IsLoading}
              style={
                pageNum === lesson_path.paths.length - 1
                  ? {
                      backgroundImage: `linear-gradient(to left , rgb(192,192,192), #707070)`,
                    }
                  : {
                      backgroundImage: `linear-gradient(to left , ${backBtn.FirstColor},
    ${backBtn.secondColor})`,
                    }
              }
            >
              {t("lessons4")}
            </button>
            <button
              onClick={handlePageBack}
              className="back-ls"
              disabled={pageNum === 0 || IsLoading}
              style={
                pageNum === 0
                  ? {
                      backgroundImage: `linear-gradient(to left , rgb(192,192,192), #707070)`,
                    }
                  : {
                      backgroundImage: `linear-gradient(to left , ${backBtn.FirstColor},
    ${backBtn.secondColor})`,
                    }
              }
            >
              {t("lessons5")}
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};
export default withNamespaces()(Lessons);
