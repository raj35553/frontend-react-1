import React from "react";
import Movie from '../images/movie.png';


function RecomandMovie () {
  
  return <div className="container mt-4">
    <h2>Recommended Movies</h2>
    <img src={Movie} alt={"Movie"}/>
  </div>;
};

export default RecomandMovie;
