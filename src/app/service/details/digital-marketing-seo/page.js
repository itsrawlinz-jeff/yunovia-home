"use client";
import React, { useMemo, useState } from "react";
import Counter from '@/components/common/Counter'
import Home3Footer from '@/components/Footer/Home4Footer'
import Header3 from '@/components/header/Header'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const ServiceDetailsPage = () => {
  const settings = useMemo(() => ({
    slidesPerView: "auto",
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
      nextEl: ".post-slider-next",
      prevEl: ".post-slider-prev",
    },
  }), []);

  return (
    <div>
      <Header3 />

      {/* Breadcrumb */}
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="banner-content text-center">
                <h1>Digital Marketing & SEO</h1>
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
                  <h2>Strategic Digital Marketing & SEO That Drives Results</h2>
                  <ul className="tag-list">
                    <li><Link href="/service">Search Engine Optimization</Link></li>
                    <li><Link href="/service">Paid Advertising</Link></li>
                    <li><Link href="/service">Content Strategy</Link></li>
                    <li><Link href="/service">Social Campaigns</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overview and Features */}
            <div className="row gy-5 justify-content-between mb-70">
              <div className="col-xl-5 col-lg-6">
                <h3>Overview</h3>
                <p>
                  At <strong>Rawlinz Designs</strong>, we offer a full suite of <strong>digital marketing and SEO services</strong> designed to increase visibility, attract ideal customers, and deliver sustainable growth for your brand. We don’t just market — we craft digital journeys that connect and convert.
                </p>
                <p>
                  Whether you're looking to rank on Google, run high-converting ads, or build a magnetic social media presence, our Kenyan-based team delivers proven strategies that align with your business goals and outperform the competition.
                </p>
              </div>

              <div className="col-xl-5 col-lg-6">
                <h3>What We Deliver</h3>
                <ul className="listing two">
                  <li>On-Page & Technical SEO Enhancements</li>
                  <li>Google Ads & Pay-Per-Click (PPC) Campaigns</li>
                  <li>Targeted Social Media Advertising</li>
                  <li>High-Converting Content & Blog Marketing</li>
                  <li>Competitor & Keyword Research</li>
                  <li>Local SEO for Kenyan Businesses</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="text-center mb-60">
              <h3>Why Partner with Rawlinz Designs?</h3>
              <p className="fixed-width mx-auto">
                We don’t just aim for visibility — we aim for impact. Our digital marketing campaigns are customized, data-backed, and constantly optimized to deliver maximum ROI and long-term success.
              </p>
            </div>

            <div className="row g-4 justify-content-center">
              {[
                "ROI-Focused Strategy",
                "Google Certified Experts",
                "Custom SEO Gameplans",
                "Transparent Monthly Reporting",
                "Cross-Platform Campaigns",
                "Creative + Analytical Team",
                "Agile Growth Support",
                "Affordable & Scalable Packages"
              ].map((item, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="single-service three">
                    <h5><span>{i + 1}.</span> {item}</h5>
                  </div>
                </div>
              ))}
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-sm-center">
                <Link href="/contact" className="contact-btn">
                  Let’s Get Started
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
