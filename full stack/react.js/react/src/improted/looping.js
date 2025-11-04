import seriesData from "../api/seriesData.json";

// NetflixSeries component
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElem) => {
        return (
          <li key={curElem.id}>
            <img
              src={curElem.img_url}
              alt="Queen of Tears poster"
              width="40%"
              height="40%"
            />
            <h1>Name: {curElem.name}</h1>
            <h3>Rating: {curElem.rating}</h3>
            <p>Summary: {curElem.description}</p>
            <p>Genre: {curElem.genre}</p>
            <p>Cast:{curElem.cast}</p>
            <a href={curElem.watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NetflixSeries;



//!  Looping in JSX

// . We don't have for loops in JSX, so we have to use .map() method of arrays

//? · return (
//? <ul>
//? {students.map((student) => (
//? <li key={student}>{student}</li>

//? </ul>
//? );
// · React.js will complain if you don't pass key prop to <li>
// · React.js uses keys to differentiate each elements, so that it can remove o
// element when a students gets added or removed. Don't worry we will ir
// further details later.
// . We can use arrays in JSX too. So, here students.map returns array of JSX v
// rendered on the page.




//! file coll


// import NetflixSeries  from "./components/NetflixSeries"
// export const App = () =>{

//   return(
//     <div>
//       <NetflixSeries/>
    
//     </div>
//   )
// }