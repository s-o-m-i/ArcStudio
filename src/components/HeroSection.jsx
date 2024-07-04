/* eslint-disable react/no-unescaped-entities */
import Navbar from "../shared/Navbar";
import Footer from "./Footer/Footer";

import { useState } from "react";
import { Box } from "@mui/material";
import BasicModal from "../shared/HeroSection/MyModal/MyModal";

const HeroSection = () => {
  const [questions, setQuestions] = useState(false);
  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);

  return (
    <>
      <div className="page-wrapper">
        <img
          src="assets/img/herobg.webp"
          loading="lazy"
          sizes="100vw"
          srcSet={`
          assets/img/637cfdbb6bd281edaa579827_hero%20bg-p-500.webp   500w,
          assets/img/637cfdbb6bd281edaa579827_hero%20bg-p-800.webp   800w,
          assets/img/637cfdbb6bd281edaa579827_hero%20bg-p-1080.webp 1080w,
          assets/img/637cfdbb6bd281edaa579827_hero%20bg-p-1600.webp 1600w,
          assets/img/637cfdbb6bd281edaa579827_hero%20bg-p-2000.webp 2000w,
          assets/img/637cfdbb6bd281edaa579827_hero%20bg.webp        2160w
      `}
          alt=""
          className="a-hero-bg-image"
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
        <div className="a-hero-section">
          <div className="a-container">
            <div className="center-block a-hero">
              <h1 className="a-h1">
                The New Industry Standard <br />
                for Professional Screenwriting
              </h1>
              <div className="padding-56"></div>
            </div>
            <div className="a-container-927">
              <div className="w-layout-grid a--hero-grid">
                {/* Hero Block 1 */}
                <div className="a--hero-block-2">
                  <p className="a-text-18 a-white-text">
                    Scren-Pla is the easiest way to outline, write, and edit
                    screenplays and television scripts, for solo-writers, large
                    writing staffs, and everything in between.
                  </p>
                  <div className="padding-37"></div>
                  {/* <a href="#" className="a-button sign-up-btn w-button">
                    Start Writing Free
                  </a> */}
                  <BasicModal position="hero-home" />
                  <a
                    href="https://scren-pla.vercel.app/login"
                    className="a-button go-to-desk w-button"
                  >
                    Go To Desk
                  </a>
                  <div className="padding-24"></div>
                  <div className="a--text-12 a-white-text">
                    Sign up for free. No credit card required.
                  </div>
                </div>

                {/* Hero Block 2 */}
                <div className="a-hero-block-3">
                  <div className="a-hero-video">
                    {/* Mobile Hero Video */}
                    <img
                      src="assets/img/herovideo.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 90vw, (max-width: 767px) 520px, 100vw"
                      srcSet="
                      assets/img/6114d0ff1abaaf3ebb63dce3_c86768e8cd1b2646f95d7c8e4242b321-p-500.png  500w,
                      assets/img/6114d0ff1abaaf3ebb63dce3_c86768e8cd1b2646f95d7c8e4242b321.png       1361w
                  "
                      alt="Mobile Hero Video"
                      className="a-mobile-video-img"
                    />

                    {/* Background Video */}
                    <div
                      data-poster-url="assets/img/6115608452036610642d7b4b_Hero BG Video-poster-00001.jpg"
                      data-video-urls="https://uploads-ssl.webflow.com/610c5007d3b7eec8263e07aa/6115608452036610642d7b4b_Hero BG Video-transcode.mp4,assets/img/6115608452036610642d7b4b_Hero BG Video-transcode.webm"
                      data-autoplay="true"
                      data-loop="true"
                      data-wf-ignore="true"
                      id="hero-video"
                      className="lightbox-bg-video w-background-video w-background-video-atom"
                    >
                      {/* <video
                        id="70bc8460-4745-b8d3-8aa3-039cd05fd18b-video"
                        autoPlay=""
                        loop=""
                        style={{
                          backgroundImage:
                            "url(_https_/uploads-ssl.webflow.com/610c5007d3b7eec8263e07aa/6115608452036610642d7b4b_Hero%20BG%20Video-poster-00001.jpg_)",
                        }}
                        muted=""
                        playsInline=""
                        data-wf-ignore="true"
                        data-object-fit="cover"
                      >
                        <source
                          src="assets/img/6115608452036610642d7b4b_Hero BG Video-transcode.mp4"
                          data-wf-ignore="true"
                        />
                        <source
                          src="assets/img/6115608452036610642d7b4b_Hero BG Video-transcode.mp4"
                          data-wf-ignore="true"
                        />
                      </video> */}
                      <video width="width_value" height="height_value" controls>
                        <source
                          src="assets/img/6115608452036610642d7b4b_Hero BG Video-transcode.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    {/* Play Button */}
                    <div
                      id="play"
                      data-w-id="70bc8460-4745-b8d3-8aa3-039cd05fd18c"
                      className="lightbox-button"
                    >
                      <img
                        src="assets/img/610c5007d3b7eec2e53e08e4_Play Icon.svg"
                        loading="lazy"
                        alt="Play Icon"
                        className="play-button-arrow"
                      />
                    </div>

                    {/* Video Popup */}
                    <div id="pop-up-video" className="video-popup">
                      <div
                        id="video"
                        className="video w-embed w-iframe w-script"
                      >
                        <div
                          style={{
                            padding: "56.25% 0 0 0; position: relative",
                          }}
                        >
                          <iframe
                            id="hero-video-vimeo-iframe"
                            src="assets/img/Say Hello to Arc Studio! on Vimeo.html"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                            }}
                            title="Say Hello to Scren-Pla!"
                          ></iframe>
                        </div>
                        <script>
                          {`
                        window.addEventListener("load", function () {
                          let playBtn = document.querySelector("#play");
                          let closeBtn = document.querySelector("#close");
                          let iFrame = document.querySelector("#hero-video-vimeo-iframe");

                          let player = new Vimeo.Player(iFrame);

                          playBtn.addEventListener("click", function () {
                            player.play();
                          });

                          closeBtn.addEventListener("click", function () {
                            player.pause();
                          });
                        });
                      `}
                        </script>
                      </div>
                      <div
                        id="close"
                        data-w-id="70bc8460-4745-b8d3-8aa3-039cd05fd190"
                        className="close-window"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="padding-97"></div>

              {/* Hero Testimonial */}
              <div className="a--hero-testimonial-card">
                <div
                  className="a-hero-testimonial-block"
                  id="w-node-ffcf5c6c-d63a-e844-bdc6-64a94b0ed0b0-535d3bd6"
                >
                  <div className="a-lightbox-testimonial-hero w-inline-block w-lightbox">
                    <img
                      src="assets/img/637d0882a87e08910f2b054f_testimonial hero.webp"
                      loading="lazy"
                      sizes="(max-width: 479px) 76vw, (max-width: 767px) 35vw, (max-width: 991px) 27vw, 283.125px"
                      srcSet="
                     assets/img/637d0882a87e08910f2b054f_testimonial hero.webp 500w,
                     assets/img/637d0882a87e08910f2b054f_testimonial hero.webp     542w
                    "
                      alt=""
                      className="a-hero-testimonial-image"
                    />
                    
                  </div>
                </div>
                <div
                  id="w-node-ffcf5c6c-d63a-e844-bdc6-64a94b0ed0b4-535d3bd6"
                  className="a-hero-testimonial-block"
                >
                  <img
                    src="assets/img/637d07d4d59e221403373f28_stars.svg"
                    loading="lazy"
                    alt="5 stars"
                    className="a-5-stars padding-24"
                  />
                  <p className="a-text-18 a-purple-60-text">
                    For decades {`I've`} been searching for a seamless
                    screenwriting app and everything has come up way short –
                    until Scren-Pla. Writing and collaborating is easier than
                    ever and it gets better every week.
                    <br />
                    Well done!
                  </p>
                </div>
                <div className="a-hero-testimonial-block _3">
                  <div className="a-left-testimonial-block-3">
                    <div className="a--text-24 a-purple-60-text a--bold-text">
                      David Wain
                    </div>
                    <div className="padding-6"></div>
                    <div className="a--text-14 a-grey-80-text">
                      Writer/Director <em>Role Models</em>,{" "}
                      <em>Wet Hot American Summer</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="d61bd9f8-ba50-8064-0822-9a53998c2bc8"
          className="section a-industry"
        >
          <div className="a-container">
            <div className="a-industry-component">
              <div className="a-industry-block">
                <h2 className="a-h2 a-gradient-text">
                  Industry Standard Formatting
                </h2>
                <div className="padding-40"></div>
                <p className="a-text-18">
                  Scren-Pla automatically formats your script according to the
                  Hollywood industry standard. You stay focused with intuitive
                  shortcuts and a clean visual design, which removes all
                  distractions. No more clunky apps from the 90s – Scren-Pla is
                  a breath of fresh air for the screenwriting world.
                </p>
                <div className="padding-40"></div>
              </div>
              <div className="a-industry-block video">
                <div
                  data-poster-url="assets/img/60ffd008e8a4e7739ddf274a_formatting-poster-00001.jpg"
                  data-video-urls="assets/img/610c5007d3b7ee53e53e08ef_formatting-transcode.mp4,assets/img/610c5007d3b7ee53e53e08ef_formatting-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  id="video-1"
                  data-beta-bgvideo-upgrade="false"
                  className="a-video-background w-background-video w-background-video-atom"
                >
                  <video
                    id="84ba3ca6-45d6-1dd3-a2a8-157d3c308d29-video"
                    autoPlay
                    loop
                    style={{
                      backgroundImage:
                        "assets/img/60ffd008e8a4e7739ddf274a_formatting-poster-00001.jpg)",
                    }}
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="assets/img/610c5007d3b7ee53e53e08ef_formatting-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="assets/img/610c5007d3b7ee53e53e08ef_formatting-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </div>
              <div className="a-industry-card">
                <img
                  src="assets/img/637d0fbbdc9fd33fcf87f6b5_icon.svg"
                  loading="lazy"
                  alt=""
                  className="a-industry-card-image"
                />
                <div className="a-industry-card-content">
                  <div className="a-text-21 a-purple-60-text a-extrabold-text">
                    Seamless transition from Final Draft
                  </div>
                  <div className="padding-15"></div>
                  <div className="a-text-16 a-purple-60-text">
                    Seamlessly import &amp; export Final Draft and keep your
                    formatting 100% consistent. Switch in less than 10 minutes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section a-safe-sound">
          <div className="a-container">
            <div className="a-safe-sound-component">
              <div className="a-left-safe-sound">
                <h2 className="a-h2">Safe &amp; Sound</h2>
                <div className="padding-40"></div>
                <p className="a-text-18 a-white-text">
                  Scren-Pla puts you at ease while writing, thanks to automatic
                  backups and a seamless editing history.
                </p>
                <div className="padding-40"></div>
                <div className="a-list-block-icon">
                  <img
                    src="assets/img/610c5007d3b7ee93503e08cb_Green Section First Icon.svg"
                    loading="lazy"
                    alt="Cloud Icon "
                    className="small-icon"
                  />
                  <div className="a-text-16">
                    Automatic backups to your device and to the cloud: never
                    lose work again!
                    <br />
                  </div>
                </div>
                <div className="padding-24"></div>
                <div className="a-list-block-icon">
                  <img
                    src="assets/img/610c5007d3b7ee287a3e08ca_Third Section Middle Icon.svg"
                    loading="lazy"
                    alt="Automatic Icon"
                    className="small-icon"
                  />
                  <div className="a-text-16">
                    Automatic draft history: deleted some text that you want
                    back? We kept it for you.
                    <br />
                  </div>
                </div>
                <div className="padding-24"></div>
                <div className="a-list-block-icon">
                  <img
                    src="assets/img/610c5007d3b7ee73783e08cd_Green Section Last Icon.svg"
                    loading="lazy"
                    alt="Globe Icon "
                    className="small-icon"
                  />
                  <div className="a-text-16">
                    The cloud done right: work offline or online seamlessly, and
                    access your script from multiple devices.
                    <br />
                  </div>
                </div>
                <div className="padding-24"></div>
                <div className="a-list-block-icon">
                  <img
                    src="assets/img/637df743ff345b8460f11e02_icon-feature-3.svg"
                    loading="lazy"
                    alt=""
                    className="small-icon"
                  />
                  <div className="a-text-16">
                    Give access to co-writers with a click and see who has
                    access at a glance
                    <br />
                  </div>
                </div>
              </div>
              <div className="a-right-safe-sound">
                <img
                  src="assets/img/610c5007d3b7ee8e443e08ec_illustration-min.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 64vw, (max-width: 767px) 39vw, (max-width: 991px) 36vw, 35vw"
                  srcSet="
                  assets/img/610c5007d3b7ee8e443e08ec_illustration-min-p-800.png  800w,
                  assets/img/610c5007d3b7ee8e443e08ec_illustration-min.png       1296w
              "
                  alt="Safe And Sound Photo "
                  className="a-safe-sound-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section a-flex-section">
          <div className="a-container">
            <div
              className="a-flex-component"
              data-w-id="1835290c-6179-b383-8f95-92ff8145ad5b"
            >
              <div className="a-left-flex">
                <div
                  className="a-video-background story-teller w-background-video w-background-video-atom"
                  data-autoplay="true"
                  data-loop="true"
                  data-beta-bgvideo-upgrade="false"
                  data-wf-ignore="true"
                  data-poster-url="assets/img/60f53f3c947f0f5aae8746ae_storytelling-poster-00001.jpg"
                  data-w-id="843ceb20-01f5-e7d3-a3c5-b94908bc98d0"
                  data-video-urls="assets/img/610c5007d3b7ee62893e08da_storytelling-transcode.mp4,assets/img/610c5007d3b7ee62893e08da_storytelling-transcode.webm"
                  id="video-1"
                >
                  <video
                    id="843ceb20-01f5-e7d3-a3c5-b94908bc98d0-video"
                    autoPlay=""
                    loop=""
                    style={{
                      backgroundImage:
                        "url(_https_/uploads-ssl.webflow.com/60f5301e69763b1f3561fc2f/60f53f3c947f0f5aae8746ae_storytelling-poster-00001.jpg_)",
                    }}
                    muted=""
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="assets/img/610c5007d3b7ee62893e08da_storytelling-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="assets/img/610c5007d3b7ee62893e08da_storytelling-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </div>
              <div className="a-right-flex">
                <h2 className="a-h2 a-gradient-text">Tools for Storytellers</h2>
                <div className="padding-40"></div>
                <div className="a-list-block-icon">
                  <img
                    src="assets/img/610c5007d3b7eebec23e08e1_Tools Icon First.svg"
                    loading="lazy"
                    alt="Screenwriting Icon "
                    className="small-icon"
                  />
                  <div className="a-text-16">
                    Scren-Pla includes a digital whiteboard where you keep notes
                    on story lines, characters, locations, all in one place.
                  </div>
                </div>
                <div className="padding-24"></div>
                <div className="a-list-block-icon">
                  <img
                    src="assets/img/610c5007d3b7ee6e143e08e0_Tools Icon Second.svg"
                    loading="lazy"
                    alt="Story Icon "
                    className="small-icon"
                  />
                  <div className="a-text-16">
                    You build your story-structure with beat-cards and an
                    intuitive drag&amp;drop interface, and automatically
                    color-code your beats.
                  </div>
                </div>
                <div className="padding-24"></div>
                <div className="a-list-block-icon">
                  <img
                    src="assets/img/610c5007d3b7ee19773e08e2_Tools Icon Third.svg"
                    loading="lazy"
                    alt="Plus Icon "
                    className="small-icon"
                  />
                  <div className="a-text-16">
                    When it is time to write, you reference your notes next to
                    your script: A one-stop solution for creative storytelling.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section a-testimonial-section">
          <div className="a-container-927">
            <div className="a--hero-testimonial-card">
              <div
                className="a-testimonial-banner-bg"
                id="w-node-fed39272-3f99-5f9f-6a56-60c0c0a0931d-535d3bd6"
              ></div>
              <div
                className="a-hero-testimonial-block"
                id="w-node-fed39272-3f99-5f9f-6a56-60c0c0a0931e-535d3bd6"
              >
                <img
                  loading="lazy"
                  sizes="(max-width: 479px) 76vw, (max-width: 767px) 35vw, (max-width: 991px) 27vw, 283.125px"
                  srcSet="
                  assets/img/637dfbe70c998d38637c1d40_testimonial%202-p-500.webp 500w,
                  assets/img/637dfbe70c998d38637c1d40_testimonial%202.webp       540w
              "
                  src="assets/img/637dfbe70c998d38637c1d40_testimonial 2.webp"
                  alt=""
                  className="a-testimonial-image"
                />
              </div>
              <div
                className="a-hero-testimonial-block"
                id="w-node-fed39272-3f99-5f9f-6a56-60c0c0a09322-535d3bd6"
              >
                <img
                  src="assets/img/637d07d4d59e221403373f28_stars.svg"
                  loading="lazy"
                  alt="5 stars"
                  className="a-5-stars padding-24"
                />
                <p className="a-text-18 a-purple-60-text">
                  Running a writer’s room is all about efficiency. Scren-Pla
                  lets us collaborate across the entire season and manage
                  incoming notes or changes without ever losing track of a
                  single thing. Can’t imagine ever going back.
                </p>
              </div>
              <div
                className="a-hero-testimonial-block _3"
                id="w-node-fed39272-3f99-5f9f-6a56-60c0c0a09326-535d3bd6"
              >
                <div className="a-left-testimonial-block-3">
                  <div className="a--text-24 a-purple-60-text a--bold-text">
                    Christian Linke
                  </div>
                  <div className="padding-6"></div>
                  <div className="a--text-14 a-grey-80-text">
                    Showrunner, <em>Arcane</em> (Netflix)
                  </div>
                </div>
                <div className="a-right-testimonial-block-3">
                  <img
                    loading="lazy"
                    alt="riot arcane
"
                    src="assets/img/637dfccdf3ef837b74c97b35_riot.webp"
                    className="a-image-platform-testimonial"
                  />
                  <img
                    loading="lazy"
                    alt="netflix
"
                    src="assets/img/637dfccd2ccaf6cd50b0e8f9_netflix.webp"
                    className="a-image-platform-testimonial"
                  />
                </div>
              </div>
            </div>
            <div className="padding-48"></div>
            <div className="center-block">
              <div className="a-text-18">
                <span className="a-semibold-text">
                  Scren-Pla is the easiest way to run a writers room.
                  <br />
                </span>
                <div className="a-link-underline">See Showrunner Features</div>
              </div>
            </div>
          </div>
        </div>
        {/* problem */}
        <div className="section a-faq-section">
          <div className="a-container-927">
            <h2 className="a-h2">FAQ</h2>
            <div className="padding-24"></div>
            <Box
              onClick={() => setQuestions(!questions)}
              className="a-faq-wrapper"
            >
              <div
                className="a-faq-trigger"
                data-w-id="601865fe-2c79-24db-34f6-1719593b8a14"
              >
                <Box
                  sx={{ color: questions ? "rgb(254, 227, 159)" : "" }}
                  className="a-text-18 a-white-text a-semibold-text"
                >
                  Coming from Final Draft, {`isn't`} learning a new program very
                  hard?
                </Box>
                <img
                  src="assets/img/637e043e5802ea551a861b17_arrow yellow.svg"
                  loading="lazy"
                  alt=""
                  className="a-faq-arrow yellow"
                />
                <img
                  src="637e041c6029738b7e3ef3c3_arrow white.svg637e041c6029738b7e3ef3c3_arrow white.svg"
                  loading="lazy"
                  alt=""
                  className="a-faq-arrow white"
                />
              </div>
              <Box
                sx={{
                  height: questions ? "80px" : "0px",
                  transition: "height 0.3s ease",
                  // height: first ? "100px" : "0px",
                  // height: questions ? "auto" : "0px",
                  // overflow: "hidden",
                  // transition: "height 5000ms ease", // Adjust the duration as needed
                  // width: "100%", // Ensure the Box takes full width
                }}
                className="a-faq-content"
              >
                <div className="padding-20"></div>
                <p className="a-text-18 a-white-text regular-text">
                  No, all the shortcuts work the same and you can seamlessly
                  import and export Final Draft files. The average time for an
                  experienced screenwriter to go from skeptical to sold is 7.8
                  minutes.
                </p>
              </Box>
            </Box>
            <div
              onClick={() => setQuestionOne(!questionOne)}
              className="a-faq-wrapper"
            >
              <div
                className="a-faq-trigger"
                data-w-id="601865fe-2c79-24db-34f6-1719593b8a14"
              >
                <Box
                  sx={{ color: questionOne ? "rgb(254, 227, 159)" : "" }}
                  className="a-text-18 a-white-text a-semibold-text"
                >
                  Is Scren-Pla only for professionals?
                </Box>
                <img
                  src="assets/img/637e043e5802ea551a861b17_arrow yellow.svg"
                  loading="lazy"
                  alt=""
                  className="a-faq-arrow yellow"
                />
                <img
                  src="637e041c6029738b7e3ef3c3_arrow white.svg637e041c6029738b7e3ef3c3_arrow white.svg"
                  loading="lazy"
                  alt=""
                  className="a-faq-arrow white"
                />
              </div>
              <Box
                sx={{
                  height: questionOne ? "80px" : "0px",
                  transition: "height 0.3s ease",
                }}
                className="a-faq-content"
              >
                <div className="padding-20"></div>
                <p className="a-text-18 a-white-text regular-text">
                  No, Scren-Pla is used by thousands of non-professionals to
                  write screenplays. Because of its intuitive, distraction-free
                  design, it's actually a particularly good choice for beginners
                  to write their first script. We offer lots of resources and
                  tools inside the app to get you up and running on your
                  screenwriting journey.
                </p>
              </Box>
            </div>
            <Box
              onClick={() => setQuestionTwo(!questionTwo)}
              className="a-faq-wrapper"
            >
              <div
                className="a-faq-trigger"
                data-w-id="601865fe-2c79-24db-34f6-1719593b8a14"
              >
                <Box
                  sx={{ color: questionTwo ? "rgb(254, 227, 159)" : "" }}
                  className="a-text-18 a-white-text a-semibold-text"
                >
                  Can I work offline?
                </Box>
                <img
                  src="assets/img/637e043e5802ea551a861b17_arrow yellow.svg"
                  loading="lazy"
                  alt=""
                  className="a-faq-arrow yellow"
                />
                <img
                  src="637e041c6029738b7e3ef3c3_arrow white.svg637e041c6029738b7e3ef3c3_arrow white.svg"
                  loading="lazy"
                  alt=""
                  className="a-faq-arrow white"
                />
              </div>
              <Box
                sx={{
                  height: questionTwo ? "80px" : "0px",
                  transition: "height 0.3s ease",
                }}
                className="a-faq-content"
              >
                <div className="padding-20"></div>
                <p className="a-text-18 a-white-text regular-text">
                  Yes. Scren-Pla has been built to collaborate together online,
                  while offering a seamless offline experience. Whenever you
                  lose internet connection (either momentarily or for longer,
                  e.g. on a weekend off the grid), we save your work on your
                  computer and sync it to your co-writers once you come back
                  online.
                </p>
              </Box>
            </Box>
            {/* Repeat the above structure for each FAQ item */}
            {/* Example FAQ item */}
            {/* <div className="a-faq-wrapper">
          <div className="a-faq-trigger" data-w-id="YOUR_UNIQUE_ID">
            <div className="a-text-18 a-white-text a-semibold-text">
              Your question here
            </div>
            <img
              src="YOUR_ARROW_IMAGE_URL"
              loading="lazy"
              alt=""
              className="a-faq-arrow yellow"
            />
            <img
              src="YOUR_ARROW_IMAGE_URL"
              loading="lazy"
              alt=""
              className="a-faq-arrow white"
            />
          </div>
          <div className="a-faq-content">
            <div className="padding-20"></div>
            <p className="a-text-18 a-white-text regular-text">
              Your answer here
            </p>
          </div>
        </div> */}
          </div>
        </div>
        {/* problem */}
        <div className="section a-flex-section virtual">
          <div className="a-container">
            <div
              className="a-flex-component reverse"
              data-w-id="c23bf888-86c8-4bc5-7167-6517e198bc6d"
            >
              <div className="a-left-flex reverse">
                <div
                  className="a-video-background virtual w-background-video w-background-video-atom"
                  data-poster-url="assets/img/60f5445242eda32a81b73b34_virtual_room-poster-00001.jpg"
                  data-video-urls="assets/img/610c5007d3b7eea15c3e08db_virtual_room-transcode.mp4,assets/img/610c5007d3b7eea15c3e08db_virtual_room-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  id="video-2"
                  data-beta-bgvideo-upgrade="false"
                >
                  <video
                    id="521af6e6-4077-d783-c1f3-e19b2d8c9642-video"
                    autoPlay
                    loop
                    style={{
                      backgroundImage:
                        "url(_https_/uploads-ssl.webflow.com/60f5301e69763b1f3561fc2f/60f5445242eda32a81b73b34_virtual_room-poster-00001.jpg_)",
                    }}
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="assets/img/610c5007d3b7eea15c3e08db_virtual_room-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="assets/img/610c5007d3b7eea15c3e08db_virtual_room-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </div>
              <div className="a-right-flex reverse">
                <h2 className="a-h2 a-gradient-text">
                  Your virtual
                  <br />
                  writers’ room
                </h2>
                <div className="padding-40"></div>
                <p className="a-text-18">
                  Scren-Pla has real-time collaboration, like Google Docs.
                  Invite co-writers with a click. Give notes and manage them
                  right inside your script. Manage drafts effortlessly. Assign
                  writers, set deadlines, track progress.
                  <br />
                  <br />
                  <span className="a-semibold-text">
                    Everybody stays on the same page, crafting stories as a
                    team.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section a-pricing-section">
          <div className="a-container">
            <div className="a-pricing-home-component">
              <div className="center-block">
                <div className="a-text-21 a-purple-60-text a-bold-text">
                  Affordable for every budget
                </div>
                <div className="padding-24"></div>
              </div>
              <div className="w-layout-grid a-pricing-grid">
                <div className="a-pricing-card">
                  <div className="a-text-18 a-purple-text">Free</div>
                  <div className="padding-6"></div>
                  <div className="a-text-21 a-purple-60-text a-bold-text">
                    $0
                  </div>
                </div>
                <div className="a-pricing-card">
                  <div className="a-text-18 a-purple-text">Essential</div>
                  <div className="padding-6"></div>
                  <div className="a-text-21 a-purple-60-text a-bold-text">
                    $69/year
                  </div>
                </div>
                <div className="a-pricing-card">
                  <div className="a-text-18 a-purple-text">Pro</div>
                  <div className="padding-6"></div>
                  <div className="a-text-21 a-purple-60-text a-bold-text">
                    $99/year
                  </div>
                </div>
              </div>
              <div className="padding-24"></div>
              <div className="center-block">
                <div className="a-text-16 a-purple-60-text">
                  Either free or affordable, pay as you go pricing.
                  <a
                    href="pricing.html"
                    className="a-purple-60-text a-semibold-text"
                  >
                    View details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section a-pre-footer">
          <div className="a-container">
            <div className="a-pre-footer-banner">
              <div className="a-left-prefooter">
                <h4 className="a-h4">Ready to get started?</h4>
                <div className="padding-24"></div>
                <BasicModal position={"hero"} />

                <a
                  href="https://scren-pla.vercel.app/login"
                  className="a-button go-to-desk white w-button"
                >
                  Go To Desk
                </a>
                <div className="padding-15"></div>
                <div className="a--text-12 a-white-text">
                  No credit card required
                </div>
              </div>
              <div className="a-right-prefooter">
                <div className="testimonial-block">
                  <div className="testimonial-image-block">
                    <img
                      src="assets/img/footer1.png"
                      loading="lazy"
                      alt=""
                      className="testimonial-headshot"
                    />
                  </div>
                  <div className="testimonial-middle-block">
                    <p className="white">
                      The most efficient, elegant, intuitive, and all around
                      user-friendly screenwriting software {`I've`} ever used —
                      and
                      {`I've`} used them all.
                    </p>
                  </div>
                  <div className="testimonial-bottom-block">
                    <div className="testimonial-text-small">Anna Klassen</div>
                    <div className="testimonial-text-small">
                      Screenwriter (Netflix)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HeroSection;
