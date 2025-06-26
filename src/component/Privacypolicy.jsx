import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Privacypolicy() {
    return (
        <>
            {/* <!-- Start home --> */}
            <section className="page-title-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="text-center text-white">
                                <h3 className="mb-4">Privacy & Policy</h3>
                                <div className="page-next">
                                    <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li className="breadcrumb-item"><Link to={'/contact'}>Contact us</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page"> Privacy & Policy </li>
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


            {/* <!-- START PRIVACY-POLICY --> */}
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <h5 className="mb-4">Use for SR Web Consultancy</h5>
                            <ul className="about-list list-unstyled text-justify text-muted mb-4 pb-2">
                                <li>
                                    At SR Web Consultancy, we value your trust and are committed to safeguarding the privacy of our users. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services.
                                </li>
                                <li>
                                    We collect information such as your name, email address, contact number, and any other details you provide voluntarily through forms, subscriptions, or inquiries. This information is used solely to provide and improve our services, respond to your queries, and keep you informed about updates.
                                </li>
                                <li>
                                    We do not share your personal data with third parties without your explicit consent, except when required by law. Your data is stored securely, and we implement reasonable measures to protect it from unauthorized access, disclosure, or misuse.
                                </li>
                                <li>
                                    Please note that this policy applies only to information collected through our website. It does not cover any offline data or information shared through other communication channels.
                                    <br />
                                    By using our website, you consent to our Privacy Policy and agree to its terms. If you have any questions or concerns, feel free to reach out at
                                    <b className="text-danger"> contact@srwebconsultancy.com</b>
                                </li>
                            </ul>

                            <h5 className="mb-4">We use your information to :</h5>

                            <ul className="about-list list-unstyled text-justify text-muted mb-4 pb-2">
                                <li>
                                    Deliver tailored web and IT consultancy services
                                </li>
                                <li>
                                    Enhance user experience across our platforms</li>
                                <li>
                                    Provide updates on new features or offerings
                                </li>
                                <li>
                                    Maintain secure and efficient communication
                                </li>
                            </ul>

                            <h5 className="mb-4">Privacy and copyright protection</h5>

                            <ul className="about-list list-unstyled text-justify text-muted mb-4 pb-2">
                                <li>
                                    We ensure strict protection of your shared data. All content and visuals used on this site are legally licensed or created in-house to maintain originality and compliance.
                                </li>
                                <li>
                                    Unauthorized copying or distribution of our content is prohibited. Over time, we’ve refined our content to align with copyright standards and digital rights best practices.
                                </li>
                            </ul>



                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!-- END PRIVACY-POLICY --> */}

        </>
    )
}

export default Privacypolicy
