import React from "react";
import Banner from '../images/main-banner.png';

const MainBanner = () => {
  return <div className="container">
      <div className="text-center mt-3"><img src={Banner} alt={"Banner"}/></div>

          <div className="">
                  <button onClick={() => {
                localStorage.setItem('arr', JSON.stringify([1, 2 , 3 , 4]))
                localStorage.setItem('obj', JSON.stringify({Name: 'RAJ', Dept: 'IT'}))

                  }
                  }>Click Here JSON</button>  

                <button onClick={() => {
              const arrr = localStorage.getItem('arr')
              console.log(JSON.parse(arrr));
              console.log( ">>>>> simple show", arrr);
                  }}>Get Value </button>

                 

           </div>

      </div>;
};

export default MainBanner;
