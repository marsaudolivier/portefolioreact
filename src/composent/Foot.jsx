import React from "react";

const Foot = () => {
  return (
    <footer>
        <div className="container nav">
          <img src="assets/images/logo.svg" alt="logo" className="logo" />
          <div className="footer_contact">
            <p>Téléphone: 06 - 58 - 08 - 37 - 90  </p>
          <p>Mail: marsaudolivier@gmail.com</p>
          </div>  
          <div className="footer_contact">
          <a href="/mentions">Mentions légales</a>
          </div> 
        </div>
<p className="footer_copy"> Ce site est la propriété intelectuelle de Mr Marsaud olivier</p> 
</footer>

  );
}
            


export default Foot;
