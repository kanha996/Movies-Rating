import React from "react";
import "../footer/footer.css";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-txt">
          Made with 🤍 by Kanhaiya
          <div className="socials">
            <a href="https://www.linkedin.com/in/kanha996/" target="_blank" rel="noreferrer">
              <img className="github-icon" src="https://img.icons8.com/doodle/48/000000/linkedin-circled.png" alt="linkedin"/>
            </a>
            <a href="https://www.github.com/kanha996/" target="_blank" rel="noreferrer">
            <img className="github-icon" src="https://img.icons8.com/plasticine/100/000000/github.png" alt="github"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
