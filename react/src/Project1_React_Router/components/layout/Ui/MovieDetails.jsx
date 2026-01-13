import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
  const movieData = useLoaderData();
  const { Actors, Poster, Title, Type, Year, Plot, BoxOffice, imdbID } = movieData;

  return (
    <section className="movie-details-page">
      <div className="movie-details-container">

        {/* LEFT IMAGE */}
        <div className="movie-poster-box">
          <img src={Poster} alt={Title} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="movie-info-box">
          <h1>{Title}</h1>
          <p className="movie-meta">
            {Type} | {Year} | IMDb: {imdbID}
          </p>

          <p className="movie-plot">{Plot}</p>

          <ul className="movie-extra">
            <li><span>Actors:</span> {Actors}</li>
            <li><span>Box Office:</span> {BoxOffice || "N/A"}</li>
          </ul>

          <button className="movie-watch-btn">▶ Watch Now</button>
        </div>

      </div>
    </section>
  );
};
