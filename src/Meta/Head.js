import React, { useState } from "react";
import "./Head.css";
import meta from "./img/Group.svg";
import Metal from "./img/metal.svg";
import Wale from "./img/wale.svg";

const Head = () => {
  const [expand, setExpand] = useState(false);
  const [expands, setExpands] = useState(false);
  // const Tim = useRef

  function handler() {
    setExpand(!expand);
  }

  function Connectt() {
    setExpands(!expands);
  }
  function Connec(params) {
    setExpands(false);
  }
  return (
    <div>
      <div className="Nav">
        <img src={meta} alt="" className="metaImg" />
        <div className={!expand ? "navMenu" : "navMenu navMenu-NX"}>
          <h1>Home</h1>
          <h1>Place to stay</h1>
          <h1>NFTs</h1>
          <h1>Community</h1>
        </div>
        <div className={!expand ? "navMenus" : "navMenus navMenus-NX"}>
          <button className="connect" onClick={Connectt}>
            Connect Wallet
          </button>
        </div>

        <div class="hamburger" onClick={handler}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className={expands ? "Wallet" : "Wallet Wallet-NX"}>
        <div className="wallet">
          <h2>Connect Wallet</h2>
          <p onClick={Connec}>+</p>
        </div>
        <hr className="lines" />
        <div className="prefer">
          <p>Choose your preferred wallet:</p>
          <img src={Metal} alt="" />
          <img src={Wale} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Head;
