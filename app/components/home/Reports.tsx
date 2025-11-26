export default function Reports() {
  return (
   <section className="reports section section-padding-top-bottom">
            <img
              src="assets/images/reports/shape-1.png"
              alt="reports-shape-1"
              className="shape-1"
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-8 col-xxl-7">
                  <div className="section-header">
                    <h2 className="section-title text-anime">
                     Collaborate Seamlessly &

Showcase Your Best Work
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row row-padding-top">
                <div className="col-12">
                  <div className="reports__item-wrapper">
                    <div className="reports__item">
                      <div className="item-thumb">
                    
                        <canvas id="crmBarChart"></canvas>
                      </div>
                      <div className="item-content">
                        <h3 className="title text-anime">
                         Powerful Collaboration

Across Teams & Creators
                        </h3>
                        <p>
                        Track creator performance, deliverable progress, approvals, and team activity in real time.
Bring everyone—clients, creators, managers—into one smooth workflow.
                        </p>
                      </div>
                    </div>
                    <div className="reports__item">
                      <div className="item-content">
                        <h3 className="title text-anime">
                         Portfolio Management Made Simple
                        </h3>
                        <p>
                          Create stunning creator and agency portfolios with social stats, past projects,
case studies, deliverables, and brand collaborations — all auto-organized.
                        </p>
                      </div>
                      <div className="item-thumb">
                        
                        <canvas id="workflowBarChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="assets/images/reports/shape-2.png"
              alt="reports-shape-2"
              className="shape-2"
            />
          </section>
  );
}