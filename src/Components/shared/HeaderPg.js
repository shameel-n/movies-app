//import React, { PropTypes } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Banner from "../../images/movbanner.jpg";
import Logo from "../../images/EMovies.png";
import "./HeaderPg.css";

class HeaderPg extends React.Component {
  render() {
    // const mystyle = {
    //   padding: "0px",
    //   //paddingLeft: "px;",
    //   paddingRight: "10px",
    //   //verticalAalign: "middle",
    // };

    const mystyle2 = {
      paddingTop: "0px",
      paddingLeft: "10px",
      paddingRight: "10px",
      color: "darkslateblue",
      fontSize: "23px",
      fontFamily: "Quicksand",
      //margin: "10px",
    };

    return (
      <div>
        <img className="banner" src={Banner} alt="a"></img>
        <nav className="nvbar">
          {/* <a href="/" className="navbar-brand"></a> */}

          <div className="routegrp1">
            <img src={Logo} alt="a"></img>
            <NavLink to="/" activeClassName="active" style={mystyle2}>
              Home
            </NavLink>
            {" | "}
            <Link to="/movies" activeClassName="active" style={mystyle2}>
              Movies
            </Link>
            {" | "}
            <Link to="/about" activeClassName="active" style={mystyle2}>
              About
            </Link>
            {" | "}
            <Link to="/contact" activeClassName="active" style={mystyle2}>
              Contact us
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderPg;
