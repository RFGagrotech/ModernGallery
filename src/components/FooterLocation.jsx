import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logob from "../img/img-logob.svg"

function FooterLoc() {
    return(
    <footer className="footer-location">
        <figure>
          <img className="img-location" src={logob} alt="MODERN ART GALLERY"/>
        </figure>
        <p>The Modern Art Gallery is free to all visitors and open seven days a week 
          from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
          <ul className="location-social">
             <a href="#" aria-label="Github">
               <FaGithub />
             </a>

             <a href="#" aria-label="LinkedIn">
               <FaLinkedin />
             </a>

             <a href="#" aria-label="Instagram">
               <FaInstagram />
             </a>
          </ul>
    </footer>
    );
}

export default FooterLoc;