"use client"
import Counter from '@/components/common/Counter'
import Home3Footer from '@/components/Footer/Home4Footer'
import Header3 from '@/components/header/Header'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const ServiceDetailsPage = () => {
    return (
        <div>
            <Header3 />

            {/* Breadcrumb */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content">
                                <h1>Service Details</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Corporate Branding & Print
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Details */}
            <div className="service-details-page mb-130">
                <div className="container">
                    <div className="details-content-wrap mb-130">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="post-title-and-tag">
                                    <h2>Corporate Branding & Print</h2>
                                    <ul className="tag-list">
                                        <li><Link href="/service">Corporate Identity</Link></li>
                                        <li><Link href="/service">Print Design</Link></li>
                                        <li><Link href="/service">Brand Guidelines</Link></li>
                                        <li><Link href="/service">Marketing Materials</Link></li>
                                    </ul>
                                    <svg className="divider-line" width={873} height={6} viewBox="0 0 873 6">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867.5 3.5L872.5 5.88675V0.113249L867.5 2.5V3.5ZM4.5 3.5H868V2.5H4.5V3.5Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="row gy-4 justify-content-between mb-70">
                            <div className="col-xl-5 col-lg-6">
                                <h2>Service Overview</h2>
                                <span className="line-break" />
                                <p>
                                    From company profiles to print-ready assets—elevate your brand's perception across all touchpoints. We create comprehensive corporate branding solutions that establish credibility and professionalism in every interaction.
                                </p>
                                <span className="line-break" />
                                <p>
                                    Our corporate branding services ensure consistency across all your business materials, from business cards to annual reports.
                                </p>
                            </div>

                            <div className="col-xl-5 col-lg-6">
                                <h2>Key Features</h2>
                                <span className="line-break" />
                                <p>Our corporate branding services include:</p>
                                <ul className="listing two">
                                    <li>Corporate Identity Development</li>
                                    <li>Business Card & Stationery Design</li>
                                    <li>Company Profile & Brochures</li>
                                    <li>Annual Reports & Presentations</li>
                                    <li>Brand Guidelines & Standards</li>
                                    <li>Marketing Collateral Design</li>
                                </ul>
                            </div>
                        </div>

                        <h2>Why Choose Our Corporate Branding?</h2>
                        <span className="line-break" />
                        <p className="fixed-width">
                            We understand that corporate branding is about building trust and credibility. Our designs reflect professionalism while maintaining your unique brand personality.
                        </p>

                        <div className="row g-4 mt-4">
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service two"><h5><span>1.</span> Professional Excellence</h5></div></div>
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service"><h5><span>2.</span> Brand Consistency</h5></div></div>
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service three"><h5><span>3.</span> Print Expertise</h5></div></div>
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service"><h5><span>4.</span> Quality Materials</h5></div></div>
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service four"><h5><span>5.</span> Strategic Approach</h5></div></div>
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service"><h5><span>6.</span> Timely Execution</h5></div></div>

                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-sm-center">
                                <Link href="/contact" className="contact-btn">
                                    Elevate Your Brand
                                    <svg width={10} height={10} viewBox="0 0 10 10">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Home3Footer />
        </div>
    );
}

export default ServiceDetailsPage;
