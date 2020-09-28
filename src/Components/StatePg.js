import React from "react";

class StatePg extends React.Component {
  constructor() {
    super();
    this.state = { id: 1, name: "React" };
    console.log("At the constructor now..");
  }

  //Lifecycle stages
  componentDidMount() {
    console.log("Component jus mounted..");
    this.setState({ name: "Name after setting..", id: 43 });
  }

  componentDidUpdate() {
    console.log("After updation stage ");
    document.getElementById("div1").innerHTML =
      "The updated state of react is " + this.state.name;
  }

  render() {
    return (
      <div>
        <h3>
          Current state is {this.state.name} and id is {this.state.id}
        </h3>
        <div id="div1"></div>
      </div>
    );
  }
}

export default StatePg;
