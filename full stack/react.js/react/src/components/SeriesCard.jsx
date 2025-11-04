export const SeriesCard = ({data}) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    data;
  return (
    <li className="card">
      <div>
      <img src={img_url} alt="Queen of Tears poster" width="40%" height="40%" />
       </div>
      <div className="card-content">
      <h1>Name: {name}</h1>
      <h3 style={{margin:"1.2rem 0"}}>Rating: {rating}</h3>
      
      
      <p style={{margin:"1.2rem 0"}}>Summary: {description}</p>   
      {/* inline css  */}

      <p style={{margin:"1.2rem 0"}}>Genre: {genre}</p>
      <p style={{margin:"1.2rem 0"}}>Cast:{cast}</p>
      <a href={watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
      </div>
    </li>
  );
};

// 9.59
