import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return <header>
        <nav>
            <img src="assets/icons/logo.svg" alt="Branding Logo"/>
            <ul>
                <li><Link to="/">Kartenansicht</Link></li>
                <li><Link to="/">Wagenstandanzeigert</Link></li>
                <li><Link to="/">Newsabo einrichten</Link></li>
            </ul>
        </nav>
    </header>
}

export default Header;