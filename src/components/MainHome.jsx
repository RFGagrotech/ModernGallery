import galleryImg1 from "../img/gallery-img1.jpg";
import galleryImg12 from "../img/gallery-img12x.jpg";
import heroImg2 from "../img/img-hero-two.jpg";
import heroImg22 from "../img/img-hero-two2x.jpg";
import heroOne from "../img/img-hero-one.jpg";
import heroOne2 from "../img/img-hero-one2x.jpg";
import imgHero1 from "../img/img-hero1.jpg";
import imgHero12 from "../img/img-hero12x.jpg";

function Main() {
    return(
        <div>
            <section className="container-hero1">
              <h2 className="h2-hero1">YOUR DAY AT THE GALLERY</h2>
              <p className="p-hero1">
                Wander through our distinct collections and find new insights about our artists.
                Dive into the details of their creative process.
              </p>
              <img
                className="hero-img1"
                src={galleryImg1}
                srcSet={`${galleryImg1} 1x, ${galleryImg12} 2x`}
                alt="Sala de exposiciones de la galería" />
            </section>

            <section className="container-hero2">
              <img
                className="hero-img2"
                src={heroImg2}
                srcSet={`${heroImg2} 1x, ${heroImg22} 2x`}
                alt="Vista lateral de la sala" />
              <picture>
                          {/*iPad / tablet (entre 48em y 89.99em)*/}  
              <source
                media="(min-width: 48em) and (max-width: 89.99em)"
                srcSet={`${imgHero1} 1x, ${imgHero12} 2x`}
                 />
                          {/*Mobile + Desktop: imagen original*/} 
              <img
                className="hero-img3"
                src={heroOne}
                srcSet={`${heroOne} 1x, ${heroOne2} 2x`}
                alt="Detalle de una obra" />
              </picture>

              <div className="hero-panel">
                <h2 className="hero-span">COME &amp; BE INSPIRED</h2>
                <p className="p-hero2">
                  We’re excited to welcome you to our gallery and see how our collections influence you.
                </p>
              </div>
            </section>
        </div>
    );
}

export default Main;