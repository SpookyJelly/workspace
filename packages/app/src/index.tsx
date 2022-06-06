import React from "react";
import ReactDOM from "react-dom";
import { color, fontSize } from "@workspace/styles";
import { sum } from "@workspace/shared";

function App() {
  console.log("color", color);
  return (
    <div>
      <h1 style={{ color: color.BADA55 }}>React with npm workspace!</h1>
      <p>{sum(5, 7)}</p>
      <p style={{ fontSize: fontSize }}>font Size : {fontSize}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
