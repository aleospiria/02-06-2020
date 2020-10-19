import React from "react";
import gif from "../images/gif.gif";

function Bienvenido(){
    return(
        <div class="contenido">
<h1>¡BIENVENIDO!</h1>
<p>Bienvenido a nuestra aplicacion. Usa los iconos de arriba para navegar en todo lo que tenemos para ofrecerte :D</p>
<img src={ gif } width="1100px" height="700px"></img>
</div>
    );
}

export default Bienvenido