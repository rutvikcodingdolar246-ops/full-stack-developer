//! Why Redux?
// In small apps, you can manage data using React's state. But as the app grows, it
// becomes tricky to pass data between many components.

// Redux solves this problem by creating a centralized store that holds all the
// data. This store can be accessed and updated by any part of the app.



//! What is Redux?

// Redux is a tool that helps manage data (also known as "state") in large React apps.
// It allows us to keep all our app's data in a single place, known as the Redux store,
// making it easy to share and update data across different parts of the app.



//! How Redux Works?

// Action
// This is an object, which tell the
// redux what to do (like adding
// a task).

// Reducers
// How to do. It actually change
// the data in the store based on
// the actions.

// Store
// This is where Redux keeps
// all your data.


//!Store
// The Redux store is like a big box where all your application's data is kept safe. Everything you
// do with Redux-whether adding, removing, or updating data-goes through this store.



//! Actions
// This is an object, which tell the redux what to do (like adding a task).
// {
// type: "counter/add",
// payload: {
// incrementBy: 10,
// }
// }

// {
// type: "counter/decrement",
// payload: {
// decrementBy: 10,
// }
// }


//! Reducers
// How to do. It actually change the data in the store based on the actions.

// export const counterReducer = (state = initialState, action) => {
// switch (action.type) {
// case "counter/add":

// return

// { ...state, value: state.value + action.payload. incrementBy };
// default :

// return state;

// }
// };


//! Redux Advantages

// Centralized State Management

// Redux stores your app's state in one place, making it easier to manage and access data across components.

// Global Access

// Any component can access and update the state without passing props down.

// Predictable Updates:

// State changes are controlled and predictable using reducers.

//!Redux Advantages

// DevTools

// Powerful tools for debugging, inspecting state, and replaying actions.

// Async Support

// Middleware like Thunk or Saga handles async tasks, keeping the code clean.

//! Redux: Reducer Function

// A reducer is a function that decides how the state should change based on
// the action. The reducer takes the current state and an action, and returns a

// new state.

// A key thing to remember:
// 1: Reducers must always return a new state.
// 2: They should never modify the old state directly.


//! Syntax: Reducer

// function reducer(state = initialState, action) {}


// The reducer takes two arguments:

// State: This is the current state.

// Action: This tells the reducer what to do.

// It has a type and sometimes a payload
// (which is the data).


//! Syntax: Reducer

// function reducer(state = initialState, action) {
// switch (action. type) {
// 'ACTION TYPE'

// return { ... state, data: action. payload } ;
// default:

// return state;

// State: This is the current state.
// Action: This tells the reducer what to do.
// It has a type and sometimes a payload
// (which is the data).

// We use a switch statement to check the action's type.
// Based on the action type, the reducer updates the state.

