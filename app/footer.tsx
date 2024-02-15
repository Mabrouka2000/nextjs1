import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>telecharger notre application </h4>
          <div>
            <ul className="social-icon">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src="https://p7.hiclipart.com/preview/368/574/541/iphone-app-store-google-play-android-download-now-button.jpg"
                      alt="Google Play Store"
                      height="35px"
                      width="35px"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrYLGaUvRRbc5zOWZY2azjYcPGk6MN5js9Q&usqp=CAU"
                      alt="play Store"
                    />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Mentions légales</a>
            </li>
            <li>
              <a href="#">Politique de confidentialité</a>
            </li>
            <li>
              <a href="#">CGV</a>
            </li>
            <li>
              <a href="#">CGU</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Réseaux sociaux</h4>
          <div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    height="35px"
                    width="40px"
                    className="icon facebook-icon"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    height="40px"
                    width="41px"
                    className="icon twitter-icon"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    height="35px"
                    width="35px"
                    // className="icon instagram-icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy;Tous droits réservés - ® 2024 V 3.1 </p>
      </div>
    </footer>
  );
}

export default Footer;
