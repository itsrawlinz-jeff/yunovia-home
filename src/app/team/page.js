"use client";
import Counter from "@/components/common/Counter";
import GallerySection from "@/components/common/GallerySection";
import Home4Footer from "@/components/Footer/Home4Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import React, { useRef } from "react";

const TeamPage = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  return (
    <div>
      <Header />
      {/* Breadcrumb Section Start */}
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="banner-content">
                <h1>Meet the Team Driving Digital Innovation</h1>
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
                    Team-01
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}
      {/* Team Page Start */}
      <div className="team-page-banner-section mb-130">
        <div className="container">
          <div className="team-page-banner-img">
            <img src="/assets/img/meetTeam.jpg" alt="" />
          </div>
          <div className="team-page-counter-area">
            <div className="row g-4">
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter">
                  <div className="number">
                    <Counter
                      start={0}
                      end={50}
                      speed={15}
                      forwardedRef={ref1}
                      as="h2"
                      className="counter"
                    />
                    <span>+</span>
                  </div>
                  <span>
                    Professional <br />
                    Expert
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter two">
                  <div className="number">
                    <Counter
                      start={0}
                      end={134}
                      speed={10}
                      forwardedRef={ref2}
                      as="h2"
                      className="counter"
                    />
                    <span>+</span>
                  </div>
                  <span>
                    Completed <br />
                    Projects
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter three">
                  <div className="number">
                    <Counter
                      start={0}
                      end={98}
                      speed={10}
                      forwardedRef={ref3}
                      as="h2"
                      className="counter"
                    />
                    <span>%</span>
                  </div>
                  <span>
                    Client <br />
                    Retention Rate
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter four">
                  <div className="number">
                    <Counter
                      start={0}
                      end={6}
                      speed={50}
                      forwardedRef={ref4}
                      as="h2"
                      className="counter"
                    />
                    <span>+</span>
                  </div>
                  <span>
                    Client <br />
                    Retention Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-page-content-banner">
        <div className="container">
          <div className="banner-wrapper">
            <div className="row gy-4 justify-content-between">
              <div
                className="col-xl-3 col-lg-4 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <h2>Team Philosophy.</h2>
              </div>
              <div
                className="col-xl-5 col-lg-6 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="banner-content">
                  <span>
                    “ We believe in bespoke strategies, designed specifically
                    for your business needs.”
                  </span>
                  <p>
                    We are a close-knit team of digital enthusiasts with a
                    passion for helping brands succeed. Every team member plays
                    a unique role in bringing fresh ideas, innovative
                    strategies, and exceptional results to our clients."
                  </p>
                  <Link href="/career" className="primary-btn3 three btn-hover">
                    Join Our Team
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span />
                  </Link>
                </div>
              </div>
            </div>
            <svg
              className="vector"
              width={464}
              height={232}
              viewBox="0 0 464 232"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M116 0.5C179.789 0.5 231.5 52.2113 231.5 116C231.5 179.789 179.789 231.5 116 231.5C52.2113 231.5 0.5 179.789 0.5 116C0.5 52.2113 52.2113 0.5 116 0.5ZM232.5 231.499V116V0.501059C296.059 0.770439 347.5 52.3781 347.5 116C347.5 179.622 296.059 231.23 232.5 231.499ZM348.5 0.501059C412.059 0.770439 463.5 52.3781 463.5 116C463.5 179.622 412.059 231.23 348.5 231.499V116V0.501059Z" />
            </svg>
          </div>
        </div>
      </div>
      <span className="team-page-line-break" />
      <div className="team-page-content-banner mb-130">
        <div className="container">
          <div className="row gy-5 justify-content-between">
            <div
              className="col-xl-3 col-lg-4 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h2>
                What <br /> Drives Us.
              </h2>
            </div>
            <div
              className="col-xl-5 col-lg-6 wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="banner-content">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Innovation
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Innovation is embedded in our culture. We continually
                        explore emerging technologies to deliver transformative
                        digital experiences.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Client-Centered Approach
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Our clients are our partners. Every solution is tailored
                        to meet their unique vision and business objectives.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Collaboration
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Success is a team sport. We work side‑by‑side with our
                        clients and within our multidisciplinary team to build
                        smart, scalable solutions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Continuous Improvement
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We believe there’s always a better way. Our team is
                        committed to learning, evolving, and improving with
                        every project.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="team-card-section mb-130">
                <div className="container">
                    <div className="row justify-content-center mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-5">
                            <div className="section-title three text-lg-start text-center">
                                <h2>Our Leadership</h2>
                                <p>Smart solution to build a outstanding performance easily.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5">
                        
                        
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="team-card two">
                                <div className="team-img">
                                    <Link href="/team/details"><img src="/assets/img/home4/team-img3.png" alt="" /></Link>
                                </div>
                                <div className="team-content">
                                    <h5><Link href="/team/details">Eric Waruingi</Link></h5>
                                    <span>Chief Operating Officer</span>
                                    <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                    </svg>
                                    <ul className="social-list">
                                        <li>
                                            <a href="https://www.linkedin.com/" className="social-area">
                                                <div className="icon">
                                                    <i className="bx bxl-linkedin" />
                                                </div>
                                                <div className="content">
                                                    <span>LinkedIn</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" className="social-area">
                                                <div className="icon">
                                                    <i className="bx bxl-facebook" />
                                                </div>
                                                <div className="content">
                                                    <span>Facebook</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="team-card two">
                                <div className="team-img">
                                    <Link href="/team/details"><img src="/assets/img/home4/team-img5.png" alt="" /></Link>
                                </div>
                                <div className="team-content">
                                    <h5><Link href="/team/details">Alexander Benjamin</Link></h5>
                                    <span>Director of Engineering</span>
                                    <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                    </svg>
                                    <ul className="social-list">
                                        <li>
                                            <a href="https://www.linkedin.com/" className="social-area">
                                                <div className="icon">
                                                    <i className="bx bxl-linkedin" />
                                                </div>
                                                <div className="content">
                                                    <span>LinkedIn</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" className="social-area">
                                                <div className="icon">
                                                    <i className="bx bxl-facebook" />
                                                </div>
                                                <div className="content">
                                                    <span>Facebook</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      <div className="team-card-section2 mb-130">
        <div className="container">
          <div
            className="row justify-content-center mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-5">
              <div className="section-title three text-lg-start text-center">
                <h2>Meet the Team</h2>
                {/* <p>Smart solution to build a outstanding performance easily.</p> */}
              </div>
            </div>
          </div>
          <div className="row gy-5">
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="team-card two">
                <div className="team-img">
                  <Link
                    href="/team/ceo-jeffrey-rowlings"
                    onClick={() => {
                      localStorage.setItem(
                        "teamMember",
                        JSON.stringify({
                          name: "Jeffrey Rowlings",
                          image: "/assets/img/TeamImages/jeff.png",
                          title: "Chief Executive Officer (CEO)",
                          quote:
                            "Leading the company towards success through vision, strategy, and innovation.",
                          bio: "I am the CEO of Yunovia Group, driving the company’s mission to deliver cutting-edge digital solutions that solve real-world problems. With a strong background in leadership and strategic management, I oversee company growth, foster innovation, and ensure sustainable development. My role focuses on guiding the executive team, building strong client relationships, and shaping the organization’s long-term vision.",
                          skills: [
                            "Strategic Leadership",
                            "Business Development",
                            "Corporate Strategy",
                            "Team Management",
                          ],
                          achievements: [
                            "Scaled Yunovia Group’s operations and expanded into multiple markets.",
                            "Built a culture of innovation and collaboration across teams.",
                            "Spearheaded partnerships that boosted company growth by 60% in 2 years.",
                          ],
                          socialLinks: {
                            dribbble: "https://dribbble.com/",
                            behance: "https://www.behance.net/",
                            pinterest: "https://www.pinterest.com/",
                          },
                        })
                      );
                    }}
                  >
                    <img src="/assets/img/TeamImages/jeff.png" alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>
                    <Link href="/team/details">Jeffrey Rowlings</Link>
                  </h5>
                  <span>CEO</span>
                  <svg
                    className="divider"
                    height={6}
                    viewBox="0 0 312 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                  </svg>
                  <ul className="social-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/jeffrey-rowlings-1b4aa81aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-linkedin" />
                        </div>
                        <div className="content">
                          <span>LinkedIn</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/itsrawlinz-jeff"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-github" />
                        </div>
                        <div className="content">
                          <span>GitHub</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="team-card two">
                <div className="team-img">
                  <Link href="/team/director-eric-waruingi/">
                    <img src="/assets/img/TeamImages/eric.png" alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>
                    <Link
                      href="/team/details"
                      onClick={() => {
                        localStorage.setItem(
                          "teamMember",
                          JSON.stringify({
                            name: "Eric Waruingi",
                            title: "Director",
                            image: "/assets/img/TeamImages/eric.png",
                            quote:
                              "Driving organizational growth through vision, leadership, and execution.",
                            bio: "I am the Director at Yunovia Group, responsible for overseeing strategic initiatives, managing operations, and ensuring the company’s goals are achieved effectively. With strong leadership skills and a focus on building collaborative teams, I work closely with executives to align business objectives with sustainable growth and innovation.",
                            skills: [
                              "Executive Leadership",
                              "Operational Management",
                              "Strategic Planning",
                              "Team Building",
                            ],
                            achievements: [
                              "Directed multiple high-impact projects that streamlined company operations.",
                              "Implemented strategies that enhanced organizational efficiency by 35%.",
                              "Built and mentored cross-functional teams to deliver long-term value.",
                            ],
                            socialLinks: {
                              dribbble: "https://dribbble.com/",
                              behance: "https://www.behance.net/",
                              pinterest: "https://www.pinterest.com/",
                            },
                          })
                        );
                      }}
                    >
                      Eric Waruingi
                    </Link>
                  </h5>
                  <span>Director</span>
                  <svg
                    className="divider"
                    height={6}
                    viewBox="0 0 312 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                  </svg>
                  <ul className="social-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-linkedin" />
                        </div>
                        <div className="content">
                          <span>LinkedIn</span>
                        </div>
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="team-card two">
                <div className="team-img">
                  <Link href="/team/engineer-elvis-okello/">
                    <img src="/assets/img/TeamImages/elvis.png" alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>
                    <Link 
                      href="/team/details"
                      onClick={() => {
                        localStorage.setItem("teamMember", JSON.stringify({
                           name: "Elvis Okello",
  title: "Senior Software Engineer",
  image: "/assets/img/TeamImages/elvis.png",
  quote: "I believe that great software blends creativity and precision to solve real world problems.",
  bio: "I am a Senior Software Engineer with extensive experience in building scalable, secure, and high-performing applications. My focus is on designing software architectures that streamline workflows and enhance productivity. At Yunovia Group, I lead key development projects from concept to deployment, maintaining optimal code quality and fostering effective team collaboration.",
  skills: [
    "Full-Stack Development",
    "Front-End Design",
    "Shopify Development",
    "SEO Optimization"
  ],
  achievements: [
    "Led the development of a custom ERP system that improved operational efficiency by 40%."
  ],
  socialLinks: {
    dribbble: "https://dribbble.com/",
    behance: "https://www.behance.net/",
    pinterest: "https://www.pinterest.com/"
  }
                        }))
                      }}
                    >Elvis Okello</Link>
                  </h5>
                  <span>Senior Sotware Engineer</span>
                  <svg
                    className="divider"
                    height={6}
                    viewBox="0 0 312 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                  </svg>
                  <ul className="social-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/okello-elvis-604721363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-linkedin" />
                        </div>
                        <div className="content">
                          <span>LinkedIn</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/elvisokello"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-github" />
                        </div>
                        <div className="content">
                          <span>GitHub</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="team-card two">
                <div className="team-img">
                  <Link href="/team/manager-faith-amani/">
                    <img src="/assets/img/TeamImages/amani.png" alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>
                    <Link 
                      href="/team/details"
                      onClick={() => {
                        localStorage.setItem("teamMember", JSON.stringify({

                        }))
                      }}
                    >Faith Amani</Link>
                  </h5>
                  <span>Project Manager</span>
                  <svg
                    className="divider"
                    height={6}
                    viewBox="0 0 312 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                  </svg>
                  <ul className="social-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/faith-amani-jalenga?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-linkedin" />
                        </div>
                        <div className="content">
                          <span>LinkedIn</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}
      {/* Team Section Start */}
      <div className="team-card-section2 mb-130">
        <div className="container">
          <div className="row gy-5">
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="team-card two">
                <div className="team-img">
                  <Link href="/team/engineer-purity-ng'ang'a/">
                    <img src="/assets/img/TeamImages/purity.png" alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>
                    <Link href="/team/details">Purity Ng'ang'a</Link>
                  </h5>
                  <span>Snr Software Engineer </span>
                  <svg
                    className="divider"
                    height={6}
                    viewBox="0 0 312 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                  </svg>
                  <ul className="social-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/software-engineer-purity-1b443a31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-linkedin" />
                        </div>
                        <div className="content">
                          <span>LinkedIn</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Engineer-Purity"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-github" />
                        </div>
                        <div className="content">
                          <span>GitHub</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="team-card two">
                <div className="team-img">
                  <Link href="/team/marketing-gad-shilkali/">
                    <img src="/assets/img/TeamImages/gad.png" alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>
                    <Link href="/team/details">Gad Shilkali</Link>
                  </h5>
                  <span>Business Development Manager</span>
                  <svg
                    className="divider"
                    height={6}
                    viewBox="0 0 312 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                  </svg>
                  <ul className="social-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/gad-shikali-ab1498282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-linkedin" />
                        </div>
                        <div className="content">
                          <span>LinkedIn</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="team-card two">
                <div className="team-img">
                  <Link href="/team/engineer-vene-ngugi/">
                    <img src="/assets/img/TeamImages/Vene.png" alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>
                    <Link href="/team/details">Vene Ngugi</Link>
                  </h5>
                  <span>Developer</span>
                  <svg
                    className="divider"
                    height={6}
                    viewBox="0 0 312 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                  </svg>
                  <ul className="social-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/vannesah-ngugi-9247a1321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-linkedin" />
                        </div>
                        <div className="content">
                          <span>LinkedIn</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/veenNgugi"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-github" />
                        </div>
                        <div className="content">
                          <span>GitHub</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="team-card two">
                <div className="team-img">
                  <Link href="/team/engineer-ivan-sakwa/">
                    <img src="/assets/img/TeamImages/Ivan.png" alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>
                    <Link href="/team/details">Ivan Sakwa</Link>
                  </h5>
                  <span>Developer</span>
                  <svg
                    className="divider"
                    height={6}
                    viewBox="0 0 312 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                  </svg>
                  <ul className="social-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/kubasuivansakwa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-linkedin" />
                        </div>
                        <div className="content">
                          <span>LinkedIn</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/KubasuIvanSakwa"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-github" />
                        </div>
                        <div className="content">
                          <span>GitHub</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* New centered team member */}
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
              style={{margin: '3rem auto', display: 'block'}}
            >
              <div className="team-card two">
                <div className="team-img">
                  <Link href="/team/manager-jecinta-mumbi/">
                    <img src="/assets/img/TeamImages/jess.png" alt="" />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>
                    <Link href="/team/details">Jecinta Mumbi</Link>
                  </h5>
                  <span>Business Delopment Manager</span>
                  <svg
                    className="divider"
                    height={6}
                    viewBox="0 0 312 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                  </svg>
                  <ul className="social-list">
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="social-area"
                        target="_blank"
                      >
                        <div className="icon">
                          <i className="bx bxl-linkedin" />
                        </div>
                        <div className="content">
                          <span>LinkedIn</span>
                        </div>
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="team-join-section mb-130">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-7 col-md-10">
        <div className="team-join-wrap">
          <div
            className="section-title three text-center wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <h2>Join Our Team!</h2>
            <p>
              We're always on the lookout for passionate, creative, and
              talented individuals to join our dynamic team.
            </p>
          </div>
          <svg
            width={6}
            height={170}
            viewBox="0 0 6 170"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM3 170L5.88675 165H0.113249L3 170ZM2.5 4.5V165.5H3.5V4.5H2.5Z" />
            <path
              d="M3 90V115"
              stroke="url(#paint0_linear_6965_68)"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6965_68"
                x1={3}
                y1={110}
                x2={3}
                y2="90.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#5956E9" />
                <stop offset={1} stopColor="#EEEEEE" />
              </linearGradient>
            </defs>
          </svg>
          <div
            className="btn-area wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <Link href="/career" className="primary-btn3 three btn-hover">
              Join Our Team
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      

      {/* Team Page End */}

      <Home4Footer />
    </div>
  );
};

export default TeamPage;
