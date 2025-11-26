export default function Blogs() {
  return (
       <section className="blog section section-padding-top-bottom">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="section-header">
                    <h2 className="section-title text-anime">Recent Update Blog</h2>
                  </div>
                </div>
              </div>
              <div className="row row-padding-top">
                <div className="col-12">
                  <div className="blog__item-wrapper">
                    <div className="blog__item fade-anim" data-delay="0.15">
                      <a className='blog-thumb scale' href='blog-details.html'>
                        <img
                          src="assets/images/blog/blog-thumb-1.png"
                          alt="blog-thumb"
                          className="w-100"
                        />
                      </a>
                      <div className="blog-content">
                        <div className="meta">
                          <ul>
                            <li>
                              <a className='category' href='blog.html'>CRM Saas</a
                              >
                            </li>
                            <li>
                              <span className="date">May 01, 2024</span>
                            </li>
                          </ul>
                        </div>
                        <h6 className="blog-title">
                          <a href='blog-details.html'>
                            Top Tools and Resources for Web Desingers.
                          </a>
                        </h6>
                        <p>
                          Etiam ullamcorper malasada elementum. In molestie
                          pharetra lacus sit abet protium elit.
                        </p>
                        <a className='saaslyn-1-btn v2' href='blog-details.html'>Read More</a
                        >
                      </div>
                    </div>
                    <div className="blog__item fade-anim" data-delay="0.3">
                      <a className='blog-thumb scale' href='blog-details.html'>
                        <img
                          src="assets/images/blog/blog-thumb-2.png"
                          alt="blog-thumb"
                          className="w-100"
                        />
                      </a>
                      <div className="blog-content">
                        <div className="meta">
                          <ul>
                            <li>
                              <a className='category' href='blog.html'>CRM Saas</a
                              >
                            </li>
                            <li>
                              <span className="date">May 01, 2024</span>
                            </li>
                          </ul>
                        </div>
                        <h6 className="blog-title">
                          <a href='blog-details.html'>
                            The Benefits of Integration Chatbots into Your
                            Website.
                          </a>
                        </h6>
                        <p>
                          Etiam ullamcorper malasada elementum. In molestie
                          pharetra lacus sit abet protium elit.
                        </p>
                        <a className='saaslyn-1-btn v2' href='blog-details.html'>Read More</a
                        >
                      </div>
                    </div>
                    <div className="blog__item fade-anim" data-delay="0.45">
                      <a className='blog-thumb scale' href='blog-details.html'>
                        <img
                          src="assets/images/blog/blog-thumb-3.png"
                          alt="blog-thumb"
                          className="w-100"
                        />
                      </a>
                      <div className="blog-content">
                        <div className="meta">
                          <ul>
                            <li>
                              <a className='category' href='blog.html'>CRM Saas</a
                              >
                            </li>
                            <li>
                              <span className="date">May 01, 2024</span>
                            </li>
                          </ul>
                        </div>
                        <h6 className="blog-title">
                          <a href='blog-details.html'>
                            How to Create Compelling Content for your website.
                          </a>
                        </h6>
                        <p>
                          Etiam ullamcorper malasada elementum. In molestie
                          pharetra lacus sit abet protium elit.
                        </p>
                        <a className='saaslyn-1-btn v2' href='blog-details.html'>Read More</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}