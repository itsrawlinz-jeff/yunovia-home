"use client";
import Counter from '@/components/common/Counter'
import Home4Footer from '@/components/Footer/Home4Footer'
import Header from '@/components/header/Header'
import Link from 'next/link';

const ServiceDetailsPage = () => {
    return (
        <div>
            <Header />

            {/* Breadcrumb Section */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content text-center">
                                <h1>IT Consulting & Digital Strategy</h1>
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

            {/* Service Overview */}
            <div className="service-details-page mb-130">
                <div className="container">
                    <div className="details-content-wrap mb-130">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="post-title-and-tag text-center">
                                    <h2>Strategic IT Consulting & Business-Driven Digital Strategy</h2>
                                    <ul className="tag-list">
                                        <li><Link href="/service">Digital Transformation</Link></li>
                                        <li><Link href="/service">IT Audits & Strategy</Link></li>
                                        <li><Link href="/service">System Architecture</Link></li>
                                        <li><Link href="/service">Cybersecurity & Cloud</Link></li>
                                    </ul>
                                    <svg className="divider-line" width={873} height={6} viewBox="0 0 873 6">
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867.5 3.5L872.5 5.88675V0.113249L867.5 2.5V3.5ZM4.5 3.5H868V2.5H4.5V3.5Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Service Description */}
                        <div className="row gy-5 justify-content-between mb-70">
                            <div className="col-xl-5 col-lg-6">
                                <h3>Service Overview</h3>
                                <p>
                                    Our IT Consulting and Digital Strategy services are designed to help businesses optimize their technology infrastructure, streamline operations, and align IT with long-term business goals.
                                </p>
                                <p>
                                    Whether you're navigating digital transformation, migrating to the cloud, or enhancing system performance, our consultants bring deep technical and industry knowledge to every challenge.
                                </p>
                            </div>

                            <div className="col-xl-5 col-lg-6">
                                <h3>Core Services</h3>
                                <ul className="listing two">
                                    <li>Digital Transformation Roadmaps</li>
                                    <li>Infrastructure & Network Assessments</li>
                                    <li>Cloud Strategy & Migration (AWS, Azure, GCP)</li>
                                    <li>System Architecture & Integration</li>
                                    <li>Cybersecurity Risk Assessments</li>
                                    <li>Technology Budgeting & ROI Planning</li>
                                </ul>
                            </div>
                        </div>

                        {/* Why Us */}
                        <div className="text-center mb-60">
                            <h3>Why Partner with Us?</h3>
                            <p className="fixed-width mx-auto">
                                We’re not just tech consultants — we’re strategic partners. We bring a balance of innovation, proven processes, and tailored planning that ensures your business thrives in a digital-first world.
                            </p>
                        </div>

                        <div className="row g-4">
                            {[
                                "Strategic Thinking & Planning",
                                "Cross-Industry Expertise",
                                "Agile Methodologies",
                                "Proactive Risk Management",
                                "Change Enablement",
                                "Ongoing Support & Training"
                            ].map((item, i) => (
                                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-service three">
                                        <h5><span>{i + 1}.</span> {item}</h5>
                                    </div>
                                </div>
                            ))}

                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-sm-center">
                                <Link href="/contact" className="contact-btn">
                                    Request a Consultation
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
