export default function Faqs() {
  return (
     <section className="faq section section-padding-top-bottom">
            <div className="container">
              <div className="row g-3 justify-content-between align-items-end">
                <div className="col-md-6 col-lg-5">
                  <div className="section-header">
                    <span className="section-sub-title">FAQ</span>
                    <h2 className="section-title text-start text-anime">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="section-header">
                    <p>
                      Explore answers to commonly asked questions in Outgrid’s
                      comprehensive FAQ section.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row row-padding-top">
                <div className="col-lg-12">
                  <div className="faq__accordion accordion" id="faqExample">
                    <div className="accordion-item">
                      <h6 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                        How does INFLU help agencies manage creators and clients?
                        </button>
                      </h6>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faqExample"
                      >
                        <div className="accordion-body">
                         INFLU unifies creator profiles, client details, briefs, deliverables, approvals, invoices, and payments into one clean dashboard. Agencies can easily track work, assign tasks, manage communication, and keep every creator and client aligned without juggling multiple tools.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Can creators and agencies collaborate inside the platform?
                        </button>
                      </h6>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqExample"
                      >
                        <div className="accordion-body">
                          Yes. INFLU is built for real-time collaboration. Creators, managers, and clients can work together on projects, share updates, upload deliverables, request revisions, and track progress—ensuring everyone stays in sync throughout the workflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How does portfolio management work in INFLU?
                        </button>
                      </h6>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqExample"
                      >
                        <div className="accordion-body">
                       Creators and agencies get auto-structured portfolios with social analytics, categories, niches, case studies, past clients, uploaded media, and project stats. You can share your portfolio with brands in one click to increase your chances of getting hired.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                         Does INFLU support invoicing and payment tracking?
                        </button>
                      </h6>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqExample"
                      >
                        <div className="accordion-body">
                          Absolutely. You can generate invoices, link them to milestones, track payment status, verify receipts, and manage GST/PAN details. INFLU helps creators and agencies get paid faster with clear financial transparency.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}