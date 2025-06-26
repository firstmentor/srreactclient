import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            {/* <!-- Start home --> */}
            <section className="page-title-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="text-center text-white">
                                <h3 className="mb-4">Contact Us</h3>
                                <div className="page-next">
                                    <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li className="breadcrumb-item"><Link to={'/contact'} >Contact</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page"> Contact Us </li>
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


            {/* <!-- START CONTACT-PAGE --> */}
            <section className="section">
                <div className="container">
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-6">
                            <div className="section-title mt-4 mt-lg-0">
                                <h3 className="title">Get in touch</h3>
                                <p className="text-muted">Start growing with <span className='text-TGreen'>SR Consultancy</span> that offers every tool you need to boost reach, attract traffic, and connect.</p>
                                <form method="post" onsubmit="return validateForm()" className="contact-form mt-4" name="myForm" id="myForm">
                                    <span id="error-msg"></span>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label for="nameInput" className="form-label">Name</label>
                                                <input type="text" name="name" id="name" className="form-control"
                                                    placeholder="Enter your name" />
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="emailInput" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="emaiol" name="email"
                                                    placeholder="Enter your email" />
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="subjectInput" className="form-label">Subject</label>
                                                <input type="text" className="form-control" id="subjectInput" name="subject"
                                                    placeholder="Enter your subject" />
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label for="meassageInput" className="form-label">Your Message</label>
                                                <textarea className="form-control" id="meassageInput" placeholder="Enter your message" name="comments" rows="3"></textarea>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                    <div className="text-end">
                                        <button type="submit" id="submit" name="submit" className="btn text-white TGreen"> Send Message <i className="uil uil-message ms-1"></i></button>
                                    </div>
                                </form>
                                {/* <!--end form--> */}
                            </div>
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-5 ms-auto order-first order-lg-last">
                            <div className="text-center">
                                <img src="assets/images/contact.png" alt="" className="img-fluid" />
                            </div>
                            <div className="mt-4 pt-3">
                                <div className="d-flex text-muted align-items-center mt-2">
                                    <div className="flex-shrink-0 fs-22 text-TGreen">
                                        <i className="uil uil-map-marker"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0"><span className='text-TGreen'>1.</span> Sector 16 b , greater noida , uttar pradesh 201306
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex text-muted align-items-center mt-2">
                                    <div className="flex-shrink-0 fs-22 text-TGreen">
                                        <i className="uil uil-map-marker"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0"><span className='text-TGreen'>2.</span> Vikaspuri , new delhi , 110059
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex text-muted align-items-center mt-2">
                                    <div className="flex-shrink-0 fs-22 text-TGreen">
                                        <i className="uil uil-envelope"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0">admin@srwebconsultancy.in
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex text-muted align-items-center mt-2">
                                    <div className="flex-shrink-0 fs-22 text-TGreen">
                                        <i className="uil uil-phone-alt"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0">+91 8700832603
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!-- START CONTACT-PAGE --> */}

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509157.364974411!2d-123.79641389801948!3d37.193115265681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1628684675253!5m2!1sen!2sin" height="350" style={{ border: 0, width: '100%' }} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </>
    )
}

export default Contact
