// 1. Variables 
//  You can  embed any javaScript  variable  within jsx by  enclosing it in  curly braces. the value of the variable will be inserted into the Dom at the respective location.

// 2. Expressions 

// JSX allows you to write javaScript expressions inside curly braces  this includes operations, function-calss,and other javaScript expressions that produce a vlaue

// 3. Function Calls 


//? Functions especially those return jsx, can be invoked directly within your jsx

export const App = () => {
  return (
 <>
      {/* Component call */}
      <NetflixSeries />
       <NetflixSeries />
        <NetflixSeries />
         <NetflixSeries />
    </>
  );
};


const returnGenre = () =>{
  const genre = "RomCom";
  return genre;
}

const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = "8.2";
  const summary =
    "Kim Ji-won and Kim Soo-hyun in Queen of Tears (2024). A miraculous love story of a married couple overcoming a dizzying crisis.";

  return (
    <div>
      <img src="qot.jpg" alt="Queen of Tears poster" width="20%" height="40%" />
     <h1>Name: {name}</h1>  
      <h3>Rating: {5 / 3.2}</h3> 
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>

       {/* Variables  */}
       {/* Expressions  */}
       {/* Function Calls  */}
    </div>
  );
};