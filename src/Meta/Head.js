import React, { useState, useRef } from "react";
import "./Head.css";
import meta from "./img/Group.svg";
import Metal from "./img/metal.svg";
import Wale from "./img/wale.svg";
import { Link } from 'react-router-dom'

const Head = () => {
  const [expand, setExpand] = useState(false);
  const Tim = useRef()

  function handler() {
    setExpand(!expand);
  }

  function Connectt() {
    if (Tim.current.style.display === 'none') {
      Tim.current.style.display = 'block'
    }else{
      Tim.current.style.display = 'none'
    }
  }
  return (
    <div>
      <div className="Nav">
        <img src={meta} alt="" className="metaImg" />
        <div className={!expand ? "navMenu" : "navMenu navMenu-NX"}>
          <Link to='/' className="places">Home</Link>
          <Link to='/Place' className="places">Place to stay</Link>
          <h1>NFTs</h1>
          <h1>Community</h1>
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
      <div className='Wallet' ref={Tim}>
        <div className="wallet">
          <h2>Connect Wallet</h2>
          <p onClick={Connectt}>+</p>
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
