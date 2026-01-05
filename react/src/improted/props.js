
//! file Name Lists first file 1
// export const SeriesCard = (props) => {
// return (
//           <li>
//             <img
//               src={props.curElem.img_url}
//               alt="Queen of Tears poster"
//               width="40%"
//               height="40%"
//             />
//             <h1>Name: {props.curElem.name}</h1>
//             <h3>Rating: {props.curElem.rating}</h3>
//             <p>Summary: {props.curElem.description}</p>
//             <p>Genre: {props.curElem.genre}</p>
//             <p>Cast:{props.curElem.cast}</p>
//             <a href={props.curElem.watch_url} target="_blank">
//               <button>Watch Now</button>
//             </a>
//           </li>
//         );
// }


//! Second file name NetflixSeries 

// import seriesData from "../api/seriesData.json";
// import { SeriesCard } from "./Lists";

// // NetflixSeries component
// const NetflixSeries = () => {
//   return (
//     <ul>
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem} curElem={curElem} />
//       ))}
//     </ul>
//   );
// };

// export default NetflixSeries;

//! Three file name app 

// import NetflixSeries  from "./components/NetflixSeries"
// export const App = () =>{

//   return(
//     <div>
//       <NetflixSeries/>
    
//     </div>
//   )
// }







//! Props

// · React props (properties) facilitate data transfer from parent to child
// components.
// · Data flows unidirectionally, ensuring a clear direction of information in
// React applications.
// · Props are immutable, meaning child components cannot modify the
// data received from parents.
// . Child components access props through their function parar
// · You can also pass JSX as props to another component.





//! React Destructuring Props 
//? file name SeriesCard 

// export const SeriesCard = ({data}) => {
//   const { img_url, name, rating, description, genre, cast, watch_url } =
//     data;
//   return (
//     <li>
//       <img src={img_url} alt="Queen of Tears poster" width="40%" height="40%" />
//       <h1>Name: {name}</h1>
//       <h3>Rating: {rating}</h3>
//       <p>Summary: {description}</p>
//       <p>Genre: {genre}</p>
//       <p>Cast:{cast}</p>
//       <a href={watch_url} target="_blank">
//         <button>Watch Now</button>
//       </a>
//     </li>
//   );
// };


//? file name NetflixSeries

// import seriesData from "../api/seriesData.json";
// import { SeriesCard } from "./SeriesCard";

// // NetflixSeries component
// const NetflixSeries = () => {
//   return (
//     <ul>
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem} data={curElem} />
//       ))}
//     </ul>
//   );
// };

// export default NetflixSeries;


//? file name  app 

// import NetflixSeries  from "./components/NetflixSeries"
// export const App = () =>{

//   return(
//     <div>
//       <NetflixSeries/>
    
//     </div>
//   )
// }