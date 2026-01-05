import { useReducer } from "react";

export const ReducerComp = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return state + 1;

      case "Decrement":
        return state - 1;

      case "Reset":
      return state = 0;

      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="p-4 h-lvh flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl font-bold">{count}</h1>

      <button 
        onClick={() => dispatch({ type: "Increment" })}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Increment
      </button>

      <button 
        onClick={() => dispatch({ type: "Decrement" })}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Decrement
      </button>
      <button 
        onClick={() => dispatch({ type: "Reset" })}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
};
