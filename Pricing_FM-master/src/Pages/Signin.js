import React from "react";
import { Link } from "react-router-dom";

function Signin() {
    return (
      <form class="form-signin">
          <Link to="/">
        <img
          class="mb-4"
          src="../images/Logo.jpg"
          alt=""
          width="72"
          height="72"
        />
        </Link>
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
        <button class="btn btn-lg btn-success btn-block" type="submit">
          ¡REGISTRATE!
        </button>
        <p> Registrarse con: </p>
      <div class="btn-group d-flex">
      <button class="btn btn-primary btn-block" type="submit">Facebook</button>
      <button class="btn btn-lg btn-warning btn-block" type="submit">Google</button>
      </div>
        <p class="mt-5 mb-3 text-muted">©2020</p>
      </form>
    );
  }
  
  export default Signin;