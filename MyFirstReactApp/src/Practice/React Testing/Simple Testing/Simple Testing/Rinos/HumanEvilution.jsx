// Rinos.jsx

import { useState } from "react";

const HumanEvilustion = () => {
  const [heading, setHeading] = useState("Monkey");

  const clickHandler = () => {
    setHeading("Human");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default HumanEvilustion;
