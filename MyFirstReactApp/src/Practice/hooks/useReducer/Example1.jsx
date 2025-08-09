import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  age: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "update_field":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "reset_form":
      return initialState; // ✨ saare fields reset

    default:
      return state;
  }
}

const MyForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div className="p-4 space-y-2 max-w-xs">
      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "update_field",
            field: "name",
            value: e.target.value,
          })
        }
        className="p-2 border rounded w-full"
      />
      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "update_field",
            field: "email",
            value: e.target.value,
          })
        }
        className="p-2 border rounded w-full"
      />
      <input
        placeholder="Age"
        value={state.age}
        onChange={(e) =>
          dispatch({
            type: "update_field",
            field: "age",
            value: e.target.value,
          })
        }
        className="p-2 border rounded w-full"
      />

      <button
        onClick={() => dispatch({ type: "reset_form" })}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Reset Form
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default MyForm;
