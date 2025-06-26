import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import { FaFileArchive, FaMicroblog, FaMicrochip, FaMicrophoneAltSlash, FaMicroscope, FaNetworkWired, FaPeriscope, FaShieldVirus, FaStethoscope, FaStoreAlt } from 'react-icons/fa'
import CandidateBanner from "/src/assets/images/candidate/clientBottomBanner.jpg";
import CandidateHero from "/src/assets/images/candidate/img-01.jpg";
import Candidateup from "/src/assets/images/candidate/img-02.png";
import Wave from "/src/assets/images/candidate/wave_bg.png";
import WaveRight from "/src/assets/images/candidate/wave_bg_right.png";

function Candidate() {
    return (
        <>
            {/* Banner Start */}
            <section className="py-5 bg-gradient position-relative" style={{ borderBottom: "none", outline: "none" }}>
                {/* Optional Wave Image */}
                <div className="d-none d-md-block position-absolute w-100 bottom-0 end-0" style={{ zIndex: 0 }}>
                    <img
                        src={Wave}
                        className="img-fluid"
                        alt="Wave Background"
                        loading="lazy"
                    />
                </div>

                <div className=" position-relative overflow-hidden" style={{ zIndex: 2 }}>
                    <div className="row align-items-center flex-column flex-md-row">
                        {/* Image on Left */}
                        <div className="col-md-6 mb-4 mb-md-0 text-center order-1 order-md-1">
                            <img
                                src={Candidateup}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="img-fluid object-fit-contain"
                                alt="Career Hero"
                            />
                        </div>

                        {/* Text on Right */}
                        <div className="col-md-6 text-center text-md-start order-2 order-md-2">
                            <header className="mb-4">
                                <h1 className="display-5 fw-bold text-TGreen">
                                    Move your career forward with expert support at every step.
                                </h1>
                            </header>

                            <article>
                                <h6 className="fw-semibold" style={{ color: '#006857' }}>
                                  Whether full-time, contract, or freelance — we’re here to match you with what works best for you.
                                </h6>
                            </article>

                            <div className="row justify-content-center justify-content-md-start mt-4">
                                <div className="col-auto">
                                    <Link
                                        className="btn TGreen border-2 fw-bold"
                                        title="ENHANCE YOUR CAREER WITH US"
                                    >
                                       GROW YOUR CAREER WITH US
                                    </Link>
                                </div>
                                <div className="col-auto">
                                    <Link
                                        to={'/cvform'}
                                        className="btn border-2 border-primary text-TGreen fw-semibold"
                                        title="SEND US YOUR CV"
                                    >
                                        SEND US YOUR CV
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner End */}


            {/* Hero Start */}
            <section
                className="position-relative mb-5 overflow-hidden"
                style={{ zIndex: 1, borderBottom: "none", outline: "none" }}
            >
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="row flex-md-row flex-column-reverse align-items-start justify-content-between">
                        {/* Right Column – Content (Now on left) */}
                        <div
                            className="col-md-6 d-flex justify-content-md-start mb-4 mb-md-0"
                            style={{ zIndex: 2 }}
                        >
                            <div className="w-100 text-md-start text-center">
                                <article style={{ textAlign: "justify" }}>
                                    <h6 className='fs-3' style={{ color: "#006857" }}>
                                        Whether you're aiming for flexibility or stability, we simplify your job search at every step.
                                    </h6>
                                    <p>
                                        Whether it’s a full-time position, a contract role, or freelance work, we’re ready to support your career goals.
                                        We assist professionals working independently, on fixed-term agreements, or via agencies. Wherever you are in your
                                        journey, we offer a seamless process, reliable opportunities, and access to leading employers across Europe.
                                        Ready to explore your next opportunity? Let’s begin today.
                                    </p>
                                </article>

                                {/* Button */}
                                <div className="row justify-content-md-start justify-content-center mt-4">
                                    <div className="col-auto">
                                        <Link
                                            to={"/cvform"}
                                            className="btn TGreen border-2 border-primary fw-bold"
                                            title="HOW DO YOU WANT TO WORK?"
                                        >
                                            HOW DO YOU WANT TO WORK?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Left Column – Image (Now on right) */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="position-relative">
                                <img
                                    src={CandidateHero}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    alt="Candidate Section"
                                    className="img-fluid d-block w-100"
                                    style={{
                                        borderRadius: "32px",
                                        display: "block",
                                        marginBottom: "0",
                                        border: "none",
                                    }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Only Wave (Now behind) */}
                <div
                    className="d-md-none position-absolute bottom-0 start-0 w-100"
                    style={{ zIndex: 0 }}
                >
                    <img
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://allenrec.com/wp-content/themes/AllenRec/assets/img/wave_bg_img_content_after.png"
                        className="img-fluid"
                        alt="Wave Background"
                        loading="lazy"
                    />
                </div>
            </section>
            {/* Hero End */}


            {/* What We offer Start */}
            <section className="position-relative mb-5 text-center" style={{ zIndex: 1 }}>
                <div className="container-fluid position-relative" style={{ zIndex: 2 }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 text-center">
                            <header className="mb-5">
                                <h2 className="display-4 text-TGreen fw-semibold mb-0">
                                    What we offer
                                </h2>
                            </header>

                            <article className="fs-6 text-muted">
                                <p>
                                    At SR Web Consultancy, we don’t just connect clients with top talent — we
                                    also guide each candidate towards the ideal role. From finding
                                    opportunities to interview coaching, we become advocates for your
                                    career. Our expert team is committed to understanding your goals so we
                                    can match you with roles that fit. We offer access to world-leading
                                    brands, meaningful roles in your industry and full support from our
                                    consultants, no matter how you want to work.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>

                {/* Decorative Wave Image (Mobile Only) */}
                <div className="d-md-none position-absolute bottom-0 start-0 w-100" style={{ zIndex: 0 }}>
                    <img
                        src={WaveRight}
                        className="img-fluid"
                        alt="wave Right"
                        loading="lazy"
                    />
                </div>
            </section>
            {/* What We offer End */}


            {/* Want to work Start */}
            <section className="relative mb-8 sm:mb-0 row-3 z-10">
                <div className="container position-relative z-10">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-9 text-center">
                            <header className="mb-4">
                                <h2 className="display-4 text-TGreen mb-0">How do you want to work?</h2>
                            </header>
                            <article>
                                <p>
                                    Different clients prefer different engagement models: full-time, contract-based, or temporary.
                                    No matter your preferred approach, we’re here to guide you with expert advice, simplified coordination, and solid support. Here’s how we structure our services:
                                </p>
                            </article>
                        </div>
                    </div>

                    <div className="mx-auto w-100">
                        {/* Permanent Work */}
                        <div className="row align-items-start mb-5">
                            {/* Icon Wrapper */}
                            <div className="col-auto">
                                <div
                                    className="d-flex justify-content-center align-items-center bg-TGreenLow rounded-circle mb-3 mb-sm-0"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        minWidth: "70px",
                                    }}
                                >
                                    <FaShieldVirus className="text-TGreen fs-3" />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="col">
                                <h5 className="text-TGreen fw-bold mb-3">Permanent Engagement</h5>
                                <p>
                                    Permanent roles are ideal for long-term stability — either full-time or fixed duration. You receive a steady salary and benefits like paid leave and medical coverage.
                                </p>
                                <p>
                                    We connect you with global clients and assign a dedicated consultant to match your expertise, goals, and skills with the perfect opportunity.
                                    Check our job board or contact us directly to explore more.
                                </p>
                                <div className="mt-3">
                                    <a
                                        href="#"
                                        className="btn TGreen border border-primary text-white fw-bold"
                                    >
                                        Explore Permanent Roles
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Contract Work */}
                        <div className="row align-items-start mb-5">
                            {/* Icon Wrapper – fixed width/height for mobile too */}
                            <div className="col-auto">
                                <div
                                    className="d-flex justify-content-center align-items-center bg-TGreenLow rounded-circle mb-3 mb-sm-0"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        minWidth: "70px",
                                    }}
                                >
                                    <FaFileArchive className="text-TGreen fs-3" />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="col">
                                <h5 className="text-TGreen fw-bold mb-3">Contract-Based Projects</h5>
                                <p>
                                    If you're running your own business or starting one, our contract roles offer flexibility and premium exposure. You’ll be the vendor, not the employee.
                                </p>
                                <p>
                                    From setting up your entity to managing end-of-contract transitions, we support you throughout. Start by exploring our project listings or learn more on our contracts page.
                                </p>
                                <div className="mt-3">
                                    <a
                                        href="#"
                                        className="btn TGreen border border-primary text-white fw-bold"
                                    >
                                        Explore Contract Options
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Fixed-Term Work */}
                        <div className="row align-items-start mb-5">
                            {/* Icon Wrapper – responsive and consistent */}
                            <div className="col-auto">
                                <div
                                    className="d-flex justify-content-center align-items-center bg-TGreenLow rounded-circle mb-3 mb-sm-0"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        minWidth: "70px",
                                    }}
                                >
                                    <FaMicroscope className="text-TGreen fs-3" />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="col">
                                <h5 className="text-TGreen fw-bold mb-3">Temporary/Flexible Roles</h5>
                                <p>
                                    Looking for short-term flexibility? We can place you across industries with varying contract lengths, from a few weeks up to two years.
                                </p>
                                <p>
                                    We manage the admin, tax, and payments — you just focus on your job and timesheets. Visit our fixed-term section or browse open roles to get started.
                                </p>
                                <div className="mt-3">
                                    <a
                                        href="#"
                                        className="btn TGreen border border-primary text-white fw-bold"
                                    >
                                        Explore Temporary Roles
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Background Wave Behind All Content */}
                <img
                    src="/path-to-your-wave-image.svg"
                    alt=""
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-n1"
                    style={{ pointerEvents: "none" }}
                />
            </section>
            {/* Want to work End */}


            {/* What next Start */}
            <section className="relative mb-24 sm:mb-12 text-center row-4 z-10">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <header className="mb-5">
                                <h2 className="display-4 text-TGreen mb-0">What’s next?</h2>
                            </header>

                            <article className="text-muted">
                                <h6 style={{ color: "#006857" }}>
                                    Want to learn more about how we operate or need expert advice for your next move?
                                    Reach out using the links below. Or if you're ready to take the next leap, explore our latest job opportunities.
                                </h6>
                            </article>

                            <div className="row justify-content-center align-items-center mt-4">
                                <div className="col-12 col-sm-auto mb-3 mb-sm-0">
                                    <Link
                                        to={'#'}
                                        title="View all jobs"
                                        className="btn TGreen fw-bold border border-primary text-white px-4 py-2"
                                    >
                                        View all jobs
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-auto">
                                    <Link
                                        to={'/cvform'}
                                        title="Send us Your CV"
                                        className="btn border-primary fw-bold text-TGreen hover:Text-white hover:TGreen px-4 py-2"
                                    >
                                        Send us Your CV
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Wave Behind Content */}
                <img
                    src="/path-to-your-wave-image.svg"
                    alt=""
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-n1"
                    style={{ pointerEvents: "none" }}
                />
            </section>
            {/* What next End*/}


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
                    className="text-white text-center position-relative d-flex flex-column align-items-center justify-content-center"
                    style={{
                        backgroundImage:
                            `linear-gradient(rgb(148 180 60 / 64%), rgb(0 0 0)), url(${CandidateBanner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "480px",
                        padding: "60px 20px",
                        zIndex: 0,
                    }}
                >
                    <div style={{ maxWidth: "700px", zIndex: 3 }}>
                        <h2 className="fw-bold mb-5 display-6 mt-2">
                            Take the next bold step in career
                        </h2>


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

export default Candidate
