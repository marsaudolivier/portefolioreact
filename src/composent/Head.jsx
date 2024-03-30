import React from "react";

const Head = () => {
  return (
    <nav className="navigate">
      <div className="container">
        <a href="./">
          <img src="assets/images/logo.svg" alt="logo" className="logo" />
        </a>
        <h1>Marsaud olivier développement</h1>
      </div>    
        <ul className="nav " id="nav">
          <li>
            <a href="/projets">Voir mes projets</a>
          </li>
        </ul>
    </nav>
  );
};

export default Head;
