




















// Short Circuit Evaluation in React.js

// Short circuit evaluation is a technique used in JavaScript (and many other programming
// languages) where expressions are evaluated from left to right. In logical operations,
// evaluation stops as soon as the result is determined. This is often used in React to
// conditionally render components or execute code based on the truthiness of certain

// conditions.

// Rules of Short Circuit Evaluation

// Short circuit evaluation involves logical operators (&&, ||, ?? ) and how they evaluate

// expressions based on the truthiness of their operands.


// Short Circuit Evaluation in React.js

// Logical OR (|I)

// Syntax: expression1 f1 expression2
// Rule: If expression is truthy, return expression1. Otherwise, return expression2.

// const result = false || 'Hello'; // 'Hello'
// const result2 = true || 'World'; // true



// Short Circuit Evaluation in React.js

// Nullish Coalescing ( ?? )

// Syntax: expression ?? expression2
// Rule: If expression is not null or undefined, return expression. Otherwise, return
// expression2.

// const result = null ?? 'Hello'; // 'Hello'
// const result2 = undefined ?? 'World'; // 'World'
// const result3 = " ?? 'Fallback'; // "