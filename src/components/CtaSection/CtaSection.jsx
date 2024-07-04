/* eslint-disable react/no-unescaped-entities */

import BasicModal from "../../shared/HeroSection/MyModal/MyModal"


const CtaSection = () => {
  return (
    <>
        <div className="section a-pre-footer">
          <div className="a-container">
            <div className="a-pre-footer-banner">
              <div className="a-left-prefooter">
                <h4 className="a-h4">Ready to get started?</h4>
                <div className="padding-24"></div>
                <BasicModal position="cta" />

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
    </>
  )
}

export default CtaSection