"use client"
import Home4Footer from '@/components/Footer/Home4Footer'
import Header from '@/components/header/Header'
import Link from 'next/link'
import React from 'react'

const OurBrandsPage = () => {
    const brands = [
        {
            name: "KREP Software",
            description: "All-in-one CRM, HRM, and ERP solutions for businesses of all sizes.",
            link: "https://home.krepsoftware.co.ke/",
            image: "/assets/img/brands/KREP Software.jpg"
        },
        {
            name: "Rawlinz Designs",
            description: "Digitally Yours! Creative design and digital marketing solutions.",
            link: "https://rawlinzdesigns.co.ke/",
            image: "/assets/img/brands/Rawlinz Designs.jpg"
        },
        {
            name: "Somaflow",
            description: "School Management Made Easy - Comprehensive educational management system.",
            link: "http://somaflow.co.ke/",
            image: "/assets/img/brands/somaflow.jpg"
        },
        {
            name: "Cheap Web Hosting",
            description: "Reliable, budget-friendly hosting services for websites and applications.",
            link: "https://cheapwebhosting.co.ke/",
            image: "/assets/img/brands/Web Hosting.jpg"
        },
        {
            name: "Cheap Bulk SMS",
            description: "Affordable bulk SMS services for marketing and communication.",
            link: "http://cheapbulksms.co.ke/",
            image: "/assets/img/brands/Cheap Bulk Sms.jpg"
        },
        {
            name: "RMS Kenya",
            description: "Real Estate Simplified - Property management and real estate solutions.",
            link: "https://rmske.co.ke/",
            image: "/assets/img/brands/RMS.jpg"
        },
        // {
        //     name: "POS Software",
        //     description: "Point of Sale solutions for retail and hospitality businesses.",
        //     link: "https://pointofsale.co.ke/",
        //     image: "/assets/img/brands/pos-software.jpg"
        // },
        {
            name: "Fintrack",
            description: "Fintech Solution - Financial tracking and management tools.",
            link: "https://fintrackapp.co/",
            image: "/assets/img/brands/fintrack.jpg"
        }
    ]

    return (
        <>
            <Header />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Our Brands</h1>
                                <ul className="breadcrumb-list">
                                    <li><Link href="/">Home</Link></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Our Brands
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}

            {/* Brands Section Start */}
            <div className="our-brands-section mb-130">
                <div className="container">
                    <div className="row justify-content-center mb-60">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title three text-center">
                                <span>Yunovia Group</span>
                                <h2>Our Portfolio of Brands</h2>
                                <p>Discover the diverse range of specialized solutions offered by our family of brands, each designed to meet specific business needs and drive digital transformation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-5">
                        {brands.map((brand, index) => (
                            <div key={index} className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInUp" data-wow-delay={`${index * 100}ms`} data-wow-duration="1500ms">
                                <div className="brand-card">
                                    <div className="brand-image">
                                        <img src={brand.image || "/assets/img/brands/default-brand.jpg"} alt={brand.name} />
                                    </div>
                                    <div className="brand-content">
                                        <h4>{brand.name}</h4>
                                        <p>{brand.description}</p>
                                        <Link href={brand.link} target="_blank" rel="noopener noreferrer" className="primary-btn3 three btn-hover">
                                            Visit Website
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <span />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row justify-content-center mt-60">
                        <div className="col-xl-8 col-lg-10">
                            <div className="contact-btn-area two text-center">
                                <h6>Interested in learning more about our services?</h6>
                                <Link href="/contact" className="primary-btn3 two btn-hover">
                                    Contact Us
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Brands Section End */}

            <Home4Footer />
        </>
    )
}

export default OurBrandsPage
