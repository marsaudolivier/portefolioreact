import React from "react";

const Skill = () => {
  return (
    <div className="container_QuiSuisJe">
      <h2>Mes compétences</h2>
      <div className=" skills">
        <h3 className="skill_title">Front-End</h3>
        <div className="skills_logo">
          <img
            src="assets/images/file_type_css_icon_130661.svg"
            alt="CSS"
            className="skill_image"
          />
          <p>CSS</p>
        </div>
        <div className="skills_logo">
          <img
            src="assets/images/file_type_html_icon_130541.svg"
            alt="HTML"
            className="skill_image"
          />
          <p>HTML</p>
        </div>
        <div className="skills_logo">
          <img
            src="assets/images/file_type_js_official_icon_130509.svg"
            alt="Javascript"
            className="skill_image"
          />
          <p>Javascript</p>
        </div>
        <div className="skills_logo">
          <img
            src="assets/images/react-logo-svgrepo-com.svg"
            alt="react"
            className="skill_image"
          />
          <p>react.js</p>
        </div>
      </div>
      <div className="skills">
        <h3 className="skill_title">Back-End</h3>
        <div className="skills_logo">
          <img
            src="assets/images/Node.js_logo.svg"
            alt="Node.js"
            className="skill_image"
          />
          <p>Node.js</p>
        </div>
        <div className="skills_logo">
          <img
            src="assets/images/symfony_original_wordmark_logo_icon_146328.svg"
            alt="symfony"
            className="skill_image"
          />
          <p>Symfony</p>
        </div>
        <div className="skills_logo">
          <img
            src="assets/images/mysql_original_wordmark_logo_icon_146417.svg"
            alt="MySQL"
            className="skill_image"
          />
          <p>My SQL</p>
        </div>
        <div className="skills_logo">
          <img
            src="assets/images/php_plain_logo_icon_146397.svg"
            alt="PHP"
            className="skill_image"
          />
          <p>PHP</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
