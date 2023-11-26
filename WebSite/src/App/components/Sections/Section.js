import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { withNamespaces } from "react-i18next";
import JsonFiles from "../../Json Files/SchoolSubjects.json";
import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Sections.css";
import image4 from "../../assets/Group_158_bu.png";
import image1 from "../../assets/Group_201_ww@2x.png";
import image2 from "../../assets/Group_203@2x.png";
import image3 from "../../assets/Group_205@2x.png";
import shape1 from "../../assets/Shape-1.png";
import shape2 from "../../assets/shape-2.png";
import Shape3 from "../../assets/Shape-3.png";

const Section = ({ t }, props) => {
  "C:\\UsersKhatima Sadat/Documents/LarkhodeStructure/school_subjectsdari_curriculamprimarysecond_gradeart_subjectlessonslesson_1";
  const navigate = useNavigate();
  const { userInfo, isLoading } = useContext(AuthContext);
  const base_path = "https://larkhoad.s3.ap-south-1.amazonaws.com";
  const pic =
    "C:\\UsersKhatima Sadat/Documents/LarkhodeStructure/school_subjectsdari_curriculamprimarysecond_gradeart_subjectlessonslesson_1";
  var data;
  if (t("sectionlang") == "dari") {
    data = JsonFiles.dari_curriculam;
  } else {
    data = JsonFiles.pashto_curriculam;
  }

  // const navigation = useNavigate();
  // if (userInfo == null) {
  //   return navigation("/");
  // } else if (isLoading) {
  //   return <h1>Loading.....</h1>;
  // } else {
  return (
    <div className="full-section">
      <div className="section">
        <div className="svg">
          <foreignObject width={"20%"} height={"20%"} x={0} y={0}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={92.512}
              height={93.517}
              {...props}
            >
              <g fill="none">
                <path d="M92.513 27.682 21.475 93.516.001-.001Z" />
                <path
                  fill="#edc315"
                  d="m13.592 14.504 13.761 59.93 45.525-42.19-59.286-17.74M0 0l92.513 27.682-71.038 65.834L0 0Z"
                />
              </g>
            </svg>
          </foreignObject>
        </div>
        <div className="svg1">
          <foreignObject width={"50%"} height={"50%"} x={5} y={5}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={95.444}
              height={83.662}
              {...props}
            >
              <path
                fill="#e6e6e6"
                d="M86.369 79.086a4.537 4.537 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.537-4.577Zm-28.79 0a4.538 4.538 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.537-4.577Zm-28.79 0a4.537 4.537 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.536-4.577ZM0 79.086a4.537 4.537 0 1 1 4.537 4.577A4.557 4.557 0 0 1 0 79.086Zm86.369-24.837a4.537 4.537 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.538 4.538 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.537 4.537 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.536-4.577ZM0 54.249a4.537 4.537 0 1 1 4.537 4.577A4.557 4.557 0 0 1 0 54.249Zm86.369-24.836a4.537 4.537 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.538 4.538 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.537 4.537 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.536-4.577ZM0 29.413a4.537 4.537 0 1 1 4.537 4.577A4.557 4.557 0 0 1 0 29.413ZM86.369 4.577a4.537 4.537 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.538 4.538 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.537 4.537 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.536-4.577ZM0 4.577a4.537 4.537 0 1 1 4.537 4.577A4.557 4.557 0 0 1 0 4.577Z"
              />
            </svg>
          </foreignObject>
        </div>
        <div className="prevuse" onClick={() => navigate(-1)}>
          <img src={image4} />
        </div>
        <div id="title">
          <h1>{t("section1")}</h1>
          <p>{t("section2")}</p>
        </div>
        <ul id="ul-section">
          <li>
            <Link
              to="/grades"
              state={{
                grades: data.primary.grades,
                school_path: base_path + data.primary.base_path,
              }}
            >
              <img src={image1} />
              <h1>{t("section3")}</h1>
              <p>{t("section4")}</p>
            </Link>
          </li>
          <li>
            <Link
              to="/grades"
              state={{
                grades: data.secondary.grades,
                school_path: base_path + data.secondary.base_path,
              }}
            >
              <img src={image2} />
              <h1>{t("section5")} </h1>
              <p>{t("section6")}</p>
            </Link>
          </li>
          <li>
            <Link
              to="/grades"
              state={{
                grades: data.high_school.grades,
                school_path: base_path + data.high_school.base_path,
              }}
            >
              <img src={image3} />
              <h1>{t("section7")} </h1>
              <p>{t("section8")}</p>
              <p></p>
            </Link>
          </li>
        </ul>
        <div className="svg2">
          <foreignObject width={"40%"} height={"40%"} x={5} y={5}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={95.444}
              height={83.662}
              {...props}
            >
              <path
                fill="#e6e6e6"
                d="M86.369 79.086a4.537 4.537 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.537-4.577Zm-28.79 0a4.538 4.538 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.537-4.577Zm-28.79 0a4.537 4.537 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.536-4.577ZM0 79.086a4.537 4.537 0 1 1 4.537 4.577A4.557 4.557 0 0 1 0 79.086Zm86.369-24.837a4.537 4.537 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.538 4.538 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.537 4.537 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.536-4.577ZM0 54.249a4.537 4.537 0 1 1 4.537 4.577A4.557 4.557 0 0 1 0 54.249Zm86.369-24.836a4.537 4.537 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.538 4.538 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.537 4.537 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.536-4.577ZM0 29.413a4.537 4.537 0 1 1 4.537 4.577A4.557 4.557 0 0 1 0 29.413ZM86.369 4.577a4.537 4.537 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.538 4.538 0 1 1 4.537 4.577 4.558 4.558 0 0 1-4.537-4.577Zm-28.79 0a4.537 4.537 0 1 1 4.537 4.577 4.557 4.557 0 0 1-4.536-4.577ZM0 4.577a4.537 4.537 0 1 1 4.537 4.577A4.557 4.557 0 0 1 0 4.577Z"
              />
            </svg>
          </foreignObject>
        </div>
        <div className="svg3">
          <foreignObject width={"20%"} height={"20%"} x={-3} y={-3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={94.185}
              height={91.531}
              // {...props}
            >
              <g fill="none">
                <path d="M63.413 91.531-.003 18.324 94.182 0Z" />
                <path
                  fill="#edc315"
                  d="m59.512 71.754 19.72-58.657L18.874 24.84l40.638 46.914m3.901 19.777L0 18.324 94.185 0 63.413 91.531Z"
                />
              </g>
            </svg>
          </foreignObject>
        </div>
      </div>
      <div className="mobile-section">
        <div className="mob-sec-header">
        <div className="prevuse" onClick={() => navigate(-1)}>
          <img src={image4} />
        </div>
          <div id="title">
            <h1>{t("section1")}</h1>
            <p>{t("section2")}</p>
          </div>
          <div className="shape-1">
            <img src={shape1} />
          </div>
          <div className="shape-2">
            <img src={shape2} />
          </div>
        </div>
        <div className="mob-sec-article">
          <ul id="ul-section">
            <li>
              <Link
                to="/grades"
                state={{
                  grades: data.primary.grades,
                }}
              >
                <img src={image1} />
                <h1>{t("section3")}</h1>
                <p>{t("section4")}</p>
              </Link>
            </li>
            <li>
              <Link
                to="/grades"
                state={{
                  grades: data.secondary.grades,
                }}
              >
                <img src={image2} />
                <h1>{t("section5")} </h1>
                <p>{t("section6")}</p>
              </Link>
            </li>
            <li>
              <Link
                to="/grades"
                state={{
                  grades: data.high_school.grades,
                }}
              >
                <img src={image3} />
                <h1>{t("section7")} </h1>
                <p>{t("section8")}</p>
                <p></p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mob-sec-bottom">
          <div className="shape-3">
            <img src={shape2} />
          </div>
          <div className="shape-4">
            <img src={Shape3} />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
  //  }
};

export default withNamespaces()(Section);