import React from "react";
import { Link } from "react-router-dom";

function Headertwo() {
  return <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
    
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={"/movies"} className="nav-link">Movies</Link>
        </li>
        <li class="nav-item">
          <Link to={"/stream"} className="nav-link">Stream</Link>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Plays</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Activites</a>
        </li>
      </ul>

      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">ListYourShow</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Corporates</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="#">Offers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gift cards</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>;
}

export default Headertwo;
