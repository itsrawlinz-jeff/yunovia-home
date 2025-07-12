import Link from 'next/link'
import React from 'react'

const Home3aboutSection = () => {
    return (
        <div className="home3-about-section mb-130" id="about-section">
            <div className="container">
                {/* Intro */}
                <div className="row g-4 align-items-center justify-content-between mb-60">
                    <div className="col-lg-5 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="section-title three">
                            <span>About Yunovia Group</span>
                            <h2>Powering Digital Transformation & Brand Growth</h2>
                            <p>Yunovia Group is a visionary digital agency focused on building experiences that drive results. From high-performance SaaS platforms to captivating digital branding, we craft future-proof solutions that accelerate growth and impact for modern businesses.</p>
                        </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="col-xl-4 col-lg-5 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="achievment-area">
                            <div className="icon">
                                {/* Your SVG graphic remains unchanged */}
                            </div>
                            <div className="content">
                                <h6>Recognition</h6>
                                <p>Proud recipient of the <span>“Digitally Fit Awards”</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="row g-4 justify-content-xl-end mb-50">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-feature-card magnetic-item">
                            <div className="card-content">
                                <div className="number">
                                    <h2>06</h2>
                                </div>
                                <p>Outstanding Brands Built</p>
                            </div>
                            <svg className="arrow" width={33} height={33}><path d="M1 32L31 2..." /></svg>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="about-feature-card two magnetic-item">
                            <div className="card-content">
                                <div className="number">
                                    <h2>90</h2><span>%</span>
                                </div>
                                <p>Client Retention Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="about-feature-card three magnetic-item">
                            <div className="card-content">
                                <h3>Discover More</h3>
                                <Link href="/about">
                                    About Yunovia Group
                                    <svg width={10} height={10} viewBox="0 0 10 10">
                                        <path d="M1 9L9 1..." strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="row justify-content-center wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-xl-8 col-lg-10">
                        <div className="contact-btn-area two">
                            <h6>Let’s Build the Future of Your Brand Together</h6>
                            <Link href="/contact" className="primary-btn3 btn-hover">
                                Get Started Today
                                <svg width={10} height={10}><path d="M1 9L9 1..." strokeWidth="1.5" strokeLinecap="round" /></svg>
                                <span />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Path */}
                <svg className="scroll-svg" width={1322} height={654} viewBox="0 0 1322 654">
                    <path id="route-1" d="M897 1H1301C..." strokeWidth={2} />
                </svg>
            </div>
        </div>
    )
}

export default Home3aboutSection
