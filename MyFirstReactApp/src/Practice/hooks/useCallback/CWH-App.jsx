/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import NavBar from "./CWH-Navbar";

export const UseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [adjective, setAdjective] = useState("good");

  const getAdjective = useCallback(() => {
    setAdjective(`Bad ${counter}`);
  }, [counter]);

  return (
    <div>
      <NavBar adjective={adjective} getAdjective={getAdjective} />
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Click</button>
    </div>
  );
};

