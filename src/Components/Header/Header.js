import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <Link to='/'>
                <h1>Motor Ferret</h1>
            </Link>
            <h2>The Ultimate Motorsports Event Finder</h2>
        </header>
    );
}

export default Header;
