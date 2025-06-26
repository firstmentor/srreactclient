import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import aboutImage from '/src/assets/images/about/about.jpg';

function About() {
    return (
        <>
            {/* <!-- Start home --> */}
            <section className="page-title-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="text-center text-white">
                                <h3 className="mb-4">About Us</h3>
                                <div className="page-next">
                                    <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li className="breadcrumb-item"><Link href="javascript:void(0)">About</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Clients</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!-- end home --> */}

            {/* <!-- START SHAPE --> */}
            <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path fill="#FFFFFF" fill-opacity="1"
                            d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
            {/* <!-- END SHAPE --> */}


            {/* <!-- START ABOUT --> */}
            <section className="section overflow-hidden">
                <div className="container">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-6">
                            <div className="section-title me-lg-5">
                                <h6 className="sub-title">About Us</h6>
                                <h2 className="title mb-4">Your Partner in Recruitment Success with
                                    <span className='text-TGreen'> SR Web Services</span></h2>

                                <p className="text-muted text-justify">At SR Web Services, we bring years of industry expertise and a passion for connecting people. Our team of recruitment specialists is dedicated to matching the right talent with the right role—fast, efficiently, and with integrity.
                                    <br /><br />
                                    We serve startups, SMEs, and enterprise clients across sectors like [e.g., IT, healthcare, finance, manufacturing]. Whether you're hiring full-time, contract, or remote staff, we deliver results that grow your business.

                                </p>

                                <div className="row mt-4 pt-2">
                                    <div className="col-md-6">
                                        <ul className="list-unstyled about-list text-muted mb-0 mb-md-3">
                                            <li>Tailored recruitment strategies
                                            </li>
                                            <li>Pre-screened and qualified candidates
                                            </li>
                                            <li>Faster hiring with less hassle
                                            </li>
                                            <li>Access exclusive job openings
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-unstyled about-list text-muted">
                                            <li>Career guidance from real experts
                                            </li>
                                            <li>Resume and interview support
                                            </li>
                                            <li> and more...</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <Link className="btn text-white TGreen btn-hover">Learn More <i className="uil uil-angle-right-b align-middle"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-6">
                            <div className="about-img mt-4 mt-lg-0">
                                <img src={aboutImage} alt="" className="w-75 text-center rounded" />
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!-- END ABOUT --> */}
        </>
    )
}

export default About
