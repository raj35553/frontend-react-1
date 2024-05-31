import React from "react";
import Recomandimage from '../images/movie.png';

function RecomandMovie() {
  return <div className="container mt-4"><h1>Recommended Movies</h1>
  <div className=""> 
     <img src={Recomandimage} alt={"Recomandimage"}/>
     <h3>Movie Name</h3>
     <p>Type</p>
  </div>
  </div>;
}

export default RecomandMovie;
