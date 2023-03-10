import React from "react";
import Banner from "../../components/Banner";
import sectorBannerImg from "../../assets/sectionMap/sectorBanner.png";
import map from "../../assets/sectionMap/Mapa setores 1.svg";
import pista from "../../assets/sectionMap/Mapa de setores2.png";
import pista2 from "../../assets/sectionMap/mapa de setores 3.png";
import cadeiras from "../../assets/sectionMap/Mapa de setores 4.png";

import "./sectorMap.scss";

export default function SectorMap() {
  return (
    <>
      <Banner>
        <img src={sectorBannerImg} alt="" className="sector_banner" />
      </Banner>
      <main className="sector_main">
        <section className="map">
          <img className="map_img" src={map} alt="mapa dos setores do evento" />
          <div className="map_lista">
            <h4 className="map_title">Legenda:</h4>
            <ul className="map_pista">
              <li className="pista_lista">
                <div className="pista_item">
                  <span className="pista_item-azul item_quadrado"></span>
                  <p>Pista Premium</p>
                </div>
              </li>
              <li className="pista_lista">
                <div className="pista_item">
                  <span className="pista_item-rosa item_quadrado"></span>
                  <p>Pista Comum</p>
                </div>
              </li>
              <li className="pista_lista">
                <div className="pista_item">
                  <span className="pista_item-verde  item_quadrado"></span>
                  <p>Cadeiras térreo</p>
                </div>
              </li>
              <li className="pista_lista">
                <div className="pista_item">
                  <span className="pista_item-roxo item_quadrado "></span>
                  <p>Cadeiras superiores</p>
                </div>
              </li>
              <li className="pista_lista">
                <div className="pista_item">
                  <span className="pista_item-azul item_quadrado "></span>
                  <p>Rampas</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="pistas">
          <h3 className="pistas_titulo">Mais detalhes sobre os setores:</h3>
          <div className="pistas_container">
            <div className="pista">
              <img
                src={pista}
                alt=" pessoas brancas na pista 1 ao por do sol com arvores no fundo"
              />
              <h5 className="pista_title">Pista</h5>
              <p className="pista_txt">
                Pista convencional, atendida pelos bares e banheiros das
                laterais do estádio. Espaço amplo, com local para sentar e
                descansar. Separada da pista premium por uma grade.
              </p>
            </div>
            <div className="pista2">
              <img
                src={pista2}
                alt=" pessoas brancas na pista 2 ao amanhacer envoltas de fumaças coloridas"
              />
              <h5 className="pista_title">Pista Premium</h5>
              <p className="pista_txt">
                Pista mais próxima do palco, com acesso muito próximo a
                banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou
                com deficiência têm direito a acesso gratuito a essa área.
              </p>
            </div>
            <div className="pista">
              <img
                src={cadeiras}
                alt="cadeiras vazias presas numa parade amarela"
              />
              <h5 className="pista_title">Cadeiras</h5>
              <p className="pista_txt">
                Opção de cadeiras térreas ou elevadas. Acesso próximo a
                banheiros e bares, visão um pouco elevada em relação às pistas.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
