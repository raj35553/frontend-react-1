import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
