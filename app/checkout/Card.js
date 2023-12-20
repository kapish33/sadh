"use client";

import React from "react";

const Card = ({ id, img, checkoutHandler }) => {
  return (
    <div>
      <button onClick={() => checkoutHandler(id)}>Buy Now</button>
    </div>
  );
};

export default Card;
