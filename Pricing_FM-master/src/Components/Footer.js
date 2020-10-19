import React from "react";
import Logo from "../images/Logo.jpg"
import css from "../Components/styles/footer.css"

function Footer() {
  return (
    <div className="container" id="tm">
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img
              class="mb-2"
              src= {Logo}
              alt=""
              width="24"
              height="24"
            />
            <small class="d-block mb-3 text-muted">2020</small>
          </div>
          <div  id="footer">
            <h5>ADLTP</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="/">
                  Acerca de ADLTP
                </a>
<br></br>
                <a class="text-muted" href="/">
                  Ayudanos a mejorar
                </a>
<br></br>
                <a class="text-muted" href="/">
                  Nuestro servicio
                </a>
              <br></br>
              </li>
            </ul>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
