// src/components/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import "../css/contact.css"; // Custom CSS file for styling

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/contacts/send_message/', {
                name,
                email,
                message,
            });
            alert(response.data.status);
        } catch (error) {
            console.error(error);
            alert('There was an error sending your message');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send Message</button> */}

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
                                    <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form_group">
                                    <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form_group">
                                    <input type="text" placeholder="Subject" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form_group">
                                    <textarea placeholder="Your Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                                <button className="btn_submit" type="submit">
                                    Send Message
                                </button>
                            </form>
                        </div>
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


        </form>




    );
};

export default ContactForm;
