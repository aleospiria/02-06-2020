import React from 'react';
import { Link } from 'react-router-dom';
import css from '../Components/styles/logros.css';
import Flecha from "../images/Flecha.png";

function Logros(){
    return (
        <div class="contenido">
            <br></br>
        <Link to="/config">
        <img src={ Flecha } width="60px" height="40px" class="rounded float-left"></img>
        </Link>
        <h1 class="text-center"> LOGROS </h1>
        <div class="easy">
            APRENDIENDO 
        </div>
        <p class="text-muted text-center">Completa la primera prueba</p>
        </div>
    );
}

export default Logros;