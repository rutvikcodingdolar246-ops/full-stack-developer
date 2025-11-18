import { useState } from "react";




export const DerivedState = () => {

    const [users, setUsers] = useState([
  {name: "Rutvik", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35},
    {name: "Angles", age: 45},
    ])


    // Derived state: count  of users
      console.log(users);
      const userCount = users.length;
    // Derived state: average age of users
       const averageAge = (users.reduce((accum, curElem) => accum + curElem.age, 0)) / userCount ;

    return (
        <div className="main-div">
           <h1>User List</h1>
           <ul>
              {
                users.map((curElem, index) => {
                      return(
                  
                         <li key={index}>
                            {curElem.name} - {curElem.age} year old
                         </li>
                      );
                    
                })
              }
           </ul>
           <p>Total Users: {userCount}</p>
           <p>Average Age: {averageAge}</p>
        </div>
    )
}










// What is Derived State in React?

// Derived state is any state that can be computed based on other state or props. It is not stored directly in the component's state but is calculated when needed. This approach helps avoid duplication and keeps the state simpler and more manageable.

// Ex:

// const userCount = users.length;

// Benefits of Derived State

// Avoid Redundancy: By deriving values from existing state, you avoid storing redundant data.

// Consistency: Ensures that derived values are always in sync with the underlying state or props.

// Simplicity: Reduces the complexity of state management by minimizing the number of state variables.