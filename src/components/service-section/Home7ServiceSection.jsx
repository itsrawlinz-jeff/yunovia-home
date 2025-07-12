import Link from 'next/link'
import React from 'react'

const Home7ServiceSection = () => {
  return (
    <>
      <div className="home7-service-section mb-130">
        <div className="container">
          <div className="service-wrapper">
            <div className="sub-title wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <span>What We Offer</span>
            </div>
            <ul className="service-list">

              {/* Group 1: Digital Marketing */}
              <li className="single-service wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <h2><span>1.</span><Link href="/service/details/digital-marketing-seo">Digital Marketing & SEO</Link></h2>
                <p>Boost visibility with expert SEO, SEM, social media, influencer campaigns, and targeted paid ads.</p>
              </li>

              {/* Group 2: Creative & Branding */}
              <li className="single-service wow animate fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms">
                <h2><span>2.</span><Link href="/service/details/creative-design">Creative Design & Brand Identity</Link></h2>
                <p>We craft powerful visual identities through brand strategy, graphic design, UI/UX, and motion graphics.</p>
              </li>

              <li className="single-service wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                <h2><span>3.</span><Link href="/service/details/corporate-branding">Corporate Branding & Print</Link></h2>
                <p>From company profiles to print-ready assets—elevate your brand's perception across all touchpoints.</p>
              </li>

              {/* Group 3: Development & Technology */}
              <li className="single-service wow animate fadeInDown" data-wow-delay="500ms" data-wow-duration="1500ms">
                <h2><span>4.</span><Link href="/service/details/software-development">Software & App Development</Link></h2>
                <p>Custom-built websites, mobile apps, e-commerce platforms, and digital solutions tailored to scale.</p>
              </li>

              <li className="single-service wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                <h2><span>5.</span><Link href="/service/details/it-consulting">IT Consulting & Digital Strategy</Link></h2>
                <p>Guiding your business through digital transformation, system integration, and agile tech alignment.</p>
              </li>

              {/* Group 4: Media & Production */}
              <li className="single-service wow animate fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms">
                <h2><span>6.</span><Link href="/service/details/video-production">Video Production & Editing</Link></h2>
                <p>Engage your audience with cinematic promo videos, corporate storytelling, and expert editing services.</p>
              </li>

              {/* Group 5: Training */}
              <li className="single-service wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                <h2><span>7.</span><Link href="/service/details/training">Training & Capacity Building</Link></h2>
                <p>Empowering teams and individuals with hands-on digital skills, mentorship, and corporate training programs.</p>
              </li>

            </ul>

            {/* Call-to-action */}
            <div className="contact-btn-area two wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <h6>Partner with <span>Yunovia Group</span> to unlock your brand's full digital potential.</h6>
              <Link href="/contact" className="primary-btn3 four btn-hover">
                Let's Talk
                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Optional video showcase section */}
      <div className="home4-video-section mb-130">
        <video autoPlay loop muted playsInline src="assets/video/home4-video.mp4" />
      </div>
    </>
  )
}

export default Home7ServiceSection
