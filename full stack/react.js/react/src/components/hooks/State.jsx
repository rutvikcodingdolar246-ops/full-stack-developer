import { useState } from "react"

export const State = () => {
    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value)
    // };

const [count, setCount] = useState(0); 

const  handleButtonClick = () =>{
setCount(()=> count + 1)
}
    return(
        <>
        <section className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Increment</button>
        
        </section>
        </>
    )
}


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

