"use client"
import Home5aboutSection from '@/components/about/Home3aboutSection'
import Home4Banner from '@/components/banner/FintechBanner'
import Home3BlogSection from '@/components/blog-section/Home3BlogSection'
import Home4Footer from '@/components/Footer/Home4Footer'
import Header from '@/components/header/Header'
import Home5PartnerSection from '@/components/partner-sections/Home3PartnerSection'
import Home7PortfolioSection from '@/components/portfolio-section/Home7PortfolioSection'
import Home3ProcessSection from '@/components/process-sections/Home3ProcessSection'
import Home3ServiceSection from '@/components/service-section/Home7ServiceSection'
import Home3TestimonialSection from '@/components/testimonial-section/Home2TestimonialSection'
import WhatsAppChat from '@/components/common/WhatsAppChat'
import React, { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        document.body.classList.add("digital-agency");
        document.body.classList.add("dark");
    })
    return (
        <>
            <Header />
            <Home4Banner />
            <Home5PartnerSection />
            <Home5aboutSection />
            {/* <Home7PortfolioSection /> */}
            <Home3ServiceSection />
            <Home3ProcessSection />
            <Home3TestimonialSection />
            {/* <Home3BlogSection /> */}
            <Home4Footer />
            <WhatsAppChat />
        </>
    )
}
