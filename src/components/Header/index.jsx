import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'


export default function Header() {

    const navigate = useNavigate()



  return (
   <header className="headerContainer">
    <img onClick={ ()=> navigate("/")} src={logo} alt="logo da CodeChella" className="header__logo" />
    <div className="header__navbar">
      <Link to={"/aexperiencia"} className="header__navbar-link"> A experiencia</Link>
      <Link to={"/mapadesetores"} className="header__navbar-link"> Mapa de Setores</Link>
      <Link to={"/informaçoes"} className="header__navbar-link">Informações</Link>
      <Link to={"/ingresso"} className="header__navbar-link"> Ingresso</Link>

    </div>
    <img className='menu__icon' src={menu} alt="" />
    
   </header>

   
  )
}
