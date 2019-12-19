import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
const Title = () => {
  return (
    <div>
      <center>
        <h1>
          Voting App <i className="fa fa-paste" />
        </h1>
        <Link to="/form">
          <button className="button">Create Post</button>
        </Link>
        <br />
        <br />
        <Link to="/list">
          <button className="button">Show Past Posts</button>
        </Link>
      </center>
    </div>
  );
};

export { Title };
