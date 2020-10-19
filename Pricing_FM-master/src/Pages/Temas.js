import React from 'react';
import { Link } from 'react-router-dom';
import css from '../Components/styles/general.css';

function Temas() {
    return(
        <div id="levels" class="contenido">
        <h2>TEMAS</h2>
        <p>Bienvenido a nuestra seccion de temas, aqui puedes ver algo de informacion para prepararte y vencer nuestros niveles.</p>
        <br></br>
        <br></br>
        <div >
        <Link to="/conceptos_basicos">
        <button className="btn btn-success btn-lg" id="button_temas">Conceptos basicos</button>
        </Link>
        <p>  </p>
        <Link to="/configuracion_electronica">
        <button className="btn btn-warning btn-lg" id="button_temas">Configuracion electronica</button>
        </Link>
        <p>  </p>
        <Link to="/Atomos">
        <button className="btn btn-danger btn-lg" id="button_temas">Atomos</button>
        </Link>
        </div>
        </div>
    );
    
}


export default Temas;