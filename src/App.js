import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import * as faIcon from "@fortawesome/free-brands-svg-icons";
import { faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <h2>Thomas Leporcher</h2>
        <h4>thomas.leporcher@gmail.com</h4>
        <a href="tel:+33699022971">+33 (0) 6 99 02 29 71</a>
        <ul>
          <li>Introduction</li>
          <li>About</li>
          <li>Projects</li>
          <li>Timeline</li>
        </ul>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faIcon.faLinkedin} />
          </li>
        </ul>
        <p>
          Made with <FontAwesomeIcon icon={faHeart} /> and{" "}
          <FontAwesomeIcon icon={faCoffee} />
        </p>
        <p>Thanks Dhruv Barochiya for inspiration</p>
      </div>
      <div className="Content">
        <h1>Hi! I'm Thomas</h1>
      </div>
    </div>
  );
}

export default App;
