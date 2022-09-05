import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar(){

    return(
        <div className='navigation-bar'>
            <Link className='navigation-bar-title' to="/">Frontpage</Link>
            <Link className="navigation-bar-login" to="/authentication">Login</Link>
        </div>
    );
};

export default Navbar;