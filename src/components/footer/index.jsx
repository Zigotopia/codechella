import React from "react";
import logo2 from "../../assets/logo2.png";
import zap from "../../assets/zap.svg";
import twitch from "../../assets/twitch.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_esquerdo">
        <img src={logo2} alt="logo do Code Chella" />
        <div>
          <div className="footer_esquerdo-redes">
            <p>Acesse nossas redes:</p>
            <div className="footer_icones">
              <img src={zap} alt="" />
              <img src={twitch} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_direito">
        <p>Desenvolvido por Zigotopia</p>
        <p>Projeto ficticio sem fins lucrativos</p>
      </div>
    </footer>
  );
}
