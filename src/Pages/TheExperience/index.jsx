import React from 'react'
import Banner from '../../components/Banner'
import expbanner from '../../assets/TheExp/expbanner.png'
import './TheExperience.scss'
import expimg1 from '../../assets/TheExp//expimg1.png'
import expimg2 from '../../assets/TheExp//expimg2.png'
import expimg3 from '../../assets/TheExp//expimg3.png'



export default function TheExperience() {
  return (
    <>
      <Banner>
        <img src={expbanner} alt="" className="exp_banner" />
      </Banner>
      <main className='exp_container'>
        <div className="post_container">
          <img className="post_img" src={expimg1} alt="" />
          <div className="post_description">
            <h4 className="post_description-title">
              Acessibilidade e Inclusão
            </h4>
            <p className="post_description-text">
              Nosso evento tenta abraçar um público mais amplo em todos os
              sentidos, de todas as idades, corpos, gostos e pensamentos! Isso
              está presente no espaço físico, na sinalização, no treinamento da
              equipe de apoio, na comunicação em libras, braile, visual e tátil.
              Além disso, dispomos de ingressos gratuitos para pessoas com
              deficiência e acompanhantes, pessoas idosas e crianças!
            </p>
          </div>
        </div>
        <div className="post_container">
          <div className="post_description">
            <h4 className="post_description-title2">Sustentabilidade</h4>
            <p className="post_description-text">
              Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso,
              levamos o futuro do nosso planeta a sério. Nosso festival é
              carbono zero, com utilização de copos retornáveis, coleta e
              destinação adequada de resíduos, e transporte coletivo.
            </p>
          </div>
          <img className="post_img" src={expimg2} alt="" />
        </div>
        <div className="post_container">
          <img className="post_img" src={expimg3} alt="" />
          <div className="post_description">
            <h4 className="post_description-title">Atrações</h4>
            <p className="post_description-text">
              Intervenções artísticas e culturais para todos os gostos! Durante
              os intervalos dos shows, nossa experiência contará com recreação
              para crianças, oficina de cerâmica, origami, circo e aquarela!
              Além disso, nosso espaço contra com 3 praças de alimentação, roda
              gigante e outros brinquedos!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
