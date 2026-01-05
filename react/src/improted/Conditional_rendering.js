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

// Main App component
export const App = () => {
  let age = 16;

  // Conditional rendering should happen *inside* the component
  if (age < 18) {
    return (
      <div>
        <h2>Recommended for You</h2>
        <NetflixSeries />
      </div>
    );
  }

  // Otherwise show multiple series
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};
