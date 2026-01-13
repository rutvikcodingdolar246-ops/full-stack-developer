import { useNavigate, useRouteError, Link } from "react-router-dom";


export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();



  const handleGoBack = () => {
    navigate(-1);
  }

  if (error?.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>

          <div className="text-center">
            <p className="p-a">
              The page you were looking for could not be found
            </p>

            {/* <p className="p-b">
              <Link to="/">← Back to Home</Link>
            </p> */}

            <button className="p-b" onClick={handleGoBack}>Go Back</button>
          </div>
        </div>
      </section>
    );
  }

  return <h1>The page you are looking does not exist</h1>;
};
