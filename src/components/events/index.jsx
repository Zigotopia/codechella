import React from "react";
import ingresso from "../../assets/ingresso.svg";
import festivalimg from "../../assets/festivalimg.png";
import "./events.scss";
import { useNavigate } from "react-router-dom";

export default function EventDescription() {

    const navigate = useNavigate()
  return (
    <main className="main__container">
      <section className="festival__info">
        <img src={festivalimg} alt="" className="festivalimg" />
        <div className="festival-description">
          <h6 className="festival_date">
            {" < "} 11 e 12 de Março 7{" > "}
            Aluródromo de São Paulo
          </h6>
          <p className="festival_txt">
            Hora de programar nossa memória com novas lembranças! Uma nova
            experiência sobre música, linguagens e, claro, tecnologia! Somos um
            festival diverso, com vários artistas e referências. Divirta-se!
          </p>
          <div className="ticket" onClick={()=> navigate("/ingresso")}>
            <p className="ticket__text">Compre seu ingresso</p>
            <img src={ingresso} alt="icone do ingresso" />
          </div>
        </div>
      </section>
      <section className="lineup">
        <h1 className="lineup_title">/Line-Up/</h1>
        <div className="dia">
          <div className="dia_container">
            <span className="linha_esquerda"></span>
            <h3 className="dia_title">SÁBADO {"<11/03>"}</h3>
            <span className="linha_direita"></span>
          </div>
          <div className="bandas_container">
            <h2 className="banda_principal">System of a DOM</h2>
            <div className="bandas1">
              <h3>Python Maiden</h3>
              <h3>Apollo Client 2001</h3>
              <h3>Bon Java</h3>
              <h3>NickCallback</h3>
            </div>
            <div className="bandas1">
              <h4>Linkin Promises</h4>
              <h4>Fullstack Fighters</h4>
              <h4>Papa React</h4>
              <h4>Angular in Chains</h4>
            </div>
            <div className="bandas1">
              <h5>Agnostic Front-end</h5>
              <h5>SlipkNode</h5>
              <h5>Pink Flutter</h5>
              <h5>Kiss</h5>
            </div>
          </div>
        </div>

        <div className="dia"></div>
        <div className="dia">
          <div className="dia_container">
            <span className="linha_esquerda"></span>
            <h3 className="dia_title">DOMINGO {"<12/03>"}</h3>
            <span className="linha_direita"></span>
          </div>
          <div className="bandas_container">
            <h2 className="banda_principal">Lana Del Ploy</h2>
            <div className="bandas1">
              <h3>Dua Lib</h3>
              <h3>The Backnd</h3>
              <h3>CSS Styles</h3>
              <h3>DJ Query</h3>
              <h3>ArrayAna Grande</h3>
            </div>
            <div className="bandas1">
              <h4>Miley Cypress</h4>
              <h4>The Bootstrap Boys</h4>
              <h4>Json Derulo</h4>
              <h4>CloudPlay</h4>
              <h4>Dev Lovato</h4>
            </div>
            <div className="bandas1">
              <h5>Kylie MiLOG</h5>
              <h5>Jenkins Brothers</h5>
              <h5>Rubycat Dolls</h5>
            </div>
          </div>
        </div>

        <div className="dia"></div>
      </section>
    </main>
  );
}
