import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  });

  return (
    <div className="container h-100 home">
      <div className="row h-100 text-center justify-content-center align-items-center">
        <div className="col-12">
          <div className="image">
            <img
              className="profile mb-4"
              src={require("../images/profile.png")}
              alt="profile"
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
    </div>
  );
};

export default Home;
