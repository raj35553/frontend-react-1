import React from "react";
import {useState} from "react";

const Home = () => {
  const [text, settext] = useState("");
  console.log("text:", text);
  return <div><p>HOme Page TExt</p>
    <input  type="text" value={text} onChange={(e) => settext(e.target.value)} />
  </div>;
};

export default Home;
