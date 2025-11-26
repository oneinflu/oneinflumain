export default function Footer() {
  return (
    <footer className="footer-one v2 section section-padding-top">
          <div className="container">
            <div className="footer-one__wrapper">
              <img
                src="assets/images/footer-long-text.svg"
                alt="footer-long-text"
                className="footer-long-text"
              />
              <div className="row g-4">
                <div className="col-lg-5">
                  <div className="footer-one__left">
                    <a className='logo' href='/'>
                      <img src="assets/images/logo.svg" width={80} alt="SaasLyn" />
                    </a>
                    <h2 className="join-title text-anime">Join the circle.</h2>
                    <a className='join-btn' href='https://console.oneinflu.com/signup'>
                      <span className="text">Get Started</span>
                      <span className="icon-box">
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div
                    className="footer-one__right"
                    data-bg-src="./assets/images/footer/footer-content-bg.png"
                  >
                    <div className="info-area">
                      <div className="links-group">
                        <h6 className="link-title">Company</h6>

                        <div className="link-list">
                          <ul>
                            
                            <li><a href='/faqs'>Faq’s</a></li>
                            <li><a href='/blog'>Latest News</a></li>
                            <li><a href='/support'>Support</a></li>
                            <li><a href="/join-us">Careers</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="links-group">
                        <h6 className="link-title">Links</h6>

                        <div className="link-list">
                          <ul>
                            <li><a href='/pricing'>Pricing Plan</a></li>
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='/terms-and-conditions'>Term & Conditions</a></li>
                          
                            <li>
                              <a href='/privacy-policy'>Privacy Policy</a>
                            </li>
                             <li>
                              <a href='/user-agreement'>User Agreement</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="links-group">
                        <h6 className="link-title">Our Office</h6>

                        <div className="link-list">
                          <ul>
                            <li>
                              <a
                                href="https://maps.app.goo.gl/nKez388NmcRRqRvQ7"
                                >Suite 130 12300 Saint-Martin West Blvd. laval,
                                Quebc USA</a
                              >
                            </li>
                            <li>
                              <a href="mailto:support@example.com"
                                >Support@example.com</a
                              >
                            </li>
                            <li>
                              <a href="tel:+8812331233332"
                                >(+88) 1233 123 333 2</a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-content">
                      <p className="copy-right">
                        &copy;&nbsp;Copyright&nbsp;<span
                          className="current-year"
                        ></span
                        >&nbsp;<a href='/'>Influ Media</a> . Tech.
                      </p>
                      <div className="social-icons">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-dribbble"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
  );
}