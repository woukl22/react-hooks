import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => value.length <= 10;
  /* const maxLen = (value) => !value.includes("@"); */
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* It can be use like <input placeholder="Name" {...name}/> */}
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}
