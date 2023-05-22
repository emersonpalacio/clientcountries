import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import imgDog from "./image/uno.jpg";

const Landing = () => {
  return (
    <>
      <div></div>
      <div className={style.backGround}>
        <Link to="/home" className={style.link}>
          COME INTO MY GAME
          <img className={style.pokeBola} alt="pokeBola" src={imgDog} />
        </Link>
      </div>
    </>
  );
};

export default Landing;
