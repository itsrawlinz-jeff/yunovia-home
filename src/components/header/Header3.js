"use client"
import React, { useEffect, useReducer, useRef } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const initialState = {
    activeMenu: "",
    activeSubMenu: "",
    isSidebarOpen: false,
    isLeftSidebarOpen: false,
    isRightSidebar: false,
    isLang: false,
};
function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_MENU":
            return {
                ...state,

                activeMenu: state.activeMenu === action.menu ? "" : action.menu,
                activeSubMenu:
                    state.activeMenu === action.menu ? state.activeSubMenu : "",
            };
        case "TOGGLE_SUB_MENU":
            return {
                ...state,
                activeSubMenu:
                    state.activeSubMenu === action.subMenu ? "" : action.subMenu,
            };
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
            };
        case "setScrollY":
            return { ...state, scrollY: action.payload };
        case "TOGGLE_LEFT_SIDEBAR":
            return {
                ...state,
                isLeftSidebarOpen: !state.isLeftSidebarOpen,
            };
        case "TOGGLE_LANG":
            return {
                ...state,
                isLang: !state.isLang,
            };
        case "TOGGLE_RIGHTSIDEBAR":
            return {
                ...state,
                isRightSidebar: !state.isRightSidebar,
            };
        default:
            return state;
    }
}


const Header3 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const headerRef = useRef(null);
    const pathname = usePathname()
    const handleScroll = () => {
        const { scrollY } = window;
        dispatch({ type: "setScrollY", payload: scrollY });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const toggleMenu = (menu) => {
        dispatch({ type: "TOGGLE_MENU", menu });
    };

    const toggleRightSidebar = () => {
        dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
    };
    const toggleSubMenu = (subMenu) => {
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
    };
    const toggleSidebar = () => {
        console.log("click");

        dispatch({ type: "TOGGLE_MENU", menu: "" });
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };
    const companyPaths = [
        '/about',
        '/team',
        '/team/style2',
        '/team/style3',
        '/team/details',
        '/award-recognitions',
        '/social-responsibility',
        '/service',
        '/service/style2',
        '/service/details',
        '/case-study',
        '/case-study/style2',
        '/case-study/details',
        '/news-insight-grid',
        '/news-insight-grid/style2',
        '/news-insight-grid/style3',
        '/news-insight-grid/details',
        '/pricing',
        '/career',
        '/career/details',
        '/shop',
        '/cart',
        '/checkout',
        '/product-details',
        '/faq',
        '/contact',
    ];
    const homePaths = [
        '/digital-agency',
        '/digital-agency-dark',
        '/startup-agency',
        '/startup-agency-dark',
        '/fintech',
        '/fintech-dark',
        '/marketing-agency',
        '/marketing-agency-dark',
        '/it-consulting',
        '/it-consulting-dark',
        '/saas-product',
        '/saas-product-dark',

    ]
    const portfolioPaths = [
        '/portfolio',
        '/portfolio/masonry',
        '/portfolio/slider', '/portfolio/classic',
        '/portfolio/creative',
        '/portfolio/caption',
        '/portfolio/horizontal',
        '/portfolio/carousel',
        '/portfolio/vertical',
        '/portfolio/interactive-link',
        '/portfolio/grid',
        '/portfolio/details']
    const isCompanyActive = companyPaths.some((path) => pathname.startsWith(path));
    const isPortfolioActive = portfolioPaths.some((path) => pathname.startsWith(path));
    const isHomeActive = homePaths.some((path) => pathname.startsWith(path));
    return (
        <>
            <div className={`right-sidebar-menu ${state.isRightSidebar ? "show-right-menu" : ""
                }`}>
                <div className="sidebar-logo-area d-flex justify-content-between align-items-center">
                    <div className="sidebar-logo-wrap">
                        <Link href="/">
                            <img alt="image" src="/assets/img/right-sidebar-Yunovia Group.jpg" className="light" />
                            <img alt="image" src="/assets/img/right-sidebar-Yunovia Group.jpg" className="dark" />
                        </Link>
                    </div>
                    <div className="right-sidebar-close-btn" onClick={toggleRightSidebar}>
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6694 3.0106C14.8839 2.78848 15.0026 2.49099 15 2.18219C14.9973 1.8734 14.8734 1.57801 14.6551 1.35966C14.4367 1.1413 14.1413 1.01744 13.8325 1.01475C13.5237 1.01207 13.2262 1.13078 13.0041 1.34531L8.00706 6.34236L3.01119 1.34531C2.90184 1.23589 2.77202 1.14907 2.62912 1.08983C2.48623 1.03058 2.33306 1.00005 2.17837 1C2.02368 0.999945 1.87049 1.03036 1.72756 1.08951C1.58462 1.14865 1.45473 1.23538 1.34531 1.34472C1.23589 1.45407 1.14907 1.58389 1.08983 1.72679C1.03058 1.86968 1.00005 2.02285 1 2.17754C0.999945 2.33223 1.03036 2.48542 1.08951 2.62835C1.14865 2.77129 1.23538 2.90118 1.34472 3.0106L6.34177 8.00765L1.34472 13.0047C1.12389 13.2257 0.99989 13.5253 1 13.8378C1.00011 14.1502 1.12432 14.4497 1.34531 14.6706C1.5663 14.8914 1.86596 15.0154 2.17837 15.0153C2.49078 15.0152 2.79036 14.891 3.01119 14.67L8.00706 9.67294L13.0041 14.67C13.2262 14.8845 13.5237 15.0032 13.8325 15.0005C14.1413 14.9979 14.4367 14.874 14.6551 14.6556C14.8734 14.4373 14.9973 14.1419 15 13.8331C15.0026 13.5243 14.8839 13.2268 14.6694 13.0047L9.67235 8.00765L14.6694 3.0106Z" />
                        </svg>
                    </div>
                </div>
                <div className="sidebar-content-wrap">
                    <div className="sidebar-content">
                        <h3>We are a global agency delivering digital, branding, and tech solutions that drive growth.</h3>
                        <div className="address-area">
                            <h5>Nairobi</h5>
                            <a href="https://maps.app.goo.gl/5BK65Dne4BcKamyH8" className="primary-btn1 transparent">
                    <span>View Site Map
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>View Site Map
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    </a>
                        </div>
                        <ul className="contact-area">
                            <li className="single-contact">
                                <div className="icon">
                                    <img src="/assets/img/home1/icon/contact-mail-icon.svg" alt="" />
                                </div>
                                <div className="content">
                                    <span>Send Us Mail</span>
                                    <h6><a href="mailto:info@example.com">hello@yunoviabrand.co.ke</a></h6>
                                </div>
                            </li>
                            <li className="single-contact">
                                <div className="icon">
                                    <img src="/assets/img/home1/icon/contact-call-icon.svg" alt="" />
                                </div>
                                <div className="content">
                                    <span>Call 24/7 Hours</span>
                                    <h6><a href="tel:+254117888890">+254117888890 </a></h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-bottom-area">
                        <ul className="social-list">
                            <li><a href="https://www.tiktok.com/@yunoviagroup?_t=ZM-8xkUAD3hfBo&_r=1"><i className="bx bxl-tiktok" /></a></li>
                            <li><a href="https://www.linkedin.com/posts/yunovia-group_your-digital-business-partner-ai-fintech-activity-7346905121655603202-G4kc?utm_source=share&utm_medium=member_android&rcm=ACoAAE0f5MgBasxOoQhuusyXgJclEjITee0SwQc"><i className="bx bxl-linkedin" /></a></li>
                            <li><a href="https://www.youtube.com/@YunoviaGroup"><i className="bx bxl-youtube" /></a></li>
                            <li><a href="https://www.instagram.com/yunoviagroup/profilecard/?igsh=Z3ltNDMwMjAwaGoz"><i className="bx bxl-instagram-alt" /></a></li>
                            <li><a href="https://x.com/Yunoviagroup?t=L_PQusdCUFgjnvs9wyLEGA&s=09"><i className="bx bxl-twitter" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <header className={`header-area style-3 ${pathname === "/portfolio/horizontal" || pathname === "/portfolio/vertical" || pathname === "/portfolio/interactive-link" ? "portfolio" : ""} ${pathname === "/portfolio/carousel" || pathname === "/digital-agency" || pathname === "/digital-agency-dark" ? "position-absolute" : ""} ${state.scrollY > 20 ? "sticky" : ""}`}>
                <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-between">
                    <div className="company-logo">
                        {pathname === "/portfolio/horizontal" || pathname === "/portfolio/vertical" || pathname === "/portfolio/interactive-link" ? "" : <Link href="/" className="logo-dark"><img alt="image" className="img-fluid" src="/assets/img/header-logo.svg" /></Link>}
                        {/* {pathname} */}
                        <Link href="/" className={` ${pathname === "/portfolio/horizontal" || pathname === "/portfolio/vertical" || pathname === "/portfolio/interactive-link" ? "" : "logo-light"} `}><img alt="image" className="img-fluid" src="/assets/img/header-logo-white.svg" /></Link>
                    </div>
                    <div className="menu-wrap">
                        <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
                            <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
                                <Link href="/" className="mobile-logo-wrap">
                                    <img alt="image" className="img-fluid light" src="/assets/img/header-Yunovia1.png" />
                                    <img alt="image" className="img-fluid dark" src="/assets/img/Brands/Yunovia1.png" />
                                </Link>
                                <div className="menu-close-btn" onClick={toggleSidebar}>
                                    <i className="bi bi-x" />
                                </div>
                            </div>
                            <ul className="menu-list">
                                <li className={`menu-item-has-children position-inherit ${isHomeActive ? "active" : ""}`}>
                                <Link href="/" className="menu-link">
                                        Home
                                    </Link>
                                    <i onClick={() => toggleMenu("HOME")} className={`bi bi-${state.activeMenu === "HOME" ? "dash" : "plus"} dropdown-icon`} />
                                </li>
                                <li className={`menu-item-has-children position-inherit ${pathname === "/industry/details" || pathname === "/industry" ? "active" : ""}`}>
                                    <Link href="/service" className="drop-down">Solution
                                    </Link>
                                    <i onClick={() => toggleMenu("solution")} className={`bi bi-${state.activeMenu === "solution" ? "dash" : "plus"} dropdown-icon`} />
                                    <div className={`mega-menu2 ${state.activeMenu === "solution" ? "d-block" : "none"}`} >
                                        <div className="container">
                                            <div className="row align-items-lg-end justify-content-between">
                                                <div className="col-xl-7 col-lg-8">
                                                    <div className="title-area">
                                                        <h2>Challenge We Tackle</h2>
                                                        <div className="icon">
                                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <ul className="menu-row">
                                                        <li className="menu-single-item">
                                                            <div className="menu-title">
                                                                <h6>
                                                                    <svg width={17} height={12} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx={6} cy={6} r="5.5" />
                                                                        <circle cx={11} cy={6} r="5.5" />
                                                                    </svg>
                                                                    Smart Solutions
                                                                </h6>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <g>
                                                                                <path d="M19.25 1.375C19.6147 1.375 19.9644 1.51987 20.2223 1.77773C20.4801 2.03559 20.625 2.38533 20.625 2.75V19.25C20.625 19.6147 20.4801 19.9644 20.2223 20.2223C19.9644 20.4801 19.6147 20.625 19.25 20.625H2.75C2.38533 20.625 2.03559 20.4801 1.77773 20.2223C1.51987 19.9644 1.375 19.6147 1.375 19.25V2.75C1.375 2.38533 1.51987 2.03559 1.77773 1.77773C2.03559 1.51987 2.38533 1.375 2.75 1.375H19.25ZM2.75 0C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75L0 19.25C0 19.9793 0.289731 20.6788 0.805456 21.1945C1.32118 21.7103 2.02065 22 2.75 22H19.25C19.9793 22 20.6788 21.7103 21.1945 21.1945C21.7103 20.6788 22 19.9793 22 19.25V2.75C22 2.02065 21.7103 1.32118 21.1945 0.805456C20.6788 0.289731 19.9793 0 19.25 0L2.75 0Z" />
                                                                                <path d="M9.42426 6.38826C9.48828 6.45212 9.53908 6.52799 9.57374 6.61151C9.6084 6.69504 9.62624 6.78458 9.62624 6.87501C9.62624 6.96544 9.6084 7.05498 9.57374 7.1385C9.53908 7.22203 9.48828 7.2979 9.42426 7.36176L5.78463 11L9.42426 14.6383C9.55335 14.7674 9.62588 14.9424 9.62588 15.125C9.62588 15.3076 9.55335 15.4827 9.42426 15.6118C9.29516 15.7409 9.12007 15.8134 8.93751 15.8134C8.75494 15.8134 8.57985 15.7409 8.45076 15.6118L4.32576 11.4868C4.26173 11.4229 4.21094 11.347 4.17628 11.2635C4.14162 11.18 4.12378 11.0904 4.12378 11C4.12378 10.9096 4.14162 10.82 4.17628 10.7365C4.21094 10.653 4.26173 10.5771 4.32576 10.5133L8.45076 6.38826C8.51462 6.32423 8.59049 6.27344 8.67401 6.23878C8.75754 6.20412 8.84708 6.18628 8.93751 6.18628C9.02794 6.18628 9.11748 6.20412 9.201 6.23878C9.28453 6.27344 9.3604 6.32423 9.42426 6.38826ZM12.5758 6.38826C12.5117 6.45212 12.4609 6.52799 12.4263 6.61151C12.3916 6.69504 12.3738 6.78458 12.3738 6.87501C12.3738 6.96544 12.3916 7.05498 12.4263 7.1385C12.4609 7.22203 12.5117 7.2979 12.5758 7.36176L16.2154 11L12.5758 14.6383C12.4467 14.7674 12.3741 14.9424 12.3741 15.125C12.3741 15.3076 12.4467 15.4827 12.5758 15.6118C12.7049 15.7409 12.8799 15.8134 13.0625 15.8134C13.2451 15.8134 13.4202 15.7409 13.5493 15.6118L17.6743 11.4868C17.7383 11.4229 17.7891 11.347 17.8237 11.2635C17.8584 11.18 17.8762 11.0904 17.8762 11C17.8762 10.9096 17.8584 10.82 17.8237 10.7365C17.7891 10.653 17.7383 10.5771 17.6743 10.5133L13.5493 6.38826C13.4854 6.32423 13.4095 6.27344 13.326 6.23878C13.2425 6.20412 13.1529 6.18628 13.0625 6.18628C12.9721 6.18628 12.8825 6.20412 12.799 6.23878C12.7155 6.27344 12.6396 6.32423 12.5758 6.38826Z" />
                                                                            </g>
                                                                        </svg>
                                                                        Product Development
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <g>
                                                                                <path d="M11 1.36582e-07C11.1432 -9.00755e-05 11.2828 0.0445105 11.3994 0.127579C11.516 0.210647 11.6037 0.328039 11.6504 0.463375L12.4382 2.75H19.25C19.6147 2.75 19.9644 2.89487 20.2223 3.15273C20.4801 3.41059 20.625 3.76033 20.625 4.125V13.75C20.625 14.1147 20.4801 14.4644 20.2223 14.7223C19.9644 14.9801 19.6147 15.125 19.25 15.125H16.7062L18.5254 20.4009C18.5848 20.5734 18.5733 20.7624 18.4934 20.9264C18.4134 21.0904 18.2716 21.2159 18.0991 21.2754C17.9266 21.3348 17.7376 21.3233 17.5736 21.2434C17.4096 21.1634 17.2841 21.0216 17.2246 20.8491L15.2515 15.125H11.6875V19.25C11.6875 19.4323 11.6151 19.6072 11.4861 19.7361C11.3572 19.8651 11.1823 19.9375 11 19.9375C10.8177 19.9375 10.6428 19.8651 10.5139 19.7361C10.3849 19.6072 10.3125 19.4323 10.3125 19.25V15.125H6.7485L4.77538 20.8491C4.71593 21.0216 4.5904 21.1634 4.4264 21.2434C4.2624 21.3233 4.07336 21.3348 3.90087 21.2754C3.72838 21.2159 3.58657 21.0904 3.50664 20.9264C3.4267 20.7624 3.41518 20.5734 3.47462 20.4009L5.29375 15.125H2.75C2.38533 15.125 2.03559 14.9801 1.77773 14.7223C1.51987 14.4644 1.375 14.1147 1.375 13.75V4.125C1.375 3.76033 1.51987 3.41059 1.77773 3.15273C2.03559 2.89487 2.38533 2.75 2.75 2.75H9.56175L10.3496 0.463375C10.3963 0.328039 10.484 0.210647 10.6006 0.127579C10.7172 0.0445105 10.8568 -9.00755e-05 11 1.36582e-07ZM2.75 4.125V13.75H19.25V4.125H2.75Z" />
                                                                            </g>
                                                                        </svg>
                                                                        UI/UX Design
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M6.05825 4.59525C7.43254 3.41019 9.18534 2.75569 11 2.75C14.6988 2.75 17.7691 5.5 18.1033 9.04612C20.2922 9.3555 22 11.1884 22 13.4379C22 15.9074 19.9403 17.875 17.4446 17.875H5.19887C2.3485 17.875 0 15.6283 0 12.8123C0 10.3881 1.74075 8.38062 4.04525 7.87187C4.24187 6.68525 5.005 5.50275 6.05825 4.59525ZM6.95613 5.63613C5.91525 6.534 5.37075 7.61613 5.37075 8.46313V9.07913L4.75887 9.1465C2.838 9.35687 1.375 10.934 1.375 12.8123C1.375 14.8294 3.06625 16.5 5.19887 16.5H17.4446C19.2225 16.5 20.625 15.1085 20.625 13.4379C20.625 11.7659 19.2225 10.3744 17.4446 10.3744H16.7571V9.68688C16.7585 6.63438 14.201 4.125 11 4.125C9.51483 4.13093 8.08066 4.66597 6.95613 5.63613Z" />
                                                                        </svg>
                                                                        Cloud Solutions
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M0 2.0625C0 1.88016 0.0724328 1.7053 0.201364 1.57636C0.330295 1.44743 0.505164 1.375 0.6875 1.375H2.75C2.90336 1.37504 3.05229 1.42636 3.17313 1.52078C3.29397 1.61521 3.37976 1.74733 3.41687 1.89612L3.97375 4.125H19.9375C20.0384 4.12509 20.1381 4.14742 20.2295 4.19038C20.3208 4.23335 20.4016 4.2959 20.466 4.37361C20.5305 4.45131 20.577 4.54224 20.6024 4.63996C20.6277 4.73768 20.6312 4.83978 20.6126 4.939L18.5501 15.939C18.5206 16.0965 18.437 16.2388 18.3137 16.3413C18.1905 16.4437 18.0353 16.4999 17.875 16.5H5.5C5.33972 16.4999 5.18453 16.4437 5.06125 16.3413C4.93798 16.2388 4.85437 16.0965 4.82487 15.939L2.76375 4.95963L2.21375 2.75H0.6875C0.505164 2.75 0.330295 2.67757 0.201364 2.54864C0.0724328 2.4197 0 2.24484 0 2.0625ZM4.26525 5.5L6.07062 15.125H17.3044L19.1097 5.5H4.26525ZM6.875 16.5C6.14565 16.5 5.44618 16.7897 4.93046 17.3055C4.41473 17.8212 4.125 18.5207 4.125 19.25C4.125 19.9793 4.41473 20.6788 4.93046 21.1945C5.44618 21.7103 6.14565 22 6.875 22C7.60435 22 8.30382 21.7103 8.81954 21.1945C9.33527 20.6788 9.625 19.9793 9.625 19.25C9.625 18.5207 9.33527 17.8212 8.81954 17.3055C8.30382 16.7897 7.60435 16.5 6.875 16.5ZM16.5 16.5C15.7707 16.5 15.0712 16.7897 14.5555 17.3055C14.0397 17.8212 13.75 18.5207 13.75 19.25C13.75 19.9793 14.0397 20.6788 14.5555 21.1945C15.0712 21.7103 15.7707 22 16.5 22C17.2293 22 17.9288 21.7103 18.4445 21.1945C18.9603 20.6788 19.25 19.9793 19.25 19.25C19.25 18.5207 18.9603 17.8212 18.4445 17.3055C17.9288 16.7897 17.2293 16.5 16.5 16.5ZM6.875 17.875C7.23967 17.875 7.58941 18.0199 7.84727 18.2777C8.10513 18.5356 8.25 18.8853 8.25 19.25C8.25 19.6147 8.10513 19.9644 7.84727 20.2223C7.58941 20.4801 7.23967 20.625 6.875 20.625C6.51033 20.625 6.16059 20.4801 5.90273 20.2223C5.64487 19.9644 5.5 19.6147 5.5 19.25C5.5 18.8853 5.64487 18.5356 5.90273 18.2777C6.16059 18.0199 6.51033 17.875 6.875 17.875ZM16.5 17.875C16.8647 17.875 17.2144 18.0199 17.4723 18.2777C17.7301 18.5356 17.875 18.8853 17.875 19.25C17.875 19.6147 17.7301 19.9644 17.4723 20.2223C17.2144 20.4801 16.8647 20.625 16.5 20.625C16.1353 20.625 15.7856 20.4801 15.5277 20.2223C15.2699 19.9644 15.125 19.6147 15.125 19.25C15.125 18.8853 15.2699 18.5356 15.5277 18.2777C15.7856 18.0199 16.1353 17.875 16.5 17.875Z" />
                                                                        </svg>
                                                                        E-commerce Solutions
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <g>
                                                                                <path d="M11 20.625C8.44729 20.625 5.99913 19.6109 4.1941 17.8059C2.38906 16.0009 1.375 13.5527 1.375 11C1.375 8.44729 2.38906 5.99913 4.1941 4.1941C5.99913 2.38906 8.44729 1.375 11 1.375C13.5527 1.375 16.0009 2.38906 17.8059 4.1941C19.6109 5.99913 20.625 8.44729 20.625 11C20.625 13.5527 19.6109 16.0009 17.8059 17.8059C16.0009 19.6109 13.5527 20.625 11 20.625ZM11 22C13.9174 22 16.7153 20.8411 18.7782 18.7782C20.8411 16.7153 22 13.9174 22 11C22 8.08262 20.8411 5.28473 18.7782 3.22183C16.7153 1.15893 13.9174 0 11 0C8.08262 0 5.28473 1.15893 3.22183 3.22183C1.15893 5.28473 0 8.08262 0 11C0 13.9174 1.15893 16.7153 3.22183 18.7782C5.28473 20.8411 8.08262 22 11 22Z" />
                                                                                <path d="M7.22563 7.95575C7.22375 8.00015 7.23097 8.04447 7.24685 8.08598C7.26273 8.1275 7.28693 8.16532 7.31797 8.19713C7.34901 8.22894 7.38623 8.25407 7.42734 8.27096C7.46844 8.28786 7.51257 8.29616 7.55701 8.29537H8.69138C8.88113 8.29537 9.03238 8.14 9.05713 7.95162C9.18088 7.04962 9.79963 6.39238 10.9024 6.39238C11.8456 6.39238 12.7091 6.864 12.7091 7.99837C12.7091 8.8715 12.1949 9.273 11.3823 9.8835C10.4569 10.5559 9.72401 11.341 9.77626 12.6156L9.78038 12.914C9.78183 13.0042 9.81868 13.0902 9.88299 13.1535C9.9473 13.2168 10.0339 13.2523 10.1241 13.2522H11.2393C11.3304 13.2522 11.4179 13.216 11.4823 13.1516C11.5468 13.0871 11.583 12.9997 11.583 12.9085V12.7641C11.583 11.7769 11.9584 11.4895 12.9718 10.7209C13.8091 10.0842 14.6823 9.3775 14.6823 7.89388C14.6823 5.81625 12.9278 4.8125 11.0069 4.8125C9.26476 4.8125 7.35626 5.62375 7.22563 7.95575ZM9.36651 15.8799C9.36651 16.6128 9.95088 17.1545 10.7553 17.1545C11.5926 17.1545 12.1688 16.6128 12.1688 15.8799C12.1688 15.1209 11.5913 14.5874 10.7539 14.5874C9.95088 14.5874 9.36651 15.1209 9.36651 15.8799Z" />
                                                                            </g>
                                                                        </svg>
                                                                        Technical Support
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-single-item">
                                                            <div className="menu-title">
                                                                <h6>
                                                                    <svg width={17} height={12} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx={6} cy={6} r="5.5" />
                                                                        <circle cx={11} cy={6} r="5.5" />
                                                                    </svg>
                                                                    Industries Cover
                                                                </h6>
                                                            </div>
                                                            <ul>
                                                                <li><Link href="/industry/details">Enterprise & Small-to-Medium Businesses</Link></li>
                                                                <li><Link href="/industry/details">Education</Link></li>
                                                                <li><Link href="/industry/details"> Real Estate</Link></li>
                                                                <li><Link href="/industry/details">Digital Marketing & Creative Industries</Link></li>
                                                                <li><Link href="/industry/details">Telecommunications & Bulk Messaging</Link></li>
                                                                <li><Link href="/industry/details">Web Hosting & Infrastructure</Link></li>
                                                                <li>
                                                                    <Link href="/industry" className="all-btn">
                                                                        View All Industries
                                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="solution-menu-banner">
                                                        <div className="banner-content">
                                                            <h3>We have Daynamic Team Members that Easily Problem Solve.</h3>
                                                            <Link href="/contact" className="primary-btn1">
                                                                <span>Let’s Talk
                                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                    </svg>
                                                                </span>
                                                                <span>Let’s Talk
                                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                    </svg>
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="banner-img">
                                                            <img src="/assets/img/home1/Dynamic-team.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className={`menu-item-has-children ${isCompanyActive ? "active" : ""}`}>
                                    <Link href="/case-study" className="drop-down">Company</Link>
                                    <i onClick={() => toggleMenu("company")} className={`bi bi-${state.activeMenu === "company" ? "dash" : "plus"} dropdown-icon`} />
                                    <ul className={`sub-menu ${state.activeMenu === "company" ? "d-block" : "none"}`} >
                                        <li className={pathname === "/about" ? "active" : ""}><Link href="/about">Company</Link></li>
                                        <li className={pathname === "/award-recognitions" ? "active" : ""}><Link href="/award-recognitions">Award &amp; Recognitions</Link></li>
                                        <li className={pathname.startsWith('/service') ? "active" : ""}>
                                            <Link href="/service">Services</Link>
                                            <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                            <i onClick={() => toggleSubMenu("service")}
                                                className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "service" ? "dash" : "plus"} dropdown-icon `} />
                                            <ul className={`sub-menu ${state.activeSubMenu === "service" ? "d-block" : "none"}`}>
                                                <li className={pathname === "/service" ? "active" : ""}><Link href="/service">Service Style 01</Link></li>
                                                <li className={pathname === "/service/details" ? "active" : ""}><Link href="/service/details">Service Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className={pathname === "/contact" ? "active" : ""}><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                </li>
                                <li className={`menu-item-has-children ${isPortfolioActive ? "active" : ""}`}>
                                    <Link href="/news-insight-grid" className="drop-down">Portfolio </Link>
                                    <i onClick={() => toggleMenu("portfolio")} className={`bi bi-${state.activeMenu === "portfolio" ? "dash" : "plus"} dropdown-icon`} />
                                    <ul className={`sub-menu ${state.activeMenu === "portfolio" ? "d-block" : "none"}`}>
                                        <li className={pathname === "/portfolio/classic" ? "active" : ""} ><Link href="/portfolio/classic">Portfolio Classic</Link></li>
                                        <li className={pathname === "/portfolio/creative" ? "active" : ""}><Link href="/portfolio/creative">Portfolio Creative</Link></li>
                                        <li className={pathname === "/portfolio/caption" ? "active" : ""}><Link href="/portfolio/caption">Portfolio Caption</Link></li>
                                        <li className={pathname === "/portfolio/horizontal" ? "active" : ""}><Link href="/portfolio/horizontal">Portfolio Horizontal</Link></li>
                                        <li className={pathname === "/portfolio/carousel" ? "active" : ""}><Link href="/portfolio/carousel">Portfolio Carousel</Link></li>
                                        <li className={pathname === "/portfolio/vertical" ? "active" : ""}><Link href="/portfolio/vertical">Portfolio Vertical</Link></li>
                                        <li className={pathname === "/portfolio/interactive-link" ? "active" : ""}><Link href="/portfolio/interactive-link">Interactive Link</Link></li>
                                        <li className={pathname === "/portfolio/grid" ? "active" : ""}><Link href="/portfolio/grid">Portfolio Grid</Link></li>
                                        <li className={pathname === "/portfolio/details" ? "active" : ""}><Link href="/portfolio/details">Portfolio Details</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="btn-and-contact-area d-lg-none d-block">
                                <Link href="/contact" className="primary-btn3 btn-hover">
                                    Let’s Talk
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-right">
                            <div className="right-sidebar-button" onClick={toggleRightSidebar}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M4.61426 0.138589C3.82642 -0.0461965 3.00651 -0.0461965 2.21867 0.138589C1.7127 0.257268 1.2499 0.514858 0.88241 0.882348C0.514919 1.24984 0.257329 1.71263 0.13865 2.21861C-0.0461354 3.00645 -0.0461354 3.82636 0.13865 4.6142C0.257329 5.12017 0.514919 5.58297 0.88241 5.95046C1.2499 6.31795 1.7127 6.57554 2.21867 6.69422C3.00651 6.87904 3.82642 6.87904 4.61426 6.69422C5.12024 6.57554 5.58303 6.31795 5.95052 5.95046C6.31801 5.58297 6.5756 5.12017 6.69428 4.6142C6.8791 3.82636 6.8791 3.00645 6.69428 2.21861C6.5756 1.71263 6.31801 1.24984 5.95052 0.882348C5.58303 0.514858 5.12024 0.257268 4.61426 0.138589ZM4.61426 9.3058C3.82642 9.12099 3.00651 9.12099 2.21867 9.3058C1.7127 9.42448 1.2499 9.68207 0.88241 10.0496C0.514919 10.4171 0.257329 10.8798 0.13865 11.3858C-0.0461354 12.1737 -0.0461354 12.9936 0.13865 13.7814C0.257329 14.2874 0.514919 14.7502 0.88241 15.1177C1.2499 15.4852 1.7127 15.7428 2.21867 15.8614C3.00651 16.0462 3.82642 16.0462 4.61426 15.8614C5.12024 15.7428 5.58303 15.4852 5.95052 15.1177C6.31801 14.7502 6.5756 14.2874 6.69428 13.7814C6.8791 12.9936 6.8791 12.1737 6.69428 11.3858C6.5756 10.8798 6.31801 10.4171 5.95052 10.0496C5.58303 9.68207 5.12024 9.42448 4.61426 9.3058ZM13.7815 0.138589C12.9936 -0.0461965 12.1737 -0.0461965 11.3859 0.138589C10.8799 0.257268 10.4171 0.514858 10.0496 0.882348C9.68213 1.24984 9.42454 1.71263 9.30587 2.21861C9.12105 3.00645 9.12105 3.82636 9.30587 4.6142C9.42454 5.12017 9.68213 5.58297 10.0496 5.95046C10.4171 6.31795 10.8799 6.57554 11.3859 6.69422C12.1737 6.87904 12.9936 6.87904 13.7815 6.69422C14.2875 6.57554 14.7502 6.31795 15.1177 5.95046C15.4852 5.58297 15.7428 5.12017 15.8615 4.6142C16.0462 3.82635 16.0462 3.00645 15.8615 2.21861C15.7428 1.71263 15.4852 1.24984 15.1177 0.882348C14.7502 0.514858 14.2875 0.257268 13.7815 0.138589ZM13.7815 9.3058C12.9936 9.12099 12.1737 9.12099 11.3859 9.3058C10.8799 9.42448 10.4171 9.68207 10.0496 10.0496C9.68213 10.4171 9.42454 10.8798 9.30587 11.3858C9.12105 12.1737 9.12105 12.9936 9.30587 13.7814C9.42454 14.2874 9.68213 14.7502 10.0496 15.1177C10.4171 15.4852 10.8799 15.7428 11.3859 15.8614C12.1737 16.0462 12.9936 16.0462 13.7815 15.8614C14.2875 15.7428 14.7502 15.4852 15.1177 15.1177C15.4852 14.7502 15.7428 14.2874 15.8615 13.7814C16.0462 12.9936 16.0462 12.1737 15.8615 11.3858C15.7428 10.8798 15.4852 10.4171 15.1177 10.0496C14.7502 9.68207 14.2875 9.42448 13.7815 9.3058Z" />
                                    </g>
                                </svg>
                            </div>
                            <Link href="/contact" className={`primary-btn3 btn-hover d-lg-flex d-none ${pathname === "/portfolio/horizontal" || pathname === "/portfolio/vertical" || pathname === "/portfolio/interactive-link" ? "white-bg" : ""}`}>
                                Let’s Talk
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span />
                            </Link>
                            <div className="sidebar-button mobile-menu-btn" onClick={toggleSidebar}>
                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.29445 2.8421H10.5237C11.2389 2.8421 11.8182 2.2062 11.8182 1.42105C11.8182 0.635903 11.2389 0 10.5237 0H1.29445C0.579249 0 0 0.635903 0 1.42105C0 2.2062 0.579249 2.8421 1.29445 2.8421Z" />
                                    <path d="M1.23002 10.421H18.77C19.4496 10.421 20 9.78506 20 8.99991C20 8.21476 19.4496 7.57886 18.77 7.57886H1.23002C0.550421 7.57886 0 8.21476 0 8.99991C0 9.78506 0.550421 10.421 1.23002 10.421Z" />
                                    <path d="M18.8052 15.1579H10.2858C9.62563 15.1579 9.09094 15.7938 9.09094 16.5789C9.09094 17.3641 9.62563 18 10.2858 18H18.8052C19.4653 18 20 17.3641 20 16.5789C20 15.7938 19.4653 15.1579 18.8052 15.1579Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header3
