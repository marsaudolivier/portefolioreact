import React from "react";

const Foot = () => {
  return (
    <footer>
        <div className="container nav">
          <img src="assets/images/logo.svg" alt="logo" className="logo" />
          <div className="footer_contact">
            <a href="tel:0658083790">Par téléphone au <br /> 06.58.08.37.90</a>
            <br />
            <a href="mailto:marsaudolivier@gmail.com?subject=Demande de contact depuis le site MODEV&body=Bonjour Olivier, ">
           Par Email : <br />marsaudolivier@gmail.com
            </a>
          </div>  
          <div className="footer_contact">
          <a href="/mentions">Mentions légales</a>
          </div> 
        </div>
        <div>
          
        </div>
<p className="footer_copy">   <img src="assets/images/logo.svg" alt="logo" className="footer_logo" />Ce site est la propriété intelectuelle de Mr Marsaud olivier <img src="assets/images/logo.svg" alt="logo" className="footer_logo" /></p> 
</footer>

  );
}
            


export default Foot;
