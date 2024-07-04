import "../../../public/assets/css/scren-pla.css";
import "../../../public/assets/css/about.css";
import Navbar from "../../shared/Navbar";
import Footer from "../Footer/Footer";
import CtaSection from "../CtaSection/CtaSection";
import ScrollToTop from "../../shared/scrollToTop";

const AboutUs = () => {
  ScrollToTop();
  return (
    <div>
      <img
        src="assets/img/herobg.webp"
        loading="lazy"
        sizes="100vw"
        srcSet="
        assets/img/herobg.webp  500w,
      assets/img/herobg.webp 800w,
       assets/img/herobg.webp 1080w,
       assets/img/herobg.webp 1600w,
       assets/img/herobg.webp 2000w,
       assets/img/herobg.webp 2160w
      "
        alt=""
        className="background-image about-us"
      />
      <div id="affiliate-banner" className="affiliate-banner">
        <div className="container affiliate-banner-container">
          <div className="banner-left-side">
            <img
              src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
              loading="lazy"
              alt=""
              id="affiliate-img"
              className="banner-image"
            />
            <div id="affiliate-info" className="bold">
              <strong>Friends of </strong>
              <span id="affiliate-title">
                <strong>Scren-Pla</strong>
              </span>
              <strong> get $</strong>
              <span id="affiliate-off-2">
                <strong>20</strong>
              </span>
              <strong> off on a subscription</strong>
            </div>
          </div>
          <a
            data-w-id="7bbebf11-55ad-05c2-8b60-30593e3ecb51"
            href="#"
            className="button small affiliate-btn w-inline-block"
          >
            <div>Claim Your</div>
            <div className="banner-off-amount">
              $<span id="affiliate-off-1">20</span>
            </div>
            <div>Off Discount</div>
          </a>
        </div>
      </div>
      <Navbar />
      <div className="page-wrapper">
        <div className="hero-section paddin-40">
          <div className="container about">
            <div className="column center">
              <h1>About Us</h1>
              <p className="paragraph-20px about-header">
                {`Scren-Pla's`} mission is to build the easiest way to run a
                {`writers'`} room. We research how creatives collaborate when
                telling stories and create the tools that make this messy
                process as simple as possible: less technical frustrations and
                more creative collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container about margin-bottom">
            <div className="padding-56"></div>
            <p className="paragraph-16-about justify">
              We were frustrated with the existing screenwriting software
              options designed to be a formatting tool and not much else.
              Scren-Pla was founded to show that we can do better. Our mission
              is to help teams organize their ideas and help guide their writing
              process as they develop stories together, with as little friction
              as possible. Formatting is only the starting point; collaboration
              and the exchanging of ideas should be central to this process.
            </p>
            <div className="padding-40"></div>
          </div>
          <div className="container">
            <div className="w-layout-grid grid-team">
              <div
                id="w-node-_5def3cc1-efa6-2406-970d-9c5ecad7799e-cc46563a"
                className="team-block-heading"
              >
                <h2 className="h2-heading-purple about">The Team</h2>
              </div>
              <div
                id="w-node-_67abfe5c-9461-e689-b60d-93c7c07b51a9-cc46563a"
                className="team-block _0"
              >
                <div className="team-card _0">
                  <div className="headshot-block">
                    <img
                      src="assets/img/62766a979c4d28bb9b69a85b_Amanda-min.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 40vw, (max-width: 991px) 30vw, 280px"
                      srcSet={`
        assets/img/62766a979c4d28bb9b69a85b_Amanda-min-p-500.png 500w,
        assets/img/62766a979c4d28bb9b69a85b_Amanda-min.png 800w
      `}
                      alt="Amanda"
                      className="headshot-image"
                    />
                  </div>
                </div>
                <div className="member-info">
                  <div className="member-name">Amanda</div>
                  <p className="info-text-aboot">Customer Support</p>
                  <p className="info-text-aboot show">The Last Kingdom</p>
                </div>
              </div>
              <div
                id="w-node-a6083e61-c8e6-a2c9-be32-ca4118c6d789-cc46563a"
                className="team-block _1"
              >
                <div className="team-card _1">
                  <div className="headshot-block">
                    <img
                      src="assets/img/629d9435175235901d7a9f06_me_512.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 32vw, (max-width: 767px) 24vw, (max-width: 991px) 22vw, 195.99609375px"
                      srcSet={`
        assets/img/629d9435175235901d7a9f06_me_512-p-500.jpeg 500w,
        assets/img/629d9435175235901d7a9f06_me_512.jpeg 512w
      `}
                      alt="Michi"
                      className="headshot-image"
                    />
                  </div>
                </div>
                <div className="member-info">
                  <div className="member-name">Michi</div>
                  <p className="info-text-aboot">Product</p>
                  <p className="info-text-aboot show">The Sopranos</p>
                </div>
              </div>
              <div
                id="w-node-be83dd4d-a8cd-3a61-e8b1-1a8ec0dc7ae5-cc46563a"
                className="team-block _2"
              >
                <div className="team-card _2">
                  <div className="headshot-block">
                    <img
                      src="assets/img/62766f66f2bbb43563591763_Savannah-min.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 35vw, (max-width: 767px) 22vw, (max-width: 991px) 23vw, 223.994140625px"
                      srcSet={`
        assets/img/62766f66f2bbb43563591763_Savannah-min-p-500.png 500w,
        assets/img/62766f66f2bbb43563591763_Savannah-min.png 800w
      `}
                      alt="Savannah"
                      className="headshot-image"
                    />
                  </div>
                </div>
                <div className="member-info">
                  <div className="member-name">Savannah</div>
                  <p className="info-text-aboot">Marketing</p>
                  <p className="info-text-aboot show">The Princess Bride</p>
                </div>
              </div>
              <div
                id="w-node-_56edf758-4a4e-1ca8-5681-dcb8abfe4626-cc46563a"
                className="team-block _3"
              >
                <div className="team-card _3">
                  <div className="headshot-block">
                    <img
                      srcSet={`
     assets/img/62766f66ce3e9e203f2bf30b_Bruno-min.png 500w,
     assets/img/62766f66ce3e9e203f2bf30b_Bruno-min.png  800w
      `}
                      alt="Bruno"
                      className="headshot-image"
                    />
                  </div>
                </div>
                <div className="member-info">
                  <div className="member-name">Bruno</div>
                  <p className="info-text-aboot">Engineering</p>
                  <p className="info-text-aboot show">Game of Thrones</p>
                </div>
              </div>
              <div
                id="w-node-_60b92d4f-d6e7-691c-e99e-5e000d5a7ebe-cc46563a"
                className="team-block _4"
              >
                <div className="team-card _4">
                  <div className="headshot-block">
                    <img
                      srcSet={`
     assets/img/62766f663c3926c3c937ce44_Flo-min.png 500w,
     assets/img/62766f663c3926c3c937ce44_Flo-min.png 800w
      `}
                      sizes="(max-width: 479px) 34vw, (max-width: 991px) 24vw, 220px"
                      alt="Flo"
                      className="headshot-image"
                    />
                  </div>
                </div>
                <div className="member-info">
                  <div className="member-name">Flo</div>
                  <p className="info-text-aboot">Engineering</p>
                  <p className="info-text-aboot show">Breaking Bad</p>
                </div>
              </div>
              <div
                id="w-node-cd2d1dbf-d6bc-9a50-aba4-7dac8a5f69ae-cc46563a"
                className="team-block _5"
              >
                <div className="team-card _5">
                  <div className="headshot-block">
                    <img
                      src="assets/img/62766f66757549d0bf410bb2_Oliver-min.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 40vw, (max-width: 767px) 28vw, (max-width: 991px) 30vw, 280px"
                      srcSet={`
                      assets/img/62766f66757549d0bf410bb2_Oliver-min.png 500w,
                      assets/img/62766f66757549d0bf410bb2_Oliver-min.png 800w
      `}
                      alt="Oliver"
                      className="headshot-image"
                    />
                  </div>
                </div>
                <div className="member-info">
                  <div className="member-name">Oliver</div>
                  <p className="info-text-aboot">Design</p>
                  <p className="info-text-aboot show">Inherent Vice</p>
                </div>
              </div>
              <div
                id="w-node-e46495b4-4840-87b0-2e1e-3620353f027c-cc46563a"
                className="team-block _6"
              >
                <div className="team-card _6">
                  <div className="headshot-block">
                    <img
                      src="assets/img/62766f66a98ae74c776b8f03_Alessio-min.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 34vw, (max-width: 767px) 19vw, (max-width: 991px) 20vw, 195.99609375px"
                      srcSet={`
                      assets/img/62766f66a98ae74c776b8f03_Alessio-min.png 500w,
        assets/img/62766f66a98ae74c776b8f03_Alessio-min.png 800w
      `}
                      alt="Alessio"
                      className="headshot-image"
                    />
                  </div>
                </div>
                <div className="member-info">
                  <div className="member-name">Alessio</div>
                  <p className="info-text-aboot">Web Design</p>
                  <p className="info-text-aboot show">Better Call Saul</p>
                </div>
              </div>
              <div className="team-block _7">
                <div className="team-card _7">
                  <div className="headshot-block">
                    <img
                      src="assets/img/63ad5dfc910c709802b22407_Harry-min.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 40vw, (max-width: 767px) 22vw, (max-width: 991px) 23vw, 223.994140625px"
                      srcSet={`
                      assets/img/63ad5dfc910c709802b22407_Harry-min.png 500w,
                      assets/img/63ad5dfc910c709802b22407_Harry-min.png 556w
      `}
                      alt="Harry"
                      className="headshot-image"
                    />
                  </div>
                </div>
                <div className="member-info">
                  <div className="member-name">Harry</div>
                  <p className="info-text-aboot">Screenwriting Resources</p>
                  <p className="info-text-aboot show">For All Man Kind</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container about">
            <p className="paragraph-16-about justify">
              Scren-Pla first launched in late 2018 as a prototype, with a
              handful of early adopters who used it and gave feedback as we
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              developed it further. Since then, we've evolved to serve thousands
              of screenwriters every day and are growing quickly. We are used by
              beginners and professionals alike, such as the team behind the
              Netflix show <em>Arcane</em> and David Wain, Writer/Director of{" "}
              <em>Wet Hot American Summer</em> and <em>Role Models</em>.
            </p>
            <div className="flex-about-cta">
              <div className="top-about">
                <h3 className="h4-style about">Want to help?</h3>
              </div>
              <div className="left-about">
                <p className="paragraph-about">
                  Have questions, feedback, or ideas on how we might make
                  screenwriting more joyful?
                </p>
                <a
                  id="button"
                  href="mailto:hello@scren-pla.com"
                  className="button gradient w-inline-block"
                >
                  <div className="button-text">Reach Out</div>
                  <div className="button-gradient"></div>
                </a>
              </div>
              <div className="right-about">
                <p className="paragraph-about">Want to work with us?</p>
                <a
                  id="button"
                  href="mailto:jobs@scren-pla.com"
                  className="button gradient w-inline-block"
                >
                  <div className="button-text">Let us know</div>
                  <div className="button-gradient"></div>
                </a>
              </div>
            </div>
            <div className="address-block">
              <h2 className="h2-style black margin-24 about">
                Scren-Pla Labs, Inc.
              </h2>
              <p className="paragraph-16-about light-grey">
                2810 N Church St PMB 65228
                <br />
                19802 Wilmington, Delaware
              </p>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
