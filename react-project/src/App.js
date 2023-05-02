import ChangeProfile from "./App/screens/ChangeProfile/ChangeProfile";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";


import Header from "./Header";
import Home from "./App/screens/Home";
import LogIn from "./App/screens/Login/LogIn"
import SinUp from "./App/screens/SinUp/SinUp"
import Section from "./App/components/Sections/Section";
import Grades from "./App/components/Grades/Grades";
import Books from "./App/components/Books/Books";
import Units from "./App/components/Units/Units";
import Lessons from "./App/components/Lessons/Lessons";

import Grad from "./App/Grad";
import Book from "./App/Book"
import Continue from "./App/Continue";
import About from "./App/About";
import Suggestion from "./App/Suggestion";
import Profile from "./App/screens/Profile/Profile";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/login" element={<LogIn />} />
        <Route  path="/sinup" element={<SinUp />} />
        <Route path="/section" element={<Section />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/books" element={<Books />} />
        <Route path="/unit" element={<Units />} />
        <Route path="/lessons" element={<Lessons />} />

        <Route path="/grad" element={<Grad />} />
        <Route path="/book" element={<Book />} />
        <Route path="/continue" element={<Continue />} />
        <Route path="/about" element={<About />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/changeprofile" element={<ChangeProfile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
