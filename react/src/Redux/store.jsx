// /* eslint-disable no-undef */
// /* eslint-disable no-case-declarations */

// import { createStore } from "redux";

// const ADD_TASK = "task/add";
// const DELETE_TASK = "task/delete";

// const initialState = {
//   task: [],
//   isLoading: false,
// };

// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return {
//         ...state,
//         task: [...state.task, action.payload],
//       };

//     case DELETE_TASK:
//       const updatedTask = state.task.filter(
//         (curTask, index) => index !== action.payload,
//       );

//       return {
//         ...state,
//         task: updatedTask,
//       };

//     default:
//       return state;
//   }
// };

// // Create store

// // Step 2: Create the Redux store using the reducer

// export const store = createStore(taskReducer);
// console.log(store);
// // Step 3: Log the initial state
// // The getState method is a synchronous function that returns the current state of a Redux
// //application. It includes the entire state of the application, including all the reducers
// //their respective states.

// console.log("initial State", store.getState());

// // Step 4: Dispatch an action to add a task

// store.dispatch(addTask("rutvik"));

// console.log("updated State", store.getState());

// store.dispatch(addTask("dolar"));

// console.log("updated State", store.getState());


// store.dispatch(deleteTask(1));

// console.log("Deleted State", store.getState());


// // Step 5: Create action Creators


// const addTask = (data) =>{
//     return{type: ADD_TASK, payload: data  }
// }

// const deleteTask = () =>{
//     return{type: DELETE_TASK, payload: id};
// }



import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
  isLoading: false,
};

// Reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      // eslint-disable-next-line no-case-declarations
      const updatedTask = state.task.filter(
        (_, index) => index !== action.payload
      );

      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};

// ✅ Action Creators (MUST be before dispatch)
export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

// Create store
export const store = createStore(taskReducer,composeWithDevTools());

// Logs
console.log("Initial State:", store.getState());

store.dispatch(addTask("rutvik"));
console.log("After adding rutvik:", store.getState());

store.dispatch(addTask("dolar"));
console.log("After adding dolar:", store.getState());

store.dispatch(deleteTask(1));
console.log("After deleting index 1:", store.getState());
