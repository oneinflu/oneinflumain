export default function Breadcrumb() {
  return (
      <section className="breadcrumb-area section">
            <div
              className="breadcrumb-area__wrapper"
              data-bg-src="/assets/images/breadcrumb/breadcrumb-bg.png"
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="breadcrumb-area__content">
                      <h1 className="breadcrumb-title text-anime">Our Blog</h1>
                      <nav className="breadcrumb-nav" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href='/'>Home</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Our Blog
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}
