export const SeriesCard = ({data}) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    data;

    const btn_style = {    
          padding:"1.2rem 2.4rem",
          border: "none",
          fontSize:"1.6rem",
          backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
          color: "var(--bg-color)",
        }
    
      const ratingClass = rating >= 8.5 ? "super_hit" : "average";  

  return (
    <li className="card">
      <div>
      <img src={img_url} alt="Queen of Tears poster" width="40%" height="40%" />
       </div>
      <div className="card-content">
      <h1>Name: {name}</h1>
      <h3>Rating: <span className={`rating ${ratingClass}`}>{rating}</span></h3>
      
      <p>Summary: {description}</p>   
      {/* inline css  */}

      <p>Genre: {genre}</p>
      <p>Cast:{cast}</p>
      <a href={watch_url} target="_blank">
        <button style={btn_style}>Watch Now</button>
      </a>
      </div>
    </li>
  );
};

// 

// inline css 
// Conditional Styling
// add Css Styling 


//! # Css Conditional Stylings in React js 

//You can use ternary operators to add conditional styling to your css 

