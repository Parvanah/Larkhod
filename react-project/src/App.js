
import Grades from './components/Grades';
import Header from './Header';
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Section from './components/Section';
import Contact from './components/Contact';
import Books from './components/Books';
import Continue from './components/Continue';
import Dari from './components/Dari';
import Pashto from './components/Pashto';
import Home from './components/Home';
import './components/index.css';



function App() {
  return (
    <Router>
      <Header />
      <div className='/content'>
      <Switch>
      <Route exact path="/">
           <Home/>
        </Route>
      <Route path="/section">
           <Section />
        </Route>
        <Route path="/grades">
           <Grades />
        </Route>
        <Route path="/books">
           <Books />
        </Route>
        <Route path="/continue">
           <Continue />
        </Route>
        <Route  path="/about">
           <About />
        </Route>
        <Route path="/contact">
           <Contact />
        </Route>
        <Route path="/dari">
           <Dari />
        </Route>
        <Route path="/pashto">
           <Pashto />
        </Route>
      </Switch> 
      </div>
    </Router>
  );
}

export default App;
