
















// useState() hook

// . The useState hook is a fundamental hook in React that allows you to add state management
// to your functional components. It lets you store and update values that change over time,
// enabling dynamic and interactive user interfaces.

// const [count, setCount] = useState(o)



// The initial value of the state ..

// const [count, setCount] = useState(ò)

// Variable (key)

// State Variable

// The current state value.

// A function that updates
// the state variable.



// · Functions passed to useState() and setState() runs twice during development mode to prevent
// developers from running side effects.

// · Side effects in programming refer to changes or interactions that occur outside the scope of a
// function or block of code.

// . React.js compares previous state and new state using Object.is(), if it finds both are same then it will
// ignore re-rendering.

// . React.js batches all setStates() inside a event handlers and run them at the same time
// to access the value immediately after setting a state, then you will get old value as it
// asynchronous.




// useid()

// useld is a React Hook for generating unique IDs that can be passed to accessibility
// attributes. It helps to ensure that each instance of a component gets a unique ID,
// which is useful for associating labels with input fields and other elements


// Syntax = const id = useId( )

// Parameters: useld does not take any parameters.

// Returns: useld returns a unique ID string associated with this particular useld call
// in this particular component.

// Note: useld should not be used to generate keys in a list.