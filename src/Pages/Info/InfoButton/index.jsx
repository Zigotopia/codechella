import React, { useState } from "react";
import "./infoButton.scss"
import toogleIcon from '../../../assets/Info/arrow_drop_down.svg'



export default function InfoButton({ titulo, conteudo }) {

    const [active, setActive] =useState(false)
    console.log(active)


  return (
    <>
      <div
        onClick={() => setActive(!active)}
        className="infoButton_title-container">
        <h3>{titulo}</h3>
        <img className="toogle" src={toogleIcon} alt="" />
      </div>
      <div className={`${active === true ? "infoButton-description" : "off"}`}>
        <p>{conteudo}</p>
      </div>
    </>
  );
}
