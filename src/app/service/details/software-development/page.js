"use client";
import Counter from '@/components/common/Counter'
import Home3Footer from '@/components/Footer/Home4Footer'
import Header3 from '@/components/header/Header'
import Link from 'next/link';

const ServiceDetailsPage = () => {
    return (
        <div>
            <Header3 />

            {/* Breadcrumb */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content text-center">
                                <h1>Software & App Development</h1>
                                <ul className="breadcrumb-list">
                                    <li><Link href="/">Home</Link></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Service Details
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Content */}
            <div className="service-details-page mb-130">
                <div className="container">
                    <div className="details-content-wrap mb-130">

                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="post-title-and-tag text-center">
                                    <h2>Custom Software, Mobile Apps & Web Platforms</h2>
                                    <ul className="tag-list">
                                        <li><Link href="/service">Web Development</Link></li>
                                        <li><Link href="/service">Mobile Apps</Link></li>
                                        <li><Link href="/service">E-commerce Solutions</Link></li>
                                        <li><Link href="/service">API Integrations</Link></li>
                                    </ul>
                                    <svg className="divider-line" width={873} height={6} viewBox="0 0 873 6">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867.5 3.5L872.5 5.88675V0.113249L867.5 2.5V3.5ZM4.5 3.5H868V2.5H4.5V3.5Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Overview and Features */}
                        <div className="row gy-5 justify-content-between mb-70">
                            <div className="col-xl-5 col-lg-6">
                                <h3>Service Overview</h3>
                                <p>
                                    At <strong>Rawlinz Designs</strong>, we develop cutting-edge software solutions tailored to your business goals — from enterprise-grade web platforms and mobile apps to robust custom-built systems. 
                                </p>
                                <p>
                                    Whether you're launching a startup MVP or scaling an existing ecosystem, our agile team ensures rapid delivery, modern interfaces, and scalable backend architecture.
                                </p>
                            </div>

                            <div className="col-xl-5 col-lg-6">
                                <h3>Key Features</h3>
                                <ul className="listing two">
                                    <li>Custom Web App Development</li>
                                    <li>Native & Cross-Platform Mobile Apps</li>
                                    <li>Modern E-Commerce Stores (Shopify, WooCommerce)</li>
                                    <li>Secure API Development & Integration</li>
                                    <li>Database Engineering & Optimization</li>
                                    <li>Cloud Hosting, CI/CD & Deployment</li>
                                </ul>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <h3 className="text-center">Why Build with Rawlinz?</h3>
                        <p className="text-center fixed-width mx-auto">
                            Our solutions are built to perform — clean code, modern tech, reliable scaling, and intuitive user experiences. We're not just developers; we're long-term partners in your digital journey.
                        </p>

                        <div className="row g-4 mt-4">
                            {[
                                "Scalable System Architecture",
                                "Latest Tech Stacks (React, Node, Flutter, Laravel)",
                                "Agile Project Management",
                                "Full QA & Automated Testing",
                                "Post-Launch Support & Maintenance",
                                "Data Security & Compliance"
                            ].map((item, i) => (
                                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-service three">
                                        <h5><span>{i + 1}.</span> {item}</h5>
                                    </div>
                                </div>
                            ))}

                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-sm-center">
                                <Link href="/contact" className="contact-btn">
                                    Let’s Build It
                                    <svg width={10} height={10} viewBox="0 0 10 10">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Home4Footer />
        </div>
    );
};

export default ServiceDetailsPage;
