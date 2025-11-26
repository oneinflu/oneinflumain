
export default function Header() {
  return (
    <header className="header-one section">
      <div className="fix-menu">
        <div className="container">
          <div className="header-one__main">
            <a className='header-one__logo' href='/'>
              <img src="/assets/images/logo.svg" width="80" alt="logo" />
            </a>
            <div className="header-one__main-menu menu-right">
              <nav className="circle">
                <ul>
                  <li className="has-child-menu-mega-menu active">
                    <a href="/">Home</a>
                 
                 
                  </li>
                  <li>
                    <a href='/about/'> About </a>
                  </li>
                 
                  <li>
                    <a href="/blog/">Blogs</a>
                    
                  </li>
                  <li>
                    <a href='/support/'>Support</a>
                  </li>
                </ul>
              </nav>
              <div className="header-one__menu-btns">
                <div className="buttons">
                  <a className='saaslyn-2-btn' href='/get-started'>Try for free</a>
                  <a className='saaslyn-1-btn v2' href='/login'>Login</a>
                </div>
                <button
                  className="hamburger-menu"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
