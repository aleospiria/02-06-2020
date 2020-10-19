import React from "react";
import { Link } from "react-router-dom";
import "../Components/ejemplo.css";
import "../Components/styles/general.css";
import logo from "../images/Logo.jpg";
import Arrow from "../images/Flecha.png";

function Crear() {
  return (
    <div class="contenido_chiquito">
    <form class="form-signin">
      <Link to="/Clases">
        <img src={Arrow} width="60px" height="40px" class="rounded float-left"></img>
      </Link>
      <br></br>
      <br></br>
      <button class="btn btn-light" title="¡Cambia el icono de la clase!">
      <img
        class="rounded mb-4"
        src={logo}
        alt=""
        width= "72px"
        height="72px"
      />
      </button>
      <h1 class="h3 mb-3 font-weight-normal">Ingrese el nombre de la clase</h1>
      <label for="inputEmail" class="sr-only">
        Email address
      </label>
      <input
        type="Username"
        id="inputEmail"
        class="form-control"
        placeholder="Nombre de la clase"
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">
        Password
      </label>
      <input
        type="Username"
        id="Description"
        class="form-control"
        placeholder="Descripcion de tu clase"
        required=""
      />
      <br></br>
      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Estado</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Publico</a>
      <a class="dropdown-item" href="#">Privado</a>
    </div>
    <br></br>
      <h1 class="h3 mb-3 font-weight-normal">Actividad</h1>
      <label for="inputPassword" class="sr-only">
        Password
      </label>
      <input
        type="Username"
        id="Description"
        class="form-control"
        placeholder="Descripcion de la actividad"
        required=""
      />
      <label for="inputPassword" class="sr-only">
        Password
      </label>
      <input
        type="Username"
        id="Description"
        class="form-control"
        placeholder="Depositar imagenes o documentos"
        required=""
      />
      <br></br>

    
      <br></br>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" onClick="" /> ¿Fecha de entrega?
        </label>
      </div>
      <p>Digite una fecha de entrega</p>
      <input
        type="Username"
        id="inputEmail"
        class="form-control"
        placeholder="Ej: 10/5/2020"
        required=""
        autofocus=""
      />
      <br></br>
      <Link to="/Welcome">
      <button class="btn btn-lg btn-success btn-block" type="submit">
        ¡Crear!
      </button>
      </Link>
      <br></br>

      <p class="mt-5 mb-3 text-muted">©2020</p>
 
    </form>
    </div>
  );
}

export default Crear;