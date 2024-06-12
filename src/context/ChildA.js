import {React,memo} from 'react';
//use memo ka use dekhnge isme
//simply yha re-render ho rha when click on "addition button" "child component" in console m--- isse rokne k liye use memo ka use krenge 

const ChildA = (Learning) => {
    console.log ("child component");
  return (
    <div>ChildA</div>
  )
}

export default memo(ChildA);