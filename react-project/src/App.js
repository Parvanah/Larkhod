import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App/index.css";

import Header from "./Header";
import Home from "./App/screens/Home";
import LogIn from "./App/screens/Login/LogIn"
import Section from "./App/components/Sections/Section";
import Grades from "./App/components/Grades/Grades";
import Books from "./App/components/Books/Books";
import Units from "./App/components/Units/Units";
import Lessons from "./App/components/Lessons/Lessons";

import Grad from "./App/Grad";
import Book from "./App/Book"
import Continue from "./App/Continue";
import About from "./App/About";
import Contact from "./App/Contact";
import Profile from "./App/screens/Profile/Profile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route exact path="/" element={<Home /> } />
=======
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LogIn />} />
>>>>>>> 89b547cacb4668b63c979f355949a1b2c01b37bd
        <Route path="/section" element={<Section />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/books" element={<Books />} />
        <Route path="/unit" element={<Units />} />
        <Route path="/lessons" element={<Lessons />} />

        <Route path="/grad" element={<Grad />} />
        <Route path="/book" element={<Book />} />
        <Route path="/continue" element={<Continue />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
