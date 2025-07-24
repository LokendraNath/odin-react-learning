import React, { useState } from "react";
// import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

export function BasicColorClick() {
  const [name, setName] = useState({ first: "", last: "" });

  const handleSetName = (e) => {
    const { name, value } = e.target;
    setName((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center rounded-3xl p-10 text-white">
      <h1 className="text-4xl mb-5">Practice Object States</h1>
      <label className="flex gap-4 items-center">
        Enter First Name
        <input
          type="text"
          name="first"
          onChange={handleSetName}
          value={name.first}
          placeholder="First Name"
          className="border-2 border-white"
        />
      </label>
      <label className="flex gap-4 items-center">
        Enter Second Name
        <input
          type="text"
          name="last"
          value={name.last}
          onChange={handleSetName}
          placeholder="Last Name"
          className="border-2 border-white"
        />
      </label>
      <p>
        {name.first} {name.last}
      </p>
    </div>
  );
}
