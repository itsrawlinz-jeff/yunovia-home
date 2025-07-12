"use client"
import React, { useMemo, useRef, useState } from 'react'
import AwardListSection from '@/components/AwardListSection'
import Home4Footer from '@/components/Footer/Home4Footer'
import Header from '@/components/header/Header'
import Home3PartnerSection from '@/components/partner-sections/Home3PartnerSection'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from '@/components/common/Counter'
import Link from 'next/link'

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const AboutPage = () => {
    const [isOpenimg, setOpenimg] = useState({
        openingState: false,
        openingIndex: 0,
    });
    const ref3 = useRef(null);

    const testimonialSettings = useMemo(() => ({
        speed: 1500,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".testimonial-slider-next",
            prevEl: ".testimonial-slider-prev",
        },
    }), []);

    return (
        <>
            <Header />

            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="banner-content">
                                <h1>Driving Kenya's Next Generation <br /> Of Brand Experiences</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Company
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-page-banner-section mb-130">
                <div className="banner-content-wrap">
                    <div className="container">
                        <div className="row gy-4 justify-content-between">
                            <div className="col-xl-5 col-lg-6">
                                <div className="title-area">
                                    <h2>Revolutionizing Digital Experiences Across Kenya</h2>
                                    <span>“We blend creativity, technology, and strategy to create unforgettable brand moments.”</span>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="banner-content">
                                    <p>
                                        Yunovia Group is a dynamic technology conglomerate revolutionizing digital experiences across Kenya.
                                        Bringing together five specialized subsidiaries:
                                        <strong> Krep Software Solutions</strong> (ERP, HRM & CRM systems),
                                        <strong> Rawlinz Designs</strong> (Web & App Development, SEO & Digital Marketing),
                                        <strong> Somaflow</strong> (Smart School Management Systems),
                                        <strong> Cheap Bulk SMS</strong> (Affordable Mass Messaging Solutions), and
                                        <strong> Cheap Web Hosting</strong> (Reliable, Budget-Friendly Hosting Services),
                                        Yunovia delivers end-to-end digital solutions tailored for businesses, institutions, and brands.
                                    </p>
                                    <Link href="/contact" className="primary-btn3 transparent three btn-hover">
                                        Discover More
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
            </div>

            <div className="about-page-feature-section rich-section mb-130 py-5 bg-gradient-to-r from-indigo-900 to-purple-900 text-white rounded-4 shadow-lg">
                <div className="container">
                    <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-7 col-lg-9 text-center">
                            <div className="section-title2">
                                <div className="shape-and-title-area mb-4">
                                    <svg width={88} height={64} viewBox="0 0 88 64" xmlns="http://www.w3.org/2000/svg" className="mb-3">
                                        <path d="M88 0V64H0L88 0Z" fill="#fff" opacity="0.1" />
                                        <path d="M60 8L10 44V8H60Z" fill="#fff" opacity="0.3" />
                                    </svg>
                                    <h2 className="fw-bold display-6">Solutions That Drive Results</h2>
                                </div>
                                <p className="fs-5">At Yunovia, every brand under our umbrella delivers measurable value — from cutting-edge tech to empowering user experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-8 col-lg-10">
                            <div className="contact-btn-area two text-center">
                                <h6 className="fs-4 mb-3">Let’s Shape the Future Together</h6>
                                <Link href="/contact" className="primary-btn3 two btn-hover text-white border border-white rounded-pill px-5 py-3">
                                    Partner With Us
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" stroke="#fff" />
                                    </svg>
                                    <span />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AwardListSection />
            <Home3PartnerSection />
            <Home4Footer />
        </>
    )
}

export default AboutPage
