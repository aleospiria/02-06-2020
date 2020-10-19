import React from "react";
import Arrow from "../images/Flecha.png";
import { Link } from "react-router-dom";

function Docentes(){
    return(
        <div class="contenido_chiquito">
            <br></br>
            <Link to="/Config">
        <img src={Arrow} width="60px" height="40px" class="rounded float-left"></img>
      </Link>
      <br></br>
      <br></br>
        <p class="text-warning">Docentes: 0</p>
        <p>Prueba seguir el perfil de un docente!</p>
        <p class="text-warning">Clases: 0</p>
        <p>Trata de buscar alguna en la pantalla niveles.</p>
        <p class="text-info">Envia una solicitud de seguimiento a un docente. </p>
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-secondary" type="submit">Enviar</button>
  </div>
  <input type="text" class="form-control" placeholder="Correo del docente" aria-label="" aria-describedby="basic-addon1"></input>
        </div>
        </div>
    );
}
export default Docentes