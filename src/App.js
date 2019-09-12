import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";

const App = () => {
  return (
    <TransitionGroup>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    </TransitionGroup>
  );
};

export default App;
