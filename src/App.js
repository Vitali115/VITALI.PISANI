import React, { useState } from "react";
import "./styles.scss";
import sample from "./123.mp4";
import { TiFlashOutline } from "react-icons/ti";
import { TfiMoreAlt } from "react-icons/tfi";
// import Slider from "./slider";
import UseAnimations from "react-useanimations";

export default function App() {
  const [checked, setChecked] = useState(true);
  return (
    <>
      {/* <Space /> */}
      <div className="EV-nav">
        <button>
          {" "}
          <TiFlashOutline className="icon" />
        </button>
        <button>
          {" "}
          <TfiMoreAlt className="icon" />
        </button>
      </div>

      <div className="App">
        <video autoPlay={true} loop={true} controls={false} playsInline muted>
          <source src={sample} type="video/mp4" />
        </video>
        <h1>Vitali Pisani</h1>

        <p>
          Web DEV &nbsp;{" "}
          <span>
            <UseAnimations
              className="icon-animated"
              reverse={checked}
              onClick={() => {
                setChecked(!checked);
              }}
              animationKey="loading2"
              size={35}
            />
          </span>
          &nbsp; Designer
          {/* &nbsp;&nbsp;
          <TiVideoOutline/>Director */}
        </p>
        <button>Accedi </button>
        {/* <p className="bio-p" >""</p> */}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <section className="max-width">
          <section style={{ marginBottom: "-15px" }} className="title">
            <h2>My Recent Projects&nbsp;</h2>
          </section>
          <Slider />{" "}
        </section> */}
        {/* <img style={{

textAlign: "right",
height: "300px"

        }}  src="https://i.ibb.co/92f5Pyx/Nuovo-progetto-1.png" /> */}
        {/* <p>
          <a href="https://f5b39t.csb.app/">https://f5b39t.csb.app/</a>
        </p>
        <img width="100%" src="https://i.ibb.co/448sLxN/Group-64.png" /> */}

        {/* <img
              width="500px"
              src="https://i.ibb.co/sFtVhT6/Vitali-Pisani-CV-e-Portfolio-riassunto-7-1.png"
            />
            <img
              width="550px"
              src="https://i.ibb.co/x5yMzYd/Vitali-Pisani-CV-e-Portfolio-riassunto-2-1.png"
            /> */}
        {/* <div className="img-g"  >
                 <img
              width="500px"
              src="https://i.ibb.co/bPTf52L/Vitali-Pisani-CV-e-Portfolio-riassunto-3-1.png"
            />
            <img
              width="600px"
              src="https://i.ibb.co/59J8WJZ/Vitali-Pisani-CV-e-Portfolio-riassunto-4-1.png"
            />
            <img
              width="500px"
              src="https://i.ibb.co/HhW8jXK/Vitali-Pisani-CV-e-Portfolio-riassunto-5-1.png"
            /> </div> */}
        {/* <img src="https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/8dc9b0a1-fa45-4be7-924d-5a9031e11886/StabilityAi_Logo_White-19.png?format=1500w"  alt="logo"/> */}
        <div className="avaible-quotes"></div>
        {/* <hr/> */}
        {/* <div className="tiles">
          <div className="tile" >
<p>1111</p>

          </div>
          <div className="tile"   ><p>1111</p></div>
        </div> */}
      </div>
    </>
  );
}
