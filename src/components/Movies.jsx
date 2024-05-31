import React from 'react'
import RecomandMovie from "./RecomandMovie";
import ApiGitHubAxios from "./ApiGitHubAxios";
const Movies = (props) => {
  return (
    <div className="container">
      <div>Movies list here : {props.name}</div>
      <button className="" style={{marginTop: '50px'}}>Click Me</button>
      <RecomandMovie />
      <ApiGitHubAxios />
    </div>
  )
}

export default Movies;