import React from 'react';
import { Link } from 'react-router-dom';
import Flecha from "../images/Flecha.png";
import "../Components/styles/configuracion.css";
import Lapiz from "../images/lapiz.png";
import Flecha2 from "../images/ahcelf.png";

function Configuration(){
    return(
        <div id="configdiv" class="contenido_chiquito">
            <br></br>
        <Link to="/Perfil">
        <img
        src={ Flecha }
        width="60px"
        height="40px"
        class="rounded float-left"
        />
        </Link>
        <br></br>
        <br></br>
        <h2>OPCIONES</h2>
        <form class="form-signin">
        <p>Cambiar nombre de usuario <button type="submit"><img src={Lapiz} width="40px" height="40px"></img></button></p>
        <input
        type="text"
        id="inputUsername"
        placeholder="Nuevo nombre de usuario"
        class="form-control"
        />
        </form>
        <p>Sugerencias       <Link to="/Contact"><img src={Flecha2} width="50px" height="30px"></img></Link></p>
        <p>Docentes          <Link to="/Docente"><img src={Flecha2} width="50px" height="30px"></img></Link></p>
        <p>Logros       <Link to="/logros"><img src={Flecha2} width="50px" height="30px"></img></Link></p>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/Login">
        <button class="btn btn-danger">Cerrar Sesíon</button>
        </Link>
        </div>
    );
}

export default Configuration