import Grades from "./App/components/Grades/Grades";
import Header from "./Header";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import About from "./App/About";
import Section from "./App/components/Sections/Section";
import Contact from "./App/Contact";
import Continue from "./App/Continue";
import Home from "./App/screens/Home";
import "./App/index.css";
import Books from "./App/components/Books/Books";
import Lessons from "./App/components/Lessons/Lessons";
import Units from "./App/components/Units/Units";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/section" element={<Section />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/books" element={<Books />} />
        <Route path="/unit" element={<Units />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/continue" element={<Continue />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
