import { useEffect } from "react";

const Nav = ({ color }) => {
  //* Case 1 : Run On every Render
  useEffect(() => {
    alert("Every Render");
  });

  //* Case 2 : Run Only on First Render
  useEffect(() => {
    alert("First Render");
  }, []);

  //* Case 3 : When Certain Value is Change
  useEffect(() => {
    alert("Running Because Color Is Change");
  }, [color]);

  //* Example of Component is unmount First Render
  useEffect(() => {
    alert("Hey welcom to my page. This is the first render of");

    return () => { //Clean Up Function
      alert("Componet Was unmounted");
    };
  }, []);

  return <div>Hellow I am {color}</div>;
};

export default Nav;
