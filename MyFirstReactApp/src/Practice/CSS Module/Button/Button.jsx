import React from "react";
import style from "./Button.module.css";

const Button = () => {
  return (
    <>
      <button className={style.btn}>Primary</button>
      <button className={style.primary}>Secondary</button>
    </>
  );
};

export default Button;
