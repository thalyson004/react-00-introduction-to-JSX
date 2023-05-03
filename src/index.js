import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>My List</h1>, document.getElementById("header"));

ReactDOM.render(
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>,
  document.getElementById("list")
);
