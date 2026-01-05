// Keys in React.js

// . A string or a number that uniquely identifies it among other items in that array.

// . Keys tell React which array item each component corresponds to, so that it can match them up later.
// This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted.

// . Rules

// . Keys must be unique among siblings

// . Keys must not change



// When you don't use a key attribute, React.js will automatically use index.

// const array = ["Thapa", "Technical" ]

// return (

// <ul>

// {array.map((a) =>
// <li>{a}</li>

// </ul>

// )


// Imagine we pushed "YouTube" at the end, then react will generate new tree of structure.

// return (

// <ul>

// <li key={0}>Thapa</li>
// <li key={1}>Technical</li>
// </ul>

// )

// return (

// <ul>

// <li key={0}>Thapa</li>
// <li key={1}>Technical</li>
// <li key={2}>YouTube</li>

// </ul>