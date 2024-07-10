import React, { Component, createContext } from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "../src/app.scss";
import Header from "./components/Header";
import Headertwo from "./components/Headertwo";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Contact from "./components/Contact";
import Stream from "./components/Stream";
import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import ToDo from "./components/ToDo";
import Blogs from "./blogs/Blogs";
import AddBlog from "./blogs/AddBlog";
import MemoCheck from "./context/MemoCheck";
import Signup from "./components/screens/Signup";

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
                  <Route path="/AddBlog" element={<AddBlog />} />
                  <Route path="/Blogs" element={<Blogs />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/screens/Signup" element={<Signup />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Router>
             <MemoCheck />
            <Footer />
      
      </div>
    );
  }
}

export default App;
