import React from "react";
import { Link } from "react-router-dom";
import "../Components/ejemplo.css";
import "../Components/styles/general.css";
import logo from "../images/Logo.jpg";
import Arrow from "../images/Flecha.png";

function Login() {
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
        class="rounded mb-4"
        src={logo}
        alt=""
        width= "72px"
        height="72px"
      />
      </button>
      <h1 class="h3 mb-3 font-weight-normal">Por favor, ingrese sus datos</h1>
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
      <br></br>
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Rol Academico</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Docente</a>
      <a class="dropdown-item" href="#">Estudiante</a>
    </div>
    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Codigo Academico"></input>
      <br></br>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" onClick="" /> ¿Permanecer Registrado?
        </label>
      </div>
      
      <Link to="/Welcome">
      <button class="btn btn-lg btn-success btn-block" type="submit">
        ¡Inicia Sesion!
      </button>
      </Link>
      <br></br>
      <Link to="/password">
      <u>¿Olvido su contraseña?</u>
      </Link>
      <br></br>
      <p> Ingresar por: </p>
      <div class="btn-group d-flex">
      <button id="Face" class="btn btn-primary btn-block" type="submit">Facebook</button>
      <button id= "Goog" class="btn btn-warning btn-block" type="submit">Google</button>
      </div>
      <p class="mt-5 mb-3 text-muted">©2020</p>
 
    </form>
    </div>
  );
}

export default Login;