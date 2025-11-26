'use client'
export default function Sidebar() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">
          <a className='header__logo' href='/'>
            <img src="/assets/images/logo.svg" alt="logo" />
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
              <a className='saaslyn__nav-link' href='/'>Home</a>
            </li>
            <li className="saaslyn__nav-item">
              <a className='saaslyn__nav-link' href='/about/'>About</a>
            </li>
            <li className="saaslyn__nav-item">
              <a className='saaslyn__nav-link' href='/blog/'>Blogs</a>
            </li>
            <li className="saaslyn__nav-item">
              <a className='saaslyn__nav-link' href='/support/'>Support</a>
            </li>
          </ul>
        </nav>
        <div className="header-one__menu-btns mt-3">
          <div className="buttons">
            <a className='saaslyn-2-btn' href='/get-started'>Try for free</a>
            <a className='saaslyn-1-btn v2' href='/login'>Login</a>
          </div>
        </div>
       
      </div>
      <div className="offcanvas-body">
        <p className="info">
          INFLU unifies creator portfolios, client details, briefs, deliverables,
          approvals, invoices, and payments into one clean dashboard — so teams
          can manage talent, clients, and campaigns seamlessly.
        </p>
        <div className="offcanvas-img">
          <img
            src="/assets/images/new-images-v2/about-cta.png"
            alt="sidebar-img"
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
                  >Main Street, Melbourne, Australia</a>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className="icon">
                <i className="fal fa-envelope"></i>
              </div>
              <div className="text">
                <a href="mailto:info@example.com"
                  ><span className="mailto:info@example.com"
                    >info@oneinflu.com</span>
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
            © <span className="current-year"></span> <a href="/">INFLU</a> . All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
