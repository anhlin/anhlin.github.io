import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";
  });

  return (
    <div className="about-page">
      <Navbar />
      <div className="jumbotron shadow pl-5 py-4 mb-4">
        <div className="row  justify-content-between">
          <div className="col-lg-6">
            <h1 className="display-3 pb-3">
              {" "}
              About <span className="rblue">Me</span>{" "}
            </h1>
            <h1 className="display-5 pb-3">
              I'm a recent university grad with a B.S. in{" "}
              <span className="rblue">Computer Science</span>; based in the San
              Francisco Bay Area.
            </h1>
            <p className="lead">
              {" "}
              I have a passion for <span className="rblue">creating</span>{" "}
              modern applications, making responsive websites,{" "}
              <span className="rblue">building</span> APIs, and{" "}
              <span className="rblue">learning</span> new tech.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <div className="mb-4">
              <img
                className="profile"
                src={require("../images/profile.png")}
                alt="profile"
                style={{ border: "5px white" }}
              ></img>
            </div>
            <Link to="/about">
              {" "}
              <button> Recent Projects </button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <h1 className="display-5 text-center pb-3 "> Skills </h1>
      <div className="skills row justify-content-center pl-4 mx-3">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
          <div className="skills-card">
            <div className="img-cnt">
              <img
                className="icon ds-img mb-4 shadow"
                src={require("../images/fe.jpg")}
                alt="htmlcssjs"
              ></img>
            </div>
            <h5>JS/HTML5/CSS3</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
          <div className="skills-card ">
            <div className="img-cnt">
              <img
                className="icon react-img mb-4 shadow-lg"
                src={require("../images/react-logo.jpg")}
                alt="react-logo"
              ></img>
              <p className="text"></p>
            </div>
            <h5>React</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
          <div className="skills-card text-center">
            <div className="img-cnt">
              <img
                className="ds-img mb-4 icon shadow-lg"
                src={require("../images/bootstrap.png")}
                alt="Bootstrap"
              ></img>
            </div>
            <h5>Bootstrap 4</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
          <div className="skills-card">
            <img
              className="node-img mb-4 icon"
              src={require("../images/nodejslogo.png")}
              alt="node-logo"
            ></img>
            <h5>Node.js</h5>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
          <div className="skills-card text-center">
            <div className="img-cnt">
              <img
                className="mongo-img mb-4 icon "
                alt="mongo"
                src={require("../images/mongodb.png")}
              ></img>
            </div>
            <h5>MongoDB</h5>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
          <div className="skills-card text-center">
            <div className="img-cnt">
              <img
                className="ds-img mb-4 icon shadow-lg"
                src={require("../images/ds-icon.png")}
                alt="csfundamentals"
              ></img>
            </div>
            <h6>Data Structures & Algorithms</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
