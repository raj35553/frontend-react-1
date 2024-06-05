import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getBlogsAPI } from "../Api";
const Blogs = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchBlog() {
    try {
      const response = await axios.get("http://localhost:3000/blogs");
      let sortedData = response.data.map(item => {
        // Check if the key exists and is a string
        return {
          ...item,
          datetime: new Date(item.datetime)
        }
      });

      sortedData = sortedData.sort((a, b) => b.datetime - a.datetime);
      console.log(sortedData);
      setDataList(sortedData);
    } catch (error) {
      console.log(">>>> error while fetching data", error);
    } finally {
      // loading
      setLoading(false);
    }
  }

  useEffect(function () {
    // invoke/call function
    fetchBlog();
  }, []); // Empty dependency array means this effect runs once on mount/load

  return (
    <div className="container">
        <div className="mt-3">
          <button> 
          <Link to="/AddBlog">Add new</Link>
          </button>

          <table>
            <thead>
              <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {loading ? (
              <div className="text-center">loading Data...</div>
            ) : (
              dataList.map((obj , key) => {
                return (
                  <tr scope="row">
                    <td>{obj.id}</td>
                    <td>{obj.title}</td>
                    <td>{obj.description}</td>
                    <td>{obj.datetime.toString()}</td>
                    <td>
                      <button>Edit</button>
                      <button className="ms-1">Delete</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
          </table>

        </div>

    </div>
  )
}

export default Blogs