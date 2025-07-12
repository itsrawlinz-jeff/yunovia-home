import Link from 'next/link'
import React from 'react'

const Home4Footer = () => {
  return (
    <footer className="footer-section style-4">
      <div className="container">
        <div className="footer-menu-wrap">
          <div className="row gy-5">
            <div className="col-lg-7">
              <div className="footer-contact-wrap">
                <div className="title-area">
                  <h2>Empowering Africa's Digital Future with Innovative Solutions</h2>
                </div>
                <ul className="contact-list">
                  <li className="single-contact">
                    <div className="icon">
                      <img src="/assets/img/home1/icon/contact-mail-icon.svg" alt="Email" />
                    </div>
                    <div className="content">
                      <span>Email Us</span>
                      <a href="mailto:info@yunoviagroup.com">info@yunoviagroup.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-2 col-sm-6">
              <div className="footer-widget">
                <div className="widget-title">
                  <h3>Company</h3>
                </div>
                <ul className="widget-list">
                  <li><Link href="/about">About Yunovia</Link></li>
                  <li><Link href="/team">Meet the Team</Link></li>
                  <li><Link href="/portfolio">FAQs</Link></li>
                  <li><Link href="#">Careers <span>Hiring</span></Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-sm-6 d-flex justify-content-lg-end">
              <div className="footer-widget">
                <div className="widget-title">
                  <h3>Industries we Serve</h3>
                </div>
                <ul className="widget-list">
                  <li><Link href="#">Fintech & Banking</Link></li>
                  <li><Link href="#">Education</Link></li>
                  <li><Link href="#">Healthcare</Link></li>
                  <li><Link href="#">Government & NGOs</Link></li>
                  <li><Link href="#">E-Commerce</Link></li>
                  <li><Link href="#">Tech & Media</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <svg className="divider-line" height={6} viewBox="0 0 1320 6" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
          </svg>

          <div className="company-logo-and-location-area">
            <div className="row gy-5">
              <div className="col-lg-3 col-md-4">
                <div className="company-logo-area">
                  <img src="/assets/img/footer-logo3.svg" alt="Yunovia Group Logo" />
                  <a href="/assets/Yunovia-Company-Profile.pdf" className="file-download-btn" download>
                    <div className="icon">
                      <svg width={24} height={24} viewBox="0 0 24 24"><path d="M10.6758 2.80469H13.3242V11.0102H17.0039L12 17.5609L6.99609 11.0102H10.6758V2.80469Z" /></svg>
                    </div>
                    Company <br /> Profile
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-md-8">
                <ul className="location-list">
                  {/* <li>
                    <span>Nairobi HQ</span>
                    <a href="https://maps.google.com">Pentagon Towers, Mombasa Road, Nairobi, Kenya</a>
                  </li> */}
                  <li>
                    <span>Mitsumi Business Park</span>
                    <a href="https://maps.google.com">Muthithi Road , Westlands- Nairobi</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 d-flex justify-content-lg-end">
                <div className="newsletter-area">
                  <h3>Subscribe</h3>
                  <form className="newsletter-form">
                    <input type="email" placeholder="Your email" />
                    <svg width={18} height={18} viewBox="0 0 18 18"><path d="M17.9597 0.771505L0.863689 6.58643L6.34337 11.6566L9.9185 17.2758L17.9597 0.771505Z" /></svg>
                  </form>
                  <div className="social-area">
                    <h5>Follow Us</h5>
                    <ul className="social-list">
                      <li><a href="https://facebook.com/yunoviagroup"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://linkedin.com/company/yunoviagroup"><i className="bx bxl-linkedin" /></a></li>
                      <li><a href="https://instagram.com/yunoviagroup"><i className="bx bxl-instagram-alt" /></a></li>
                      <li><a href="https://youtube.com/@yunoviagroup"><i className="bx bxl-youtube" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright-and-social-area">
            <p>&copy; 2025 Yunovia Group. All Rights Reserved.</p>
            <div className="terms-condition">
              <svg width={12} height={12} viewBox="0 0 12 12">
                <path d="M0 6L10.625 6.44231L7.025 10.1923L6.175 9.74981L8.752 6.62481H0.6V5.375H8.752L6.175 2.69231L6.6 2.25L10.625 5.55731L7.025 1.80731L6.175 2.24981" />
              </svg>
              <p><a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Home4Footer;
