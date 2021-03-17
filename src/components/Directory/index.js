import React from "react";
import "./style.css";

function Directory(props) {
    console.log(props);
    const { employees } = props;
    

    const handleInputChange = (e) => {
        console.log(e.target.value)

        const filteredEmployees = employees.filter(emp => emp.name.first.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(filteredEmployees)
    };

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand">Employee Directory</a>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group m-3">
                        <button className="btn btn-outline-primary" type="button" id="button-addon1">Search</button>
                        <input
                            onChange={e => handleInputChange(e)}
                            type="text"
                            className="form-control"
                            placeholder="Search Employee"
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="employeeList">
                        <ul>
                            <li>
                            {
                                employees.map(emp => (
                                    <div className="Employee row m-4">
                                        <div className="col-md-3">
                                            <img src={`${emp.picture.medium}`} alt="empPhoto"></img>
                                        </div>
                                        <div className="col-md-3">
                                            {`${emp.name.title}`}. {`${emp.name.last}`}, {`${emp.name.first}`}
                                        </div>
                                        <div className="col-md-3">
                                            SSN: {`${emp.id.value}`}
                                        </div>
                                        <div className="col-md-3">
                                           Age: {`${emp.dob.age}`}
                                        </div>
                                    </div>
                                ))
                            }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Directory;