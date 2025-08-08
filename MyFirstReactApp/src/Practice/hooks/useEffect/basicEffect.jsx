import { useEffect, useState } from "react";
import Nav from "./Nav";

/*
export function Clock() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  function handlClick() {
    setCounter((prev) => prev + 1);
  }
  function handleVisibleBtn() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    alert("Count Was Changed");
    setColor((color) => color + 1);
  }, [counter]);

  return (
    <>
      {isVisible && <Nav color={color} />}

      <button onClick={handlClick}>Click</button>
      <button onClick={handleVisibleBtn}>Change Visible Nav</button>
      <p>{counter}</p>
    </>
  );
}
  */

////////////////////

export function CountInputChanges() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(() => setCount((prev) => prev + 1), [value]);

  const onChange = ({ target }) => setValue(target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}
