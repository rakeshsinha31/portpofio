import React from "react";
import "../css/contact.css"; // Custom CSS file for styling

const Contact = () => {
    return (
        <section className="contact_section">
            <div className="container">
                <h2 className="section_title">Get In Touch</h2>
                <p className="section_subtitle">
                    Have a project in mind? Let's connect and discuss how I can help!
                </p>
                <div className="contact_wrapper">
                    <div className="contact_form">
                        <form>
                            <div className="form_group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form_group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form_group">
                                <input type="text" placeholder="Subject" required />
                            </div>
                            <div className="form_group">
                                <textarea placeholder="Your Message" required></textarea>
                            </div>
                            <button className="btn_submit" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="contact_info">
                        <div className="info_item">
                            <img src="/images/location.png" alt="Location" />
                            <p>123 Main Street, New York, USA</p>
                        </div>
                        <div className="info_item">
                            <img src="/images/call.png" alt="Phone" />
                            <p>+1 (123) 456-7890</p>
                        </div>
                        <div className="info_item">
                            <img src="/images/envelope.png" alt="Email" />
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
