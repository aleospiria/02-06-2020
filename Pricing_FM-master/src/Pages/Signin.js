import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.jpg";
import Arrow from "../images/Flecha.png";

function Signin() {
    return (
      <div class="contenido_chiquito">
      <form class="form-signin">
        <Link to="/">
        <img src={Arrow} width="60px" height="40px" class="rounded float-left"></img>
      </Link>
      <br></br>
      <br></br>
        <button class="btn btn-light" title="¡Cambia tu foto de perfil!">
        <img
          class="mb-4"
          src={logo}
          alt=""
          width="72"
          height="72"
        />
        </button>
        <h1 class="h3 mb-3 font-weight-normal">Registro</h1>
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputUsername"
          class="form-control"
          placeholder="Nombre de Usuario"
          required=""
          autofocus=""
        />
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Correo Electronico"
          required=""
          autofocus=""
        />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Contraseña"
          required=""
        />
               <label for="inputPassword" class="sr-only">
          Password2
        </label>
        <input
          type="password"
          id="inputPassword2"
          class="form-control"
          placeholder="Confirmar Contraseña"
          required=""
        />
        <br></br>
        <Link to="/Welcome">
        <button class="btn btn-lg btn-success btn-block" type="submit">
          ¡REGISTRATE!
        </button>
        </Link>
        <p> Registrarse con: </p>
      <div class="btn-group d-flex">
      <button id="Face" class="btn btn-primary btn-block" type="submit">Facebook</button>
      <button id="Goog" class="btn btn-warning btn-block" type="submit">Google</button>
      </div>
        <p class="mt-5 mb-3 text-muted">©2020</p>
      </form>
      </div>
    );
  }
  
  export default Signin;