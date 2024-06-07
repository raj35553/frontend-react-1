import React from 'react'
import RecomandMovie from "./RecomandMovie";
import ApiGitHubAxios from "./ApiGitHubAxios";

import UseRefExample from "./UseRefExample";
const Movies = (props) => {

  return (
    <div className="container">
      <div>Movies list here : {props.name}</div>
      <RecomandMovie />
      <ApiGitHubAxios />
      <UseRefExample />
    </div>
  )
}

export default Movies;