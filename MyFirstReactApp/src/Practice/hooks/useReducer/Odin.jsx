/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_count": {
      return { count: state.count + 1 };
    }
    case "decremented_count": {
      return { count: state.count - 1 };
    }
    case "set_count": {
      return { count: action.value };
    }
    default: {
      throw new Error("unknown action: " + action.type);
    }
  }
}

const OdinReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleClick() {
    dispatch({ type: "incremented_count" });
  }

  return <div>Odin</div>;
};

export default OdinReducer;
