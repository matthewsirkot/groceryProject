import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/pages/Home'
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Account from "./components/pages/Account";


function app() {
  return (
      <>
        <Router>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/sign-up' exact component={Account}/>
          </Switch>
        </Router>
      </>
  );
}

export default app;