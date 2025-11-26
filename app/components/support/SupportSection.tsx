export default function SupportSection() {
  return (
    <section
            className="contact section section-padding-top-bottom overflow-hidden"
          >
            <div className="container section-padding-bottom">
              <div className="row g-4">
                <div className="col-lg-6 order-lg-2">
                  <div className="contact__info">
                    <div className="info-list">
                      <div className="info-item">
                        <div className="item-icon">
                          <i className="fa-light fa-phone-volume"></i>
                        </div>
                        <div className="item-content">
                          <h6 className="item-title">Call Us 7/24</h6>
                          <a href="tel:+2085550112">+208-555-0112</a>
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="item-icon">
                          <i className="fa-sharp fa-light fa-circle-envelope"></i>
                        </div>
                        <div className="item-content">
                          <h6 className="item-title">Make a Quote</h6>
                          <a href="mailto:infotek@Gmail.com"
                            >infotek@Gmail.com</a >
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="item-icon">
                          <i className="fa-sharp fa-light fa-location-dot"></i>
                        </div>
                        <div className="item-content">
                          <h6 className="item-title">Location</h6>
                          <a
                            href="https://maps.app.goo.gl/ZYSz1E2ovusuC2G69"
                            target="_blank"
                            >4517 Washington Ave.</a >
                        </div>
                      </div>
                    </div>
                    <div className="info-thumb scale">
                      <img
                        src="assets/images/contact/contact-thumb.png"
                        alt="contact-thumb"
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact__form-area">
                    <h3 className="form-title text-anime">Ready to get started?</h3>
                    <p>
                     From setup to campaigns to payments, we’re here to make your experience smooth.
Get quick assistance from our dedicated support team anytime.
                    </p>

                    <form
                      action="/"
                      className="contact__form"
                      autoComplete="off"
                    >
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="input-group">
                            <label htmlFor="name" className="form-label"
                              >Your Name*</label
                            >
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Your Name"
                              required
                              autoComplete="new-name"
                              autoCorrect="off"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-group">
                            <label htmlFor="email" className="form-label"
                              >Your Email*</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Your Email"
                              required
                              autoCorrect="off"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <label htmlFor="message" className="form-label"
                              >Write Message*</label>
                            <textarea
                              className="form-control"
                              id="message"
                              name="message"
                              rows={6}
                              placeholder="Write Message"
                              required
                              autoCorrect="off"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="button-area">
                        <button type="submit" className="saaslyn-6-btn">
                          Submit Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid px-0">
              <div className="row">
                <div className="col-12">
                  <iframe
                    className="contact__map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.891503112!2d87.70352446720406!3d23.489442187647825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1761018733651!5m2!1sen!2sbd"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
  );
}
