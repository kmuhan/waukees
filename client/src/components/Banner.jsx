import React from "react";
import { ReactComponent as CookieLogo } from "../img/CookieLogo.svg";
import { ReactComponent as CartLogo } from "../img/CartLogo.svg";
import { ReactComponent as DrinkLogo } from "../img/DrinkLogo.svg";
import { ReactComponent as ShirtsLogo } from "../img/ShirtsLogo.svg";

const Banner = () => {
  return (
    <div
      className="bannerIcons"
      style={{ position: "relative", display: "flex" }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Chivo:ital,wght@1,300;1,700&display=swap');
      </style>
      <div className="cookieIcon">
        <CookieLogo />
        <p style={{ fontFamily: "Chivo", fontStyle: "italic", color: "white" }}>
          cookies
        </p>
      </div>
      <div className="ShirtsIcon">
        <ShirtsLogo />
        <p style={{ fontFamily: "Chivo", fontStyle: "italic", color: "white" }}>
          shirts
        </p>
      </div>
      <div className="CartIcon">
        <CartLogo />
        <p style={{ fontFamily: "Chivo", fontStyle: "italic", color: "white" }}>
          groceries
        </p>
      </div>
      <div className="DrinkIcon">
        <DrinkLogo />
        <p style={{ fontFamily: "Chivo", fontStyle: "italic", color: "white" }}>
          drinks
        </p>
      </div>
    </div>
  );
};

export default Banner;
