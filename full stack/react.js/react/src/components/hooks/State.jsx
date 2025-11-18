// import { useState } from "react"

// export const State = () => {
//     // let value = 0;
//     // const handleButtonClick = () => {
//     //     value++;
//     //     console.log(value)
//     // };

// const [count, setCount] = useState(0); 

// const  handleButtonClick = () =>{
// setCount(()=> count + 1)
// }
//     return(
//         <>
//         <section className="main-div">
//             <h1>{count}</h1>
//             <button onClick={handleButtonClick}>Increment</button>
        
//         </section>
//         </>
//     )
// }


//! #Why React?

// - It's because those are normal variables and React.js doesn't know that it's going to
// be changed.
// - And that react should respond or update DOM based on that.
// - Those values are already rendered on DOM, there is no way they will be re-rendered.
// - For that React.js provides a function called "useState"
// - This type of function which starts with "use" is called hook.
// - This is a special function which has some features provided by react.js
// - we will learn about other hooks in future.




//? Why Do We Need State in React?

// 1. Dynamic UI Updates: State allows your components to update dynamically in response to user
// input or other events. For example, in a form, the state might hold the current value of the input
// fields, updating in real-time as the user types.

// 4

// 2. Interactivity: State makes your application interactive. By maintaining state, you can create
// components that respond to user actions, such as clicks, form submissions, or keyboard inputs.

// 3. Data Management: State helps manage data within a component. For instance, you can f
// data from an API and store it in the state, which will then be used to render the UI.

// 4. Component Communication: State can be lifted up to parent components to mana
// state across multiple child components, ensuring consistent data flow and synchroniz

// The virtual DOM (VDOM) is a programming concept where an ideal, or "virtual",
// representation of a UI is kept in memory and synced with the "real" DOM by a
// library such as ReactDOM. This process is called reconciliation.



//? How State Works?

// In React, state is a way to store and manage data that can change over the lifetime of a
// component. When state changes, React re-renders the component to reflect the new state. This
// ensures that the user interface stays in sync with the underlying data.

// Using useState in Function Components

// · Initialization: You call useState with the initial state value. It returns an array with two elements:

// the current state value and a function to update that state.

// . Updating State: When you call the updater function, React schedules a re-render of the

// component with the new state value.

// · Preservation of State: React maintains state between renders. When a component re-

// doesn't reinitialize the state. Instead, it uses the preserved state from the

//? How State Works?

// App

// Counter

// This is tree structure of our current project.
// When you click on the button then we are trying to
// update the state.



// <div>

// <h1> {counter: 0} </h1>

// <button></button>

// Then React.js realizes that <h1> is different, then React.js
// will demand ReactDOM to update its value in DOM.

// React.js will only update this DOM making it effective
// instead of rendering whole DOM again.

// Note: When React.js creates a new tree, it will re-run or re-render the affected component
// and all its children. So, in this case It will re-run our <Counter /> component, it won't re-
// render other components outside. Let's demonstrate it.


//? React Reconciliation is the
// process through which React
// updates the Browser DOM.

// The Diffing Algorithm

// Diffing short for Differences Algorithm
// is used to differentiate the DOM Tree
// for efficient updates.

//! Ex 
// function App() {
// return (

// <div>

// <ParentComponent>
// <ChildComponent />

// <AnotherChildComponent />

// </ParentComponent>
// <SiblingComponent />
// </div>

// );

//? Here's how the re-rendering works:

// Initial Render: When the App component first
// renders, React renders ParentComponent,
// ChildComponent, AnotherChildComponent, and
// SiblingComponent.

// State Change in ParentComponent: Suppose
// there is a state change in ParentComponent. React
// will re-render ParentComponent and all its children
// (ChildComponent and AnotherChildComponent).

// Components Outside: SiblingComponent is
// affected by the state change in ParentComp
// Therefore, it will not be re-rendered.



import { useState } from "react"

export const State = () => {


const [count, setCount] = useState(0); 
console.log("parent Component rendered");
const  handleButtonClick = () =>{
setCount(()=> count + 1)
}
    return(
        <>
        <div className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Increment</button>
         </div>
         <ChildComponent count={count}/>
        </>
    )
}

function ChildComponent ({count}) {
    console.log("child Component rendered");
    return <div className="main-div">
    <h2>Child Component - {count}</h2></div>
}



// export function Sibling () {
//     console.log("Sibling Component rendered");
//     return <div className="main-div">
//     <h2>Sibling Component </h2></div>
// }



//? Render  

// First Render: const [count, setCount] = useState(0);

// count is initialized to 0.

// Button Click: increment function is called.

// setCount(count + 1) updates count to 1.

// Re-render: React re-renders the component. (when user click button for the 2nd time)

// const [count, setCount] = useState(0); sees that count is now 1 and uses 1 as the current

// state. The useState hook is smart enough to only use the initial value the very first time

// the component renders.



