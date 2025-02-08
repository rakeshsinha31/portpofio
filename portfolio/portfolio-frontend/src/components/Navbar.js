// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // For linking between pages

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#333', padding: '10px' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
                <li>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
