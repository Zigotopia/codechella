import "./info.scss";
import React from "react";
import Banner from "../../components/Banner";
import infoBannerImg from "../../assets/Info/InfoBanner.png"
import infos from './InfoButton/infos.json'
import InfoButton from "./InfoButton";



export default function Info() {
  return (
    <>
      <Banner>
        <img
          className="infoBanner_img"
          src={infoBannerImg}
          alt=" banner na pagina info representada por pessoas curtindo um show com as mãos ao alto"
        />
      </Banner>
      <main className="info_Container">
        <h1 className="info_title">Perguntas Frequentes:</h1>
        <div className="info_questions">
            {infos.map((info) =>(<InfoButton conteudo={info.conteudo} titulo={info.titulo}/>))}
        </div>
      </main>
    </>
  );
}
