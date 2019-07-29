import React from "react";

import "./Homepage.scss";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage__caption">
          <h1>Thomas Leporcher</h1>
          <div>Product Manager & Scrum Master</div>
        </div>
        <div class="homepage__description">
          <h1>Who I am</h1>
          <p>
            As a former developer & Scrum Master, I'm now working as a Technical
            Product Manager in Paris.
            <br />
            I'm also a dancer (Modern, Contemporary & Urban) and a mixologist
            (special mention for te Basil Smash).
          </p>
          <button className="homepage__description__btn">More About Me</button>
        </div>
      </div>
    );
  }
}
