import React, { useEffect, useState } from "react";

const Simple = () => {
  let [ctr, setCtr] = useState(0);

  useEffect(() => {
    setCtr(1);
  }, []);

  return ctr;
};

export default Simple;
