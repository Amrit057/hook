import React, { useState } from "react";
import Time from "./Time";
import HookC from "./HookC";

const App = () => {
  const state = useState();
  // console.log(state);

  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  const DecNum = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <HookC />
      {/* <div>
        <h1> {count} </h1>

        <button onClick={IncNum}> Increment </button>

        <button onClick={DecNum}> Decrement </button>
        <br />
        <Time />
      </div> */}
    </div>
  );
};

export default App;
