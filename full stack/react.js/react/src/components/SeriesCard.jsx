import styles from "./Netflix.module.css"
import styled from "styled-components";

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
    
      const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;  

  return (
    <li className={styles.card}>
      <div>
      <img src={img_url} alt="Queen of Tears poster" width="40%" height="40%" />
       </div>
      <div className={styles["card-content"]}>
      <h1>Name: {name}</h1>
      <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h3>
      
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



//! CSS Modules

// Every time you import a CSS file in your React component, they are regarded as global CSS.

// CSS Modules help you keep styles specific to the component they're used in.

// Each module encapsulates its styles, preventing unintended style conflicts with other modules.

// The class names in CSS modules are often automatically generated, reducing the likelihood of naming clashes.


//! CSS Modules – Rules to Keep in Mind

// Name your CSS module files with the .module.css or .module.scss extension.

// Import the CSS module file in your React component. Access class names as properties of the imported styles object.

// Access class names as properties of the imported styles object.

// Combine multiple class names using template literals or the classnames library.

// Dynamically apply class names based on component state.


// CSS Modules – Important

// When using CSS Modules, class names with hyphens can sometimes cause issues if not accessed correctly. In CSS Modules, you need to use bracket notation for class names with hyphens.

// <div className={styles['card-content']}></div>


// Explanation:

// Using Bracket Notation: In JavaScript, when accessing object properties with special characters (like hyphens), you need to use bracket notation instead of dot notation.

// Dot Notation: styles.card-content will not work because . expects a valid identifier, which cannot contain hyphens.

// Bracket Notation: styles['card-content'] correctly accesses the class name from the imported styles object.
