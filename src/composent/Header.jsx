import React from "react";

const Header = () => {
  return (
    <nav className="navigate">
        <div className="container">
          <a href="./">
            <img src="assets/images/logo.svg" alt="logo" className="logo" />
          </a>
          
          <h1>Marsaud olivier développement</h1>
        </div>
      <div className="menu-bar">
        <ul className="nav " id="nav">
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#project">Projets</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
