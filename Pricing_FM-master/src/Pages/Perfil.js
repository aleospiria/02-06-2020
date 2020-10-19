import React from "react";
import { Link } from "react-router-dom";
import Perfl from "../images/perfl.png";
import css from "../Components/styles/Perfil.css";
import "../Components/styles/general.css";
import Config from "../images/engranage.png";

function Perfil() {
    return(
        <div class="contenido_chiquito">
        <p>PERFIL</p>
<img
src={Perfl}
id="perfil"
/>

<Link to="/Config">
<img
src={Config}
width="50px"
height="50px"
id=""
/>
</Link>
<br></br>
<a class="text-muted"> USUARIO </a>
<p>Puntos Conseguidos: 0</p>
<p>Racha mas larga: 0</p>
<p>Correo Electronico:    Alej****i779@gmail.com</p>
</div>
    );
    
}


export default Perfil;