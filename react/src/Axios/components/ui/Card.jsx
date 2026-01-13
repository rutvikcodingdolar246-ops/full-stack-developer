export const Card = ({ movieData }) => {
  const { Poster, imdbID } = movieData;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" />
        </div>

        <div className="ticket-container">
          <div className="ticket_content">
            <a href={`/movie/${imdbID}`}>
              <button className="buy-btn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
