import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Grads from "../Grades/Grades";
import gradeTwo from "../../Json Files/grade_2_dari.json";
import gradeNine from "../../Json Files/grade_9_dari.json";
// const sections = [
//   {
//     path: "/primary",
//     components: Primary,
//     routes: [
//       {
//         path: "/primary/bus",
//         components: Bus,
//       },
//       {
//         path: "/primary/cart",
//         components: Cart,
//       },
//     ],
//   },
//   {
//     path: "/secondary",
//     components: Secondary,
//     routes: [
//       {
//         path: "/primary/bus",
//         components: Bus,
//       },
//       {
//         path: "/primary/cart",
//         components: Cart,
//       },
//     ],
//   },
//   {
//     path: "/high",
//     components: High,
//     routes: [
//       {
//         path: "/primary/bus",
//         components: Bus,
//       },
//       {
//         path: "/primary/cart",
//         components: Cart,
//       },
//     ],
//   },
// ];
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
// export default Section
// export default function ReactConfigExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/grades"> بخش ابتدائیه</Link>
//           </li>
//           <li>
//             <Link to="/secondary">بخش متوسطه</Link>
//           </li>
//           <li>
//             <Link to="/high">بخش لیسه</Link>
//           </li>
//         </ul>

//         <Routes>
//           {sections.map((route, i) => (
//             <RouteWithSubRoutes key={i} {...route} />
//           ))}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={(props) => <route.components {...props} routes={route.routes} />}
//     />
//   );
// }

// function Secondary({ routes }) {
//   return (
//     <div>
//       <h2>secondary</h2>
//       <ul>
//         <li>
//           <Link to="/secondary/seventh">صنف هفتم</Link>
//         </li>
//         <li>
//           <Link to="/secondary/eighth">صنف هشتم</Link>
//         </li>
//         <li>
//           <Link to="/secondary/ninth">صنف نهم</Link>
//         </li>
//       </ul>

//       <Switch>
//         {routes.map((route, i) => (
//           <RouteWithSubRoutes key={i} {...route} />
//         ))}
//       </Switch>
//     </div>
//   );
// }
// function High({ routes }) {
//   return (
//     <div>
//       <h2>high</h2>
//       <ul>
//         <li>
//           <Link to="/high/tenth">صنف هفتم</Link>
//         </li>
//         <li>
//           <Link to="/high/eleventh">صنف هشتم</Link>
//         </li>
//         <li>
//           <Link to="/high/twelve">صنف نهم</Link>
//         </li>
//       </ul>

//       <Switch>
//         {routes.map((route, i) => (
//           <RouteWithSubRoutes key={i} {...route} />
//         ))}
//       </Switch>
//     </div>
//   );
// }

// function Primary({ routes }) {
//   return (
//     <div>
//       <h2>Primary</h2>
//       <ul>
//         <li>
//           <Link to="/primary/first">صنف اول</Link>
//         </li>
//         <li>
//           <Link to="/primary/second">صنف دوم</Link>
//         </li>
//         <li>
//           <Link to="/primary/third">صنف سوم</Link>
//         </li>
//         <li>
//           <Link to="/primary/fourth">صنف چهارم</Link>
//         </li>
//         <li>
//           <Link to="/primary/fifth">صنف پنجم</Link>
//         </li>
//         <li>
//           <Link to="/primary/sixth">صنف ششم</Link>
//         </li>
//       </ul>

//       <Switch>
//         {routes.map((route, i) => (
//           <RouteWithSubRoutes key={i} {...route} />
//         ))}
//       </Switch>
//     </div>
//   );
// }

// function Bus() {
//   return <h3>Bus</h3>;
// }
// function Cart() {
//   return <h3>Cart</h3>;
// }
