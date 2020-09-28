import React from 'react';
import { Link } from 'react-router-dom';
import css from '../Components/styles/home.css';

function Home() {
    return(
        <div id="home">
        <h1>ADLTP</h1>
        <p>¡Aprendiendo de la tabla periodica! </p>
        <Link to="/Signin">
        <button className="btn btn-success btn-lg"> COMIENZA AHORA </button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/Login">
        <button className="btn btn-success"> YA ESTOY REGISTRADO </button>
        </Link>
        </div>
    );
    
}

export default Home;
