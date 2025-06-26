import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function FAQ() {
    return (
        <>
            {/* <!-- Start home --> */}
            <section className="page-title-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="text-center text-white">
                                <h3 className="mb-4">FAQ'S</h3>
                                <div className="page-next">
                                    <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                            <li className="breadcrumb-item"><Link to={'/contact'}>Contact us</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page"> FAQ'S </li>
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


            {/* <!-- START FAQ-PAGE --> */}
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-12">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="generalTab" role="tabpanel" aria-labelledby="general-tab">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="accordion accordion-flush faq-box" id="general">
                                                <div className="accordion-item mt-4 border-0">
                                                    <h2 className="accordion-header" id="generalOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#general-one" aria-expanded="true"
                                                            aria-controls="general-one">
                                                            Where does it come from ?
                                                        </button>
                                                    </h2>
                                                    <div id="general-one" className="accordion-collapse collapse show"
                                                        aria-labelledby="generalOne" data-bs-parent="#general">
                                                        <div className="accordion-body">
                                                            The concept originates from the need to unify diverse systems. When various approaches merge, they often create a more streamlined and efficient structure, simplifying what was previously complex and fragmented.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- 1--> */}

                                                <div className="accordion-item mt-4 border-0">
                                                    <h2 className="accordion-header" id="generaltwo">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#general-two"
                                                            aria-expanded="false" aria-controls="general-two">
                                                            How SR Web Services Work?
                                                        </button>
                                                    </h2>
                                                    <div id="general-two" className="accordion-collapse collapse"
                                                        aria-labelledby="generaltwo" data-bs-parent="#general">
                                                        <div className="accordion-body">
                                                            To a new client, it feels like a simplified process, just as one might describe seamless tech support. Our team handles the complexity behind the scenes. The idea that it’s difficult is a myth.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--2--> */}

                                                <div className="accordion-item mt-4 border-0">
                                                    <h2 className="accordion-header" id="generalthree">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#general-three"
                                                            aria-expanded="false" aria-controls="general-three">
                                                            What is your shipping policy?
                                                        </button>
                                                    </h2>
                                                    <div id="general-three" className="accordion-collapse collapse"
                                                        aria-labelledby="generalthree" data-bs-parent="#general">
                                                        <div className="accordion-body">
                                                            Everyone values clarity when it comes to delivery: it avoids surprises and builds trust. That’s why we offer consistent schedules, upfront costs, and reliable tracking across all serviceable locations.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--3--> */}
                                            </div>
                                            {/* <!--end accordion--> */}
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-lg-6">
                                            <div className="accordion accordion-flush faq-box" id="generalTwo">
                                                <div className="accordion-item mt-4 border-0">
                                                    <h2 className="accordion-header" id="generalfour">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#general-four" aria-expanded="true"
                                                            aria-controls="general-four">
                                                            Where To Place A FAQ Page
                                                        </button>
                                                    </h2>
                                                    <div id="general-four" className="accordion-collapse collapse show"
                                                        aria-labelledby="generalfour" data-bs-parent="#generalTwo">
                                                        <div className="accordion-body">
                                                            Just like its purpose, a FAQ page should be easy to find. Place it in the main menu, footer, or help section. Use clear categories so users can quickly locate answers to common questions.


                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--4--> */}

                                                <div className="accordion-item mt-4 border-0">
                                                    <h2 className="accordion-header" id="generalfive">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#general-five"
                                                            aria-expanded="false" aria-controls="general-five">
                                                            Why do we use it ?
                                                        </button>
                                                    </h2>
                                                    <div id="general-five" className="accordion-collapse collapse"
                                                        aria-labelledby="generalfive" data-bs-parent="#generalTwo">
                                                        <div className="accordion-body">
                                                            It’s designed to be as intuitive as possible; in fact, that’s the goal. For new users, it feels familiar and easy, just like someone recognizing a tool they’ve already used before.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--5--> */}

                                                <div className="accordion-item mt-4 border-0">
                                                    <h2 className="accordion-header" id="generalsix">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#general-six"
                                                            aria-expanded="false" aria-controls="general-six">
                                                            Where can I get some ?
                                                        </button>
                                                    </h2>
                                                    <div id="general-six" className="accordion-collapse collapse"
                                                        aria-labelledby="generalsix" data-bs-parent="#generalTwo">
                                                        <div className="accordion-body">
                                                           For most users, it’s easy to access — as one client said, “it just makes sense.” Our services are part of a connected system. The idea that they’re hard to find is outdated.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--6--> */}
                                            </div>
                                            {/* <!--end accordion--> */}
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                </div>

                            </div>
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-lg-12">
                            <div className="text-center mt-5">
                                <Link to={'/contact'} className="btn TGreen btn-hover mt-2"><i className="uil uil-phone"></i> Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!-- END FAQ-PAGE --> */}


        </>
    )
}

export default FAQ
