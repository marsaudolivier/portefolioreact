import React from "react";

const Card = () => {
  // project Vparro 1
  const redirectToProject1 = () => {
    window.open("https://marsaudolivier.alwaysdata.net/par", "_blank");
  };
  const redirectToGithub1 = () => {
    window.open(
      "https://github.com/marsaudolivier/ECF_MarsaudOlivier",
      "_blank"
    );
  };
  const redirectToProjectLamy = () => {
    window.open("https://www.lamy-vol-aie.fr/", "_blank");
  };
  const redirectToalice = () => { 
    window.open("https://www.gym.marsaudolivierdev.fr/index.html", "_blank");
  };
  // project Vparro 2
  const redirectToProject2 = () => {
    window.open("https://ecfparrotv2.vercel.app/", "_blank");
  };
  const redirectToGithub2 = () => {
    window.open("https://github.com/marsaudolivier/ParrotV2_Front");
  };
  const redirectToGithub21 = () => {
    window.open("https://github.com/marsaudolivier/ParrotV2_Back_Node");
  };
  // project Association
  const redirectToProject3 = () => {
    window.open("http://marsaudolivier.me/Juste-un-coup-de-patte/");
  };
  const redirectToGithub3 = () => {
    window.open("https://github.com/marsaudolivier/Juste-un-coup-de-patte");
  };
  // project jeux de dé
  const redirectToProject4 = () => {
    window.open("http://marsaudolivier.me/Evaluation-JS-Jeux-de-d-/");
  };
  const redirectToGithub4 = () => {
    window.open("https://github.com/marsaudolivier/Evaluation-JS-Jeux-de-d-");
  };
  //sandrine coupart
  const redirectToGithub5 = () => {
    window.open(
      "  https://github.com/marsaudolivier/ECF_Entrainement_SandrineCoupart"
    );
  };
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section_title">Projets</h2>
        <div className="projects_container">
          <div className="project">
            <img
              src="assets/images/lamy.png"
              alt="Lamy Vol'aïe"
              className="project_img"
            />
            <h3 className="project_title">Lamy Vol'aïe</h3>
            <p className="project_description">
              Site d'un client professionnel spécialiste de la volailles: Nous
              sommes fiers de vous proposer des volailles élevées avec soin et
              respect. Nos poulets et pondeuses évoluent en plein air .{" "}
            </p>
            <button
              className="card_btn"
              type="button"
              onClick={redirectToProjectLamy}
            >
              voir le projet
            </button>
          </div>
          <div className="project">
            <img
              src="assets/images/image.png"
              alt="trinitaire"
              className="project_img"
            />
            <h3 className="project_title">Spéctacle de gym Trinitaire mauléon</h3>
            <p className="project_description">
              Site du spéctacle de gym Trinitaire mauléon: Thème alice au pays des merveilles
            </p>
            <button
              className="card_btn"
              type="button"
              onClick={redirectToalice}
            >
              voir le projet
            </button>
          </div>
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
            <button
              className="card_btn"
              type="button"
              onClick={redirectToProject1}
            >
              voir le projet
            </button>
            <button
              className="card_btn"
              type="button"
              onClick={redirectToGithub1}
            >
              voir le Github
            </button>
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
            <button
              className="card_btn"
              type="button"
              onClick={redirectToProject2}
            >
              voir le projet
            </button>
            <button
              className="card_btn"
              type="button"
              onClick={redirectToGithub2}
            >
              voir le Github Coté Front
            </button>
            <button
              className="card_btn"
              type="button"
              onClick={redirectToGithub21}
            >
              voir le Github Coté back
            </button>
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
            <button
              className="card_btn"
              type="button"
              onClick={redirectToProject3}
            >
              voir le projet
            </button>
            <button
              className="card_btn"
              type="button"
              onClick={redirectToGithub3}
            >
              voir le Github
            </button>
          </div>
          <div className="project">
            <img
              src="assets/images/de.png"
              alt="Jeux de dé"
              className="project_img"
            />
            <h3 className="project_title">Jeux de dé</h3>
            <p className="project_description">Jeux de dé</p>
            <button
              className="card_btn"
              type="button"
              onClick={redirectToProject4}
            >
              voir les détails
            </button>
            <button
              className="card_btn"
              type="button"
              onClick={redirectToGithub4}
            >
              voir le Github
            </button>
          </div>
          <div className="project">
            <img
              src="assets/images/sandrine.png"
              alt="Association Juste un coup de Pate"
              className="project_img"
            />
            <h3 className="project_title">Sandrine Coupart</h3>
            <p className="project_description">
              Site d'une diététicienne Sandrine Coupart
            </p>
            <button
              className="card_btn"
              type="button"
              onClick={redirectToGithub5}
            >
              voir le Github
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
