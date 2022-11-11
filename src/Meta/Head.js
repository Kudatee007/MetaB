import React, {useState} from 'react'
import './Head.css'
import meta from './img/Group.svg'

const Head = () => {
    const [expand, setExpand] = useState(false);
    function handler() {
      setExpand(!expand);
    }
  return (
    <div className="Nav">
    <img src={meta} alt="" className="metaImg" />
    <div className={!expand ? "navMenu" : "navMenu navMenu-NX"}>
        <h1>Home</h1>
        <h1>Place to stay</h1>
        <h1>NFTs</h1>
        <h1>Community</h1>
    </div>    
    <div className={!expand ? "navMenus" : "navMenus navMenus-NX"}>
      <button className="connect">Connect Wallet</button>
    </div>

    <div class="hamburger" onClick={handler}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </div>
  )
}

export default Head