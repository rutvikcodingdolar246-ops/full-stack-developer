import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <section className="about-section">
      <div className="container grid grid-two--cols">
        
        <div className="about-content">
          <h2>About CineVerse 🎬</h2>
          <p>
            CineVerse is your ultimate OTT guide for discovering trending,
            top-rated and upcoming movies & TV shows from all industries.
          </p>

          <div className="about-features">
            <div>⭐ IMDb Rated Movies</div>
            <div>🎥 Latest OTT Releases</div>
            <div>🔥 Trending Shows</div>
            <div>📺 Web Series Collection</div>
          </div>

          <NavLink to="/movie" className="btn about-btn">
            Explore Movies
          </NavLink>
        </div>

        <div className="about-image">
          <img
            src="public/images/a.webp"
            alt="cinema"
          />
        </div>
      </div>
    </section>
  );
};
