import React from "react";
import '../styles/Login.css';

function Login() {
    return (
        <div className="">
            <h1>Login</h1>
            <div className="login-form">
                    <label className="login-form-label">Sähköposti : </label>
                    <input className="login-form-input" type="text" />
                    <label className="login-form-label">Salasana : </label>
                    <input className="login-form-input" type="password" name="salasana" id="salasana" />
                    <div className="nappi">
                        <button type="submit">Kirjaudu</button>
                    </div>
            </div>
        </div>
    );
}

export default Login;
