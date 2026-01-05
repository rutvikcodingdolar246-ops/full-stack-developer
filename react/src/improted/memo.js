
//? React.memo()


// . The React.memo function is used for memoization of functional components.

// . If the props of a memoized component have not changed, React skips the
// rendering for that component, using the cached result instead.

// . Do memoizations only when necessary.

// OR

// React.memo() is a higher-order component that we can use to wrap
// components that we do not want to re-render unless props within them cha