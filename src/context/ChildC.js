import React from 'react';


import { DataContext } from './../components/Stream';
const ChildC = () => {
  return (
    <div className='container'>
      <DataContext.Consumer>
        {
            (AutherName) => {
                      return (
                        <h1>My name is {AutherName}</h1>
                      )

             }
        }
      </DataContext.Consumer>

    </div>
  )
}

export default ChildC;