import { Link } from "react-router-dom";
import BasicModal from "./HeroSection/MyModal/MyModal";
import { useEffect, useState } from "react";
import TopDrawer from "./TopDrawer/TopDrawer";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-w-id="aa647e8a-4c93-64ea-ab96-78d7459dbb38"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className={`navbar w-nav${scrolling ? " scrolled" : ""}`}
      >
        <div className="nav-blur"></div>
        <div className="navbar-container">
          <Link
            to="/"
            data-w-id="aa647e8a-4c93-64ea-ab96-78d7459dbb3a"
            // className="brand w-nav-brand"
            className={`brand w-nav-brand${scrolling ? " scrolllogo" : ""}`}
          >
            {scrolling ? (
              <img
                src="assets/img/logo-dark.png"
                loading="lazy"
                alt="Scren-Pla Logo "
                className="logo-image"
              />
            ) : (
              <img
                src="assets/img/logo-light.PNG"
                loading="lazy"
                alt="Scren-Pla Logo "
                className="logo-image white"
              />
            )}
          </Link>
          <div className="buttons-wrapper">
            <nav role="navigation" className="navbar-menu w-nav-menu">
              <Link
                to="/aboutus"
                id="Pricing"
                className={`nav-link w-nav-link${scrolling ? " links" : ""}`}
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                id="Pricing"
                aria-current="page"
                className={`nav-link w-nav-link ${scrolling ? " links" : ""}`}
              >
                Pricing
              </Link>
              <Link
                to="/download"
                id="Download"
                className={`nav-link w-nav-link${scrolling ? " links" : ""}`}
              >
                Download
              </Link>

              <a
                href="https://scren-pla.vercel.app/login"
                id="sign-in-nav-link"
                className={`nav-link w-nav-link${scrolling ? " links" : ""}`}
              >
                Sign In
              </a>
            </nav>
            <BasicModal scrolling={scrolling} position={"navbar"} />

            <a
              id="w-node-_73ebe4f8-966d-82fb-0aca-0eb8e90484fb-459dbb38"
              href="https://scren-pla.vercel.app/login"
              className="button go-to-desk small w-inline-block"
            >
              <div className="button-text nav-text">Go to desk</div>
              <div className="button-overlay-gradient"></div>
            </a>
            {/* <div className="navbar-menu-button w-nav-button">
              <div className="hamburger">
                <div className="line top"></div>
                <div className="line middle"></div>
                <div className="line bottom"></div>
              </div>
            </div> */}
            
            <TopDrawer/>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
