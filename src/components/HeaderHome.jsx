import { Link } from "react-router-dom";
import headerImg from "../img/header-img.jpg";
import headerImg1 from "../img/header-img1.jpg";
import arrow from "../img/arrow.svg";

function HeaderHome(){
  return(
    <header>
    <figure className="header-img">
      <picture>
          {/*Tablet/desktop (≥ 48em)*/} 
    <source
      media="(min-width: 48em)"
      srcSet={headerImg1}
      sizes="67vw" />
          {/* Móvil (< 48em) */}
    <img
      src={headerImg}
      sizes="100vw"
      alt="Visitantes observando un cuadro en la galería" />
  </picture>
    </figure>

    <div className="container">
      <h1 className="header-tittle">MODERN <br/>ART GALLERY</h1>
      <p className="header-subtittle">
        The arts in the collection of the Modern Art Gallery all started from a spark of inspiration.
        Will these pieces inspire you? Visit us and find out.
      </p>
      <Link to="/location" class="btn-header">
        <span>OUR LOCATION</span>
        <span><img src={arrow} alt="#" aria-hidden="true"/></span>
      </Link>
    </div>
  </header>
  );
}

export default HeaderHome;
