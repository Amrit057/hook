import { useState } from "react";

const HookC = () => {
  const orange = "orange";
  const [color, setColor] = useState(orange);

  const [name, setName] = useState("Click Me");

  const Change = () => {
    let newColor = "brown";
    setColor(newColor);
    setName("Welcome!😄(Double click to proceed)");
  };

  const DblChange = () => {
    let nextColor = "green";
    setColor(nextColor);
    setName("Hope you are fine.❤️");
  };
  return (
    <>
      <div style={{ background: color }}>
        <button onClick={Change} onDoubleClick={DblChange}>
          {name}
        </button>
      </div>
    </>
  );
};

export default HookC;
