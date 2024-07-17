//UseState ka use

import React, { useState, createContext } from 'react';
import  ChildC  from "../context/ChildC";
const DataContext = createContext();
const Stream = () => {
  const AutherName = "RAJ KUMAR";
  const [Counter, setCounter] = useState(0);
  const handleClick = () => setCounter(Counter + 1);


// promise resolve example in console start here
      const promiseOne = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("Async task is complete");
            resolve()   // resolve ko call krwate h then se connect kren k liye
        }, 1000);
      })

      promiseOne.then(function(){
        console.log("promise consumed");
      })


        //promoise second method use start here
          const promiseThree = new Promise(function(resolve,reject){
            setTimeout(function(){    
              resolve({username: "Raj", Pass: "123"})
            }, 1000)
          })

          promiseThree.then(function(user){
            console.log(user);
          })
          // promose second method end here


          //promoise theree method use start here
          const promiseFour =  new Promise(function(resolve, reject){
            setTimeout(function(){
              let errortext = true
              if (errortext) {
                resolve({username: "hitesh", pass: "123"})
              } else {
                reject('ERROR Something went wrong')
              }
              
            }, 1000)

          })

          promiseFour.then((user) => {
                console.log(user);
                return user.username
          })
          .then((username) => {
              console.log(username);
          })
          .catch(function(error){
            console.log(error);
          })

          // promose three method end here

  // promise resolve example in console end here
  return (
    <div className='container'>
      <h1>Stream</h1>
      <button className="btn btn-primary" style={{ marginTop: '50px' }} onClick={handleClick}>Click Here</button>
      <p>{Counter}</p>
      <DataContext.Provider value={AutherName}>
        <ChildC />
      </DataContext.Provider>

    </div>
  )
}

export default Stream;
export { DataContext };