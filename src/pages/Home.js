import React, { Component } from "react";
import Directory from "../components/Directory";
import API from "../utils/API";

class Home extends Component {
    
    state = {
      employees: [],
    };

    componentDidMount() {
        this.loadNextEmployee();
      }

    loadNextEmployee = async () => {
        const response = await API.getRandomEmployee();
        // check status is 200
        this.setState({ employees: response.data.results });
        // if not 200 show error message
        console.log(this.state);
      };

    render() {
        return (
         <Directory employees={this.state.employees} />
        );
    }
}

export default Home;
