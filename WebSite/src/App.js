import { useContext, useEffect } from "react";
import { AuthContext } from "./App/context/AuthContext";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./App/components/Header/Header";
import SingUp from "./App/screens/SingUp/SingUp";
import LogIn from "./App/screens/Login/LogIn";
import ForgotPassword from "./App/screens/ForgotPassword/ForgotPassword";
import SendCode from "./App/screens/SendCode/SendCode";
import NewPassword from "./App/screens/NewPassword/NewPassword";
import Section from "./App/components/Sections/Section";
import Grades from "./App/components/Grades/Grades";
import Books from "./App/components/Books/Books";
import Units from "./App/components/Units/Units";
import Lessons from "./App/components/Lessons/Lessons";
import Grad from "./App/Grad";
import Book from "./App/Book";
import Downloading from "./App/Downloading";
import Continue from "./App/Continue";
import About from "./App/About";
import Suggestion from "./App/Suggestion";
import ChangeProfile from "./App/screens/ChangeProfile/ChangeProfile";
import Home from "./App/components/Home/Home";
import "./App.css";
import ReadingBook from "./readingBook";
function App() {
  const { userInfo, currentPath, setCurrentPath } = useContext(AuthContext);
  console.log(userInfo);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  });
  return (
    <div className="App">
      <Router>
        {/* {!(
          window.location.pathname === "/login" ||
          window.location.pathname === "/" ||
          window.location.pathname === "/forgotpassword" ||
          window.location.pathname === "/sendcode" ||
          window.location.pathname === "/newpassword"
        ) ||
        window.location.pathname === "/header" ||
        userInfo != null ? (
          <Header />
        ) : (
          <></>
        )} */}
        {!(
          currentPath === "/login" ||
          currentPath === "/" ||
          currentPath === "/forgotpassword" ||
          currentPath === "/sendcode" ||
          currentPath === "/newpassword"
        ) ||
        currentPath === "/header" ||
        userInfo != null ? (
          <Header />
        ) : (
          <></>
        )}
        <Routes>
          <Route path="/header" element={<Home />} />
          <Route path="/section" element={<Section />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/books" element={<Books />} />
          <Route path="/unit" element={<Units />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/grad" element={<Grad />} />
          <Route path="/book" element={<Book />} />
          <Route path="/downloading" element={<Downloading />} />
          <Route path="/continue" element={<Continue />} />
          <Route path="/about" element={<About />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/changeprofile" element={<ChangeProfile />} />
          <Route path="/readingBook" element={<ReadingBook />} />
          {/* <Route
            exact
            path="/"
            element={userInfo === null ? <SingUp /> : <Home />}
          /> */}
          <Route exact path="/" element={<SingUp />} />
          <Route exact path="/login" element={<SingUp />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/sendcode" element={<SendCode />} />
          <Route exact path="/newpassword" element={<NewPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
