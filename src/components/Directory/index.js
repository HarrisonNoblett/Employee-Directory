import React from "react";
import "./style.css";

function Directory(props) {
    // create state variable to hold the search input value
    console.log(props);
  state = { search: '' }
  const { employees } = props;
  const handleTyping = e => {
      
  };

  // to filter by search term
  // employees.fitler(emp => ).map
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
                            value={state.search}
                            //onKeyUp={handleTyping}
                            onChange={e => this.setState({ search: e.target.value })}
                            type="text"
                            className="form-control"
                            placeholder="Search Employee"
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="employeeList">
            {
                employees.map(emp => (
                    <div className="Employee">
                        {`${emp.name.title} ${emp.name.first} ${emp.name.last}`}
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Directory;