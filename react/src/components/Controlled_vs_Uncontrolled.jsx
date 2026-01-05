// Controlled Components

// Controlled components in React are those where form data is handled by React component state.

// This means:

// . State Management: The value of the input field is controlled by React state (useState or
// this.state in class components).

// . Event Handlers: Changes to the input field (like typing into a text field) are handled by React
// event handlers (onChange, onBlur, etc.).

// . State Updates: When the user interacts with the form input, React state is updated th

// event handlers, and the input value reflects the current state value.


// Uncontrolled  Components

// Uncontrolled components in React are those where form data is handled by the DOM itself.

// This means:

// . Direct DOM Manipulation: The value of the input field is controlled by the DOM
// (document.getElementByld, etc.). It's not declarative way right.

// · Event Handling: Changes are directly handled by DOM events (onchange, onblur, etc.).

// . Accessing Form Data: Form data is accessed through refs or DOM traversal methods, not
// through React state.



//!Controlled Components

//? Pros:

// . React has complete control over the input values, making it straightforward to implement
// features like validation and conditional formatting based on state.

// . Easier to handle form submission and integration with React's lifecycle methods.

// . Enables clear data flow and centralized state management within React components.

//? Cons:

// . Requires more code compared to uncontrolled components due to state managemer
// . Can lead to more re-renders if not optimized, although React handles this efficiently
// cases. 