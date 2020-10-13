import React from 'react';
import { Link } from "react-router-dom";
import css from "../Components/styles/Password.css";

function Password() {
return(
<>
<form class="form-signin">
<h2>¿Olvidaste tu contraseña?</h2>
<br></br>
<p>Ingresa tu correo electronico <br></br>para recibir<br></br> un enlace de <br></br>reestablecimiento de contraseña</p>

<input
   type="Email"
   placeholder="Correo Electronico"
   class="form-control"
   required=""
   autofocus=""
/>
<br></br>
<br></br>
<Link to="/login">
<button id="Enviar" class="btn btn-primary">Enviar Correo de Restauracion</button>
</Link>
</form>
</>
);
}

export default Password;
