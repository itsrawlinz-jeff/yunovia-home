"use client";
import Counter from '@/components/common/Counter'
import Home4Footer from '@/components/Footer/Home4Footer'
import Header from '@/components/header/Header'
import Link from 'next/link';

const ServiceDetailsPage = () => {
    return (
        <div>
            <Header />

            {/* Breadcrumb */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content text-center">
                                <h1>Training & Capacity Building</h1>
                                <ul className="breadcrumb-list">
                                    <li><Link href="/">Home</Link></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113V5.887L5 3.5V2.5ZM20 3.5L25 5.887V0.113L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Service Details
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
                                <div className="post-title-and-tag text-center">
                                    <h2>Digital Training, Upskilling & Capacity Building</h2>
                                    <ul className="tag-list">
                                        <li><Link href="/service">Digital Skills</Link></li>
                                        <li><Link href="/service">Corporate Training</Link></li>
                                        <li><Link href="/service">Tech Mentorship</Link></li>
                                        <li><Link href="/service">Leadership Workshops</Link></li>
                                    </ul>
                                    <svg className="divider-line" width={873} height={6} viewBox="0 0 873 6">
                                        <path d="M5 2.5L0 0.113V5.887L5 3.5V2.5ZM867.5 3.5L872.5 5.887V0.113L867.5 2.5V3.5ZM4.5 3.5H868V2.5H4.5V3.5Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Overview & Features */}
                        <div className="row gy-5 justify-content-between mb-70">
                            <div className="col-xl-5 col-lg-6">
                                <h3>Service Overview</h3>
                                <p>
                                    Under our brand <strong>Rawlinz Designs</strong>, we empower individuals and organizations through hands-on digital training and strategic capacity building programs.
                                    Whether you're a startup, SME, or enterprise, our training is designed to drive digital adoption, confidence, and performance.
                                </p>
                                <p>
                                    From coding bootcamps to leadership development and technical mentorship, we ensure your teams gain real-world skills that make a measurable difference.
                                </p>
                            </div>

                            <div className="col-xl-5 col-lg-6">
                                <h3>Key Offerings</h3>
                                <ul className="listing two">
                                    <li>Digital Skills Bootcamps</li>
                                    <li>Corporate Upskilling Programs</li>
                                    <li>One-on-One Mentorship</li>
                                    <li>Tech Empowerment Workshops</li>
                                    <li>Leadership & Innovation Training</li>
                                    <li>Tailored Capacity Building Curricula</li>
                                </ul>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <h3 className="text-center">Why Train With Rawlinz?</h3>
                        <p className="text-center fixed-width mx-auto">
                            We don’t just teach — we transform. Our programs are practical, interactive, and led by experienced facilitators who understand both business and technology.
                        </p>

                        <div className="row g-4 mt-4">
                            {[
                                "Certified Trainers & Industry Experts",
                                "Interactive, Real-Life Case Studies",
                                "Customized Learning Paths",
                                "Flexible Delivery (Online/On-Site)",
                                "Post-Training Evaluation & Support",
                                "Impact-Focused, Measurable Results"
                            ].map((item, i) => (
                                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-service three">
                                        <h5><span>{i + 1}.</span> {item}</h5>
                                    </div>
                                </div>
                            ))}

                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-sm-center">
                                <Link href="/contact" className="contact-btn">
                                    Start Your Training
                                    <svg width={10} height={10} viewBox="0 0 10 10">
                                        <path d="M1 9L9 1M9 1C7.222 1.333 3.333 2 1 1M9 1C8.667 2.667 8 6.333 9 9" strokeWidth="1.5" strokeLinecap="round" />
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
