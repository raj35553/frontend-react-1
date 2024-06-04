import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiGitHubAxios = () => {
  const ApiName = "https://api.artic.edu/api/v1/artworks";
  const [datalist, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async function () {
    // invoke/call function
    try {
      const response = await axios.get(ApiName);
      setData(response.data.data);
    } catch (error) {
      console.log("------->>> error fetching data");

    } finally {
      // loading
      setLoading(false);
    }
    console.log('Ran')
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
                    <td>{obj.id}</td>
                    <td>{obj.api_model}</td>
                    <td>{obj.title}</td>
                    <td>{obj.artist_title}</td>
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