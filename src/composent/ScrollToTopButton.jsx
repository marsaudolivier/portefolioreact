import React, { useState, useEffect } from 'react';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher le bouton lorsque la page est scrollée en dessous de 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Fonction pour faire défiler la page vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          Remonter en haut
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
