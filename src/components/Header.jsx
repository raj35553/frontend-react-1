import React from "react";
import logo from '../images/logo.png';

function Header() {
  return <nav class="navbar" aria-label="First navbar example">
  <div class="container">
  <div class="d-flex justify-content-start align-items-center">
      <a class="navbar-brand" href="#"><img src={logo} alt={"logo"}/> </a>
      <form class="col-12">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
    </div>
   <div class="d-flex justify-content-start align-items-center">
        <button type="button" class="btn btn-danger btn-sm me-2">Sign in</button>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="offcanvas offcanvas-end text-bg-white" tabindex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarDarkLabel">Offcanvas</h5>
          <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
           
          </ul>
        
        </div>
      </div>
  </div>
</nav>;
}

export default Header;
