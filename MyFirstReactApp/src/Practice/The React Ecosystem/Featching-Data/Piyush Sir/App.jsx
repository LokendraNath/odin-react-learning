import React, { useEffect } from "react";
import { getComments } from "./api";

export const App = () => {
  useEffect(() => {
    getComments().then((comments) => console.log(comments));
  }, []);

  return <div>App</div>;
};

export default App;
