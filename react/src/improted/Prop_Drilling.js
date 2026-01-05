//! Prop Drilling in React JS

// . Props drilling is a pattern in React where you pass data from a parent
// component to deeply nested child components through multiple layers of
// components, even if some of the intermediate components don't need
// the data.

// . As your component tree deepens, prop drilling can make the code more
// complex and harder to maintain.



//! Concluding Prop Drilling

// upto 1 or 2 levels is probably fine but might be harder to maintain
// more than that.

// . When a prop needs to be passed through many levels, making changes to the
// component hierarchy or adding/removing props can become cumbersome.

// . Prop drilling may result in boilerplate code as each intermediate component
// needs to accept and pass down the props even if it doesn't use them.

// . We will learn about fixing it in Next Video using ContextAPI.

// · Passing