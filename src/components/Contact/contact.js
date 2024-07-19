import React, { useRef } from "react";
import './contact.css';
import AzureC from '../../assets/azure.png';
import awsc from '../../assets/aws.png';
import networkC from '../../assets/cisco.png';
import npetal from '../../assets/npetal.png';
import linkedin from '../../assets/linkedin.png';
import Email from '../../assets/email.png';
import github from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const certificates = [
    { id: 1, src: AzureC, alt: 'AzureC', verifyUrl: 'https://www.credly.com/badges/fbb9d415-3548-4397-b5f6-e5860f24b73e/public_url' },
    { id: 2, src: awsc, alt: 'awsc', verifyUrl: 'https://www.credly.com/badges/88aa6fb7-7284-4f17-93b6-b6508d824f5d/public_url' },
    { id: 3, src: networkC, alt: 'networkC', verifyUrl: 'https://www.credly.com/badges/67027444-e4bb-40f0-a076-2ca98286b4fc/public_url' },
    { id: 4, src: npetal, alt: 'npetal', verifyUrl: 'https://www.credly.com/badges/469d8ef3-934a-43ba-927e-eb3fa470d62d/public_url' },
];

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        console.log("Form data entries:");
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        emailjs.sendForm('service_scgp2xn', 'template_1g5kc1l', form.current, 'Ya4tp5HwerTPGTXm9')
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    e.target.reset();
                    alert('Email Sent!');
                },
                (error) => {
                    console.error('FAILED...', error);
                    alert('Failed to send email. Please try again.');
                }
            );
    };

    const verifyCertificate = (url) => {
        window.location.href = url;
    };

    return (
        <section id="contactpage">
            <div id="clients">
                <h1 className="contactpagetitle">My Certifications</h1>
                <p className="certificateDesc">
                    These certifications affirm my expertise and readiness to address complex challenges in these fields.
                </p>
                <div className="certificateImgs">
                    {certificates.map((certificate) => (
                        <div key={certificate.id} className="certificateContainer">
                            <img src={certificate.src} alt={certificate.alt} className="certificateImg" />
                            <button
                                className="verifyButton"
                                onClick={() => verifyCertificate(certificate.verifyUrl)}
                            >
                                Verify
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div id="contact">
                <h1 className="contactpagetitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss with me for any work opportunities</span>
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name" required />
                    <input type="email" className="email" placeholder="Your Email" name="from_email" required />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/pavani-velpuri-9b824b231/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" className="link" />
                        </a>
                        <a href="mailto:pavanivelpuri01@gmail.com">
                            <img src={Email} alt="Email" className="link" />
                        </a>
                        <a href="https://github.com/Pavanivelpuri" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="github" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;

