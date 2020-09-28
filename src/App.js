import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import HomePg from "./Components/home/HomePg";
import MoviesPg from "./Components/movies/MoviesPg";
import HeaderPg from "./Components/shared/HeaderPg";
import AboutPg from "./Components/about/AboutPg";
import ContactPg from "./Components/contact/ContactPg";
import ErrorPg from "./Components/shared/ErrorPg";

import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <HeaderPg />
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePg} />
            <Route path="/movies" exact component={MoviesPg} />
            <Route path="/about" exact component={AboutPg} />
            <Route path="/contact" exact component={ContactPg} />
            {/* //<Route component={ErrorPg} /> */}
            <Route component={ErrorPg} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
