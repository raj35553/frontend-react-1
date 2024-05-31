import React, { useState } from "react";
// import axios from "axios";

const ApiGitHub = () => {
  // const ApiName = "https://api.artic.edu/api/v1/artworks";
  const [datalist, setData] = useState([
    {
      id : 100,
      api_model : "sdfsdf",
      title : "art1",
      artist_title : "Ed Paschke",

    },
    {
      id : 101,
      api_model : "sdfsdf",
      title : "art1",
      artist_title : "Ed Paschke",

    },
    {
      id : 102,
      api_model : "sdfsdf",
      title : "art1",
      artist_title : "Ed Paschke",

    },
    {
      id : 103,
      api_model : "sdfsdf",
      title : "art1",
      artist_title : "Ed Paschke",

    },
    {
      id : 104,
      api_model : "sdfsdf",
      title : "art1",
      artist_title : "Ed Paschke",

    }

  ]);

  return (
    <div className="container">
      <h1>ApiGitHub</h1>
      <div className="mt-3">
           <table className="table table-bordered">
            <thead>
              <tr>
                <td>id</td>
                <td>api_model</td>
                <td>title</td>
                <td>artist_title</td>
              </tr>
            </thead>
            <tbody>
           {   datalist.map(obj => (
            
              <tr>
                <td>Id: {obj.id}</td>
                <td>Api Model: {obj.api_model}</td>
                <td>Title: {obj.title}</td>
                <td>Artist Title: {obj.artist_title}</td>
              </tr>
              
           ))
           }
            </tbody>
           </table>
      </div>
    </div>
  )
};

export default ApiGitHub