import Link from 'next/link'
import React from 'react'

const Home7PortfolioSection = () => {
    return (
        <div className="home7-portfolio-section mb-130">
            <div className="container">
                {/* Section Header */}
                <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-12 d-flex justify-content-between flex-wrap gap-4">
                        <div className="section-title3">
                            <h2>Our Work, Your Impact</h2>
                            <p>From startups to enterprises, Yunovias has empowered brands with <strong>results-driven digital solutions</strong>.</p>
                        </div>
                        <div className="project-btn-duration-area">
                            <Link href="/portfolio" className="primary-btn3 four btn-hover">
                                See Full Portfolio
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="row gy-5">
                    {[
                        {
                            delay: '200ms',
                            col: 'col-lg-4 col-md-6',
                            img: '/assets/img/home7/portfolio-img1.jpg',
                            category: 'UI/UX Design',
                            title: 'Smart Interfaces for Human-Centric Products'
                        },
                        {
                            delay: '400ms',
                            col: 'col-xl-3 col-lg-4 col-md-6',
                            img: '/assets/img/home7/portfolio-img2.jpg',
                            category: 'Branding',
                            title: 'Visual Identities That Speak Volumes'
                        },
                        {
                            delay: '600ms',
                            col: 'col-xl-5 col-lg-4 col-md-6',
                            img: '/assets/img/home7/portfolio-img3.jpg',
                            category: 'Creative Campaigns',
                            title: 'Design That Drives Engagement'
                        },
                        {
                            delay: '800ms',
                            col: 'col-lg-7 col-md-6',
                            img: '/assets/img/home7/portfolio-img4.jpg',
                            category: 'E-commerce Solutions',
                            title: 'Custom Stores That Convert'
                        },
                        {
                            delay: '800ms',
                            col: 'col-lg-5 col-md-6',
                            img: '/assets/img/home7/portfolio-img5.jpg',
                            category: 'Web Applications',
                            title: 'Powerful Backends, Seamless Frontends'
                        }
                    ].map((project, index) => (
                        <div className={`${project.col} wow animate fadeInDown`} key={index} data-wow-delay={project.delay} data-wow-duration="1500ms">
                            <div className="portfolio-card2 magnetic-item">
                                <div className="portfolio-img">
                                    <img src={project.img} alt={project.title} />
                                    <div className="details-btn-wrap">
                                        <Link href="/portfolio/details" className="details-btn">
                                            View Details
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                        <div className="icon">
                                            <i className="bi bi-plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span>{project.category}</span>
                                    <h4><Link href="/portfolio/details">{project.title}</Link></h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home7PortfolioSection
