import React from "react";
import { Link } from "react-router-dom";

function Clases(){
    return(
        <div class="contenido">
            <h1>CLASES</h1>
            <p>No se encontraron resultados para su busqueda.</p>
            <Link to="/Crear">
            <button class="btn btn-secondary">Crea una clase</button>
            </Link>
        </div>
    );
}

export default Clases