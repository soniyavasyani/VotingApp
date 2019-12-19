import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "" };
  }
  eventTitle = event => {
    this.setState({ title: event.target.value });
  };
  eventDescription = event => {
    this.setState({ description: event.target.value });
  };
  handleSubmit = event => {
    if (localStorage.getItem("count") === null) {
      localStorage.setItem("count", 1);
      const list1 = {
        title: this.state.title,
        description: this.state.description
      };
      localStorage.setItem("list1", JSON.stringify(list1));
      
    } else {
      let strcount = localStorage.getItem("count");
      let count = parseInt(strcount,10);
      count = count + 1;
      var list = `${"list"}${count}`;
      const list1 = {
        title: this.state.title,
        description: this.state.description
      };
      localStorage.setItem(`${list}`, JSON.stringify(list1));
      localStorage.setItem("count", count);
    }
    //this.setState({title:"",description:""})
  };
  render() {
    return (
      <div>
        <Link to="/list">
          <button className="back">&larr;</button>
        </Link>
        <center className="form">
          <h1>Post It</h1>
          <textarea
            name="title"
            placeholder="Enter post title"
            cols="25"
            rows="1"
            onChange={this.eventTitle}
            required
            className="title"
          />
          <br />
          <br />
          <br />
          <textarea
            name="description"
            placeholder="Enter post description"
            cols="29"
            rows="6"
            onChange={this.eventDescription}
            required
          />
          <br />
          <br />
          <button
            type="submit"
            className="button"
            value="Create"
            onClick={this.handleSubmit}
          >
            Create
          </button>
        </center>
      </div>
    );
  }
}
export default form;
