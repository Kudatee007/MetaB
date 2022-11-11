import React from "react";
import Nft from "./img/groupnft.svg";
import './Meta3.css'

const Meta3 = () => {
  return (
    <div className="Meta3">
      <div className="Met3">
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button>Learn more</button>
      </div>
      <div className="Nft">
        <img src={Nft} alt="" className="nft"/>
      </div>
    </div>
  );
};

export default Meta3;
