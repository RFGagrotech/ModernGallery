import { Link } from "react-router-dom";
import bitmapDesk1x from "../img/Bitmap-desktop.jpg";
import bitmapDesk2x from "../img/Bitmap-desktop@2x.jpg";
import bitmapIpad1x from "../img/Bitmap-ipad.jpg";
import bitmapIpad2x from "../img/Bitmap-ipad@2x.jpg";
import bitmap1x from "../img/Bitmap.jpg";
import bitmap2x from "../img/Bitmap@2x.jpg";
import pointer from "../img/pointer.svg";
import arrow from "../img/arrow-b.svg";

function HeaderLoc() {
    return(
        <header className="location-header">
          <figure>
            <picture>
                    {/*Desktop ≥ 75em (1200px)*/}
              <source
                media="(min-width: 75em)"
                srcSet={`${bitmapDesk1x} 1x,
                  ${bitmapDesk2x} 2x`}
                sizes="100vw" />
                    {/*Tablet ≥ 48em (768px)*/}
              <source
                media="(min-width: 48em)"
                srcSet={`${bitmapIpad1x} 1x,
                  ${bitmapIpad2x} 2x`}
                sizes="100vw" />
                    {/* Móvil (fallback)*/}
              <img
                className="map"
                src={bitmap1x}
                srcSet={`${bitmap1x} 1x, ${bitmap2x} 2x`}
                sizes="100vw"
                alt="Map" loading="eager" />
            </picture>
            <img className="pointer" src={pointer} alt="Location" />
          </figure>
          <Link to="/" className="btn-back" aria-label="Back to home">
            <span className="icon">
                <img className="back-index" src={arrow} alt="" aria-hidden="true" />
            </span>
            <span className="label">BACK TO HOME</span>
          </Link>
        </header>
    );
}

export default HeaderLoc;