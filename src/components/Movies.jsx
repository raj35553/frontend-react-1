import React from 'react'
import RecomandMovie from "./Recomand-movie";
const Movies = (props) => {
  return (
    <div className="container">
      <div>Movies list here : {props.name}</div>
      <button className="" style={{marginTop: '50px'}}>Click Me</button>
      <RecomandMovie />
    </div>
  )
}

export default Movies;