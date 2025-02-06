import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { GiScarabBeetle } from "react-icons/gi";

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

  // const [animatecircle, setAnimatecircle] = useState(0);
  const [xvalue, setXValue] = useState(0);
  const [roti, setRoti] = useState(0);
  const [yvalue, setYvalue] = useState(0)
  const randomX = gsap.utils.random(-200, 200, 100);
  const randomRoti = gsap.utils.random(-360, 360, 30);
  const randomY = gsap.utils.random(-200,200,100);
  // const boxRef = useRef();
  const iconRef = useRef();
  const handleAnimate = () => {
    setXValue(randomX);
    console.log(xvalue);
    setRoti(randomRoti);
    console.log(roti);
    setYvalue(randomY)
    console.log(yvalue)
  };
  useGSAP(() => {
    gsap.to(iconRef.current,{
      x:xvalue,
      y:yvalue,
      rotate:roti,
      duration:1
    })
  },[roti,xvalue,yvalue]);

  // const handleClick = () => {
  //   setAnimatecircle(randomNumber);
  //   console.log(animatecircle);
  // };
  // useGSAP(() => {
  //   gsap.to(".circle", {
  //     x: animatecircle,
  //     duration: 0.5,

  //   });
  // }, [animatecircle]);
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
      {/* <button onClick={handleAnimate}>Animate</button> */}
      {/* <div className="circle"></div> */}
      {/* <div className="box" ref={boxRef} onClick={handleAnimate}></div> */}
      <h1>Click on the bee </h1>
      <GiScarabBeetle ref={iconRef} onClick={handleAnimate} size={200}/>
    </main>
  );
}

export default App;
