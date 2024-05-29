import React, { Component } from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "../src/app.scss";
import Header from "./components/Header";
import Headertwo from "./components/Headertwo";
import Footer from "./components/Footer";
import Home from "./components/Home";

import RecomandMovie from "./components/Recomand-movie";
import Stream from "./components/Stream";
import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import RecomandMovie from "./components/RecomandMovie";
import ToDo from "./components/ToDo";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header />
        <Headertwo />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/ToDo" element={<ToDo />} />
              <Route path="/stream" element={<Stream />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>

        
      
        <div>
          <RecomandMovie />
        
        </div>
        <Footer />
        
      </div>
    );
  }
}

export default App;
