import React from 'react'

const Movies = (props) => {
  return (
    <div class="container">
      <div>Movies list here : {props.name}</div>
      <button className="" style={{marginTop: '50px'}}>Click Me</button>
    </div>
  )
}

export default Movies;