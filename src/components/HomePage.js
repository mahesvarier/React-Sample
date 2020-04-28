import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>PluralSight Admin</h1>
      <p>React, flux and React Router for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
      {/* <a href="about">About</a> */}
    </div>
  );
}

export default HomePage;
