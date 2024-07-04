/* eslint-disable react/no-unescaped-entities */

import "../../../public/assets/css/scren-pla.css";
import "../../../public/assets/css/pricing.css";
import Footer from "../Footer/Footer";

import Navbar from "../../shared/Navbar";
import { useState } from "react";
import CtaSection from "../CtaSection/CtaSection";
import BasicModal from "../../shared/HeroSection/MyModal/MyModal";
import ScrollToTop from "../../shared/scrollToTop";

const Pricing = () => {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [three, setthree] = useState(false);
  const [four, setfour] = useState(false);
  const [five, setfive] = useState(false);
  ScrollToTop();
  return (
    <div>
      <img
        src="assets/img/herobg.webp"
        loading="lazy"
        sizes="100vw"
        srcSet="
        assets/img/herobg.webp  500w,
        assets/img/herobg.webp  800w,
        assets/img/herobg.webp 1080w,
        assets/img/herobg.webp 1600w,
        assets/img/herobg.webp 2000w,
        assets/img/herobg.webp 2160w
      "
        alt=""
        className="background-image"
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
      <div className="hero-section padding-30">
        <div className="container grid" style={{}}>
          <h1
            className="h3-style text-center"
            id="w-node-_4680ed38-9cea-47f7-97b5-21efe41a9290-614656a5"
          >
            Professional Screenwriting Redefined
          </h1>
          <div
            className="column center-responsive"
            id="w-node-e97dbc15-9909-258c-f0b5-b4f113e2bb39-614656a5"
          >
            <p className="white margin-25">
              Our <strong>Free plan</strong> gets you started. Our Pro plan
              takes you further. Free 7-day trial of the Pro plan included.
            </p>
            <BasicModal position={"pricing"} />
            <a
              href="https://scren-pla.vercel.app/login"
              className="button go-to-desk margin-24 large w-inline-block"
            >
              <div className="button-text">Go to Desk</div>
              <div className="button-gradient"></div>
            </a>
          </div>
          <div
            className="column"
            id="w-node-_161eaf2d-0641-ce4f-311c-77ce8e458130-614656a5"
          >
            <div className="testimonial-wrapper center pricing">
              <div className="testimonial-image-wrapper pricing">
                <img
                  src="assets/img/6273c5af9f527083ecfd5962_david_wain_head 1-min (1).jpg"
                  loading="lazy"
                  alt="David Wain"
                  className="testimonial-icon pricing"
                />
              </div>
              <div className="column left">
                <p className="big-paragraf white pricing">
                  For decades, I've been relentlessly searching for a seamless,
                  reliable solution for collaborative screenwriting, and
                  everything has come up way short — until ScrenPla. Finally! An
                  easy to use, rock-solid, one-stop-shop to structure, write,
                  re-write, and note scripts with partners. The developers "get
                  it" and are constantly evolving and improving in response to
                  real users in the field. ScrenPla has saved me so much time
                  and hassle, freeing me up to be creative!
                </p>
                <div className="flex-horizontal pricing">
                  <div className="testimonial-small-text pricing">
                    David Wain
                  </div>
                  <div className="testimonial-small-text last pricing">
                    Writer/Director Role Models and Wet Hot American Summer,
                    certified Mac power user
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="TopScroll" className="section pricing dn">
        <div className="tabel">
          <div className="container grid pricing-container">
            <div
              id="Free"
              data-w-id="26f26e12-3f90-5e1c-560d-53e816111b46"
              className="column center currsor relative w-node-_26f26e12-3f90-5e1c-560d-53e816111b46-614656a5"
            >
              <h2 className="pricing-heading">Free</h2>
              <p className="pricing-category-text hide-on-mobile">
                Industry standard formatting meets thoughtful design
              </p>
              <div className="bottom-block">
                <div className="price hide-on-mobile">$0</div>
              </div>
              <div className="tab-line free"></div>
            </div>
            <div
              id="Pro"
              data-w-id="0e93917b-faea-c03e-60ee-7561ccd3a4af"
              className="column center currsor relative pro w-node-_0e93917b-faea-c03e-60ee-7561ccd3a4af-614656a5"
            >
              <h2 className="pricing-heading no-margin">Pro</h2>
              <p className="pricing-category-text hide-on-mobile">
                Takes your screenwriting to the next level with professional
                features
              </p>
              <div className="price purple-dark hide-on-mobile">
                <span className="first-year-text">first year</span> $99
              </div>
              <div className="bottom-block">
                <div className="price-alt-yr purple-dark hide-on-mobile">
                  $99<span className="per-year">/year</span>
                  <span className="text-span">{`//year`}</span>
                </div>
              </div>
              <div className="tab-line pro"></div>
            </div>
            <div
              id="w-node-_4aa20f88-9dcc-49f9-1862-e86779278e71-614656a5"
              className="divider-line hide-on-mobile"
            ></div>
          </div>
          <div className="container grid pricing-features pro">
            <div
              id="w-node-a0e2f34c-1796-421a-a38f-b081922c4f1f-614656a5"
              className="vertical-grid hide-on-mobile"
            >
              <div className="pricing-features-text">Beautiful interface</div>
              <div id="stable-secure" className="pricing-features-text tooltip">
                Stable &amp; secure cloud sync
              </div>
              <div
                id="automatic-backups"
                className="pricing-features-text tooltip"
              >
                Automatic Backups
              </div>
              <div
                id="upgrades-included"
                className="pricing-features-text tooltip"
              >
                Upgrades included
              </div>
              <div className="pricing-features-text">Comments</div>
              <div className="pricing-features-text">
                Fountain &amp; Final Draft export
              </div>
              <div className="pricing-features-text">Browser app</div>
              <div className="pricing-features-text">Desktop app</div>
              <div className="pricing-features-text">iPhone &amp; iPad app</div>
              <div
                id="inviting-collaborators"
                className="pricing-features-text tooltip"
              >
                Inviting collaborators
              </div>
              <div
                id="custom-formats"
                className="pricing-features-text tooltip"
              >
                Custom Formats
              </div>
              <div
                id="outlining-tools"
                className="pricing-features-text tooltip"
              >
                Outlining tools
              </div>
              <div id="history" className="pricing-features-text tooltip">
                History
              </div>
              <div
                id="revision-management"
                className="pricing-features-text tooltip"
              >
                Revision Management
              </div>
              <div
                id="feedback-links"
                className="pricing-features-text tooltip"
              >
                Feedback links
              </div>
              <div id="pdf-export" className="pricing-features-text tooltip">
                PDF export
              </div>
              <div id="scripts" className="pricing-features-text tooltip last">
                Scripts
              </div>
            </div>
            <div
              id="w-node-bd7781a0-6ff9-5ef6-4d43-f850eaf21c85-614656a5"
              className="free-column"
            >
              <div className="mobile-pricing">
                <div className="price">$0</div>
                <p className="pricing-category-text">
                  Industry standard formatting meets thoughtful design
                </p>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free">
                  Beautiful interface
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column">
                <div
                  id="stable-secure-mobile"
                  className="pricing-features-text free tooltip"
                >
                  Stable &amp; secure cloud sync
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column">
                <div
                  id="automatic-backups-mobile"
                  className="pricing-features-text free tooltip"
                >
                  Automatic Backups
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column">
                <div
                  id="upgrades-included-mobile"
                  className="pricing-features-text free tooltip"
                >
                  Upgrades included
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free">Comments</div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free">
                  Fountain &amp; Final Draft export
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free">Browser app</div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free gray">
                  Desktop app
                </div>
                <div className="pricing-pro">PRO</div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free gray">
                  iPhone &amp; iPad app
                </div>
                <div className="pricing-pro">PRO</div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free gray">
                  Inviting collaborators
                </div>
                <div className="pricing-pro">PRO</div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free gray">
                  Custom Formats
                </div>
                <div className="pricing-pro">PRO</div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free gray">
                  Outlining tools
                </div>
                <div className="pricing-pro">PRO</div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free gray">History</div>
                <div className="pricing-pro">PRO</div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free gray">
                  Revision Management
                </div>
                <div className="pricing-pro">PRO</div>
              </div>
              <div className="mobile-free-column">
                <div className="pricing-features-text free gray">
                  Feedback links
                </div>
                <div className="pricing-pro">PRO</div>
              </div>
              <div className="mobile-free-column">
                <div
                  id="pdf-export-mobile"
                  className="pricing-features-text free tooltip"
                >
                  PDF export
                </div>
                <div className="pricing-features-text free visible">
                  Watermarked
                </div>
              </div>
              <div className="mobile-free-column last">
                <div
                  id="scripts-mobile"
                  className="pricing-features-text free tooltip last"
                >
                  Scripts
                </div>
                <div className="pricing-features-text free visible last">2</div>
              </div>
            </div>
            <div
              id="w-node-_11fd70bb-10ae-f450-2c31-2e447df97cb2-614656a5"
              className="pro-column hide-on-mobile"
            >
              <div className="mobile-pricing">
                <div className="price purple-dark">first year $99</div>
                <div className="pricing-category-text margin-16">
                  next years $79
                </div>
                <p className="pricing-category-text">
                  Takes your screenwriting to the next level with professional
                  features
                </p>
              </div>
              <div className="mobile-free-column pro">
                <div className="pricing-features-text pro">
                  Beautiful interface
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div
                  id="stable-secure-pro"
                  className="pricing-features-text pro tooltips"
                >
                  Stable &amp; secure cloud sync
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div
                  id="automatic-backups-pro"
                  className="pricing-features-text pro tooltips"
                >
                  Automatic Backups
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div
                  id="upgrades-included-pro"
                  className="pricing-features-text pro tooltips"
                >
                  Upgrades included
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div className="pricing-features-text pro">Comments</div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div className="pricing-features-text pro">
                  Fountain &amp; Final Draft export
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div className="pricing-features-text pro">Browser app</div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div className="pricing-features-text pro">Desktop app</div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div className="pricing-features-text pro">
                  iPhone &amp; iPad app
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div
                  id="inviting-collaborators-pro"
                  className="pricing-features-text pro tooltips"
                >
                  Inviting collaborators
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div
                  id="custom-formats-pro"
                  className="pricing-features-text pro tooltips"
                >
                  Custom Formats
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div
                  id="outlining-tools-pro"
                  className="pricing-features-text pro tooltips"
                >
                  Outlining tools
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div
                  id="history-pro"
                  className="pricing-features-text pro tooltips"
                >
                  History
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div
                  id="revision-pro"
                  className="pricing-features-text pro tooltips"
                >
                  Revision Management
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div
                  id="feedback-links-pro"
                  className="pricing-features-text pro tooltips"
                >
                  Feedback links
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro">
                <div
                  id="pdf-export-pro"
                  className="pricing-features-text pro tooltips"
                >
                  PDF export
                </div>
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="mobile-free-column pro last">
                <div
                  id="scripts-pro"
                  className="pricing-features-text pro tooltips"
                >
                  Scripts
                </div>
                <div className="pricing-features-text pro unlimited">
                  Unlimited
                </div>
              </div>
            </div>
            <div
              id="w-node-c53ba3fe-e82b-d690-3ece-681af3153df9-614656a5"
              className="divider-line v2"
            ></div>
          </div>
        </div>
      </div>
      <div id="TopScroll" className="section pricing">
        <div className="container vertical less-padding">
          <div className="w-layout-grid grid-prices desktop-only">
            <a
              id="w-node-_7d23da4e-6133-7191-2874-15ca3636f084-614656a5"
              data-w-id="7d23da4e-6133-7191-2874-15ca3636f084"
              href="#"
              className="student-cta-bar w-inline-block"
            >
              <div className="student-cta-1">
                <img
                  src="assets/img/62ee51e7955328b3184e3fc3_student icon.svg"
                  loading="lazy"
                  alt="student icon"
                  className="student-icon"
                />
                <div className="student-cta-text">for Students</div>
              </div>
              <div className="student-cta-2">
                <p className="paragraph-16px student-cta">
                  FREE back to school licenses – <br />
                  sign up with an .edu address before 09/30
                </p>
              </div>
              <div className="student-cta-3">
                <div className="student-link">Claim your edu discount</div>
              </div>
            </a>
            <div
              id="w-node-_87298826-eb57-a146-e3b4-113f61a47cca-614656a5"
              className="prices-block-top descktop"
            ></div>
            <div
              id="w-node-_5986167f-8fe8-06a6-156e-7dfb38b3dd94-614656a5"
              className="prices-block-top"
            >
              <h2 className="pricing-heading">Free</h2>
              <p className="pricing-category-text-new">
                Industry standard formatting meets thoughtful design
              </p>
              <div className="price">$0</div>
            </div>
            <div
              id="w-node-_1886d251-99a5-97dc-4790-c7696cb9165d-614656a5"
              className="prices-block-top"
            >
              <h2 className="pricing-heading">Essentials</h2>
              <p className="pricing-category-text-new">
                Advanced formatting, apps, unlimited scripts
              </p>
              <div className="price-alt-yr purple-dark hide-on-mobile">
                $69<span className="per-year">/year</span>
                <span className="text-span">{`//year`}</span>
              </div>
            </div>
            <div
              id="w-node-_8fc3f640-2fb7-9f17-dfe4-1f105fc75ce9-614656a5"
              className="prices-block-top"
            >
              <h2 className="pricing-heading">Pro</h2>
              <p className="pricing-category-text-new">
                Takes your screenwriting to the next level with professional
                features
              </p>
              <div className="price-alt-yr purple-dark hide-on-mobile">
                $99<span className="per-year">/year</span>
                <span className="text-span">{`//year`}</span>
              </div>
            </div>
            <div
              id="w-node-_9dcd754f-0107-f127-5edb-b231f94f3700-614656a5"
              className="prices-block"
            >
              <div className="item">
                <div className="pricing-features-text-new">
                  Beautiful interface
                </div>
                <div
                  id="stable-secure"
                  className="pricing-features-text-new tooltip"
                >
                  Stable &amp; secure cloud sync
                </div>
                <div
                  id="automatic-backups"
                  className="pricing-features-text-new tooltip"
                >
                  Automatic Backups
                </div>
                <div
                  id="upgrades-included"
                  className="pricing-features-text-new tooltip"
                >
                  Upgrades included
                </div>
                <div className="pricing-features-text-new">Comments</div>
                <div className="pricing-features-text-new">
                  Fountain &amp; Final Draft export
                </div>
                <div
                  id="pdf-export"
                  className="pricing-features-text-new tooltip"
                >
                  PDF export
                </div>
                <div id="scripts" className="pricing-features-text-new tooltip">
                  Scripts
                </div>
                <div className="pricing-features-text-new">Browser app</div>
                <div className="pricing-features-text-new">Desktop app</div>
                <div className="pricing-features-text-new">
                  iPhone &amp; iPad app
                </div>
                <div
                  id="inviting-collaborators"
                  className="pricing-features-text-new tooltip"
                >
                  Inviting collaborators
                </div>
                <div
                  id="custom-formats"
                  className="pricing-features-text-new tooltip"
                >
                  Custom Formats
                </div>
                <div
                  id="outlining-tools"
                  className="pricing-features-text-new tooltip"
                >
                  Outlining tools
                </div>
                <div
                  id="season-outlines"
                  className="pricing-features-text-new tooltip"
                >
                  Season outlines
                </div>
                <div id="history" className="pricing-features-text-new tooltip">
                  History
                </div>
                <div
                  id="revision-management"
                  className="pricing-features-text-new tooltip"
                >
                  Revision Management
                </div>
                <div
                  id="feedback-links"
                  className="pricing-features-text-new tooltip"
                >
                  Feedback links
                </div>
                <div
                  id="the-stash"
                  className="pricing-features-text-new tooltip"
                >
                  The Stash
                </div>
              </div>
            </div>
            <div
              id="w-node-de43ed82-63f9-d681-7729-ab4db7261327-614656a5"
              className="prices-block mobile-only"
            >
              <div className="item">
                <div className="pricing-features-text-new">
                  Beautiful interface
                </div>
                <div
                  id="stable-secure"
                  className="pricing-features-text-new tooltip"
                >
                  Stable &amp; secure cloud sync
                </div>
                <div
                  id="automatic-backups"
                  className="pricing-features-text-new tooltip"
                >
                  Automatic Backups
                </div>
                <div
                  id="upgrades-included"
                  className="pricing-features-text-new tooltip"
                >
                  Upgrades included
                </div>
                <div className="pricing-features-text-new">Comments</div>
                <div className="pricing-features-text-new">
                  Fountain &amp; Final Draft export
                </div>
                <div
                  id="pdf-export"
                  className="pricing-features-text-new tooltip"
                >
                  PDF export
                </div>
                <div id="scripts" className="pricing-features-text-new tooltip">
                  Scripts
                </div>
                <div className="pricing-features-text-new">Browser app</div>
                <div className="pricing-features-text-new">Desktop app</div>
                <div className="pricing-features-text-new">
                  iPhone &amp; iPad app
                </div>
                <div
                  id="inviting-collaborators"
                  className="pricing-features-text-new tooltip"
                >
                  Inviting collaborators
                </div>
                <div
                  id="custom-formats"
                  className="pricing-features-text-new tooltip"
                >
                  Custom Formats
                </div>
                <div
                  id="outlining-tools"
                  className="pricing-features-text-new tooltip"
                >
                  Outlining tools
                </div>
                <div
                  id="season-outlines"
                  className="pricing-features-text-new tooltip"
                >
                  Season outlines
                </div>
                <div id="history" className="pricing-features-text-new tooltip">
                  History
                </div>
                <div
                  id="revision-management"
                  className="pricing-features-text-new tooltip"
                >
                  Revision Management
                </div>
                <div
                  id="feedback-links"
                  className="pricing-features-text-new tooltip"
                >
                  Feedback links
                </div>
                <div
                  id="the-stash"
                  className="pricing-features-text-new tooltip"
                >
                  The Stash
                </div>
              </div>
            </div>
            <div
              id="w-node-_197340b8-38c3-2b14-1326-284c0a92ca83-614656a5"
              className="prices-block mobile-only"
            >
              <div className="item">
                <div className="pricing-features-text-new">
                  Beautiful interface
                </div>
                <div
                  id="stable-secure"
                  className="pricing-features-text-new tooltip"
                >
                  Stable &amp; secure cloud sync
                </div>
                <div
                  id="automatic-backups"
                  className="pricing-features-text-new tooltip"
                >
                  Automatic Backups
                </div>
                <div
                  id="upgrades-included"
                  className="pricing-features-text-new tooltip"
                >
                  Upgrades included
                </div>
                <div className="pricing-features-text-new">Comments</div>
                <div className="pricing-features-text-new">
                  Fountain &amp; Final Draft export
                </div>
                <div
                  id="pdf-export"
                  className="pricing-features-text-new tooltip"
                >
                  PDF export
                </div>
                <div id="scripts" className="pricing-features-text-new tooltip">
                  Scripts
                </div>
                <div className="pricing-features-text-new">Browser app</div>
                <div className="pricing-features-text-new">Desktop app</div>
                <div className="pricing-features-text-new">
                  iPhone &amp; iPad app
                </div>
                <div
                  id="inviting-collaborators"
                  className="pricing-features-text-new tooltip"
                >
                  Inviting collaborators
                </div>
                <div
                  id="custom-formats"
                  className="pricing-features-text-new tooltip"
                >
                  Custom Formats
                </div>
                <div
                  id="outlining-tools"
                  className="pricing-features-text-new tooltip"
                >
                  Outlining tools
                </div>
                <div
                  id="season-outlines"
                  className="pricing-features-text-new tooltip"
                >
                  Season outlines
                </div>
                <div id="history" className="pricing-features-text-new tooltip">
                  History
                </div>
                <div
                  id="revision-management"
                  className="pricing-features-text-new tooltip"
                >
                  Revision Management
                </div>
                <div
                  id="feedback-links"
                  className="pricing-features-text-new tooltip"
                >
                  Feedback links
                </div>
                <div
                  id="the-stash"
                  className="pricing-features-text-new tooltip"
                >
                  The Stash
                </div>
              </div>
            </div>
            <div className="prices-block">
              <div className="item"></div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="pricing-features-text free visible watermarked">
                  Watermarked
                </div>
              </div>
              <div className="checkbox-price">
                <div className="pricing-features-text free visible last pricing-text-center">
                  2
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
            </div>
            <div className="prices-block">
              <div className="item"></div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="pricing-features-text pro unlimited">
                  Unlimited
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
              <div className="checkbox-price"></div>
            </div>
            <div className="prices-block">
              <div className="item"></div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="pricing-features-text pro unlimited">
                  Unlimited
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="pricing-features-text pro limited2collab">
                  with 2 <br />
                  collaborators
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
              <div className="checkbox-price">
                <div className="check-mark">
                  <img
                    src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                    loading="lazy"
                    alt="Check-mark "
                    className="checkmark-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid-prices mobile-only">
            <a
              data-w-id="cbf23bb8-0ec0-61bd-45b3-0ebe80f56355"
              href="#"
              className="student-cta-bar w-inline-block"
            >
              <div
                id="w-node-cbf23bb8-0ec0-61bd-45b3-0ebe80f56356-614656a5"
                className="student-cta-1"
              >
                <img
                  src="assets/img/62ee51e7955328b3184e3fc3_student icon.svg"
                  loading="lazy"
                  alt="student icon"
                  className="student-icon"
                />
                <div className="student-cta-text">for Students</div>
              </div>
              <div className="student-cta-2">
                <p className="paragraph-16px student-cta">
                  FREE back to school licenses for students – sign up with an
                  .edu address before 09/30
                </p>
              </div>
              <div className="student-cta-3">
                <div className="student-link">Claim your edu discount</div>
              </div>
            </a>
            <div
              data-current="Tab 3"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="tabs w-tabs"
            >
              <div className="tabs-menu w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  className="prices-tab w-inline-block w-tab-link"
                >
                  <h2 className="pricing-heading">Free</h2>
                  <div className="price-alt-yr purple-dark">
                    $0<span className="per-year"></span>
                    <span className="text-span">/year</span>
                  </div>
                </a>
                <a
                  data-w-tab="Tab 2"
                  className="prices-tab w-inline-block w-tab-link"
                >
                  <h2 className="pricing-heading">Essentials</h2>
                  <div className="price-alt-yr purple-dark">
                    $69<span className="per-year">/year</span>
                    <span className="text-span">/year</span>
                  </div>
                </a>
                <a
                  data-w-tab="Tab 3"
                  className="prices-tab w-inline-block w-tab-link w--current"
                >
                  <h2 className="pricing-heading">Pro</h2>
                  <div className="price-alt-yr purple-dark">
                    $99<span className="per-year">/year</span>
                    <span className="text-span">/year</span>
                  </div>
                </a>
              </div>
              <div className="w-tab-content">
                <div data-w-tab="Tab 1" className="tab-prices w-tab-pane">
                  <div className="prices-block margin">
                    <div className="price price-alt-yr">$0</div>
                    <p className="pricing-category-text-new">
                      Industry standard formatting meets thoughtful design
                    </p>
                  </div>
                  <div className="flex-tab-prices">
                    <div className="prices-block mobile-only">
                      <div className="item">
                        <div className="pricing-features-text-new">
                          Beautiful interface
                        </div>
                        <div
                          id="stable-secure"
                          className="pricing-features-text-new tooltip"
                        >
                          Stable &amp; secure cloud sync
                        </div>
                        <div
                          id="automatic-backups"
                          className="pricing-features-text-new tooltip"
                        >
                          Automatic Backups
                        </div>
                        <div
                          id="upgrades-included"
                          className="pricing-features-text-new tooltip"
                        >
                          Upgrades included
                        </div>
                        <div className="pricing-features-text-new">
                          Comments
                        </div>
                        <div className="pricing-features-text-new">
                          Fountain &amp; Final Draft export
                        </div>
                        <div
                          id="pdf-export"
                          className="pricing-features-text-new tooltip"
                        >
                          PDF export
                        </div>
                        <div
                          id="scripts"
                          className="pricing-features-text-new tooltip"
                        >
                          Scripts
                        </div>
                        <div className="pricing-features-text-new">
                          Browser app
                        </div>
                        <div className="pricing-features-text-new">
                          Desktop app
                        </div>
                        <div className="pricing-features-text-new">
                          iPhone &amp; iPad app
                        </div>
                        <div
                          id="inviting-collaborators"
                          className="pricing-features-text-new tooltip"
                        >
                          Inviting collaborators
                        </div>
                        <div
                          id="custom-formats"
                          className="pricing-features-text-new tooltip"
                        >
                          Custom Formats
                        </div>
                        <div
                          id="outlining-tools"
                          className="pricing-features-text-new tooltip"
                        >
                          Outlining tools
                        </div>
                        <div
                          id="season-outlines"
                          className="pricing-features-text-new tooltip"
                        >
                          Season outlines
                        </div>
                        <div
                          id="history"
                          className="pricing-features-text-new tooltip"
                        >
                          History
                        </div>
                        <div
                          id="revision-management"
                          className="pricing-features-text-new tooltip"
                        >
                          Revision Management
                        </div>
                        <div
                          id="feedback-links"
                          className="pricing-features-text-new tooltip"
                        >
                          Feedback links
                        </div>
                        <div
                          id="the-stash"
                          className="pricing-features-text-new tooltip"
                        >
                          The Stash
                        </div>
                      </div>
                    </div>
                    <div className="prices-block">
                      <div className="item"></div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="pricing-features-text free visible watermarked">
                          Watermarked
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="pricing-features-text free visible last pricing-text-center">
                          2
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="tab-prices w-tab-pane">
                  <div className="prices-block margin">
                    <div className="price-alt-yr purple-dark hide-on-mobile">
                      $69<span className="per-year">/year</span>
                      <span className="text-span">/year</span>
                    </div>
                    <p className="pricing-category-text-new">
                      Advanced formatting, apps, unlimited scripts
                    </p>
                  </div>
                  <div className="flex-tab-prices">
                    <div className="prices-block mobile-only">
                      <div className="item">
                        <div className="pricing-features-text-new">
                          Beautiful interface
                        </div>
                        <div
                          id="stable-secure"
                          className="pricing-features-text-new tooltip"
                        >
                          Stable &amp; secure cloud sync
                        </div>
                        <div
                          id="automatic-backups"
                          className="pricing-features-text-new tooltip"
                        >
                          Automatic Backups
                        </div>
                        <div
                          id="upgrades-included"
                          className="pricing-features-text-new tooltip"
                        >
                          Upgrades included
                        </div>
                        <div className="pricing-features-text-new">
                          Comments
                        </div>
                        <div className="pricing-features-text-new">
                          Fountain &amp; Final Draft export
                        </div>
                        <div
                          id="pdf-export"
                          className="pricing-features-text-new tooltip"
                        >
                          PDF export
                        </div>
                        <div
                          id="scripts"
                          className="pricing-features-text-new tooltip"
                        >
                          Scripts
                        </div>
                        <div className="pricing-features-text-new">
                          Browser app
                        </div>
                        <div className="pricing-features-text-new">
                          Desktop app
                        </div>
                        <div className="pricing-features-text-new">
                          iPhone &amp; iPad app
                        </div>
                        <div
                          id="inviting-collaborators"
                          className="pricing-features-text-new tooltip"
                        >
                          Inviting collaborators
                        </div>
                        <div
                          id="custom-formats"
                          className="pricing-features-text-new tooltip"
                        >
                          Custom Formats
                        </div>
                        <div
                          id="outlining-tools"
                          className="pricing-features-text-new tooltip"
                        >
                          Outlining tools
                        </div>
                        <div
                          id="season-outlines"
                          className="pricing-features-text-new tooltip"
                        >
                          Season outlines
                        </div>
                        <div
                          id="history"
                          className="pricing-features-text-new tooltip"
                        >
                          History
                        </div>
                        <div
                          id="revision-management"
                          className="pricing-features-text-new tooltip"
                        >
                          Revision Management
                        </div>
                        <div
                          id="feedback-links"
                          className="pricing-features-text-new tooltip"
                        >
                          Feedback links
                        </div>
                        <div
                          id="the-stash"
                          className="pricing-features-text-new tooltip"
                        >
                          The Stash
                        </div>
                      </div>
                    </div>
                    <div className="prices-block">
                      <div className="item"></div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="pricing-features-text pro unlimited">
                          Unlimited
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                      <div className="checkbox-price"></div>
                    </div>
                  </div>
                </div>
                <div
                  data-w-tab="Tab 3"
                  className="tab-prices w-tab-pane w--tab-active"
                >
                  <div className="prices-block margin">
                    <div className="price-alt-yr purple-dark hide-on-mobile">
                      $99<span className="per-year">/year</span>
                      <span className="text-span">/year</span>
                    </div>
                    <p className="pricing-category-text-new">
                      Takes your screenwriting to the next level with
                      professional features
                    </p>
                  </div>
                  <div className="flex-tab-prices">
                    <div className="prices-block mobile-only">
                      <div className="item">
                        <div className="pricing-features-text-new">
                          Beautiful interface
                        </div>
                        <div
                          id="stable-secure"
                          className="pricing-features-text-new tooltip"
                        >
                          Stable &amp; secure cloud sync
                        </div>
                        <div
                          id="automatic-backups"
                          className="pricing-features-text-new tooltip"
                        >
                          Automatic Backups
                        </div>
                        <div
                          id="upgrades-included"
                          className="pricing-features-text-new tooltip"
                        >
                          Upgrades included
                        </div>
                        <div className="pricing-features-text-new">
                          Comments
                        </div>
                        <div className="pricing-features-text-new">
                          Fountain &amp; Final Draft export
                        </div>
                        <div
                          id="pdf-export"
                          className="pricing-features-text-new tooltip"
                        >
                          PDF export
                        </div>
                        <div
                          id="scripts"
                          className="pricing-features-text-new tooltip"
                        >
                          Scripts
                        </div>
                        <div className="pricing-features-text-new">
                          Browser app
                        </div>
                        <div className="pricing-features-text-new">
                          Desktop app
                        </div>
                        <div className="pricing-features-text-new">
                          iPhone &amp; iPad app
                        </div>
                        <div
                          id="inviting-collaborators"
                          className="pricing-features-text-new tooltip"
                        >
                          Inviting collaborators
                        </div>
                        <div
                          id="custom-formats"
                          className="pricing-features-text-new tooltip"
                        >
                          Custom Formats
                        </div>
                        <div
                          id="outlining-tools"
                          className="pricing-features-text-new tooltip"
                        >
                          Outlining tools
                        </div>
                        <div
                          id="season-outlines"
                          className="pricing-features-text-new tooltip"
                        >
                          Season outlines
                        </div>
                        <div
                          id="history"
                          className="pricing-features-text-new tooltip"
                        >
                          History
                        </div>
                        <div
                          id="revision-management"
                          className="pricing-features-text-new tooltip"
                        >
                          Revision Management
                        </div>
                        <div
                          id="feedback-links"
                          className="pricing-features-text-new tooltip"
                        >
                          Feedback links
                        </div>
                        <div
                          id="the-stash"
                          className="pricing-features-text-new tooltip"
                        >
                          The Stash
                        </div>
                      </div>
                    </div>
                    <div className="prices-block">
                      <div className="item"></div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="pricing-features-text pro unlimited">
                          Unlimited
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="pricing-features-text pro limited2collab">
                          with 2 <br />
                          collaborators
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                      <div className="checkbox-price">
                        <div className="check-mark">
                          <img
                            src="assets/img/610c5007d3b7ee3fb23e08e6_Check Mark.svg"
                            loading="lazy"
                            alt="Check-mark "
                            className="checkmark-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="a-container">
          <div className="testimonial-horizontal">
            <div className="testimonial-left">
              <div className="testimonial-image-block horizontal">
                <img
                  src="assets/img/footer1.png"
                  loading="lazy"
                  alt=""
                  className="testimonial-headshot"
                />
              </div>
              <div className="testimonial-bottom-block">
                <div className="small-text dark max-width swiper testimonialcredit">
                  Anna Klassen
                </div>
                <div className="small-text dark max-width swiper testimonialcredit">
                  Screenwriter (Netflix)
                </div>
              </div>
            </div>
            <div className="testimonial-right">
              <div className="testimonial-middle-block">
                <p className="big-paragraf testimonialcopy horizontal">
                  The most efficient, elegant, intuitive, and all-around
                  user-friendly screenwriting software I've ever used — and I've
                  used them all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section grey-section">
        <div className="container flex-center">
          <h2 className="h2-heading-purple margin-30 max-600 text-center">
            Frequently asked questions
          </h2>
          <div className="faq-list-wrapper w-dyn-list">
            <div role="list" className="faq-list w-dyn-items">
              <div
                onClick={() => setfirst(!first)}
                role="listitem"
                className="faq-item w-dyn-item"
              >
                <div
                  data-w-id="cafc7397-e0db-1d2b-740f-44e8771b9b15"
                  className="faq-card"
                >
                  <div className="faq-question">
                    <h3 className="no-margin h5-style">
                      Do I have to pay for upgrades?
                    </h3>
                    <div
                      // data-is-ix2-target="1"
                      className="faq-arrow"
                      // data-w-id="cafc7397-e0db-1d2b-740f-44e8771b9b19"
                      // data-animation-type="lottie"
                      // // data-src="https://uploads-ssl.webflow.com/612e28fb39931e72c1bdd911/612e28fb39931e0c3cbdd976_lottieflow-scroll-down-08-FF7455-easey.json"
                      // data-loop="0"
                      // data-direction="1"
                      // data-autoplay="0"
                      // data-renderer="svg"
                      // data-default-duration="1.5208333333333333"
                      // data-duration="0"
                    ></div>
                  </div>
                  <div
                    style={{
                      transition: "height 0.3s ease",
                      height: first ? "100px" : "0px",
                    }}
                    className="faq-answer"
                  >
                    <p className="faq-paragraph">
                      No! We release features often (often multiple per week!),
                      and you&#x27;re always on the latest and greatest version
                      with the Pro plan (also on other plans, but some features
                      might not be included).
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setsecond(!second)}
                role="listitem"
                className="faq-item w-dyn-item"
              >
                <div
                  data-w-id="cafc7397-e0db-1d2b-740f-44e8771b9b15"
                  className="faq-card"
                >
                  <div className="faq-question">
                    <h3 className="no-margin h5-style">
                      Does it work offline?
                    </h3>
                    <div
                      data-is-ix2-target="1"
                      className="faq-arrow"
                      data-w-id="cafc7397-e0db-1d2b-740f-44e8771b9b19"
                      data-animation-type="lottie"
                      // data-src="https://uploads-ssl.webflow.com/612e28fb39931e72c1bdd911/612e28fb39931e0c3cbdd976_lottieflow-scroll-down-08-FF7455-easey.json"
                      data-loop="0"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="1.5208333333333333"
                      data-duration="0"
                    ></div>
                  </div>
                  <div
                    style={{
                      transition: "height 0.3s ease",
                      height: second ? "50px" : "0px",
                    }}
                    className="faq-answer"
                  >
                    <p className="faq-paragraph">
                      Yes! Scren-Pla has real-time collaboration built in, but
                      continues to work seamlessly when offline.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setthree(!three)}
                role="listitem"
                className="faq-item w-dyn-item"
              >
                <div
                  data-w-id="cafc7397-e0db-1d2b-740f-44e8771b9b15"
                  className="faq-card"
                >
                  <div className="faq-question">
                    <h3 className="no-margin h5-style">
                      Do my collaborators also need a subscription?
                    </h3>
                    <div
                      data-is-ix2-target="1"
                      className="faq-arrow"
                      data-w-id="cafc7397-e0db-1d2b-740f-44e8771b9b19"
                      data-animation-type="lottie"
                      // data-src="https://uploads-ssl.webflow.com/612e28fb39931e72c1bdd911/612e28fb39931e0c3cbdd976_lottieflow-scroll-down-08-FF7455-easey.json"
                      data-loop="0"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="1.5208333333333333"
                      data-duration="0"
                    ></div>
                  </div>
                  <div
                    style={{
                      transition: "height 0.3s ease",
                      height: three ? "100px" : "0px",
                    }}
                    className="faq-answer"
                  >
                    <p className="faq-paragraph">
                      Inviting collaborators requires a subscription, but
                      collaborating itself can be done on the free plan (script
                      editing and commenting are included in the free plan). If
                      your collaborators want to use the advanced features in
                      the Pro plan (outlining, custom formatting, etc.), they
                      will also need to upgrade.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setfour(!four)}
                role="listitem"
                className="faq-item w-dyn-item"
              >
                <div
                  data-w-id="cafc7397-e0db-1d2b-740f-44e8771b9b15"
                  className="faq-card"
                >
                  <div className="faq-question">
                    <h3 className="no-margin h5-style">
                      Is there an Android app?
                    </h3>
                    <div
                      data-is-ix2-target="1"
                      className="faq-arrow"
                      data-w-id="cafc7397-e0db-1d2b-740f-44e8771b9b19"
                      data-animation-type="lottie"
                      // data-src="https://uploads-ssl.webflow.com/612e28fb39931e72c1bdd911/612e28fb39931e0c3cbdd976_lottieflow-scroll-down-08-FF7455-easey.json"
                      data-loop="0"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="1.5208333333333333"
                      data-duration="0"
                    ></div>
                  </div>
                  <div
                    style={{
                      transition: "height 0.3s ease",
                      height: four ? "80px" : "0px",
                    }}
                    className="faq-answer"
                  >
                    <p className="faq-paragraph">
                      Not at this point, though we might have one in the future.
                      You can use Scren-Pla in Chrome on any Android device,
                      though we don't offer long-term offline support.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setfive(!five)}
                role="listitem"
                className="faq-item w-dyn-item"
              >
                <div
                  data-w-id="cafc7397-e0db-1d2b-740f-44e8771b9b15"
                  className="faq-card"
                >
                  <div className="faq-question">
                    <h3 className="no-margin h5-style">
                      Do I have to pay for both Desktop and iPad/iPhone?
                    </h3>
                    <div
                      data-is-ix2-target="1"
                      className="faq-arrow"
                      data-w-id="cafc7397-e0db-1d2b-740f-44e8771b9b19"
                      data-animation-type="lottie"
                      // data-src="https://uploads-ssl.webflow.com/612e28fb39931e72c1bdd911/612e28fb39931e0c3cbdd976_lottieflow-scroll-down-08-FF7455-easey.json"
                      data-loop="0"
                      data-direction="1"
                      data-autoplay="0"
                      data-renderer="svg"
                      data-default-duration="1.5208333333333333"
                      data-duration="0"
                    ></div>
                  </div>
                  <div
                    style={{
                      transition: "height 0.3s ease",
                      height: five ? "50px" : "0px",
                    }}
                    className="faq-answer"
                  >
                    <p className="faq-paragraph">
                      No, your subscription is per person and includes unlimited
                      devices: mac, Windows, iPadOS, iOS, and any browser.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaSection />

      <Footer />
    </div>
  );
};

export default Pricing;
