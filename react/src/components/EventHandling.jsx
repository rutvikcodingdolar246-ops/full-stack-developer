import "./EV.css";
export const EventHandling = () => {
  // function handleButtonClick(){
  //     alert("Hey I am onClick Event")
  // }

  const handleButtonClick = (event) => {
    console.log(event);
    alert("Hey I am onClick Event");
  };

  const handleWelcomeUser = (user) => {
       console.log(`Hey ${user}, Welcome`) 
  }
  return (
    <>
      {/*  ? Function  Components with Named Functions  */}
      {/* Remember  How we haven't called this function if you call this function here then it will run without even clicking you just need to pass reference and not call here */}

      <button onClick={handleButtonClick}>Click Me</button>
      <br />
      {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}
      <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>

      <br />
      {/* /* //? Inline Event Handlers} */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>

      <br />

      {/* //? Function Components with Inline Arrow Functions */}

      <button onClick={() => alert("Hey I am inline evnt Function")}>Inline Arr Functions</button>
    
    <br/>
    
    {/* {/* //? Passing Arguments to Event Handlers } */}
    {/* <button onClick={handleWelcomeUser("Rutvik")}>Click Me</button> */}

    <button onClick={() =>handleWelcomeUser("Rutvik")}>Click Me</button>


    
    </>
  );
};




