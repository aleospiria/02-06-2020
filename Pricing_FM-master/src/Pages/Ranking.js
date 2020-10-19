import React from "react";
import { Link } from "react-router-dom";
import css from '../Components/styles/general.css';

function Ranking() {
    return(
        <div id="levels" class="contenido">
        <h2>RANKING</h2>
        <br></br>
        <button class="btn btn-primary margin"  type="submit">Local</button>
        <button class="btn btn-success margin"  type="submit">Clase</button>
        <button class="btn btn-danger margin"  type="submit">Mundial</button>
        <p>Aqui puedes ver los mejores Jugadores de ADLTP ;)</p>
        <br></br>

        <table border="2px solid black" cellPadding="20px" id="tabla_Ranking">
            <tr>
                <th class="bigboi">
                USUARIOS
                </th>
                <th>
                PUNTOS    
                </th>
            </tr>
            <tr>
                <th class="bigboi">
                
                </th>
                <th>
                    
                </th>
            </tr>
            <tr>
                <th class="bigboi">
                
                </th>
                <th>
                    
                </th>
            </tr>
            <tr>
                <th class="bigboi">

                </th>
                <th>
                    
                </th>
            </tr>
            <tr>
                <th class="bigboi">
                
                </th>
                <th>
                    
                </th>
            </tr>
            <tr>
                <th class="bigboi">
                
                </th>
                <th>
                    
                </th>
            </tr>
            <tr>
                <th class="bigboi">

                </th>
                <th>
                    
                </th>
            </tr>
            </table>
        </div>
    );
    
}


export default Ranking;