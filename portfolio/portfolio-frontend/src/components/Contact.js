import React, { useState } from 'react';
import "../css/contact.css"; // Custom CSS file for styling

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",  // Added subject
        message: ""
    });

    const [status, setStatus] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        console.log("Submitting form with:", formData);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/contact/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("An error occurred.");
        }
    };


    return (
        <section className="contact_section">
            <div className="container">
                <h2 className="section_title">Get In Touch</h2>
                <p className="section_subtitle">
                    Have a project in mind? Let's connect and discuss how I can help!
                </p>
                <div className="contact_wrapper">
                    {/* Left: Contact Form */}
                    <div className="contact_form">
                        <form onSubmit={handleSubmit}>
                            <div className="form_group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form_group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form_group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form_group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button className="btn_submit" type="submit">
                                Send Message
                            </button>
                            <p className="status">{status}</p>
                        </form>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="contact_info">
                        <div className="info_item">
                            <img src="/images/location.png" alt="Location" />
                            <p>C67 & 68M, Sainik Nagar, New Delhi</p>
                        </div>
                        <div className="info_item">
                            <img src="/images/call.png" alt="Phone" />
                            <p>(+91) 966-772-3318</p>
                        </div>
                        <div className="info_item">
                            <img src="/images/envelope.png" alt="Email" />
                            <p>rakeshsinha.0531@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
