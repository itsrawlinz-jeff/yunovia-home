import Home3Footer from "@/components/Footer/Home3Footer";
import Header3 from "@/components/header/Header3";
import Link from "next/link";
import React from "react";


const page = () => {
    
  return (
    <>
      <Header3 />

      <div>
        {/* Breadcrumb Section Start */}
        <div className="breadcrumb-section mb-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="banner-content">
                  <h1>Industry Details</h1>
                  <ul className="breadcrumb-list">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <svg
                        width={25}
                        height={6}
                        viewBox="0 0 25 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                      </svg>
                      Industry Details
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumb Section End */}
        {/* Industry Details Page Start */}
        <div className="industry-details-page mb-130">
          <div className="container">
            <div className="details-content-wrap">
              <div className="post-thumb mb-70">
                <img src="/assets/img/innerpages/industry-krep.png" alt="" />
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <h2>Platform: Krep Software Solutions</h2>
                  <span className="line-break" />
                  <p>
                    Yunovia equips businesses with scalable, locally relevant
                    digital tools to manage and automate their daily operations.
                    Krep Software is an all-in-one solution tailored for SMEs
                    across various sectors.
                  </p>
                  <span className="line-break"></span>
                  <p>
                    Our Enterprise Software solutions integrate all core
                    business functions—procurement, inventory, finance, and
                    operations—into a centralized ERP dashboard to enhance
                    accuracy, efficiency, and informed decision-making. The CRM
                    system empowers businesses to manage leads, customer
                    interactions, feedback, and sales cycles, fostering stronger
                    client relationships and sustained growth. HRM features
                    support the entire employee lifecycle, from recruitment and
                    onboarding to attendance, payroll, leave tracking, and
                    performance evaluations, all accessible in real time.
                    Additionally, the Accounting & Finance module automates
                    invoicing, expense management, tax compliance, and
                    reconciliations, with tailored support for Kenyan SMEs and
                    local regulatory needs.
                  </p>
                  <span className="line-break" />
                  <span className="line-break" />
                </div>
              </div>
              <span className="line-break" />
              <div className="row justify-content-center mb-130">
                <div className="col-xl-8 col-lg-10">
                  <h2>Our Goal, Our Achievement</h2>
                  <span className="line-break" />
                  <p>
                    To empower businesses with intelligent, easy-to-use, and
                    affordable enterprise tools that simplify operations,
                    enhance productivity, and support sustainable growth — all
                    tailored to the Kenyan business environment. Krep Software
                    has successfully digitized operations for over 150+ SMEs
                    across Kenya by delivering custom ERP, CRM, HRM, and
                    Accounting systems. We've enabled our clients to automate
                    key processes, reduce manual errors by up to 60%, improve
                    payroll efficiency, and boost customer engagement through
                    streamlined CRM workflows. Today, Krep stands as a trusted
                    partner in enterprise transformation, serving industries
                    such as retail, logistics, professional services, and
                    manufacturing.
                  </p>
                  <div className="tag-and-social-area">
                    <div className="tag-area">
                      <h6>Tag:</h6>
                      <ul className="tag-list">
                        <li>
                          <Link href="/industry">Run Your Business Better</Link>
                        </li>
                        <li>
                          <Link href="/industry">Built for Progress.</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="social-area">
                      <h6>Share:</h6>
                      <ul className="social-list">
                        <li>
                          <a href="https://www.tiktok.com/@yunoviagroup?_t=ZM-8xkUAD3hfBo&_r=1">
                            <i className="bx bxl-tiktok" />
                          </a>
                        </li>

                        <li>
                          <a href="https://www.linkedin.com/posts/yunovia-group_your-digital-business-partner-ai-fintech-activity-7346905121655603202-G4kc?utm_source=share&utm_medium=member_android&rcm=ACoAAE0f5MgBasxOoQhuusyXgJclEjITee0SwQc">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/@YunoviaGroup">
                            <i className="bx bxl-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/yunoviagroup/profilecard/?igsh=Z3ltNDMwMjAwaGoz">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://x.com/Yunoviagroup?t=L_PQusdCUFgjnvs9wyLEGA&s=09">
                            <i className="bx bxl-twitter" />
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
        {/* Industry Details Page End */}
      </div>

      <Home3Footer />
    </>
  );
};

export default page;
