import React from "react";
import Foots from "./img/FootMeta.svg";
import Face from "./img/Facebook.svg";
import Insta from "./img/instagram.svg";
import Tweet from "./img/twitter.svg";
import './Foot.css'

const Foot = () => {
  return (
    <div className="Foott">
      <div>
        <img src={Foots} alt="" className="foots"/>
        <div className="icons">
          <img src={Face} alt="" />
          <img src={Insta} alt="" />
          <img src={Tweet} alt="" />
        </div>
        <h6 className="copi">&copy; 2022 Metabnb</h6>
      </div>
      <div className="Community">
        <h2>Community</h2>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </div>
      <div className="Community">
        <h2>Places</h2>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn more</p>
      </div>
      <div className="Community">
        <h2>About us</h2>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact us</p>
      </div>
    </div>
  );
};

export default Foot;
