import "../../../public/assets/css/download.css";
import Footer from "../Footer/Footer";
import Navbar from "../../shared/Navbar";
import ScrollToTop from "../../shared/scrollToTop";
import BasicModal from "../../shared/HeroSection/MyModal/MyModal";

const Download = () => {
  ScrollToTop();
  return (
    <>
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

      <img
        src="assets/img/637cfdbb6bd281edaa579827_hero bg.webp"
        loading="lazy"
        sizes="100vw"
        srcSet="
          637cfdbb6bd281edaa579827_hero bg.webp   500w,
          637cfdbb6bd281edaa579827_hero bg.webp   800w,
          637cfdbb6bd281edaa579827_hero bg.webp 1080w,
          637cfdbb6bd281edaa579827_hero bg.webp 1600w,
          637cfdbb6bd281edaa579827_hero bg.webp 2000w,
          637cfdbb6bd281edaa579827_hero bg.webp        2160w
        "
        alt=""
        className="background-image download"
      />

      <div className="hero-section download padding-bottom-30">
        <div className="container grid dn">
          <div
            id="w-node-_5e772b03-bbe7-6f8a-d1a5-88511d37a014-48465679"
            className="column center"
          >
            <h1 className="h3-style margin-40">
              Scren-Pla for Mac &amp; Windows
            </h1>
          </div>
          <div
            id="w-node-_0a1b5a05-0c9a-4d5a-6ead-4e34bf2f5c6a-48465679"
            className="download-card"
          >
            <div className="big-paragraf margin-28">Desktop App</div>
            <a href="" className="windows w-inline-block">
              <img
                src="assets/img/610c5007d3b7ee7abc3e08ea_Windows.svg"
                loading="lazy"
                alt="Microsoft Icon"
                className="app-icon"
              />
              <div className="download-link">Download for Windows</div>
            </a>
            <a
              href="https://scren-pla.vercel.app/download/mac"
              className="apple w-inline-block"
            >
              <img
                src="assets/img/610c5007d3b7ee55903e08e8_Apple (1).svg"
                loading="lazy"
                alt="Apple Icon"
                className="app-icon"
              />
              <div className="download-link">Download for Mac</div>
            </a>
          </div>
          <div
            id="w-node-_913a166e-2b39-75e9-803a-3d791c0fa3b7-48465679"
            className="download-card smaller"
          >
            <div className="big-paragraf margin-28">Mobile App</div>
            <div className="link-grid">
              <a
                id="w-node-cde50be5-7d95-8c64-06b5-17dc97c04cc0-48465679"
                href="#"
                className="mobile-app w-inline-block"
              >
                <img
                  src="assets/img/610c5007d3b7ee9c203e08f9_qr-code.png"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="
                  assets/img/610c5007d3b7ee9c203e08f9_qr-code.png  500w,
                  assets/img/610c5007d3b7ee9c203e08f9_qr-code.png   1125w
                "
                  alt="QR Code"
                  className="qr"
                />
              </a>
              <a
                id="w-node-_5d9cec1a-d4b1-c007-88c9-0dbfea66794d-48465679"
                href="https://apps.apple.com/us/app/arc-studio/id1502887007"
                className="link-block w-inline-block"
              >
                <img
                  src="assets/img/610c5007d3b7eedb813e08fa_App Store.svg"
                  loading="lazy"
                  alt="App Store Icon"
                  className="image-2"
                />
              </a>
            </div>
          </div>
          <div
            id="w-node-_5375c8f0-8623-1098-bab7-a9ef489043ba-48465679"
            className="column center"
          >
            <a
              href="https://scren-pla.vercel.app/signup"
              className="link w-inline-block"
            >
              <div className="main-color-text weight-600">
                Or use the app directly from your browser
              </div>
            </a>
          </div>
        </div>
        <div className="container download">
          <h1 className="h3-style margin-40">
            Scren-Pla for macOS, Windows, and iOS
          </h1>
          <div className="grid-download">
            <div className="card-download">
              <div className="top-download">
                <div className="card-title-block">
                  <img
                    src="assets/img/62e9394164ef9542cbe5dce8_Vector-1.svg"
                    loading="lazy"
                    alt="microsoft icon"
                    className="download-icon"
                  />
                  <div className="download-card-title">Windows</div>
                </div>
                <p className="paragraph-16px download">
                  Windows desktop application, for Windows 10 and Windows 11.
                  <br />‍
                </p>
              </div>
              <div className="bottom-download">
                <a
                  href="https://scren-pla.vercel.app/download/win"
                  className="button-download w-button"
                >
                  Download for Windows
                </a>
              </div>
            </div>
            <div className="card-download">
              <div className="top-download">
                <div className="card-title-block">
                  <img
                    src="assets/img/62e93941b2c14f466ef28f9c_Vector-2.svg"
                    loading="lazy"
                    alt="apple icon"
                    className="download-icon"
                  />
                  <div className="download-card-title">Mac OS</div>
                </div>
                <p className="paragraph-16px download">
                  Optimized for both Intel and Apple Silicon processors.
                  Don&#x27;t know which you have?
                  <a href="#">Click here to find out.</a>
                </p>
              </div>
              <div className="bottom-download">
                <a
                  href="https://scren-pla.vercel.app/download/mac"
                  className="button-download w-button"
                >
                  Download for Intel Mac
                </a>
                <a
                  href="https://scren-pla.vercel.app/download/mac-arm64"
                  className="button-download w-button"
                >
                  Apple Silicon
                </a>
              </div>
            </div>
            <div
              id="w-node-_2ccbbd43-40b5-4118-4c39-6298d9670f75-48465679"
              className="card-download"
            >
              <div className="top-download">
                <div className="card-title-block">
                  <img
                    src="assets/img/62e93941b2c14f466ef28f9c_Vector-2.svg"
                    loading="lazy"
                    alt="apple icon"
                    className="download-icon"
                  />
                  <div className="download-card-title">iOS App Store</div>
                </div>
                <p className="paragraph-16px download">
                  Optimized for iPad and iPhone.
                </p>
              </div>
              <div className="bottom-download">
                <div className="center-block">
                  <a
                    href="https://apps.apple.com/us/app/arc-studio-screenwriting/id1502887007"
                    className="app-store-link w-inline-block"
                  >
                    <img
                      src="assets/img/610c5007d3b7ee9c203e08f9_qr-code.png"
                      loading="lazy"
                      sizes="75.99609375px"
                      srcSet="
                      assets/img/610c5007d3b7ee9c203e08f9_qr-code.png  500w,
                      assets/img/610c5007d3b7ee9c203e08f9_qr-code.png      1125w
                    "
                      alt="QR Code"
                      className="qr-code"
                    />
                    <img
                      src="assets/img/610c5007d3b7eedb813e08fa_App Store.svg"
                      loading="lazy"
                      alt="App Store Icon"
                      className="image-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-color-text weight-600">
            <a
              href="https://scren-pla.vercel.app/login"
              className="link-download"
            >
              Or use the app directly from your browser
            </a>
          </div>
        </div>
      </div>

      <div className="section cta-section no-padding-bottom">
        <div className="container grid gradient _1100">
          <div
            className="column centre-text-on-mobile margin-20 width-85"
            id="w-node-_86550a8b-b594-185a-a684-26dde2f59e00-48465679"
          >
            <h2 className="white center margin-28">
              <strong>Ready to get started?</strong>
            </h2>
            <BasicModal position="download" />
            <a
              href="https://scren-pla.vercel.app/login"
              className="button go-to-desk margin-24 large w-inline-block"
            >
              <div className="button-text">Go to Desk</div>
              <div className="button-gradient"></div>
            </a>
            <div className="small-text">No credit card required</div>
          </div>
          <div
            className="column horizontal"
            id="w-node-_86550a8b-b594-185a-a684-26dde2f59e0e-48465679"
          >
            <div className="question-line"></div>
            <div className="contact-info-download-page">
              <div className="paragraph-20px margin-16">Questions?</div>
              <div className="paragraph-20px">
                <span className="transparent">
                  Reach us at
                  <br />‍
                </span>
                <a href="mailto:team@scren-pla.com" className="link-2">
                  team@scren-pla.com
                </a>
                <br />
                <span className="transparent">
                  we&#x27;d love to hear from you!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Download;
