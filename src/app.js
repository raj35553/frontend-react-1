import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "../src/app.scss";
import Header from "./components/Header";
import Headertwo from "./components/Headertwo";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MainBanner from "./components/MainBanner";

import RecomandMovie from "./components/RecomandMovie";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Headertwo />
        <MainBanner />
        <div>
          <Home />
          <RecomandMovie />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
