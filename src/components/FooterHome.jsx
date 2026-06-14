import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../img/logo.svg";

function Footer() {
    return (
<footer class="footer-site">
    <div class="footer-inner">
      <a class="footer-logo" href="#" aria-label="Ir al inicio">
        <img src= {logo}
        alt="Modern Art Gallery" />
      </a>

      <address>
        The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
        Find us at 99 King Street, Newport, USA.
      </address>

      <nav className="footer-icons" aria-label="Social media">
        <a href="#" aria-label="Github">
          <FaGithub />
        </a>

        <a href="#" aria-label="LinkedIn">
          <FaLinkedin />
        </a>

        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
      </nav>
    </div>
  </footer>
    )
}

export default Footer;