import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Title } from "./navigation.js";
import form from "./form";
import List from "./list";
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Title} />
      <Route path="/form" component={form} />
      <Route path="/list" component={List} />
    </div>
  </Router>,
  document.getElementById("root")
);
