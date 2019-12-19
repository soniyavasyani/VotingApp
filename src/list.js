import React, { useState } from "react";
class list extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    var lists = [];
    //var h;
    if (localStorage.getItem("count") !== null) {
      let strcount = localStorage.getItem("count");
      let count = parseInt(strcount, 10);
      for (var i = 0; i < count; i++) {
        var list = `${"list"}${i + 1}`;
        lists.push(localStorage.getItem(`${list}`));
      }
      //console.log(lists)
      //console.log(lists);
    }

    return (
      <div>
        {lists.map(list => {
          return (
            <Display
              data={JSON.parse(list).title}
              value={JSON.parse(list).description}
            />
          );
        })}
      </div>
    );
  }
}
const Display = props => {
  const [count, setCount] = useState(0);

  return (
    <div className="list">
      <h2 className="title">Title: {props.data}</h2>
      <hr />
      <h4 className="title">
        Description: <br />
        {props.value}
      </h4>
      <center>
        <button type="button" onClick={() => setCount(count + 1)}>
          <i className="fa fa-thumbs-up" />
        </button>
        &nbsp; &nbsp;
        <button type="button" onClick={() => setCount(count - 1)}>
          <i className="fa fa-thumbs-down" />
          <br />
        </button>{" "}
        &nbsp;
        {count}
      </center>
    </div>
  );
};

export default list;
