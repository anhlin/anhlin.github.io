import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Router basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
