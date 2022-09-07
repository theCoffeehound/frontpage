import React, { useContext } from "react";
import '../styles/Login.css';

import { UserContext, UserProvider } from "../contexts/UserContext";
import { Link } from "react-router-dom";


function Login() {


    const { logorreg, setLogorreg } = useContext(UserContext);
    return (
        <div className="login">
            <h1>Login</h1>
            <div className="login-form">
                    <label className="login-form-label">Sähköposti : </label>
                    <input className="login-form-input" type="text" />
                    <label className="login-form-label">Salasana : </label>
                    <input className="login-form-input" type="password" name="salasana" id="salasana" />
                    <div className="nappi-container">
                        <button type="submit">Kirjaudu</button>
                    </div>
            </div>
            <div>
                <span>Eikö sinulla ole vielä tiliä? <button onClick={() => {setLogorreg(false); console.log(`${logorreg}`)}}>Luo se nyt!</button></span>
            </div>
        </div>
    );
}

export default Login;
