import React from "react";
import "./Meta1.css";
import Metal1 from "./img/ meta1.svg";
import Metal2 from "./img/meta2.svg";
import Metal3 from "./img/meta3.svg";
import Metal4 from "./img/meta4.svg";
import mbtoken from './img/mbtoken.svg'
import metamask from './img/metamask.svg'
import opensea from './img/opensea.svg'

const Meta1 = () => {
  return (
    <div className="meeTT">
    <div className="Meta1">
      <div className="metaimgg">
        <h1 className="Rent">
          Rent a <span className="Rent_span">Place</span> away from{" "}
          <span className="Rent_span">Home</span> in the{" "}
          <span className="Rent_span">Metaverse</span>
        </h1>
        <p className="RentP">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="inP">
          <input type="text" placeholder="Search for location" />
          <button>Search</button>
        </div>
      </div>
      <div className="metaimg">
        <div className="metaimg1">
          <img src={Metal1} alt="" className="met1" />
          <img src={Metal3} alt="" />
        </div>
        <div className="metaimg2">
          <img src={Metal2} alt="" />
          <img src={Metal4} alt="" />
        </div>
      </div>
    </div>
    <div className="opensea">
        <img src={mbtoken} alt="" />
        <img src={metamask} alt="" />
        <img src={opensea} alt="" />

      </div>
    </div>
  );
};

export default Meta1;
