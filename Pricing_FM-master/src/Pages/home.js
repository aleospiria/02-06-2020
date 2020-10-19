import React from 'react';
import { Link } from 'react-router-dom';
import css from '../Components/styles/home.css';
import "../Components/styles/general.css";



function Home() {
    return(
       <div id="home" class="contenido">
        <h1>ADLTP</h1>
        <p>¡Aprendiendo de la tabla periodica! </p>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/Signin">
        <button className="btn btn-success btn-lg"> COMIENZA AHORA </button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/Login">
        <button className="btn btn-outline-success"> YA ESTOY REGISTRADO </button>
        </Link>

        </div>

    );
    
}

export default Home;
