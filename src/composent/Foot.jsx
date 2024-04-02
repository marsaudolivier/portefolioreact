import React from "react";

const Foot = () => {
  return (
    <footer>
      <div className="container2 nav">
        <img src="assets/images/logo.svg" alt="logo" className="logo3" />
        <div className="footer_contact">
          <a href="tel:0658083790">
            Par téléphone au <br /> 06.58.08.37.90
          </a>
          <h4>Du lundi au vendredi de 9h à 18h</h4>
          <a href="mailto:marsaudolivier@gmail.com?subject=Demande de contact depuis le site MODEV&body=Bonjour Olivier, ">
            Par Email : <br />
            marsaudolivier@gmail.com
          </a>
        </div>
        <div className="footer_contact">
          <a href="/mentions">Mentions légales</a>
        </div>
      </div>
      <div></div>
      <p className="footer_copy">
        {" "}
        <img src="assets/images/logo.svg" alt="logo" className="footer_logo" />
        Ce site est la propriété intelectuelle de "E. I Marsaud olivier"
        <br /> SIRET de l'établissement : 92512164200019{" "}
        <img src="assets/images/logo.svg" alt="logo" className="footer_logo" />
      </p>
    </footer>
  );
};

export default Foot;
