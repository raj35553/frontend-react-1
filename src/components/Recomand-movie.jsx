import React from "react";
import Recomandimage from '../images/movie.png';

function RecomandMovie() {
  return <div class="container mt-4"><h1>Recommended Movies</h1>
  <div className=""> 
  <img src={Recomandimage} alt={"Recomandimage"}/>
  </div>
  </div>;
}

export default RecomandMovie;