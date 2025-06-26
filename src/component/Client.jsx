import React from 'react'
import { FaNetworkWired, FaConfluence } from 'react-icons/fa';
import '../index.css'
import { SlBadge } from 'react-icons/sl';
import { FaLaptopCode, FaCalculator, FaMicrochip, FaShoppingCart, FaTools, FaVial } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ClientImage1 from "/src/assets/images/client/clientPhoto2.jpg";
import ClientImg from "/src/assets/images/client/img-02.jpg";
import Clienttop from "/src/assets/images/client/img-03.png";
import Wave from "/src/assets/images/client/wave_bg.png";
import WaveTop from "/src/assets/images/client/wave_bg_Top.png";
import WaveLeft from "/src/assets/images/client/wave_bg_left.png";
import WaveRight from "/src/assets/images/client/wave_bg_right.png";
import ClientBanner from "/src/assets/images/client/clientBottomBanner2.jpg";


const sectors = [
    { title: "IT", icon: <FaLaptopCode size={30} /> },
    { title: "Accounting & Finance", icon: <FaCalculator size={30} /> },
    { title: "Tech", icon: <FaMicrochip size={30} /> },
    { title: "Telecoms", icon: <FaNetworkWired size={30} /> },
    { title: "e-Commerce", icon: <FaShoppingCart size={30} /> },
    { title: "Engineering", icon: <FaTools size={30} /> },
    { title: "Life Sciences", icon: <FaVial size={30} /> },
];

function Client() {
    return (
        <>
            {/* Banner Start */}
            <section class="py-5 bg-light">
                <div class="container-fluid">
                    <div class="row align-items-center flex-lg-row-reverse">
                        {/* <!-- Image Column --> */}
                        <div class="col-lg-6 mb-4 mb-lg-0 text-center">
                            <img
                                src={Clienttop}
                                class="img-fluid"
                                alt="Hero Image"
                                loading="lazy"
                            />
                        </div>

                        {/* <!-- Content Column --> */}
                        <div class="col-lg-6 text-start">
                            <h1 class="display-4 text-TGreen fw-bold mb-4">
                                Redefining the Future of Recruitment - <span className='text-[#2b8565]' >Today.</span>
                            </h1>
                            <p class="lead fw-semibold text-success">
                                Bringing talent onboard can be faster, smoother and smarter; we’ve nailed it all. Let’s elevate your hiring approach today.                            </p>
                            <div class="mt-4">
                                <Link to={'/contact'} class="btn TGreen  btn-lg fw-bold">
                                    COLLABORATE WITH TOMORROW’S HIRING POWER
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner End */}


            {/* Hero start */}
            <section className="mb-5 position-relative mt-5">
                <div className="container position-relative" style={{ zIndex: 1 }}> {/* zIndex 1 and relative positioning */}
                    <div className="row align-items-start flex-md-row flex-column-reverse">
                        {/* Image Column */}
                        <div className="col-md-6 mb-4 mb-md-0 position-relative">
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                    background: "rgba(255, 255, 255, 0.2)",
                                    backdropFilter: "blur(10px)",
                                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                                    zIndex: 0,
                                }}
                            ></div>

                            <div
                                className="text-center position-relative"
                                style={{
                                    zIndex: 1,
                                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                }}
                            >
                                <img
                                    src={ClientImage1}
                                    className="img-fluid"
                                    alt="Recruitment"
                                />
                            </div>
                        </div>



                        {/* Content Column */}
                        <div className="col-md-6">
                            <article style={{ textAlign: 'justify' }}>
                                <h5 className='fs-3' style={{ color: "#006857" }}>
                                    <strong>
                                        Our advanced technology connects with 30,000 candidates every month—so you can relax while we handle the search.

                                    </strong>
                                </h5>
                                <p>We’ve redefined the recruitment playbook. Shrinking talent pools, bias, and long search times have challenged recruiters for years, so SR Web Consultancy tackled them with innovation.</p>
                                <p>Instead of a 360 approach, we deploy specialists who excel at each stage. Our sourcing team uses AI and machine learning to locate candidates worldwide who match your criteria. Our expert recruiters understand your needs deeply—crafting shortlists of individuals aligned with your role and culture, saving time while ensuring the best fit.</p>
                                <ul>
                                    <li>70% of candidates engage with our recruiters.</li>
                                    <li>Over a third speak to us about job opportunities.</li>
                                    <li>We refine that longlist for you—only one in four reach your desk.</li>
                                    <li>Two-thirds of candidates we forward get selected for interview.

                                    </li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>

                {/* Optional Decorative Wave Image (only for large screens) */}
                <div
                    className="d-none d-sm-block position-absolute w-100 bottom-0 start-0"
                    style={{ zIndex: 0 }}
                >
                    <img
                        src={Wave}
                        className="img-fluid"
                        alt="Wave Decoration"
                        loading="lazy"
                    />
                </div>
            </section>
            {/* Hero End */}



            {/* Clock Start */}
            <section className="position-relative mb-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-sm-12 mt-5">
                            <div className="card h-100 bg-white rounded-4 shadow">
                                <div className="text-center mx-auto p-4">
                                    <div
                                        className="bg-TGreenLow text-TGreen rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3"
                                        style={{ width: "80px", height: "80px" }}
                                    >
                                        {/* SVG Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 112 110"
                                            fill="currentColor"
                                            width="40"
                                            height="40"
                                        >
                                            <path d="M21.206 82.48c-8.343 0-15.155-6.769-15.215-15.138-.053-8.403 6.724-15.285 15.11-15.346h.105c4.028 0 7.812 1.558 10.683 4.394a15.162 15.162 0 014.524 10.744 15.158 15.158 0 01-4.385 10.805 15.095 15.095 0 01-10.726 4.532c-.035.009-.07.009-.096.009zm0-27.004h-.078c-6.473.044-11.701 5.36-11.658 11.84.044 6.455 5.298 11.684 11.736 11.684h.078a11.63 11.63 0 008.274-3.497 11.727 11.727 0 003.384-8.343 11.717 11.717 0 00-3.489-8.3c-2.227-2.183-5.141-3.384-8.247-3.384z" />
                                            <path d="M41.702 100.618h-3.48v-7.072a3.911 3.911 0 00-3.906-3.907H8.096a3.911 3.911 0 00-3.906 3.907v7.072H.71v-7.072c0-4.072 3.314-7.387 7.386-7.387h26.212c4.071 0 7.386 3.315 7.386 7.386v7.073h.008z" />
                                            <path d="M56.874 109.501c-3.253 0-6.507-.288-9.674-.853l.61-3.428c2.966.531 6.02.801 9.064.801 28.213 0 51.163-22.95 51.163-51.163 0-28.212-22.95-51.162-51.163-51.162-28.212 0-51.17 22.95-51.17 51.163h-3.48C2.224 24.723 26.739.215 56.866.215c30.126 0 54.642 24.516 54.642 54.642 0 30.127-24.507 54.643-54.634 54.643z" />
                                            <path d="M58.615 17.66h-3.48v30.63h3.48V17.66z" />
                                            <path d="M56.874 63.158c-4.576 0-8.308-3.724-8.308-8.308 0-4.576 3.724-8.3 8.308-8.3 4.585 0 8.309 3.724 8.309 8.3-.01 4.584-3.733 8.308-8.309 8.308zm0-13.128c-2.662 0-4.828 2.166-4.828 4.82a4.84 4.84 0 004.828 4.828 4.834 4.834 0 004.829-4.828 4.827 4.827 0 00-4.829-4.82z" />
                                            <path d="M58.615 8.75h-3.48v5.412h3.48V8.75zM25.5 21.025l-2.46 2.46 3.825 3.827 2.46-2.461-3.825-3.826zM58.615 95.546h-3.48v5.412h3.48v-5.412zM86.874 82.402l-2.46 2.461 3.825 3.826 2.46-2.46-3.825-3.827zM102.982 53.119h-5.42v3.48h5.42v-3.48zM88.241 21.027l-3.826 3.827 2.46 2.46 3.827-3.826-2.46-2.46z" />
                                            <path d="M62.743 58.27l-2.46 2.461 11.121 11.122 2.46-2.46L62.744 58.27z" />
                                        </svg>

                                    </div>

                                    <article>
                                        <p>

                                            Our proven methods help clients reduce time-to-hire, improve candidate quality, and fill more roles. <br /> Discover how your recruitment can be faster and more efficient.
                                        </p>
                                    </article>

                                    <div className="d-flex justify-content-center mt-3">
                                        <Link
                                            to={'/contact'}
                                            className="btn fw-bold border text-white px-4"
                                            style={{
                                                backgroundColor: "#94b43c",
                                                borderColor: "#94b43c",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#5b6c2e";
                                                e.target.style.borderColor = "#28a745";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "#94b43c";
                                                e.target.style.borderColor = "#007bff";
                                            }}
                                        >
                                            Speak to us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Clock End */}


            {/* Why DO Start */}
            <section className="text-center mb-5 mb-md-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-8">
                            <header className="mb-5 mb-sm-3">
                                <h2 className="display-4 fw-medium text-TGreen mb-0">
                                    <span className='text-dark fw-bold'>How</span> SR Web Works?
                                </h2>
                            </header>

                            <article className="text-muted">
                                <p>
                                    At SR Web Consultancy, recruitment isn’t what you’d expect. We’ve redefined the process using smart technology and a people-first mindset—ensuring we find candidates who truly fit your needs.
                                </p>
                                <p><strong>Here’s what we do:</strong></p>

                            </article>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why DO end */}


            {/* Our Service */}
            <section className="position-relative mb-5 mt-5">
                <div className="container">
                    {/* Section Header */}
                    <header className="row mb-5 text-center">
                        <h2 className="col fw-medium text-TGreen display-4 mb-0">Solutions Offered</h2>
                    </header>

                    {/* Image + Text Content */}
                    <div className="row d-flex justify-content-between align-items-stretch flex-wrap">
                        {/* Image Column */}
                        <div className="col-md-6 mb-4 mb-md-0 position-relative z-1">
                            <div className="w-100 h-100">
                                <img


                                    srcSet={ClientImg}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    alt="Our Services"
                                    className="img-fluid object-fit-cover w-100 h-100"
                                    style={{ borderTopLeftRadius: "7rem", borderBottomRightRadius: "7rem" }}
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="col-md-6 d-flex justify-content-end">
                            <div className="w-100 text-md-start text-center">
                                <article>
                                    <h5>
                                        <strong style={{ color: '#006857' }}>Agency</strong>
                                    </h5>
                                    <p>
                                        We’ve transformed recruitment to make it faster, simpler, and more impactful for you. Whether candidates are actively searching or not, we’ll find top talent worldwide. Our machine-learning tech filters candidates with precision and without bias, so you only see the most relevant.
                                    </p>
                                    <p>
                                        From day one, we partner with you to fully understand your job needs. That way, the candidates we suggest aren’t just qualified—they’re tailored to your role and company culture. With our advanced booking system, we spend less time scheduling and more time deeply interviewing.
                                    </p>
                                    <p>
                                        Whether you need permanent, contract, temporary, or contingent staff, we’re here to help. To explore how SR Web Consultancy can support your hiring goals, just reach out.
                                    </p>

                                </article>

                                {/* CTA Button */}
                                <div className="row mt-4 justify-content-md-start justify-content-center">
                                    <div className="col-auto">
                                        <Link
                                            to={'/contact'}
                                            className="btn TGreen border text-white fw-bold px-4 py-2"
                                        >
                                            Connect with us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Service End */}


            {/* Onther Service */}
            <section className="mb-5 position-relative" style={{ zIndex: 1, overflow: "hidden" }}>
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-12 text-center">
                            <header className="mb-4">
                                <h2 className="display-4 text-TGreen fw-medium mb-0">
                                    Explore more services
                                </h2>
                            </header>
                            <article>
                                <p>
                                    If our Agency solution doesn’t quite fit your needs, SR Web Consultancy offers a full range of alternative services, providing access to our expert team and smart technology. Explore the other options available to you below.
                                </p>
                            </article>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {/* Card 1 */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100 rounded-4 shadow">
                                <div className="card-body text-center">
                                    <div className="bg-TGreenLow text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                                        <SlBadge size={30} className="text-TGreen" />
                                    </div>
                                    <h3 className="h5 text-TGreen fw-bold pt-2 pb-3">
                                        SR Senior Appointments
                                    </h3>
                                    <p className='mb-4'>
                                        SR Web Consultancy uses retained search and market insights to find top senior leaders for your business. From longlisting to onboarding, our dedicated team manages the entire hiring journey—ensuring the right fit for your executive roles with precision, professionalism, and a focus on long-term success.
                                    </p>

                                    <Link to={'#'} className="btn TGreen text-white mt-5" title="Find Out More">
                                        Find Out More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100 rounded-4 shadow">
                                <div className="card-body text-center">
                                    <div className="bg-TGreenLow text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                                        <FaConfluence size={30} className="text-TGreen" />
                                    </div>
                                    <h3 className="h5 text-TGreen fw-bold pt-2 pb-3">
                                        SR Outsource
                                    </h3>
                                    <p>
                                        Large projects demand expert recruiters and dedicated teams. Instead of handling it internally, let SR Web Consultancy manage it all. Whether it’s a team of two or fifty, we’ll handle hiring, onboarding, management, and offboarding for a fixed monthly fee—letting you focus only on the results and quality of service delivered.
                                    </p>

                                    <Link to={'#'} className="btn TGreen text-white mt-5" title="Find Out More">
                                        Find Out More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100 rounded-4 shadow">
                                <div className="card-body text-center">
                                    <div className="bg-TGreenLow text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                                        <FaNetworkWired size={30} className="text-TGreen" />
                                    </div>
                                    <h3 className="h5 text-TGreen fw-bold pt-2 pb-3">
                                        SR Embedded
                                    </h3>
                                    <p>
                                        As your in-house recruitment partner, SR Web Consultancy can embed experienced specialists directly within your team. From evaluating technology and analyzing your market to executing your hiring strategy, we ensure steady results, strategic support, and a consistent pipeline of top-tier candidates tailored to your specific needs.
                                    </p>

                                    <Link to={'#'} className="btn TGreen text-white mt-5" title="Find Out More">
                                        Find Out More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave for mobile - positioned absolutely behind content */}
                <div className="d-md-none position-absolute bottom-0 start-0 w-100" style={{ zIndex: 0 }}>
                    <img
                        src={WaveTop}
                        alt="wave"
                        className="img-fluid w-100"
                        style={{ opacity: 0.6 }}
                    />
                </div>
            </section>
            {/* Onther Service End */}


            {/*  Special Start */}
            <section className="mb-5 text-center position-relative"> {/* <-- Added this */}
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-9">
                            <h2 className="display-4 text-TGreen fw-medium mb-3">Our specialist sectors</h2>
                            <p className="text-success fs-6 fw-semibold">
                                We specialise in recruiting for engineering, life sciences, IT and finance companies. We can help you find any roles you need, so get in touch here to find out how we can help. Some of our previous clients include:
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center position-relative" style={{ zIndex: 1 }}> {/* <-- zIndex to content */}
                        {sectors.map((sector, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="card h-100 shadow rounded-4 border-0">
                                    <div className="card-body text-center">
                                        <div className="bg-TGreenLow text-TGreen rounded-circle d-inline-flex justify-content-center align-items-center mb-3" style={{ width: 60, height: 60 }}>
                                            {sector.icon}
                                        </div>
                                        <h5 className="fw-bold text-success">{sector.title}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Wave Images (Behind the Cards) */}
                <div className="d-none d-md-block position-absolute bottom-0 start-0" style={{ zIndex: 0 }}>
                    <img
                        src={WaveLeft}
                        alt="left wave"
                        className="img-fluid"
                    />
                </div>
                <div className="d-none d-md-block position-absolute bottom-0 end-0" style={{ zIndex: 0 }}>
                    <img
                        src={WaveRight}
                        alt="right wave"
                        className="img-fluid"
                    />
                </div>
            </section>
            {/* Special End */}


            {/* Location Start */}
            <section className="mb-5 position-relative text-center">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-9">
                            <h2 className="display-4 text-TGreen fw-medium mb-0">Our Locations</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="position-relative pt-100">
                                <img
                                    src="https://allenrec.com/wp-content/uploads/2021/08/location_map.png"
                                    alt="Location Map"
                                    className="img-fluid object-fit-contain"
                                    style={{ objectPosition: "top" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Waves for small devices */}
                <div className="d-md-none position-absolute bottom-0 start-0 w-100">
                    <img
                        src="https://allenrec.com/wp-content/themes/AllenRec/assets/img/wave_bg_location_before.png"
                        alt="wave before"
                        className="img-fluid"
                    />
                </div>

                <div className="d-md-none position-absolute bottom-0 end-0 w-100">
                    <img
                        src="https://allenrec.com/wp-content/themes/AllenRec/assets/img/wave_bg_location_after.png"
                        alt="wave after"
                        className="img-fluid"
                    />
                </div>
            </section>
            {/* Location End */}


            {/* end Content Start */}
            <section className="position-relative overflow-hidden">
                {/* Top Curved White SVG */}
                <div style={{ position: "relative", zIndex: 2 }}>
                    <img
                        src=""
                        alt=""
                        className="w-100"
                    />
                </div>

                {/* Main Background + Overlay */}
                <div
                    className="mt-5 text-white text-center position-relative d-flex flex-column align-items-center justify-content-center"
                    style={{
                        backgroundImage:
                            `linear-gradient(rgb(148 180 60 / 64%), rgb(0 0 0)), url(${ClientBanner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "480px",
                        padding: "60px 20px",
                        zIndex: 1,
                    }}
                >
                    <div style={{ maxWidth: "700px", zIndex: 3 }}>
                        <h2 className="fw-bold mb-4 display-6">
                            Get in touch to unlock your recruitment potential.
                        </h2>
                        <p className="lead mb-5">
                            You’re only a step away from accessing our expertise and supercharging your job ads. Contact us here to find out more.
                        </p>

                        <Link
                            to={'/contact'}
                            className="btn btn-light fw-bold text-success px-4 py-2 border border-white"
                            style={{
                                transition: "0.3s ease",
                            }}
                        >
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </section>
            {/* end Content End */}
        </>
    )
}

export default Client
