"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const Home1processSection = () => {
      const settings = useMemo(() => {
            return {
                slidesPerView: "auto",
		speed: 1500,
		spaceBetween: 60,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".process-slider-next",
			prevEl: ".process-slider-prev",
		},
		breakpoints: {
		  280: {
			slidesPerView: 1,
		  },
		  386: {
			slidesPerView: 1,
		  },
		  576: {
			slidesPerView: 1,
			spaceBetween: 15,
		  },
		  768: {
			slidesPerView: 2,
			spaceBetween: 15,
		  },
		  992: {
			slidesPerView: 3,
		  },
		  1200: {
			slidesPerView: 3,
			spaceBetween: 25,
		  },
		  1400: {
			slidesPerView: 3,
		  },
		},
            };
        }, []);
    return (
        <div className="home1-process-section mb-80">
            <div className="container">
                <div className="process-wrapper">
                    <div className="row mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Solution Process</span>
                                <h2>Solution in Four Step.</h2>
                                <p>We simplify complex challenges with a streamlined, four-step process.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process-slider-area">
                        <svg className="line" width={1180} height={12} viewBox="0 0 1180 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5L0 0.226497V11.7735L10 7V5ZM1170 7L1180 11.7735V0.226497L1170 5V7ZM9 7H1171V5H9V7Z" />
                        </svg>
                        <div className="row">
                            <div className="col-lg-12">
                                <Swiper {...settings} className="swiper home1-process-slider">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="process-card">
                                                <div className="step-no-and-icon">
                                                    <span>Step-01 :</span>
                                                    <div className="icon">
                                                        <i className="bi bi-check-lg" />
                                                    </div>
                                                </div>
                                                <div className="process-content">
                                                    <h5>Discovery &amp; <br />Consultation</h5>
                                                    <p>Understand the client's vision, goals, &amp; challenges.</p>
                                                    <ul>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Initial Meeting
                                                        </li>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Requirements Gathering
                                                        </li>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Market Research
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="process-card">
                                                <div className="step-no-and-icon">
                                                    <span>Step-02 :</span>
                                                    <div className="icon">
                                                        <i className="bi bi-check-lg" />
                                                    </div>
                                                </div>
                                                <div className="process-content">
                                                    <h5>Design &amp; <br />Development</h5>
                                                    <p>Develop initial wireframes and user flow diagrams.</p>
                                                    <ul>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Wireframing
                                                        </li>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Advanced Design
                                                        </li>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Feedback Loop
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="process-card">
                                                <div className="step-no-and-icon">
                                                    <span>Step-03 :</span>
                                                    <div className="icon">
                                                        <i className="bi bi-check-lg" />
                                                    </div>
                                                </div>
                                                <div className="process-content">
                                                    <h5>Quality <br />Assurance</h5>
                                                    <p>Perform various types of testing, including functional &amp; performance.</p>
                                                    <ul>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Testing
                                                        </li>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Bug Fixing
                                                        </li>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            User Acceptance Testing
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="process-card">
                                                <div className="step-no-and-icon">
                                                    <span>Step-04 :</span>
                                                    <div className="icon">
                                                        <i className="bi bi-check-lg" />
                                                    </div>
                                                </div>
                                                <div className="process-content">
                                                    <h5>Design &amp; <br />Development</h5>
                                                    <p>Develop initial wireframes and user flow diagrams.</p>
                                                    <ul>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Wireframing
                                                        </li>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Advanced Design
                                                        </li>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Feedback Loop
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="process-card">
                                                <div className="step-no-and-icon">
                                                    <span>Step-05 :</span>
                                                    <div className="icon">
                                                        <i className="bi bi-check-lg" />
                                                    </div>
                                                </div>
                                                <div className="process-content">
                                                    <h5>Quality <br />Assurance</h5>
                                                    <p>Perform various types of testing, including functional &amp; performance.</p>
                                                    <ul>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Testing
                                                        </li>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            Bug Fixing
                                                        </li>
                                                        <li>
                                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx={8} cy={8} r={8} />
                                                                <g>
                                                                    <path d="M10.7565 5.20404C10.8947 5.07172 11.0787 4.99857 11.2695 5.00002C11.4604 5.00147 11.6433 5.07742 11.7795 5.21183C11.9157 5.34624 11.9947 5.5286 11.9997 5.72044C12.0048 5.91228 11.9355 6.09858 11.8065 6.24004L7.89085 11.1635C7.82352 11.2364 7.74226 11.2949 7.65192 11.3355C7.56158 11.3761 7.46403 11.398 7.36509 11.3999C7.26614 11.4017 7.16785 11.3835 7.07608 11.3463C6.98431 11.309 6.90094 11.2536 6.83097 11.1832L4.23426 8.57251C4.16195 8.50477 4.10395 8.42307 4.06372 8.3323C4.02349 8.24153 4.00186 8.14354 4.00011 8.04418C3.99837 7.94482 4.01655 7.84612 4.05357 7.75398C4.09059 7.66184 4.14569 7.57813 4.21558 7.50787C4.28547 7.4376 4.36872 7.3822 4.46037 7.34498C4.55202 7.30777 4.65019 7.28949 4.74901 7.29124C4.84784 7.29299 4.9453 7.31474 5.03559 7.35519C5.12588 7.39563 5.20713 7.45395 5.27452 7.52665L7.32951 9.59174L10.7378 5.22575C10.744 5.21816 10.7495 5.21091 10.7565 5.20404Z" />
                                                                </g>
                                                            </svg>
                                                            User Acceptance Testing
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                        <div className="slider-btn-grp">
                            <div style={{cursor:"pointer"}} className="slider-btn process-slider-prev">
                                <svg width={9} height={10} viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.85712 9.28577C7.14283 7.50005 3.5714 5.71434 1.42855 5.00005C3.5714 4.28577 6.78569 3.21434 7.85712 0.714339" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div style={{cursor:"pointer"}} className="slider-btn process-slider-next">
                                <svg width={9} height={10} viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home1processSection
