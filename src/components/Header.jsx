import React from "react";
import logo from '../images/logo.png';

function Header() {
  return <nav className="navbar" aria-label="First navbar example">
  <div className="container">
  <div className="d-flex justify-content-start align-items-center">
      <a className="navbar-brand" href="#"><img src={logo} alt={"logo"}/> </a>
      <form className="col-12">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
    </div>
   <div className="d-flex justify-content-start align-items-center">
        <button type="button" className="btn btn-danger btn-sm me-2">Sign in</button>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="offcanvas offcanvas-end text-bg-white" tabIndex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">Offcanvas</h5>
          <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
           
          </ul>
        
        </div>
      </div>
  </div>
</nav>;
}

export default Header;
