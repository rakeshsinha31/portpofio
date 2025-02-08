

// src/components/Home.js
import React from "react";
import "../css/home.css";
import profileImg from "../images/about-img.jpg"; // Ensure the image is placed correctly



const Home = () => {
    return (
        <section className="home-container">
            <div className="grid-container">
                {/* Profile Tile */}
                <div className="tile profile-tile">
                    <div className="profile-image-container">
                        <img src={profileImg} alt="Profile" className="profile-image" />
                    </div>
                    <div className="profile-details">
                        <h1>Hello, I'm <span className="highlight">RAKESH SINHA</span></h1>
                        <p>Lead Software Engineer</p>
                        <p>

                        </p>
                        <a href="#contact" className="btn-primary">Get in Touch</a>
                    </div>
                </div>

                {/* Experience Tile */}
                <div className="tile experience-tile">
                    <h2>Professional Experience</h2>
                    <ul>
                        <li><strong className="highlight">Lead Software Engineer</strong> - Agilon Health Ind Pvt Ltd, India (Jun 2021 - Present)</li>
                        <li><strong className="highlight">Senior Backend Developer</strong> -  Newfuture Holdings, Singapore (May 2019 - Jan 2021)</li>
                        <li><strong className="highlight">Senior Software Engineer</strong> -  Cynopsis Solutions, Singapore (Jun 2016 - Msy 2019)</li>
                        <li><strong className="highlight">Senior Data Analyst</strong> -  Emerio Globalsoft, Singapore (Dec 2014 - Jun 2016)</li>
                        <li><strong className="highlight">Senior Backend Developer, Singapore</strong> -  Vocollect Inc, Gurgaon, India (May 2012 - Sep 2014)</li>

                    </ul>
                </div>

                {/* Skills Tile */}
                <div className="tile skills-tile">
                    <h2>Skills & Expertise</h2>
                    <div className="skills-list">
                        <span>Application Architecture & Implementation</span>
                        <span>API Design& Integration</span>
                        <span>Cloud & Infrastructure </span>
                        <span>DevOps</span>
                        <span>Data pipeline</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
