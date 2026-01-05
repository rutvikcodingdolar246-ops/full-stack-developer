// ContextAPI

// Context API: A way to pass data through the component tree without having to
// pass props down manually at every level.

// · createContext: Creates a Context object.

// . Provider: A component that provides the context value to its children.

// . useContext (Consumer): A hook that allows you to consume a context.



// ContextAPI

// Initial Value: We don't pass an initial value directly to the context.

// Context Creation: createContext returns a Context component, not a variable.

// The first letter of the Context component's name must be uppercase.

// Provider Component: The Provider is a property of the Context component. We
// pass the value to the Provider, which makes it accessible to child components.
// The value should be passed inside double curly braces {{ }} if it's more then one.

// Consuming Context Data: To access the context data, we use the useContext

// hook. As a parameter, we pass the entire context to useContext to access all

// values provided by the Provider.