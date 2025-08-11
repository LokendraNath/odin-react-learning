import { memo } from "react";
export const NavBar = ({ adjective, getAdjective }) => {
  console.log("Navbar is render");

  return (
    <div>
      <h1>i am {adjective}</h1>
      <button onClick={() => getAdjective()}>button navbar</button>
    </div>
  );
};

export default memo(NavBar);
