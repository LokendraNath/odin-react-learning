import React, { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT: {
      return { count: state.count + 1 };
    }
    case ACTION.DECREMENT: {
      return { count: state.count - 1 };
    }
    case ACTION.RESET: {
      return { count: 0 };
    }
    default: {
      return state;
    }
  }
}

export const YtLearningPro = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="p-4 space-y-3 max-w-72">
      <h2 className="text-xl font-bold">Counter: {state.count}</h2>
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          onClick={() => dispatch({ type: ACTION.DECREMENT })}
        >
          -
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => dispatch({ type: ACTION.INCREMENT })}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => dispatch({ type: ACTION.RESET })}
        >
          reset
        </button>
      </div>
    </div>
  );
};
