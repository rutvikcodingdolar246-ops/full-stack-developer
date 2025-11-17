
export const EventProps = () => {
    
    const HandleWelcomeUser = (user) =>{
        alert(`Hey, ${user}`);
    }
    
    const handleHover = () =>{
        alert(`Hey Thanks for hovering me`);
    }
    return (
        <>
              <WelcomeUser onClick={() => HandleWelcomeUser("rutvik")} onMouseEnter={handleHover}/>
        </>
    )
}



const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;
    const handleGreeting =() => {
        console.log(`hey user, welcome`);
      onClick();
    }
    return(
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hove me </button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}




















//! Passing event handlers as props

// Passing event handlers as props in React.js is a common pattern used to allow child
// components to communicate with parent components. This pattern is useful in various
// scenarios, including:

// Form Handling: Passing event handlers like onChange or onSubmit to form components
// allows the child components to update the form data and notify the parent component of
// changes.

// User Interaction: Event handlers like onClick can be passed to interactive elements (e.g.,
// buttons, links) to trigger specific actions in the parent component, such as opening a modal
// or navigating to a different page.

// State Management: Event handlers can be used to update state in the parent component,
// which can then be passed down to child components as props to reflect the updated stat

// Callback Functions: Event handlers can be used as callback functions to handle
// asynchronous operations or to update state based on the result of an operation.


