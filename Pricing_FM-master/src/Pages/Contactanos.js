import React from "react";
import { Link } from "react-router-dom";
import Flecha from "../images/Flecha.png";

function Contact(){
    return(
        <div class="contenido">
            <br></br>
        <Link to="/config">
        <img src={ Flecha } width="60px" height="40px" class="rounded float-left"></img>
        </Link>
        <h1 class="text-center">CONTACTANOS</h1>
        <p class="text-danger text-center">¿Alguna sugerencia o queja?</p>
        <p class="text-center">Contacta con algunos de nosotros, los desarrolladores!</p>
        <p class="text-center">Victor Alejandro Aristizabal Ospina</p>
        <p class="text-muted text-center">-3005233439</p>
        <p class="text-muted text-center">-alejoospi77@gmail.com</p>
        <p class="text-center">David Stiven Diaz Duarte</p>
        <p class="text-muted text-center">-3196253526</p>
        <p class="text-muted text-center">-endyd34sky@gmail.com</p>
        </div>
    );
}

export default Contact;