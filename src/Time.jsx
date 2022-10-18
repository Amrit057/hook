import React, { useState } from "react";

const Time = () => {
  let currTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currTime);

  const GetTime = () => {
    currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  };

  setInterval(GetTime, 1000);
  return (
    <>
      <h1>{time}</h1>
      <button onClick={GetTime}>Get Time</button>
    </>
  );
};

export default Time;
