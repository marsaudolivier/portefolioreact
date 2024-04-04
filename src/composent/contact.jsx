import React from "react";

const contact = () => {
  return (
    <>
      <div className="contact">
        <h2 className="container_QuiSuisJe_title">me contacter</h2>
        <div className="container_QuiSuisJe">
          <img
            src="assets/images/f355db17e39fa75da28608a4b9b5cdc5e5247e69.jpg"
            className="photo1"
            alt="Photo de moi "
          />
          <p className="contact_texte">
            <strong>Adresse :</strong> 34 Rue Aristide caillaud <br />
            79700 Moulins
            <br />
            <br />
            <strong>Téléphone : </strong>{" "}
            <a href="tel:0658083790">Par téléphone au <br /> 06.58.08.37.90</a>
            <br />
            <strong>Email :</strong>{" "}
            <a href="mailto:modev@marsaudolivierdev.fr?subject=Demande de contact depuis le site MODEV&body=Bonjour Olivier, ">
              Contacter moi :  <br /> modev@marsaudolivierdev.fr
            </a>
            <br />
            <strong>Linkedin :</strong>{" "}
            <a href="https://www.linkedin.com/in/olivier-marsaud-aaa978267/">
              Linkedin
            </a>
            <strong>Facebook :</strong>{" "}
            <a href="https://www.facebook.com/MODev49">Facebook</a>
          </p>{" "}
          <img
            src="assets/images/logo.svg"
            className="photo2"
            alt="Photo de moi "
          />
        </div>{" "}
      </div>
    </>
  );
};

export default contact;
