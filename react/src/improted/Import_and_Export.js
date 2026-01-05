// Helper function
const returnGenre = () => {
  const genre = "RomCom";
  return genre;
};

// NetflixSeries component
 const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = "8.2";
  const summary =
    "Kim Ji-won and Kim Soo-hyun in Queen of Tears (2024). A miraculous love story of a married couple overcoming a dizzying crisis.";

  return (
    <div>
      <img src="qot.jpg" alt="Queen of Tears poster" width="20%" height="40%" />
      <h1>Name: {name}</h1>
      <h3>Rating: {rating}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
      <button>Watch Now</button>
    </div>
  );
};

export default NetflixSeries;  // 1. default export and import


export const Footer = () => {
    return <p>Copyright @rutvikdolar</p>;
}






//! Default Export:
//?  A file can have only one default export.
//? Default Import: When importing a default export, you can name the
//? import whatever you like.

//! Named Export :
//? A file can have multiple named exports. Each named export must be explicitly exported.

//! Named Import:
//? When importing named exports, the import names must match export names exactly.
//? Named imports must be enclosed in curly braces. 



//! file coll 

// import NetflixSeries, {Footer} from "./components/NetflixSeries"
// export const App = () =>{

//   return(
//     <div>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <Footer/>
//     </div>
//   )
// }