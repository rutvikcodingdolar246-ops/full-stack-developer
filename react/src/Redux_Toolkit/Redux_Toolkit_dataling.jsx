//! What is Redux Toolkit?

// Redux Toolkit (RTK) is an official toolset from the Redux team designed to make working with Redux easier and less time-consuming.

// Instead of manually creating actions, reducers, and managing state immutability, RTK provides built-in functions that handle most of this work for you.

// In simpler terms: RTK is a shortcut to manage your app’s state with less code and fewer mistakes, making Redux more beginner-friendly and reducing the amount of code you need to write.




//!  why Redux Toolkit (RTK) :

//? Less Boilerplate

// Traditional Redux requires a lot of repetitive code for basic tasks.

// RTK reduces this extra code, making state management cleaner and simpler.

//? Simpler Setup

// Automatically sets up the Redux store.

// Adds middleware for things like async actions.

// Connects to Redux DevTools for debugging without extra configuration.

//? Built-in Async Handling

// RTK has a built-in feature called createAsyncThunk.

// Makes handling async tasks (like fetching data from an API) much easier than using Redux Thunk manually.


//!Advantages

// Less Boilerplate Code:
// Normally, with Redux, you need to write action types, action creators, and reducers separately. With RTK’s createSlice, you can handle all of this in one place, in fewer lines of code.

// Easier to Work with State:
// RTK uses a tool called Immer under the hood, which allows you to write state changes like you’re mutating the state directly, but it still follows Redux’s rule of immutability (not changing the original state).

// Better Async Logic:
// Handling async tasks, like fetching data, is much simpler with RTK’s createAsyncThunk. It automatically handles loading, success, and error states for you, so you don’t have to write all that manually.

// Great Defaults:
// RTK sets up Redux DevTools, middleware, and other configuration for you, so you can focus on building your app instead of setup.


//! Access Redux State in
// React using useSelector

// Use the useSelector hook to read data from the Redux store.

// const count = useSelector(state => state.property);

// Selector function: We define a selector function that takes the entire Redux
// store state as an argument and returns the specific piece of data we need.

