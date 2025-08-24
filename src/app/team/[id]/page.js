"use client";
import Home3Footer from "@/components/Footer/Home3Footer";
import Header from "@/components/header/Header";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";



const page = () => {
  
const teamMembers = {
  "jeffrey-rowlings": {
    name: "Jeffrey Rowlings",
    title: "Chief Executive Officer (CEO)",
    image: "/assets/img/TeamImages/jeff.png",
    quote: "Leading the company towards success through vision, strategy, and innovation.",
    bio: "As the CEO of Yunovia Group, I drive the company’s mission to deliver cutting-edge digital solutions that solve real-world problems. With a strong background in leadership and strategic management, I oversee company growth, foster innovation, and ensure sustainable development.",
    skills: ["Strategic Leadership", "Business Development", "Corporate Strategy", "Team Management"],
    achievements: [
      "Scaled Yunovia Group’s operations and expanded into multiple markets.",
      "Built a culture of innovation and collaboration across teams."
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/",
      facebook: "https://facebook.com/,"
    }
  },

  "eric-waruingi": {
    name: "Eric Waruingi",
    title: "Director",
    image: "/assets/img/TeamImages/eric.png",
    quote: "Driving organizational growth through vision, leadership, and execution.",
    bio: "I am the Director at Yunovia Group, responsible for overseeing strategic initiatives, managing operations, and ensuring the company’s goals are achieved effectively.",
    skills: ["Executive Leadership", "Operational Management", "Strategic Planning", "Team Building"],
    achievements: [
      "Directed multiple high-impact projects that streamlined company operations.",
      "Implemented strategies that enhanced organizational efficiency by 35%."
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/",
      facebook: "https://facebook.com/"
    }
  },

  "elvis-okello": {
    name: "Elvis Okello",
    title: "Senior Software Engineer",
    image: "/assets/img/TeamImages/elvis.png",
    quote: "I believe that great software blends creativity and precision to solve real world problems.",
    bio: "I am a Senior Software Engineer with extensive experience in building scalable, secure, and high-performing applications.",
    skills: ["Full-Stack Development", "Front-End Design", "Shopify Development", "SEO Optimization"],
    achievements: ["Led the development of a custom ERP system that improved operational efficiency by 40%."],
    socialLinks: {
      linkedin: "https://linkedin.com/",
      facebook: "https://facebook.com/"
    }
  },

  "faith-amani": {
    name: "Faith Amani",
    title: "Project Manager",
    image: "/assets/img/TeamImages/amani.png",
    quote: "Bringing teams together to deliver projects on time and with impact.",
    bio: "I am a Project Manager at Yunovia Group, specializing in coordinating teams, managing resources, and ensuring that projects are executed seamlessly.",
    skills: ["Project Coordination", "Agile & Scrum Management", "Team Collaboration", "Risk Management"],
    achievements: [
      "Successfully managed multiple cross-functional projects with 100% on-time delivery.",
      "Introduced Agile practices that improved team productivity."
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/",
      facebook: "https://facebook.com/"
    }
  },

  "purity-ng'ang'a": {
    name: "Purity Ng'ang'a",
    title: "Senior Software Engineer",
    image: "/assets/img/TeamImages/purity.png",
    quote: "Turning ideas into reliable, scalable, and innovative software solutions.",
    bio: "As a Senior Software Engineer, I design and implement high-quality software solutions that align with business needs.",
    skills: ["Backend Development", "Cloud Integration", "Database Design", "API Development"],
    achievements: [
      "Engineered scalable systems that supported growth of 50k+ active users.",
      "Mentored junior developers and improved overall code quality."
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/",
      facebook: "https://facebook.com/"
    }
  },

  "gad-shilkali": {
    name: "Gad Shilkali",
    title: "Digital Marketing Manager",
    image: "/assets/img/TeamImages/gad.png",
    quote: "Connecting brands with people through creativity and strategy.",
    bio: "As Digital Marketing Manager, I develop campaigns that amplify Yunovia’s presence and drive engagement across digital platforms.",
    skills: ["Digital Strategy", "SEO/SEM", "Social Media Marketing", "Content Strategy"],
    achievements: [
      "Launched campaigns that increased brand visibility by 70%.",
      "Built strong digital communities around Yunovia’s products."
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/",
      facebook: "https://facebook.com/"
    }
  },

  "vene-ngugi": {
    name: "Vene Ngugi",
    title: "Developer",
    image: "/assets/img/TeamImages/Vene.png",
    quote: "Crafting clean and efficient code for impactful solutions.",
    bio: "As a Developer, I focus on building responsive applications and solving technical challenges to deliver user-centered products.",
    skills: ["Web Development", "JavaScript/React", "Problem Solving", "UI Implementation"],
    achievements: [
      "Contributed to multiple core projects within Yunovia.",
      "Improved app performance through optimized front-end solutions."
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/",
      facebook: "https://facebook.com/"
    }
  },

  "ivan-sakwa": {
    name: "Ivan Sakwa",
    title: "Developer",
    image: "/assets/img/TeamImages/Ivan.png",
    quote: "Building innovative solutions through code and creativity.",
    bio: "As a Developer at Yunovia Group, I bring technical ideas to life through innovative coding practices and collaboration with the team.",
    skills: ["Frontend & Backend Development", "React/Node.js", "Database Management", "API Integration"],
    achievements: [
      "Developed reusable components that accelerated project delivery.",
      "Worked on client-focused solutions that boosted satisfaction scores."
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/",
      facebook: "https://facebook.com/"
    }
  },

"jecinta-mumbi": {
  name: "Jecinta Mumbi",
  title: "Marketing Manager",
  image: "/assets/img/TeamImages/jess.png",
  quote: "Driving brand growth through creativity, strategy, and innovation.",
  bio: "As Marketing Manager at Yunovia Group, I lead initiatives that enhance our brand presence, engage our audience, and support business growth through effective campaigns and strategies.",
  skills: ["Digital Marketing", "Brand Strategy", "Content Creation", "Social Media Management", "Market Research"],
  achievements: [
    "Led successful marketing campaigns that increased brand awareness.",
    "Implemented strategies that boosted client engagement and retention."
  ],
  socialLinks: {
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/"
  }
},


};

const { id } = useParams(); // e.g. "ceo-jeffrey-rowlings"

  // 1. Remove the first part before the first "-"
  const removeRolePrefix = (slug) => {
    const parts = slug.split("-");     // ["ceo", "jeffrey", "rowlings"]
    parts.shift();                     // remove "ceo"
    return parts.join("-");            // "jeffrey-rowlings"
  };

  const cleanedId = removeRolePrefix(id);

  // 2. Convert to readable name
  const formatName = (slug) => {
    return slug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const displayName = formatName(cleanedId);

  // 3. Fetch member data from object
  const memberData = teamMembers[cleanedId];

  if (!memberData) {
    console.log(`No team member found for ${displayName}`);
  }


  return (
    <div>
      <Header />
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="banner-content">
                <h1>Team Details</h1>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <svg
                      width={25}
                      height={6}
                      viewBox="0 0 25 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                    </svg>
                    Team Details
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}
      {/* Team Details Page Start */}
      <div className="team-details-page mb-130">
        <div className="container">
          <div className="row gy-5 justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="profile-img">
                <img src={memberData.image} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="team-details-content">
                <div className="name-designation-area">
                  <h2>{memberData.name}</h2>
                  <span>{memberData.title}</span>
                </div>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <span> “{memberData.quote}”</span>
                <span className="line-break" />
                <p>{memberData.bio}</p>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <div className="skill-area">
                  <h5>My Skills :</h5>
                  <span className="line-break" />
                  <ul>
                    {memberData.skills.map((item) => (
                      <li key={item}>
                        <svg
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11 17.5352C13.5485 16.2934 15.3045 13.6778 15.3045 10.6522C15.3045 7.62651 13.5485 5.011 11 3.76918C12.0112 3.27646 13.1471 3 14.3477 3C18.5738 3 21.9998 6.426 21.9998 10.6522C21.9998 14.8784 18.5738 18.3043 14.3477 18.3043C13.1471 18.3043 12.0112 18.0279 11 17.5352Z"
                            />
                            <circle cx="7.65217" cy="10.6522" r="7.15217" />
                          </g>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="line-break" />
                <span className="line-break" />
                <div className="achievement-area">
                  <h5>Achievements :</h5>
                  <span className="line-break" />
                  <ul className="two">
                    {memberData.achievements.map((item) => (
                      <li key={item}>
                        <svg
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11 17.5352C13.5485 16.2934 15.3045 13.6778 15.3045 10.6522C15.3045 7.62651 13.5485 5.011 11 3.76918C12.0112 3.27646 13.1471 3 14.3477 3C18.5738 3 21.9998 6.426 21.9998 10.6522C21.9998 14.8784 18.5738 18.3043 14.3477 18.3043C13.1471 18.3043 12.0112 18.0279 11 17.5352Z"
                            />
                            <circle cx="7.65217" cy="10.6522" r="7.15217" />
                          </g>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                <ul className="social-list">
                  {Object.entries(memberData.socialLinks).map(
                    ([name, url]) => (
                      <li key={name}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {name}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Details Page End */}

      <Home3Footer />
    </div>
  );
};

export default page;
