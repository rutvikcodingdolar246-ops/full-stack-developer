export const App = () => {
  return (
    <div>
      {/* Repeat cards */}
      

      {/* Component call */}
      <NetflixSeries />
       <NetflixSeries />
        <NetflixSeries />
         <NetflixSeries />
    </div>
  );
};

const NetflixSeries = () => {
  return (
    <div>
      <img src="qot.jpg" alt="" width="20%" height="40%" />
      <h1>Name: Queen of Tears</h1>
      <h3>Rating: 8.2</h3>
      <p>
        Summary: Kim Ji-won and Kim Soo-hyun in Queen of Tears (2024). A
        miraculous love story of a married couple overcoming a dizzying crisis.
      </p>
    </div>
  );
};
