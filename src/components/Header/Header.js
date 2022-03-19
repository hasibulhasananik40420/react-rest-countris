import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <a href="/home">Home</a>
                <a href="/about us">About Us</a>
                <a href="/contact"> Contact</a>
            </nav>
        </div>
    );
};

export default Header;