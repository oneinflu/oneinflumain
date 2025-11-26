/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
export default function Footer() {
  return (
    <footer className="footer-one v2 section section-padding-top">
          <div className="container">
            <div className="footer-one__wrapper">
              <img
                src="/assets/images/footer-long-text.svg"
                alt="footer-long-text"
                className="footer-long-text"
              />
              <div className="row g-4">
                <div className="col-lg-5">
                  <div className="footer-one__left">
                    <a className='logo' href='/'>
                      <img src="/assets/images/logo.svg" width={80} alt="INFLU" />
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
                    data-bg-src="/assets/images/footer/footer-content-bg.png"
                  >
                    <div className="info-area">
                      <div className="links-group">
                        <h6 className="link-title">Company</h6>

                        <div className="link-list">
                          <ul>
                            
                          
                           
                            <li><a href='/support'>Support</a></li>
                            <li><a href="/">Careers</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="links-group">
                        <h6 className="link-title">Links</h6>

                        <div className="link-list">
                          <ul>
                           
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='/terms-and-conditions'>Terms & Conditions</a></li>
                          
                            <li>
                              <a href='/privacy-policy'>Privacy Policy</a>
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
                                href=""
                                >Hyderabad, India</a>
                            </li>
                            <li>
                              <a href="mailto:support@oneinflu.com"
                                >Support@oneinflu.com</a>
                            </li>
                            <li>
                              <a href="tel:+919160266686"
                                >+91 91 6026 668 6</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-content">
                      <p className="copy-right">
                        &copy;&nbsp;Copyright&nbsp;<span
                          className="current-year"
                        >2025</span>&nbsp;<a href='/'>One Influ</a> . Tech.
                      </p>
                      <div className="social-icons">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/iinflu" target="_blank">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/oneinfluapp/" target="_blank">
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
