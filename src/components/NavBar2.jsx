import React from "react";
import { Link } from "react-router-dom";
import "./navbar2.css";

const NavBar2 = () => {
  return (
    <nav>
      <div className="menu-navbar">
        <ul id="nav">
          <li>
            <Link  to="/home"  className="lnk">
              Inicio
            </Link>
          </li>
          <li>
            <Link to='/categoria/cuadernos' categoria={"cuadernos"} className="lnk">
              Cuadernos
            </Link>
          </li>
          <li>
            <Link  to="/categoria/escritura"  className="lnk">
              Escritura
            </Link>
          </li>
          <li>
            <Link to="/categoria/utiles" className="lnk">
              Utiles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar2;
