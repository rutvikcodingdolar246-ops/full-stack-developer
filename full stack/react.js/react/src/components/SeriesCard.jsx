export const SeriesCard = ({data}) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    data;
  return (
    <li>
      <img src={img_url} alt="Queen of Tears poster" width="40%" height="40%" />
      <h1>Name: {name}</h1>
      <h3>Rating: {rating}</h3>
      <p>Summary: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast:{cast}</p>
      <a href={watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
