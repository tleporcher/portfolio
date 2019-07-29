import React from "react";

import "./Navbar.scss";

import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navbar__navitems">
          <li className="navbar__navitem">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar__navitem">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="navbar__navitem">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}
