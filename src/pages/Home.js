import React, { Component } from "react";
import Directory from "../components/Directory";
import API from "../utils/API";

class Home extends Component {
  state = {
    employees: []
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    API.getRandomEmployee();
  }

  render() {
    return (
      <div>
        <Directory/>
      </div>
    );
  }
}

export default Home;
