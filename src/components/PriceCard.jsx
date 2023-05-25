import React from "react";
import Price from "../components/Price";

const PriceCard = (name, description) => {
  return (
    <div>
      <>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </>
    </div>
  );
};

export default PriceCard;
