import { useLocation, Link } from "react-router-dom";
import React from "react";


const PageNotFound = () => {
  const location = useLocation();
  return (
    <div id="notFound">
      <h1>
        Ah! Unfortunately, the extension {location.pathname} doesn't lead
        anywhere.
      </h1>
      <h4> Click below to go to our Home Page</h4>
      <Link to="/">
        <img
          src="https://images.unsplash.com/photo-1610385983592-bd3cb040d9f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="NOT FOUND"
        ></img>
      </Link>
    </div>
  );
};

export default PageNotFound;
