import { useContext, useEffect,useState } from "react";
import { AuthContext } from "./App/context/AuthContext";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./App/components/Header/Header.js";
import SingUp from "./App/screens/SingUp/SingUp";
// import LogIn from "./App/screens/Login/LogIn";
import ForgotPassword from "./App/screens/ForgotPassword/ForgotPassword";
import SendCode from "./App/screens/SendCode/SendCode";
import NewPassword from "./App/screens/NewPassword/NewPassword";
import Section from "./App/components/Sections/Section";
import Grades from "./App/components/Grades/Grades";
import Books from "./App/components/Books/Books";
import Units from "./App/components/Units/Units";
import Lessons from "./App/components/Lessons/Lessons";
import Grad from "./App/headerComponenets/Grad/Grad.js";
import Book from "./App/headerComponenets/Book/Book.js";
import Downloading from "./App/headerComponenets/Download/Downloading.js";
// import Continue from "./App/Continue";
import About from "../src/App/headerComponenets/About/About.js";
import Suggestion from "../src/App/headerComponenets/Suggestion/Suggestion.js";
import ChangeProfile from "../src/App/headerComponenets/ChangeProfile/ChangeProfile";
import Home from "./App/components/Home/Home.js";
import "./App.css";
import ReadingBook from "../src/App/headerComponenets/ReadBooks/readingBook.js";
import Loading from "./App/Loading/Loading.js";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., data fetching) that triggers loading
    const fetchData = async () => {
      // Perform your async operation here

      // Simulate the completion of the async operation after 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Set loading to false when the operation is complete
      setLoading(false);
    };

    // Call the fetchData function
    fetchData();
  }, []);

  const { userInfo, currentPath, setCurrentPath } = useContext(AuthContext);
  console.log(userInfo);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  });
  return (
    <div className="App">
          {loading ? (
        <Loading />
      ) : (
        <>
        
     
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
        currentPath === "/home" ||
        userInfo != null ? (
          <Header/>
        ) : (
          <></>
        )}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/section" element={<Section />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/books" element={<Books />} />
          <Route path="/unit" element={<Units />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/grad" element={<Grad />} />
          <Route path="/book" element={<Book />} />
          <Route path="/downloading" element={<Downloading />} />
          {/* <Route path="/continue" element={<Continue />} /> */}
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
      </>
      )}
    </div>
  );
}

export default App;
