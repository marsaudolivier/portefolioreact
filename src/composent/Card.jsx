import React from "react";

const Card = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section_title">Projets</h2>
        <div className="projects_container">
          <div className="project">
            <img
              src="assets/images/parrot.png"
              alt="Garage ParrotV1"
              className="project_img"
            />

            <h3 className="project_title">Garage Parrot V1</h3>
            <p className="project_description">
              Site de vente de voiture Ceci est mon sujet examen présenté pour
              mon graduate version PHP
            </p>
            <a href="https://marsaudolivier.alwaysdata.net/par">
              {" "}
              voir le projet
            </a>
          </div>
          <div className="project">
            <img
              src="assets/images/parrotV2.png"
              alt="parrotV2"
              className="project_img"
            />
            <h3 className="project_title">Garage Parrot V2</h3>
            <p className="project_description">
              Site de vente de voiture Ceci est mon sujet examen présenté pour
              mon graduate version REACT.js + Node.js
            </p>
            <a href="https://ecfparrotv2-3bphjzfh5-marsaudoliviers-projects.vercel.app/">
              {" "}
              voir le projet
            </a>
          </div>
          <div className="project">
            <img
              src="assets/images/pate.png"
              alt="Association Juste un coup de Pate"
              className="project_img"
            />
            <h3 className="project_title">Association Juste un coup de Pate</h3>
            <p className="project_description">
              Site association Premier site association pour mon graduate
            </p>
            <a href="http://marsaudolivier.me/Juste-un-coup-de-patte/">
              {" "}
              voir le projet
            </a>
          </div>
          <div className="project">
            <img
              src="assets/images/de.png"
              alt="Jeux de dé"
              className="project_img"
            />
            <h3 className="project_title">Jeux de dé</h3>
            <p className="project_description">Jeux de dé</p>
            <a href="http://marsaudolivier.me/Evaluation-JS-Jeux-de-d-/">
              {" "}
              voir le projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
