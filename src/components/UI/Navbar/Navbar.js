import React from "react";

import classes from "./Navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
              ANUP PATIL
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Hobbies
                  </a>
                </li> <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li> <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
               
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
