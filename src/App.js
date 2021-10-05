import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const input = useRef();
  setTimeout(() => input.current.focus(), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={input} placeholder="focus after 5 seconds!" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
