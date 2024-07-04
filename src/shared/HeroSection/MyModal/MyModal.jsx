import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import "../../../../public/assets/css/scren-pla.css";
import "../../../../public/assets/css/pricing.css";

// eslint-disable-next-line react/prop-types
export default function BasicModal({ scrolling, position }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    window.location.href = "https://scren-pla.vercel.app/signup";
  };
  return (
    <div>
      {position === "navbar" && (
        <div
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
          id="w-node-_73678bd2-18af-0daa-11e4-5a5095c6009b-459dbb38"
          data-w-id="73678bd2-18af-0daa-11e4-5a5095c6009b"
          className={`button sign-up-btn  small w-inline-block${
            scrolling ? " colorfullbtn" : ""
          }`}
        >
          <div className="">Start writing</div>
        </div>
      )}
      {position === "cta" && (
        <div
          onClick={handleOpen}
          className="a-button sign-up-btn white w-button"
        >
          Start Writing
        </div>
      )}
      {position === "hero" && (
        <div
          onClick={handleOpen}
          className="a-button sign-up-btn white w-button"
        >
          Start Writing
        </div>
      )}
      {position === "hero-home" && (
        <div onClick={handleOpen} className="a-button sign-up-btn w-button">
          Start Writing Free
        </div>
      )}
      {position === "pricing" && (
        <div
          style={{ cursor: "pointer", width: "100%" }}
          onClick={handleOpen}
          data-w-id="07c4727a-44b5-5444-d6e5-c28ca3ee8ef3"
          className="button sign-up-btn pricing-hero w-inline-block"
        >
          <div className="button-text">Start writing</div>
          <div className="button-gradient"></div>
        </div>
      )}
      {position === "download" && (
        <div
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
          data-w-id="86550a8b-b594-185a-a684-26dde2f59e04"
          className="button sign-up-btn margin-24 large w-inline-block"
        >
          <div className="button-text">Start writing</div>
          <div className="button-gradient"></div>
        </div>
      )}
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <div id="signup-modal" className="">
            <div className="popup-form ">
              <div className="">
                <img
                  src="assets/img/610c5007d3b7ee399a3e08f1_X.svg"
                  loading="lazy"
                  alt="click to close"
                  className="close-icon"
                />
              </div>
              <div className="popup-text">
                <div className="form-heading">Sign up for free</div>
                <p className="form-paragraf">
                  Scren-Pla is the new industry standard in screenwriting.
                  <br />
                  We go beyond formatting, with next-generation story-building
                  <br />
                  and real-time collaboration.
                </p>
              </div>
              <form name="wf-form-SignupForm" className="form-2">
                <label htmlFor="email" className="field-label">
                  Your email address
                </label>
                <input
                  type="email"
                  className="text-field w-input"
                  autoFocus
                  maxLength="256"
                  name="email"
                  placeholder="me@example.com"
                  id="email"
                  required
                />
                <input
                  type="text"
                  className="firstnamefield w-input"
                  autoComplete="off"
                  maxLength="256"
                  name="first_name"
                  placeholder="Peter Doe"
                  id="first_name"
                />
                <div className="hide w-embed">
                  <input type="hidden" id="source" name="source" value="" />
                </div>
                <input
                  type="submit"
                  onClick={handleSubmit}
                  value="Continue"
                  data-wait="Please wait..."
                  className="form-button w-button"
                />
                <div className="sign-up-divider-block">
                  <div className="line-signup"></div>
                  <label
                    htmlFor="email-2"
                    className="field-label center no-margin"
                  >
                    or
                  </label>
                  <div className="line-signup"></div>
                </div>
                <a
                  href="https://scren-pla.vercel.app/auth/apple"
                  className="button-stores w-inline-block"
                >
                  <img
                    alt="apple icon"
                    loading="lazy"
                    src="assets/img/62c6ff9d8b9052948fe16519_apple.svg"
                    className="icon-store apple"
                  />
                  <div>Sign In With Apple</div>
                </a>
                <a
                  href="https://scren-pla.vercel.app/auth/google-signin"
                  className="button-stores w-inline-block"
                >
                  <img
                    alt="google icon"
                    loading="lazy"
                    src="assets/img/62c6ff9d8ed918956f72da74_google.svg"
                    className="icon-store google"
                  />
                  <div>Sign In With Google</div>
                </a>
              </form>
              <div className="success-message w-form-done">
                <div className="succes-message-text">
                  Thank you! Your submission has been received!
                </div>
              </div>
              <div className="error-message w-form-fail">
                <div className="form-error-message">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
              <div className="captcha">
                <div>
                  By clicking {`"Continue"`} or {`"Sign In with Apple/Google"`}{" "}
                  you
                  <br />
                  agree to our{" "}
                  <a href="terms" className="terms-link">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="privacy.html" className="terms-link">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
