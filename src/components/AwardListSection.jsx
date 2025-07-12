"use client"
import React, { useState } from 'react'

const AwardListSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const awards = [
        { title: ' Rawlinz Designs', platform: ' A premier creative agency delivering world-class design, web development, and branding solutions tailored to elevate modern businesses.' },
        { title: 'KREP Software', platform: 'Empowering businesses with powerful enterprise software and CRM systems, built for scalability, automation, and operational excellence.' },
        { title: 'Somaflow', platform: 'School Managemnet softwrae, providing a seamless and efficient solution for managing student records, academic performance, and overall student experience.' },
        { title: 'Cheap Web Hosting', platform: 'Affordable and reliable hosting solutions designed for startups, developers, and SMEs looking to establish a strong online presence.'},
        { title: 'Cheap Bulk SMS', platform: 'A fast, scalable SMS gateway for businesses that want to reach customers instantly through promotional or transactional messaging.'},];

        return (
        <div className="award-list-section mb-130">
            <div className="container">
                <div className="row justify-content-center mb-70">
                    <div className="col-lg-5">
                        <div className="section-title three">
                            <h2> Our Brands</h2>
                            {/* <p>Affordable and reliable hosting solutions designed for startups, developers, and SMEs looking to establish a strong online presence.</p> */}
                        </div>
                    </div>
                </div>
                 
                <div className="award-wrap">
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="award-img-group">
                                {awards.map((_, index) => (
                                    <li key={index} className={index === activeIndex ? 'active' : ''}>
                                        <div className="award-img">
                                            <img src={`/assets/img/innerpages/award-img-0${index + 1}.png`} alt="" className="light" />
                                            <img src={`/assets/img/innerpages/award-img-0${index + 1}-dark.png`} alt="" className="dark" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-8">
                            <table className="award-table two">
                                <tbody>
                                    {awards.map((award, index) => (
                                        <tr
                                            key={index}
                                            className="wow animate fadeInLeft"
                                            data-wow-delay={`${200 + index * 200}ms`}
                                            data-wow-duration="1500ms"
                                            onMouseEnter={() => setActiveIndex(index)}
                                        >
                                            <td><a href="#">{award.title}</a></td>
                                            <td>{award.platform}</td>
                                            <td><span>{award.year}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AwardListSection
