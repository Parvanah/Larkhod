import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Grads from "../Grades/Grades";
import gradeTwo from "../../Json Files/grade_2_dari.json";
import gradeNine from "../../Json Files/grade_9_dari.json";

const Section = () => {
  return (
    <div>
      <ul>
        <li>
          <Link
            to="/grades"
            state={{
              grades: [
                {
                  grade: "صنف اول",
                  id: 1,
                  subjects: gradeTwo.dari_curriculum.subjects,
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
            بخش ابتدائیه
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
            بخش متوسطه
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
            بخش لیسه
        </Link>
        </li>
      </ul>
    </div>
  );
};
export default Section;
