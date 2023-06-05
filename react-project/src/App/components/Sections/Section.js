
import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Grads from "../Grades/Grades";
import gradeTwo from "../../Json Files/grade_2_dari.json";
import gradeNine from "../../Json Files/grade_9_dari.json";
import "./Sections.css";
import image4 from "../../assets/Group_158_bu.png";
import image1 from "../../assets/Group_201_ww@2x.png";
import image2 from "../../assets/Group_203@2x.png";
import image3 from "../../assets/Group_205@2x.png";
// import { useNavigation } from "react-router-dom";
const Section = (props) => {
  // const navigate = useNavigation();
    "C:\\UsersKhatima Sadat/Documents/LarkhodeStructure/school_subjectsdari_curriculamprimarysecond_gradeart_subjectlessonslesson_1";
  return (
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
      <div className="prevuse">
        <img src={image4} />
      </div>
      <div id="title">
        <h1>بخش هاي مكتب</h1>
        <p>از اینجا شما میتوانید صنف خود را مطابق بخش که هستید انتخاب کنید</p>
      </div>
      <ul id="ul-section">
        <li>
          <Link
            to="/grades"
            state={{
              grades: [
                {
                  grade: "صنف اول",
                  id: 1,
                  subjects: gradeTwo.dari_curriculum.subjects,
                  lessonsPic:
                    "C:UsersKhatima SadatDocumentsLarkhodeStructureschool_subjectsdari_curriculamprimarysecond_grade",
                },
                {
                  grade: "صنف دوم",
                  id: 2,
                  subjects: gradeTwo.dari_curriculum.subjects,
                },
                {
                  grade: "صنف سوم",
                  id: 3,
                  subjects: gradeTwo.dari_curriculum.subjects,
                },
                {
                  grade: "صنف چهارم",
                  id: 4,
                  subjects: gradeTwo.dari_curriculum.subjects,
                },
                {
                  grade: "صنف پنجم",
                  id: 5,
                  subjects: gradeTwo.dari_curriculum.subjects,
                },
                {
                  grade: "صنف ششم",
                  id: 6,
                  subjects: gradeTwo.dari_curriculum.subjects,
                },
              ],
            }}
          >
            <img src={image1} />
            <h1>بخش ابتدائیه</h1>
            <p>
              صنف مورد نظر خودرا <br />
              از بخش ابتداییه انتخاب کنید
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/grades"
            state={{
              grades: [
                {
                  grade: "صنف هفتم",
                  id: 1,
                  subjects: gradeNine.dari_curriculum.subjects,
                },
                {
                  grade: "صنف هشتم",
                  id: 2,
                  subjects: gradeNine.dari_curriculum.subjects,
                },
                {
                  grade: "صنف نهم",
                  id: 3,
                  subjects: gradeNine.dari_curriculum.subjects,
                },
              ],
            }}
          >
            <img src={image2} />
            <h1>بخش متوسطه</h1>
            <p>
              صنف مورد نظر خود را
              <br /> از بخش متوسطه انتخاب کنید
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/grades"
            state={{
              grades: [
                {
                  grade: "صنف دهم",
                  id: 1,
                  subjects: gradeNine.dari_curriculum.subjects,
                },
                {
                  grade: "صنف یازدهم",
                  id: 2,
                  subjects: gradeNine.dari_curriculum.subjects,
                },
                {
                  grade: "صنف دوازدهم",
                  id: 3,
                  subjects: gradeNine.dari_curriculum.subjects,
                },
              ],
            }}
          >
            <img src={image3} />
            <h1>بخش لیسه</h1>
            <p>
              صنف مورد نظر خود را <br />
              از بخش لیسه انتخاب کنید
            </p>
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
            {...props}
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
  );
};
export default Section;



