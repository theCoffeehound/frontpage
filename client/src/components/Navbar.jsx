import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

import { UserContext } from "../contexts/UserContext";


function Navbar(){

    const { user, setUser } = useContext(UserContext);
    const { logorreg, setLogorreg } = useContext(UserContext);

    const Logout = () => {
        document.cookie="login_token=;expires=Thu, 01 Jan 1970"
        setUser(
            {
                con_token: null
            }
        );
    };


    return(
        <div className='navigation-bar'>
            <Link className='navigation-bar-title' to="/">Personal home page</Link>
            { user.con_token ?  <div className='navigation-bar-items'> <div className='navigation-bar-links'><Link className='navigation-bar-link' to="/data">Data</Link> | <Link className='navigation-bar-link' to="/user">User</Link></div> <Link className='navigation-bar-logout' to="/" onClick={Logout} >Kirjaudu Ulos</Link></div> : <Link className="navigation-bar-login" to="/authentication">Login</Link>}
        </div>
    );
};

export default Navbar;