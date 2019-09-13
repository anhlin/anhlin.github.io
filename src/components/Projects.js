import React, { useEffect } from "react";
import Navbar from "./Navbar";

const Projects = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";
  });
  return (
    <div>
      <Navbar />
      <div className="container pt-5">
        <div className="row justify-content-between">
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="card mb-3 shadow">
              <div className="row no-gutters">
                <div className="col-md-4 justify-content-center align-self-center">
                  <img
                    src={require("../images/twitter.jpg")}
                    className="card-img "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body h-100">
                    <h5 className="card-title">Twitter Finder</h5>
                    <p className="card-text" style={{ color: "black" }}>
                      A simple and intuitive web application that allows users
                      to search for Twitter users and view their Tweets and
                      information.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        React, Express, Node.js, and the Twitter API
                      </small>
                    </p>

                    <a
                      href="https://twitter-finder.herokuapp.com/"
                      className="btn btn-outline-info btn-sm mr-2"
                    >
                      Demo <i className="fas fa-rocket"></i>
                    </a>
                    <a
                      href="https://github.com/anhlin/twitter-finder"
                      className="btn btn-outline-warning btn-sm"
                    >
                      {" "}
                      Repo
                      <i className="fab fa-github pl-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="card mb-3 shadow">
              <div className="row no-gutters">
                <div className="col-md-4 justify-content-center align-self-center">
                  <img
                    src={require("../images/contacts.png")}
                    className="card-img "
                    alt="..."
                  />
                </div>
                <div className="col-md-8 d-flex align-items-stretch">
                  <div className="card-body">
                    <h5 className="card-title">Contact Book</h5>
                    <p className="card-text" style={{ color: "black" }}>
                      A web application for storing contacts. Implemented
                      Express API that uses JSON Web Token for user
                      authentication.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Created with the MERN stack
                      </small>
                    </p>
                    <a
                      href="https://twitter-finder.herokuapp.com/"
                      className="btn btn-outline-info btn-sm mr-2"
                    >
                      Demo <i className="fas fa-rocket"></i>
                    </a>
                    <a
                      href="https://github.com/anhlin/twitter-finder"
                      className="btn btn-outline-warning btn-sm"
                    >
                      {" "}
                      Repo
                      <i className="fab fa-github pl-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="card mb-3 shadow">
              <div className="row no-gutters">
                <div className="col-md-4 justify-content-center align-self-center">
                  <img
                    src={require("../images/colors.jpg")}
                    className="card-img pl-3"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">CSS Color Visualizer</h5>
                    <p className="card-text" style={{ color: "black" }}>
                      A tool that helps developers & designers visualize the 148
                      named colors that you can use in your HTML and CSS.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Created with React and Bootstrap
                      </small>
                    </p>
                    <a
                      href="https://anhlin.github.io/css-color-visual/"
                      className="btn btn-outline-info btn-sm mr-2"
                    >
                      Demo <i className="fas fa-rocket"></i>
                    </a>
                    <a
                      href="https://github.com/anhlin/css-color-visual"
                      className="btn btn-outline-warning btn-sm"
                    >
                      {" "}
                      Repo
                      <i className="fab fa-github pl-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="card mb-3 shadow">
              <div className="row no-gutters">
                <div className="col-md-4 justify-content-center align-self-center">
                  <img
                    src={require("../images/pcpal.png")}
                    className="card-img pl-3"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">PCPal</h5>
                    <p className="card-text" style={{ color: "black" }}>
                      A website that displays data on PC parts and recommends
                      parts at specific budget price points for building
                      personal computers. Worked in a team of 5.
                    </p>

                    <p className="card-text">
                      <small className="text-muted">
                        Created with Django/Python
                      </small>
                    </p>
                    <a
                      href="https://github.com/anhlin/PCPal"
                      className="btn btn-outline-warning btn-sm"
                    >
                      Repo
                      <i className="fab fa-github pl-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="card mb-3 shadow">
              <div className="row no-gutters">
                <div className="col-md-4 justify-content-center align-self-center">
                  <img
                    src={require("../images/freebsd.svg")}
                    className="card-img pl-3"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">FreeBSD Modifications</h5>
                    <p className="card-text" style={{ color: "black" }}>
                      Worked in a team of 2-4 to make changes to the open source
                      FreeBSD Operating System. Includes modifications to its
                      existing scheduling and paging algorithms for threads and
                      virtual memory.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Used VirtualBox and programmed in C
                      </small>
                    </p>

                    <a
                      href="https://github.com/anhlin/ModifyingFreeBSD"
                      className="btn btn-outline-warning btn-sm"
                    >
                      Repo
                      <i className="fab fa-github pl-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="card mb-3 shadow">
              <div className="row no-gutters">
                <div className="col-md-4 justify-content-center align-self-center">
                  <img
                    src={require("../images/terminal.png")}
                    className="card-img pl-3"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title"> Simple Shell</h5>
                    <p className="card-text" style={{ color: "black" }}>
                      Wrote a shell program that works on the MacOS and FreeBSD
                      operating systems. Accepts and executes all Unix shell
                      commands (e.g. ls, cat, cd).
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Programmed in C</small>
                    </p>

                    <a
                      href="https://github.com/anhlin/SimpleShell"
                      className="btn btn-outline-warning btn-sm"
                    >
                      Repo
                      <i className="fab fa-github pl-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
