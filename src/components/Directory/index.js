import React from "react";
import "./style.css";

function Directory(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Employee Directory</a>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group m-3">
                        <button className="btn btn-outline-primary" type="button" id="button-addon1">Search</button>
                        <input type="text" className="form-control" placeholder="Search Employee" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Directory;