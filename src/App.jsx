import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

function App() {
  // const boxref = useRef();
  // const containerRef = useRef();
  // useGSAP(() => {
  //   gsap.from(boxref.current, {

  //     duration: 1,
  //     delay: 1,
  //     rotate: 360,
  //   });
  // });
  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     rotate:360,
  //     scale:0,
  //     duration:1,
  //     opacity:0,
  //     delay:0.5
  //   })
  // },{scope:containerRef})

  const [animatecircle, setAnimatecircle] = useState(0);
  const randomNumber = gsap.utils.random(-500, 500, 100);
  const handleClick = () => {
    setAnimatecircle(randomNumber);
    console.log(animatecircle);
  };
  useGSAP(() => {
    gsap.to(".circle", {
      x: animatecircle,
      duration: 0.5,
      
    });
  }, [animatecircle]);
  return (
    <main>
      {/* <div ref={containerRef} className="container">
        <div className="box"></div>
        <div className="circle"></div>
      </div> */}

      {/* <div className="kuch">
        <div className="box"></div>
        <div className="circle"></div>
      </div> */}
      <button onClick={handleClick}>Animate</button>
      <div className="circle"></div>
    </main>
  );
}

export default App;
