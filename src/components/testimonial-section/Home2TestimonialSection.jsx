"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home2TestimonialSection = () => {
  const settings = useMemo(() => {
    return {
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
        nextEl: ".testimonial-slider-next",
        prevEl: ".testimonial-slider-prev",
      },
      pagination: {
        el: ".franctional-pagi",
        type: "fraction",
      },
    };
  }, []);

  return (
    <>
      <div className="home2-testimonial-section mb-130">
        <div className="container">
          <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12">
              <div className="section-title two text-center">
                <span>Customer Satisfaction</span>
                <h2>They Love Working With Us</h2>
              </div>
            </div>
          </div>

          <div className="testimonial-slider-area">
            <Swiper {...settings} className="swiper home2-testimonial-slider">
              <div className="swiper-wrapper">
                
                {/* Testimonial 1 */}
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card2">
                    <div className="row gy-4">
                      <div className="col-lg-4 col-md-7">
                        <div className="testimonial-img">
                          <img src="/assets/img/home2/testimonial-author-img1.png" alt="Brian Otieno" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="testimonial-content-wrap">
                          <div className="company-logo">
                            <img src="/assets/img/home1/testimonial-company-logo1.png" alt="Company Logo" className="light" />
                            <img src="/assets/img/home1/testimonial-company-logo1-white.png" alt="Company Logo" className="dark" />
                          </div>
                          <div className="testimonial-content">
                            <ul className="rating-area">
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <p>Yunovia’s solutions gave our brand a whole new edge. Their creativity and delivery were beyond what we expected. We’re proud to work with such a visionary team.</p>
                          </div>
                          <div className="author-area">
                            <h5>Brian Otieno</h5>
                            <span>Project Manager, Nairobi</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Testimonial 2 */}
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card2">
                    <div className="row gy-4">
                      <div className="col-lg-4 col-md-7">
                        <div className="testimonial-img">
                          <img src="/assets/img/home2/testimonial-author-img2.png" alt="Faith Wanjiku" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="testimonial-content-wrap">
                          <div className="company-logo">
                            <img src="/assets/img/home1/testimonial-company-logo2.png" alt="Company Logo" className="light" />
                            <img src="/assets/img/home1/testimonial-company-logo2-white.png" alt="Company Logo" className="dark" />
                          </div>
                          <div className="testimonial-content">
                            <ul className="rating-area">
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <p>The team was professional, responsive, and full of fresh ideas. They helped us reimagine our brand and delivered on every promise. Highly recommended!</p>
                          </div>
                          <div className="author-area">
                            <h5>Faith Wanjiku</h5>
                            <span>Digital Marketing Lead, Mombasa</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Testimonial 3 */}
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card2">
                    <div className="row gy-4">
                      <div className="col-lg-4 col-md-7">
                        <div className="testimonial-img">
                          <img src="/assets/img/home2/testimonial-author-img3.png" alt="Kevin Mwangi" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="testimonial-content-wrap">
                          <div className="company-logo">
                            <img src="/assets/img/home1/testimonial-company-logo3.png" alt="Company Logo" className="light" />
                            <img src="/assets/img/home1/testimonial-company-logo3-white.png" alt="Company Logo" className="dark" />
                          </div>
                          <div className="testimonial-content">
                            <ul className="rating-area">
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <p>The level of innovation and clarity in execution was impressive. Yunovia’s team truly understands user experience and how to make it work for business.</p>
                          </div>
                          <div className="author-area">
                            <h5>Kevin Mwangi</h5>
                            <span>UX Designer, Kisumu</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Testimonial 4 */}
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card2">
                    <div className="row gy-4">
                      <div className="col-lg-4 col-md-7">
                        <div className="testimonial-img">
                          <img src="/assets/img/home2/testimonial-author-img4.png" alt="Linda Njeri" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="testimonial-content-wrap">
                          <div className="company-logo">
                            <img src="/assets/img/home1/testimonial-company-logo4.png" alt="Company Logo" className="light" />
                            <img src="/assets/img/home1/testimonial-company-logo4-white.png" alt="Company Logo" className="dark" />
                          </div>
                          <div className="testimonial-content">
                            <ul className="rating-area">
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <p>We had tight deadlines and specific requirements. Yunovia went above and beyond to deliver a powerful product on time. Very reliable and easy to work with.</p>
                          </div>
                          <div className="author-area">
                            <h5>Linda Njeri</h5>
                            <span>Systems Analyst, Nakuru</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>

            {/* Navigation Buttons */}
            <div className="slider-btn-area">
              <div className="franctional-pagi" />
              <div className="slider-btn-grp two">
                <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-prev">
                  <svg width={9} height={10} viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.85712 9.28577C7.14283 7.50005 3.5714 5.71434 1.42855 5.00005C3.5714 4.28577 6.78569 3.21434 7.85712 0.714339" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-next">
                  <svg width={9} height={10} viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2TestimonialSection;
