import React, { useState } from "react";
// import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

export function BasicColorClick() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="flex items-center rounded-3xl p-10 "
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className="py-3 px-5 text-black bg-white mr-5 rounded-2xl"
        >
          {color}
        </button>
      ))}
    </div>
  );
}