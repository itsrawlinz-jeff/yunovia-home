"use client"
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
                            <div className="banner-content">
                                <h1>Service Details</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Video Production & Editing
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
                                    <h2>Video Production & Editing</h2>
                                    <ul className="tag-list">
                                        <li><Link href="/service">Corporate Videos</Link></li>
                                        <li><Link href="/service">Promotional Content</Link></li>
                                        <li><Link href="/service">Video Editing</Link></li>
                                        <li><Link href="/service">Motion Graphics</Link></li>
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
                                    Engage your audience with cinematic promo videos, corporate storytelling, and expert editing services. We create compelling video content that captures attention and drives engagement across all platforms.
                                </p>
                                <span className="line-break" />
                                <p>
                                    From concept development to final delivery, our video production team ensures every frame tells your story effectively and professionally.
                                </p>
                            </div>

                            <div className="col-xl-5 col-lg-6">
                                <h2>Key Features</h2>
                                <span className="line-break" />
                                <p>Our video production services include:</p>
                                <ul className="listing two">
                                    <li>Corporate Video Production</li>
                                    <li>Promotional & Marketing Videos</li>
                                    <li>Professional Video Editing</li>
                                    <li>Motion Graphics & Animation</li>
                                    <li>Social Media Video Content</li>
                                    <li>Event & Documentary Filming</li>
                                </ul>
                            </div>
                        </div>

                        <h2>Why Choose Our Video Services?</h2>
                        <span className="line-break" />
                        <p className="fixed-width">
                            We combine creative storytelling with technical excellence to produce videos that not only look great but also achieve your business objectives.
                        </p>

                        <div className="row g-4 mt-4">
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service two"><h5><span>1.</span> Creative Excellence</h5></div></div>
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service"><h5><span>2.</span> Professional Equipment</h5></div></div>
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service three"><h5><span>3.</span> Expert Editing</h5></div></div>
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service"><h5><span>4.</span> Fast Turnaround</h5></div></div>
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service four"><h5><span>5.</span> Multi-Platform Optimization</h5></div></div>
                            <div className="col-lg-3 col-md-4 col-sm-6"><div className="single-service"><h5><span>6.</span> Storytelling Focus</h5></div></div>

                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-sm-center">
                                <Link href="/contact" className="contact-btn">
                                    Create Your Video
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
}

export default ServiceDetailsPage;
