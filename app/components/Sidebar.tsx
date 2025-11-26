'use client'
export default function Sidebar() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">
          <a className='header__logo' href='/'>
            <img src="assets/images/logo.svg" alt="logo" />
          </a>
        </h5>
        <button
          type="button"
          className="hamburger-menu-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="fa-duotone fa-regular fa-xmark"></i>
        </button>
      </div>
      <div className="offcanvas-menu">
        
        <nav>
          <ul className="saaslyn__nav-list">
            <li className="saaslyn__nav-item">
              <a href="#" className="saaslyn__nav-link" onClick={(e) => e.preventDefault()}>
                Demo
                <span className="saaslyn__toggle-btn"></span>
              </a>
              <ul className="saaslyn__submenu">
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='/'>CRM Software</a>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-2.html'>Finance Apps</a>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-3.html'>AI Chatbot</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-4.html'>AI Agency</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-5.html'>AI Image Generator</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-6.html'>AI Image Generator 2</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-7.html'>AI Image Generator 3</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-8.html'>Photostock</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-9.html'>AI Customer Service</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-10.html'>AI Content Generator</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-11.html'>Corporate Agency</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-12.html'>Sass Application</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-13.html'>AI Consultant</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-14.html'>SEO Strategies</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-15.html'>Mobile Apps</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-16.html'>Finance Apps 2</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-17.html'>AI Apps</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-18.html'>Digital Marketing</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-19.html'>Seo Marketing</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-20.html'>Business Consultancy</a> 
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='index-21.html'>Finance Consultancy</a> 
                </li>
              </ul>
            </li>
            <li className="saaslyn__nav-item">
              <a className='saaslyn__nav-link' href='about.html'>About</a>
            </li>
            <li className="saaslyn__nav-item">
              <a href="#" className="saaslyn__nav-link" onClick={(e) => e.preventDefault()}>
                Pages
                <span className="saaslyn__toggle-btn"></span>
              </a>
              <ul className="saaslyn__submenu">
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='about.html'>About</a>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='features.html'>Features</a
                  >
                </li>
                <li className="saaslyn__submenu-item">
                  <a href="#" className="saaslyn__nav-link" onClick={(e) => e.preventDefault()}>
                    Services
                    <span className="saaslyn__toggle-btn"></span>
                  </a>
                  <ul className="saaslyn__submenu">
                    <li className="saaslyn__submenu-item">
                      <a className='saaslyn__nav-link' href='service.html'>Services</a
                      >
                    </li>
                    <li className="saaslyn__submenu-item">
                      <a className='saaslyn__nav-link' href='service-details.html'>Service Details</a
                      >
                    </li>
                  </ul>
                </li>
                <li className="saaslyn__submenu-item">
                  <a href="#" className="saaslyn__nav-link" onClick={(e) => e.preventDefault()}>
                    Team
                    <span className="saaslyn__toggle-btn"></span>
                  </a>
                  <ul className="saaslyn__submenu">
                    <li className="saaslyn__submenu-item">
                      <a className='saaslyn__nav-link' href='team.html'>Team</a>
                    </li>
                    <li className="saaslyn__submenu-item">
                      <a className='saaslyn__nav-link' href='team-details.html'>Team Details</a
                      >
                    </li>
                  </ul>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='pricing.html'>Pricing</a>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='faq.html'>FAQ</a>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='login.html'>Login</a>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='sign-up.html'>Sign Up</a>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='terms-condition.html'>Terms & Condition</a>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='privacy-policy.html'>Privacy Policy.html</a>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='404.html'>Error 404</a>
                </li>
              </ul>
            </li>

            <li className="saaslyn__nav-item">
              <a href="#" className="saaslyn__nav-link" onClick={(e) => e.preventDefault()}>
                Blogs
                <span className="saaslyn__toggle-btn"></span>
              </a>
              <ul className="saaslyn__submenu">
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='blog.html'>Blog</a>
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='blog-standard.html'>Blog Standard</a
                  >
                </li>
                <li className="saaslyn__submenu-item">
                  <a className='saaslyn__nav-link' href='blog-details.html'>Blog Details</a
                  >
                </li>
              </ul>
            </li>

            <li className="saaslyn__nav-item">
              <a className='saaslyn__nav-link' href='contact.html'>Contact</a>
            </li>
          </ul>
        </nav>
       
      </div>
      <div className="offcanvas-body">
        <p className="info">
          SaasLyn is a modern and responsive HTML template built for SaaS, AI,
          and tech startups. It helps you showcase your products, features, and
          services with a sleek design and cutting-edge performance.
        </p>
        <div className="offcanvas-img">
          <img
            src="assets/images/sideber/sideber.webp"
            alt="sideber-img"
            className="w-100"
          />
        </div>

        <div className="contact-area">
          <h4 className="title">Contact Info</h4>
          <ul>
            <li className="d-flex align-items-center">
              <div className="icon">
                <i className="fal fa-map-marker-alt"></i>
              </div>
              <div className="text">
                <a target="_blank" href="#"
                  >Main Street, Melbourne, Australia</a
                >
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className="icon">
                <i className="fal fa-envelope"></i>
              </div>
              <div className="text">
                <a href="mailto:info@example.com"
                  ><span className="mailto:info@example.com"
                    >info@example.com</span
                  >
                  </a>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className="icon">
                <i className="fal fa-clock"></i>
              </div>
              <div className="text">
                <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className="icon">
                <i className="far fa-phone"></i>
              </div>
              <div className="text">
                <a href="tel:+11002345909">+11002345909</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="social-area">
          <h4 className="title">Social Share</h4>
          <div className="social-icons v2">
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
        <div className="saaslyn__mobile-menu-copyright">
          <p className="saaslyn__mobile-menu-copyright-text">
            © <span className="current-year"></span> <a href="/">SaasLyn</a> . All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
