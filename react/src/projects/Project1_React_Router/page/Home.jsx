import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="container grid grid-two--cols">
          <div className="section-hero--content">
            <p className="hero-subheading">
              Explore the Latest in Movie Industries
            </p>
            <h1 className="hero-heading">
              Unlimited Movie, TVs Shows, & More.
            </h1>
            <p className="hero-para">
              Discover the Top Best Movies and Dramas with a catchy subtitle
              like Your Ultimate Guide to Must-Watch Content.
            </p>
            <div className="hero-btn">
              <NavLink to="/movie" className="btn">
                Explore Now
              </NavLink>
            </div>
          </div>
          <div className="section-hero-image">
            <img
              src="public/images/design-professional-movie-or-film-poster-a10d.jpg"
              alt="movies poster"
            />
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1696038172">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          ></svg>
        </div>
      </section>
    </main>
  );
};
