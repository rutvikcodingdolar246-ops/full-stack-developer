import { configureStore, createSlice } from "@reduxjs/toolkit";

// Action Types
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASKS = "task/fetch";

// Initial State
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
        task: [...state.task, action.payload],task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        task: state.task.filter((_, index) => index !== action.payload),
      };

    case FETCH_TASKS:
      return {
        ...state,
        task: [...state.task, ...action.payload],
      };

    default:
      return state;
  }
};

// Action Creators
export const addTask = (data) => ({
  type: ADD_TASK,
  payload: data,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

// Thunk (Async Action)
export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      const data = await res.json();

      dispatch({
        type: FETCH_TASKS,
        payload: data.map((item) => item.title),
      });
    } catch (error) {
      console.error(error);
    }
  };
};


// RTK slice


const taskReducer = createSlice({
  name:"task",
  initialState,
  reducers:{
  addTask(state,action){
    state.task.push(action.payload);
    
  },
  deleteTask(state,action){
    state.task = state.task.filter(
      (curTask, index) => index === action.payload
    );
  },
  
  }
}) 




const {addTask,deleteTask} = taskReducer.action;
// Store
export const store = configureStore({
  reducer: {
    taskReducer: ,
  },
});


console.log(store.dispatch(addTask("Bye ")))