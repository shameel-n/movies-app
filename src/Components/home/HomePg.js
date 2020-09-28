import React from "react";
import { Link } from "react-router-dom";
import "./HomePg.css";

class HomePg extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="head">Welcome to Movie Magic !!</h1>
        <br />
        <br />
        <p className="magic">Lets do some magic in movies via React</p>
        <div className="bttn">
          <Link to="about" className="btn btn-info btn-lg">
            Learn more
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePg;
//btn btn-info btn-lg
