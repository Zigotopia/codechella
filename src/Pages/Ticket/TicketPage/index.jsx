import "./TicketPage.scss";

import React, { useContext } from "react";
import Banner from "../../../components/Banner";
import ticketbanner from "../../../assets/ticket/ticketbanner.png";
import minilogo from "../../../assets/ticket/Logo1 3.svg";
import taglogo from "../../../assets/ticket/Ellipse 4.svg";
import qrcode from "../../../assets/ticket/Qr code.svg";
import { formContext } from "../../../contexts/context";



export default function TicketPage() {
  const { nome, categoria, date } = useContext(formContext);

  



  const dataFormatada = new Date(date).toLocaleDateString()

  
 


 

  return (
    <>
      <Banner>
        <img src={ticketbanner} alt="" />
      </Banner>

      <main className="ticketPage_container">
        <h5 className="ticketPage_titulo">
          Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do
          evento e divirta-se!
        </h5>

        <div className="ticket_container">
          <div className="ticket_logo">
            <img src={minilogo} alt="" />
            <img src={taglogo} alt="" />
          </div>
          <div className="ticketinfo_container">
            <img src={qrcode} alt="" />
            <div className="ticketInfo">
              <h5 className="ticketInfo_tittle">{nome}</h5>
              <p className="ticketInfo-txt">{categoria}</p>
              <p className="ticketInfo-txt">Setor Pista</p>
              <p className="ticketInfo-txt">Data  07/11</p>
              <p className="ticketInfo-txt">Local: São Paulo-SP</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
