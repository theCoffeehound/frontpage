import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import burger from '../images/white-burger.png';

import { UserContext } from "../contexts/UserContext";


function Navbar() {

    const { user, setUser } = useContext(UserContext);
    const { logorreg, setLogorreg } = useContext(UserContext);

    const Logout = () => {
        document.cookie = "login_token=;expires=Thu, 01 Jan 1970"
        setUser(
            {
                con_token: null
            }
        );
    };


    function burgerFunction() {
        var x = document.getElementById("burger-menu");
        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
    }

    return (
        <div className='kontti'>
            <div className='navigation-bar'>
                <div className='vasen-ui'>
                    <img className='burger-icon' src={burger} alt="burger-menu-icon" onClick={burgerFunction} />
                    <Link className='navigation-bar-title navigation-bar-link' to="/">Personal home page</Link>
                </div>

                <div className='oikea-ui'>
                    {
                        user.con_token ?
                            <Link className='navigation-bar-logout navigation-bar-link' to="/" onClick={Logout} >Kirjaudu Ulos</Link>
                            : <Link className="navigation-bar-login navigation-bar-link" to="/authentication">Login</Link>
                    }
                </div>

            </div>
            <div id="burger-menu" className='burger-menu'>
                {
                    user.con_token
                        ?
                        <>
                            <Link className='burger-link' to="/projectmanager" onClick={burgerFunction}>ProjectManager</Link>
                            <Link className='burger-link' to="/data" onClick={burgerFunction}>Käyttöjärjestelmä taulukko</Link>
                            <Link className='burger-link' to="/user" onClick={burgerFunction}>User</Link>
                            <Link className='burger-link' to="/home" onClick={burgerFunction}>alt home</Link>
                            <Link className='burger-link' to="/testi" onClick={burgerFunction}>Test-Ground</Link>
                        </>
                        :
                        <Link className='burger-link' to="/uutiset" onClick={burgerFunction}>Uutiset</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;