"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import Counter from '../common/Counter'

const Home5AboutSection = () => {
    const ref3 = useRef(null);
    return (
        <>
            <div className="home5-about-section mb-130">
                <div className="video-area">
                    <video autoPlay loop muted playsInline src="/assets/video/home4-contact-video2.mp4" />
                </div>
                <div className="about-wrapper">
                    <img src="/assets/img/home5/home5-about-section-vector1.svg" alt="" className="vector1" />
                    <div className="container">
                        <div className="row gy-md-4 gy-5">
                            <div className="col-xl-4 col-lg-5 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="section-title four white">
                                    <h2>Strategic Tech & Business Solutions</h2>
                                    <p>Empowering organizations with future-ready IT strategies and scalable innovations.</p>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-4 col-lg-5 col-md-6 d-flex justify-content-md-center wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="benefit-area">
                                    <h5>Core Strategy Benefits:</h5>
                                    <ul>
                                        <li>
                                            <svg width={20} height={20}><path fillRule="evenodd" clipRule="evenodd" d="..."/></svg>
                                            <span>Comprehensive IT Roadmapping</span>
                                        </li>
                                        <li>
                                            <svg width={20} height={20}><path fillRule="evenodd" clipRule="evenodd" d="..."/></svg>
                                            <span><strong>Agile & Scrum</strong> Implementation</span>
                                        </li>
                                        <li>
                                            <svg width={20} height={20}><path fillRule="evenodd" clipRule="evenodd" d="..."/></svg>
                                            <span>Smart Budgeting & Cost Efficiency</span>
                                        </li>
                                        <li>
                                            <svg width={20} height={20}><path fillRule="evenodd" clipRule="evenodd" d="..."/></svg>
                                            <span>Real-Time <strong>Progress Tracking</strong></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="counter-and-btn-area">
                                    <div className="counter-area">
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={3}
                                                speed={20}
                                                forwardedRef={ref3}
                                                as="h2"
                                                className="counter"
                                            />
                                            <span>+</span>
                                        </div>
                                        <span>Years of <br /> Impact & Innovation</span>
                                    </div>
                                    <Link className="primary-btn5" href="/contact">
                                        Talk to Our Experts
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* INDUSTRIES SECTION */}
            <div className="home1-industries-section style-2 mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="home1-industries-top">
                                <div className="row justify-content-center mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="col-xxl-6 col-xl-8 col-lg-7">
                                        <div className="section-title four text-center">
                                            <span>Industries We Empower</span>
                                            <h2>Driving Innovation Across Sectors</h2>
                                        </div>
                                    </div>
                                </div>
                                <ul className="industries-list wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    {[
                                        ["Finance & Banking", 4],
                                        ["Healthcare & Life", 3],
                                        ["Retail & E-commerce", 5],
                                        ["Education & EdTech", 8],
                                        ["Government & Public Sector", 4],
                                        ["Travel & Hospitality", 4],
                                        ["Automotive", 2]
                                    ].map(([title, count], i) => (
                                        <li key={i}>
                                            <Link href="/industry/details">
                                                <span>{title} <sup>({count})</sup></span>
                                                <div className="hover-img">
                                                    <img src={`/assets/img/home1/industries-hover-img${i * 2 + 2}.png`} alt={`${title} 1`} className="img1" />
                                                    <img src={`/assets/img/home1/industries-hover-img${i * 2 + 1}.png`} alt={`${title} 2`} className="img2" />
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home5AboutSection
