import React, { useReducer } from "react";

const emptyData = {
  //Initial State
  name: "",
  city: "",
  age: "",
  email: "",
};

const reducer = (data, action) => {
  // Reducer Function
  return { ...data, [action.type]: action.val };

  // => data -> currect state
  // => action -> {stype: "name", val: "Lokendra"}
  // => basically "name" field me name value dalna hai
};

const YtLearnign = () => {
  // const [state, dispatch] = useReducer(reducerFuc, initialState);

  const [state, dispatch] = useReducer(reducer, emptyData);

  console.log(state);

  return (
    <div className="p-4 space-y-3 max-w-72">
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "name" })
        }
        placeholder="First Name"
        className="p-2 bg-gray-100 rounded w-full"
      />
      <input
        type="text"
        placeholder="City"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "city" })
        }
        className="p-2 bg-gray-100 rounded w-full"
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(event) => dispatch({ val: event.target.value, type: "age" })}
        className="p-2 bg-gray-100 rounded w-full"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "email" })
        }
        className="p-2 bg-gray-100 rounded w-full"
      />

      <ul className="my-5">
        <li>Name: {state.name}</li>
        <li>Age: {state.age}</li>
        <li>City: {state.city}</li>
        <li>Email: {state.email}</li>
      </ul>

      <button
        className="px-4 py-2 bg-blue-600 text-white 
      rounded hover:bg-blue-700 transition"
      >
        Add
      </button>
    </div>
  );
};

export default YtLearnign;
