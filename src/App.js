import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={"/"}>
        <div>
          <Route exact path="/" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
