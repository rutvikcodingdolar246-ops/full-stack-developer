




// // Events Handling

// Event handling in React.js is the process of capturing and responding to user interactions, such as clicks, keystrokes, or form submissions, within a React application. Event handling in React follows a similar pattern to standard JavaScript event handling but with some key differences, such as using synthetic events for cross-browser compatibility and providing consistent event handling across different elements and browsers.

// What is SyntheticBaseEvent in React?

// When you handle events in React, like clicking a button or typing in an input box, React wraps native browser events in something called a SyntheticEvent. This SyntheticEvent is a wrapper around the browser's native event, making sure that events behave consistently across all browsers.


// Events Handling

// Here are some widely used React.js events:

// onClick: Triggered when an element is clicked.

// onChange: Triggered when the value of an input element changes.

// onSubmit: Triggered when a form is submitted.

// onMouseEnter: Triggered when the mouse pointer enters an element.

// onMouseLeave: Triggered when the mouse pointer leaves an element.

// onKeyDown: Triggered when a key is pressed down.

// onKeyUp: Triggered when a key is released.

// onFocus: Triggered when an element receives focus.

// onBlur: Triggered when an element loses focus.

// onInput: Triggered when the value of an input element is changed (similar to onChange).



// Events Handling
// Event Naming Conventions

// CamelCase: Event names in JSX should be written in camelCase.
// For example, onClick, onChange, onSubmit.

// Prefix with 'on': Event handlers should be prefixed with "on".
// For example, onClick, onMouseEnter.

// Function Naming Conventions

// Prefix with 'handle': It is a common convention to prefix event handler functions with "handle" to clearly indicate their purpose.
// For example, handleClick, handleChange, handleSubmit.

// Descriptive Names: Function names should be descriptive and reflect what the function does.
// For example, handleFormSubmit instead of just handleSubmit if it's specifically for form submission.
