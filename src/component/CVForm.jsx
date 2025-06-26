import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function CVForm() {
    const formRef = useRef();
    const captchaRef = useRef();

    const [statusMsg, setStatusMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = captchaRef.current.getValue();
        if (!token) {
            return setStatusMsg('⚠️ Please complete the CAPTCHA.');
        }

        const form = formRef.current;
        const formData = new FormData(form);

        // ✅ Simulate successful submission
        setStatusMsg('✅ Submitted successfully!');
        form.reset();
        captchaRef.current.reset();

        setTimeout(() => setStatusMsg(''), 3000); // optional: hide message after 3s
    };

    return (
        <div className="container my-5 pt-5 ">
            <div
                className="shadow rounded-4 p-4 p-md-5 mx-auto bg-light"
                style={{
                    maxWidth: '900px',
                    background: '#ffffff',
                    border: '1px solid #dee2e6',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                }}
            >
                <h3
                    className="mb-4 text-center text-TGreen pb-3"
                    style={{ fontWeight: '600' }}
                >
                    UPLOAD YOUR CV
                </h3>

                {statusMsg && <div className="alert alert-info">{statusMsg}</div>}

                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="First Name *"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                name="last"
                                type="text"
                                className="form-control"
                                placeholder="Last Name *"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Email Address *"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                name="subject"
                                type="text"
                                className="form-control"
                                placeholder="Subject *"
                                required
                            />
                        </div>

                        <div className="col-12">
                            <label
                                className="form-label fw-semibold"
                                style={{ color: '#495057' }}
                            >
                                Upload your CV *
                            </label>
                            <input
                                name="cv"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="col-12">
                            <textarea
                                name="message"
                                rows="4"
                                className="form-control"
                                placeholder="Message"
                            ></textarea>
                        </div>

                        <div className="col-12 text-center">
                            <ReCAPTCHA
                                ref={captchaRef}
                                sitekey="6LfDsWsrAAAAAIb2HDxrzmClQ0wdpoy3JeXpDKdm"
                            />
                        </div>

                        <div className="col-12 text-center">
                            <button
                                type='submit'
                                className="btn TGreen px-5 py-2"
                                style={{ fontWeight: '500', fontSize: '16px' }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CVForm;
