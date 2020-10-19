import React from "react";
import { Link } from "react-router-dom";
import Config from "../Components/config";
import css from "../Components/styles/header.css";
import book from '../images/book.png';
import home from '../images/home.png';
import people from '../images/people.png';
import face from '../images/face.png';
import Presentacion from "../images/Presentacion.png";

function Header(props) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm mx-auto" id="navBar">
      <img src={Presentacion}></img>
      <h5 className="my-0 mr-md-auto font-weight-normal">{props.companyName}</h5>
      <nav className="my-2 my-md-0 mr-md-3">
      <Link className="btn" to="/levels">
      <img src={home} width="60px" height="40px" title="Inicio"></img>
      </Link>  
      <Link className="btn" to="/Temas">
      <img src={book} width="60px" height="40px" title="Temas"></img>
      </Link>  
      <Link className="btn" to="/Ranking">
      <img src={people} width="60px" height="40px" title="Ranking"></img>
      </Link> 
      <Link className="btn" to="/perfil">
      <img src={face} width="60px" height="40px" title="Perfil"></img>
      </Link>
        {props.navBar.map((item, index) => {
          return (
            <a key = {`item-navbar-${index}`} className="p-2 text-dark" href={item.url}>
              {item.name}
            </a>
          );
        })}

      </nav>
      <Link className="btn btn-primary" to="/Login">
        Iniciar Sesion
      </Link>
    </div>
  );
}

export default Header;
