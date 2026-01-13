import { useEffect, useState } from "react";

import { Card } from "../components/ui/Card";
import { getMovie } from "../services/GetService";

export const Movie = () => {

 const [data, setData] = useState([]); 

  

  const getMovieData = async () => {
    try {
      const res = await getMovie();
      console.log(res.data.Search);// Movie list
      setData(res.data.Search) 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
  <ul className="container grid grid-four--cols">
    {data.map((curElem) => (
      <Card key={curElem.imdbID} movieData={curElem} />
    ))}
  </ul>
);

};
