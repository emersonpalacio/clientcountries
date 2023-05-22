import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer container">
        <h1 className="footerTitle">Emerson palacio</h1>
        <ul className="foooterList">
          <li>
            <a href="#about" className="footerLik">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footerLik">
              Proyects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footerLik">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footerSocial">
          <a
            href="https://www.facebook.com/juan.corrales.391"
            className="footerSocialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://github.com/emersonpalacio"
            className="footerSocialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/emerson-palacio-otalvaro/"
            className="footerSocialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footerCopy">
          &#169;Crypticalcoder. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
