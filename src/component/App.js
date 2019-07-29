import React from "react";
import "./App.scss";

import Homepage from "./Homepage";
import About from "./About";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
