import "./form.scss";

import React, { useContext } from "react";
import Banner from "../../../components/Banner";
import ticketbanner from "../../../assets/Form/formerBanner.png";
import seta from "../../../assets/Form/seta.svg";
import { formContext } from "../../../contexts/context";
import { useNavigate } from "react-router-dom";

export default function TicketForm() {
  const { nome, setNome, email, setEmail, categoria, setCategoria, date, setDate } = useContext(formContext);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/ingressocomprado")

}


   

  return (
    <>
      <Banner>
        <img className="ticket_banner" src={ticketbanner} alt="" />
      </Banner>

      <main className="ticketForm_container">
        <h3 className="form_title">Preencha o formulário a seguir:</h3>
        <form className="form_container" onSubmit={handleSubmit}>
          <label className="label_container" htmlFor="nome">
            Nome Completo:
            <input
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className="label_input"
              type="text"
              id="nome"
              required
            />
          </label>
          <label className="label_container" htmlFor="email">
            Email:
            <input  value={email} onChange={(event)=> setEmail(event.target.value)} className="label_input" type="email" id="email" required />
          </label>
          <div className="form_flex">
            <label className="label_container" htmlFor="categoria">
              Tipo de ingresso:
              <select value={categoria} onChange={(event)=> setCategoria(event.target.value)}
                className="label_select"
                name="categorias"
                id="categorias"
                required>
                <option value="tipo ingresso"  >
                  Tipo de Ingresso
                </option>
                <option value="Meia">Meia</option>
                <option value="Inteira">Inteira</option>
              </select>
            </label>
            <label className="label_container" htmlFor="data">
              Data de nascimento:
              <input value={date} onChange={(event)=>  setDate(event.target.value)} className="label_date" type="date" name="data" id="data" required/>
            </label>
          </div>
          <button className="form_button">
            <p>Avançar</p>
            <img src={seta} alt="" />
          </button>
        </form>
      </main>
    </>
  );
}
