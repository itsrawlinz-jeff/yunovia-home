"use client";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/all.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/style.css";

import { useEffect } from "react";
import { useWow } from '@/customHooks/useWow';
import useMagneticHover from "@/customHooks/useMagneticHover";
import { dmsans, suseSans, lora } from "@/fonts/font";
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import ThemeSwitch from "@/components/common/Theme";
import ScrollCircleProgress from "@/utils/ScrollCircleProgess";
import useButtonHoverEffect from "@/customHooks/useButtonHoverEffect";
import SmoothPageScroll from "@/utils/SmoothPageScroll";
import AnimatedCursor from "react-animated-cursor";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useMagneticHover();
  useWow();
  useButtonHoverEffect();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("../../public/assets/js/confetti.browser.min");
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />

        {/* Primary SEO Meta Tags */}
        <title>Yunovia Group - Innovating the Future, Powering Progress.</title>
        <meta name="title" content="Yunovia Group - Innovating the Future, Powering Progress." />
        <meta name="description" content="Yunovia Group is Kenya’s leading digital transformation partner. We offer innovative tech solutions in software development, digital marketing, and automation." />
        <meta name="keywords" content="Yunovia Group, Kenya, Software Development, Digital Marketing, Tech Agency, Web Design, App Development, SEO" />

        {/* Canonical */}
        <link rel="canonical" href={`https://www.yunoviagroup.com${pathname}`} />

        {/* Favicon */}
        <link rel="icon" href="/assets/img/favicon.ico" type="image/x-icon" sizes="16x16" />

        {/* Social Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.yunoviagroup.com${pathname}`} />
        <meta property="og:title" content="Yunovia Group - Innovating the Future, Powering Progress." />
        <meta property="og:description" content="Kenya’s trusted software, marketing & digital transformation agency." />
        <meta property="og:image" content="https://www.yunoviagroup.com/assets/img/og-banner.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yunovia Group - Innovating the Future, Powering Progress." />
        <meta name="twitter:description" content="Kenya’s trusted software, marketing & digital transformation agency." />
        <meta name="twitter:image" content="https://www.yunoviagroup.com/assets/img/og-banner.jpg" />

        {/* Font & Icons */}
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Yunovia Group",
            "url": "https://www.yunoviagroup.com",
            "logo": "https://www.yunoviagroup.com/assets/img/logo.png",
            "sameAs": [
              "https://www.facebook.com/yunoviagroup",
              "https://www.linkedin.com/company/yunoviagroup",
              "https://www.instagram.com/yunoviagroup"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254790064458",
              "contactType": "Customer Support",
              "email": "info@yunoviagroup.com"
            }
          })
        }} />

        {/* GSAP Scripts */}
        <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" onLoad={() => { window.gsap?.registerPlugin(window.ScrollTrigger); }} />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/SplitText.min.js" strategy="beforeInteractive" />
      </head>
      <body id="body" className={`tt-magic-cursor ${lora.variable} ${dmsans.variable} ${suseSans.variable}`}>
        <SmoothPageScroll />
        {children}
        <AnimatedCursor
          innerSize={16}
          outerSize={16}
          color='88, 65, 216'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={3}
          outerStyle={{ zIndex: 999999 }}
          innerStyle={{ zIndex: 999999 }}
          clickables={[
            'a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]',
            'input[type="submit"]', 'input[type="image"]', 'label[for]',
            'select', 'textarea', 'button', '.link'
          ]}
        />
        <ScrollCircleProgress />
        <ThemeSwitch />
      </body>
    </html>
  );
}
