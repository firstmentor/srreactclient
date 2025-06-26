import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { Link, Scripts } from 'react-router-dom'
import '../index.css'


function Footer() {
    return (
        <>
            <div>
                <div>
                    {/* <!-- START FOOTER --> */}
                    <section className="bg-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                                        <h4 className="text-white mb-4">SR Web Services</h4>
                                        <p className="text-white-50">It is a well-known fact that a visitor will focus on the look of a page rather than its full content.</p>
                                        <p className="text-white mt-3">Follow Us on:</p>
                                        <ul className="footer-social-menu list-inline mb-0">
                                            <li className="list-inline-item"><Link href="#"><i className="uil uil-facebook-f"></i></Link></li>
                                            <li className="list-inline-item"><Link href="#"><i className="uil uil-linkedin-alt"></i></Link></li>
                                            <li className="list-inline-item"><Link href="#"><i className="uil uil-google"></i></Link></li>
                                            <li className="list-inline-item"><Link href="#"><i className="uil uil-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className='col-lg-2 col-6'></div> */}
                                {/* <!--end col--> */}
                                <div className="col-lg-3 col-6">
                                    <div className="footer-item mt-4 mt-lg-0">
                                        <p className="fs-16 text-white mb-4">Company</p>
                                        <ul className="list-unstyled footer-list mb-0">
                                            <li><Link to={'/'} ><i className="mdi mdi-chevron-right"></i> Home</Link></li>
                                            <li><Link to={'/about'} ><i className="mdi mdi-chevron-right"></i> About</Link></li>
                                            <li><Link to={'/service'}><i className="mdi mdi-chevron-right"></i> Services</Link></li>
                                            <li><Link to={'/contact'} ><i className="mdi mdi-chevron-right"></i> Contact Us</Link></li>

                                        </ul>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                                <div className="col-lg-3 col-6">
                                    <div className="footer-item mt-4 mt-lg-0">
                                        <p className="fs-16 text-white mb-4">Support</p>
                                        <ul className="list-unstyled footer-list mb-0">
                                            <li><Link to={'/client'}><i className="mdi mdi-chevron-right"></i> Clients</Link></li>
                                            <li><Link to={'/candidate'}><i className="mdi mdi-chevron-right"></i> Candidates</Link></li>
                                            <li><Link to={'/faq'}><i className="mdi mdi-chevron-right"></i> FAQ'S</Link></li>
                                            <li><Link to={'/privacy'}><i className="mdi mdi-chevron-right"></i> Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                        </div>
                        {/* <!--end container--> */}
                    </section>
                    {/* <!-- END FOOTER --> */}

                    {/* <!-- START FOOTER-ALT --> */}
                    <div className="footer-alt">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="text-white text-center mb-0">
                                        Copyright © 2025-2026 | <Link to={'https://pninfosys.com/'} className='text-white' >PN INFOSYS IT COMPANY IN GWALIOR</Link> ! . All rights reserved.
                                    </p>
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                        </div>
                        {/* <!--end container--> */}
                    </div>
                    {/* <!-- END FOOTER --> */}


                    {/* <!--start back-to-top--> */}
                    {/* <button onclick="topFunction()" id="back-to-top">
                        <i className="mdi mdi-arrow-up"></i>
                        
                    </button> */}
                    {/* <!--end back-to-top--> */}
                </div>
                {/* <!-- end main content--> */}

            </div >
            {/* <!-- END layout-wrapper --> */}

            {/* <!-- JAVASCRIPT --> */}
            <script src='/src/assets/libs/bootstrap/js/bootstrap.bundle.min.js' ></script>

            <script src="https://unicons.iconscout.com/release/v4.0.0/script/monochrome/bundle.js"></script>


            {/* <!-- Choice Js --> */}
            <script src="/src/assets/libs/choices.js/public/assets/scripts/choices.min.js"></script>

            {/* <!-- Swiper Js --> */}
            <script src="/src/assets/libs/swiper/swiper-bundle.min.js"></script>

            {/* <!-- Index Js --> */}
            <script src="/src/assets/js/pages/job-list.init.js"></script>

            {/* <!-- Switcher Js --> */}
            <script src="/src/assets/js/pages/switcher.init.js"></script>

            <script src="/src/assets/js/pages/index.init.js"></script>

            {/* <!-- App Js --> */}
            <script src="/src/assets/js/app.js"></script>

        </>
    )
}

export default Footer
