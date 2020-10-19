import React from 'react';
import { Link } from 'react-router-dom';
import css from '../Components/styles/levels.css';

function levels() {
    return(
        <div id="levels" class="contenido">
            <br></br>
        <h2>Niveles</h2>
        <p>¡Aqui puedes escoger alguno de nuestros niveles predeterminados y observar tu procedimiento en ellos!</p>
        <p class="text-muted">Te deseamos mucha suerte, entre más abajo estén, más dificles serán.</p>
        <br></br>
        <br></br>
        <div id="lvls">
        <Link to="/Temas">
        <button class="btn btn-success btn-lg btn-circle" >1</button>
        </Link>
        <p>  </p>
        <Link to="/lvl2">
        <button className="btn btn-warning btn-lg btn-circle" id="button_lvls">2</button>
        </Link>
        <Link to="/lvl3">
        <button className="btn btn-warning btn-lg btn-circle" id="button_lvls">3</button>
        </Link>
        <p>   </p>
        <Link to="/lvl4">
        <button className="btn btn-danger btn-lg btn-circle" id="button_lvls">4</button>
        </Link>
        <Link to="/lvl5">
        <button className="btn btn-danger btn-lg btn-circle" id="button_lvls">5</button>
        </Link>
        <Link to="/lvl6">
        <button className="btn btn-danger btn-lg btn-circle" id="button_lvls">6</button>
        </Link>
        </div>
        <p>Tambien puedes buscar buscar una clase de algun docente usando su codigo</p>
        <div class="input-group mb-3">
  <div class="input-group-prepend">
      <Link to="/Clases">
    <button class="btn btn-secondary" type="button">Buscar</button>
    </Link>
  </div>
  <input type="text" class="form-control" placeholder="Codigo de la clase" aria-label="" aria-describedby="basic-addon1"></input>
        </div>
        </div>

    );
    
}


export default levels;