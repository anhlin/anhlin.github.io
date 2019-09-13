import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const About = () => {
  const [plus, setPlus] = useState(true);

  const onClick = () => setPlus(!plus);

  useEffect(() => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";
  });

  return (
    <div className="about-page">
      <Navbar />
      <div className="jumbotron shadow pl-5 pt-5 pb-5 mb-3">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h1 className="display-4 pb-3">
              About <span className="rblue">Me</span>{" "}
            </h1>
            <h2 className=" pb-3">
              I'm a recent university grad with a B.S. in{" "}
              <span className="rblue">Computer Science</span>; based in the San
              Francisco Bay Area.
            </h2>
            <p className="lead">
              I have a passion for <span className="rblue">creating</span>{" "}
              modern applications, making responsive websites,{" "}
              <span className="rblue">building</span> APIs, and{" "}
              <span className="rblue">learning</span> new tech.
            </p>

            <a
              href="https://www.linkedin.com/in/anthonylin97/"
              className="btn btn-outline-light btn-sm mr-3"
            >
              <i className="fab fa-linkedin"></i>{" "}
            </a>
            <span style={{ color: "white" }}>
              <i class="far fa-envelope">
                <h6 className="d-inline pl-2">lin.anthonyh@gmail.com</h6>
              </i>
            </span>
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
            <Link to={"/projects"}>
              <button> Projects </button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <h2
        className="display-5 text-center pt-2 pb-3"
        style={{ color: "black" }}
      >
        Skills
        <a
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{ color: "black" }}
          onClick={onClick}
        >
          <i
            className={
              plus
                ? "far fa-plus-square fa-sm pl-3"
                : "far fa-minus-square fa-sm pl-3"
            }
          ></i>
        </a>
      </h2>

      <div className="collapse" id="collapseExample">
        <div className="card extra card-body mb-4">
          <h2 className="display-5 text-center pb-3" style={{ color: "black" }}>
            {" "}
            I've also worked with
          </h2>
          <div className="skills row mx-auto ">
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="skills-card">
                <div className="img-cnt">
                  <img
                    className="icon ds-img mb-4 "
                    src={require("../images/python.png")}
                    alt="htmlcssjs"
                  ></img>
                </div>
                <h5>Python</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="skills-card ">
                <div className="img-cnt">
                  <img
                    className="icon exp-img mb-4 shadow-lg"
                    src={require("../images/django.png")}
                    alt="dj-logo"
                  ></img>
                  <p className="text"></p>
                </div>
                <h5>Django</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="skills-card text-center">
                <div className="img-cnt">
                  <img
                    className="ds-img mb-4 icon shadow-lg"
                    src={require("../images/database.svg")}
                    alt="Bootstrap"
                  ></img>
                </div>
                <h5>SQL</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card hidden card-body">
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
              <h6>JS/HTML5/CSS3</h6>
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
                  className="exp-img mb-4 icon shadow-lg"
                  src={require("../images/express.png")}
                  alt="csfundamentals"
                ></img>
              </div>
              <h5>Express</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
