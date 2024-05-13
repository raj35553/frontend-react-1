import React from "react";

const Footer = () => {
  function clickMe() {
    // console.log(">>>>>>>>>> mohit");
  }

  return (
    <div id="footer">
      Footer<button onClick={clickMe}>Click Me Now Dev</button>
    </div>
  );
};
export default Footer;
