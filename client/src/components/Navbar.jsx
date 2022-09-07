import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

import { UserContext, UserProvider } from "../contexts/UserContext";


function Navbar(){

    const { user, setUser } = useContext(UserContext);
    const { logorreg, setLogorreg } = useContext(UserContext);

    return(
        <div className='navigation-bar'>
            <Link className='navigation-bar-title' to="/">Frontpage</Link>
            { user.loginState ? <Link to="/" >Kirjaudu Ulos!</Link> : <Link className="navigation-bar-login" to="/authentication" onClick={() => {setLogorreg(true); console.log(`${logorreg}`)}}>Login</Link>}
        </div>
    );
};

export default Navbar;