import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1424460421773-58b49adfc68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  });

  return (
    <div id="home">
      <div className="container">
        <div className="image">
          <img
            className="profile"
            src={require("../images/profile.png")}
            alt="profile"
            style={{ border: "5px white" }}
          ></img>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="white"> Hi, I'm Anthony Lin. </h2>
            <h3 className="white">I'm an aspiring full-stack engineer.</h3>
            <hr />

            <Link to="/about">
              {" "}
              <button> About Me </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
