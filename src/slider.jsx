import React, { useState } from "react";
import Carousel from "react-grid-carousel";
import "./modCarousel.scss";
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
const App = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Carousel rows={1} cols={7} gap={0}>
      {aiArt.map((el) => {
        const { name, img, img2 } = el;
        return (
          <Carousel.Item>
            {/* <Link to="/ai/"> */}
            <div
              className="ai-card"
              style={{
                margin: "0 5px",
                padding: "5px",
                // backgroundColor: "#0d0d0d",
                textAlign: "center",
                // lineHeight: "100px",
                borderRadius: "15px"
              }}
            >
              <img className="logo" src={img} />
              {/* <img className="preview" src={img2} /> */}

              {/* <button>Scopri di più</button> */}
            </div>
            {/* </Link> */}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

const aiArt = [
  {
    img: `https://i.ibb.co/rHsBRqG/Group-27.png`,
    img2: " https://i.ibb.co/jgJrjr2/Group-102.png"
  },
  {
    img:
      "https://camo.githubusercontent.com/d36c787f9cea76f3d04b803633c4fec5e325078cc6497e5ad55ee62eb6ef7afb/68747470733a2f2f692e6962622e636f2f7442766a57314e2f5261676772757070612d3230352e706e67",
    img2: "https://i.ibb.co/64j7zG2/Nuovo-progetto.png"
  },
  // {
  //   img: `https://i.ibb.co/Ky5BCss/night-cafe-logo-180x.png`,
  //   img2: "https://i.ibb.co/MhY4PpD/Group-17.png"
  // },

  // {
  //   img: `https://i.ibb.co/vBMkTvr/Risorsa-1.png`,
  //   img2: "https://i.ibb.co/JH9NxQY/Group-103.png"
  // },
  {
    img: "https://i.ibb.co/bBsPzsM/Group-119.png"
  },
  {
    img: `https://repodoc.s3.eu-west-3.amazonaws.com/sitoweb/Logo+Keytech_Bianco.svg`,
    img2: "https://i.ibb.co/Tw3ZTv3/Group-102-1.png"
  },

  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];
export default App;
