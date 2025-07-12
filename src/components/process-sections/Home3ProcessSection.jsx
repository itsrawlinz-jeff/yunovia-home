import React from 'react'

const Home3ProcessSection = () => {
    return (
        <div className="home3-process-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="process-wrapper">
                            <div className="section-title three white mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <span>How We Deliver</span>
                                <h2>Our Proven 3-Step Process for Digital Excellence</h2>
                            </div>
                            <div className="process-card-area">
                                <div className="row gy-md-5 gy-4 justify-content-between">
                                    <div className="col-xl-5 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="process-card2">
                                            <div className="step-no">
                                                <span>Step</span>
                                                <strong>01</strong>
                                            </div>
                                            <h4>Insight & Strategy</h4>
                                            <p>We begin by deeply understanding your goals and aligning them with smart digital strategies tailored for your brand.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6 wow animate fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <div className="process-card2 two">
                                            <h4>Creative Execution</h4>
                                            <div className="step-no">
                                                <span>Step</span>
                                                <strong>02</strong>
                                            </div>
                                            <p style={{ fontSize: '16px', color: 'black' }}>Our design and development teams bring ideas to life—visually stunning, user-centered, and built to perform.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-md-6 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="process-card2 three">
                                            <h4>Optimization & Growth</h4>
                                            <div className="step-no">
                                                <span>Step</span>
                                                <strong>03</strong>
                                            </div>
                                            <p>Through data-driven refinement, we maximize impact, increase ROI, and support long-term growth and engagement.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Motion Path SVG Animation */}
                                <svg className="vector" width={204} height={650} viewBox="0 0 204 650" xmlns="http://www.w3.org/2000/svg">
                                    <path id="theMotionPath11" d="M0 1H79C90.0457 1 99 9.9543 99 21V280C99 291.046 107.954 300 119 300H183C194.046 300 203 308.954 203 320V629C203 640.046 194.046 649 183 649H110" />
                                    <circle cx={0} cy={0} r={3}>
                                        <animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto">
                                            <mpath href="#theMotionPath11" />
                                        </animateMotion>
                                    </circle>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Founder Quote Area */}
                    <div className="col-lg-5 p-0">
                        <div className="founder-area">
                            <svg className="quote" width={136} height={152} viewBox="0 0 136 152" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="..." />
                                </g>
                            </svg>
                            <div className="founder-content">
                                <svg width={200} height={6} viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="..." />
                                    </g>
                                </svg>
                                <p>
                                    At Yunovia Group, we fuse strategy, technology, and creativity to build scalable, data-informed digital experiences.
                                    Every solution we create is rooted in insight and refined for measurable results. That’s how we move brands forward.
                                </p>
                                <div className="founder-name-and-desig">
                                    <h5>Jeffrey Rowlings</h5>
                                    <span>CEO </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home3ProcessSection
