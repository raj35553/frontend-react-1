import React, {useEffect, useState} from "react";
import axios from "axios";

const ApiGitHubAxios = () => {
  const ApiName = "https://api.artic.edu/api/v1/artworks";
  const [datalist, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchGitArt() {   // async function 
    try {
      const response = await axios.get(ApiName);
      setData(response.data.data);
    } catch(error) {
          console.log("------->>> error fetching data");
          
    }finally {
      // loading
      setLoading(false);
    }

  }

    useEffect(function () {
      // invoke/call function
      fetchGitArt();
    }, []);   // Empty dependency array means this effect runs once on mount/load
  

 
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
            {loading ? (
            <div className="text-center">loading...</div>
          ) : (
            datalist.map((obj, key) => {
              return (
              <tr key={key}>
                <td>Id: {obj.id}</td>
                <td>Api Model: {obj.api_model}</td>
                <td>Title: {obj.title}</td>
                <td>Artist Title: {obj.artist_title}</td>
              </tr>
      );
    })
  )}
            </tbody>
           </table>
      </div>
    </div>
  )
};


export default ApiGitHubAxios