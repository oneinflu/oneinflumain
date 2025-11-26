export default function AboutBanner() {
  return (
     <section className="appreciation section section-padding-top-bottom">
            <div className="container">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="appreciation__content">
                    <div className="section-header">
                      <h2 className="section-title text-start text-anime">
                        Our Priority Tools Built

For the Creator Economy
                      </h2>
                      <p>
                     Manage creators, clients, campaigns, and collaborations from one connected CRM.
Centralize every profile, deliverable, approval, and payment for easier workflows.
                      </p>
                    </div>
                    <div className="automation">
                      <h6 className="automation-title">Collaboration & Workflow Automation</h6>
                      <p>
                       Streamline how your team works with creators, clients, and partners.
Assign tasks, track deliverables, manage timelines, and keep everyone aligned effortlessly.
                      </p>
                    </div>
                    <div className="lead-management">
                      <h6 className="lead-management-title">Lead & Client Pipeline Management</h6>
                      <p>
                        Capture new leads, move them through your pipeline, send proposals, and convert them into clients.
Track every interaction in one dashboard to grow your agency faster.
                      </p>
                    </div>
                    <div className="btn-customer">
                      <a className='saaslyn-1-btn v2' href='https://console.oneinflu.com/signup'>Get Started Free</a
                      >
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="appreciation__thumb scale">
                    <img
                      src="/assets/images/appreciation/appreciation-thumb.png"
                      alt="appreciation"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}
