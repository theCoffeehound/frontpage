import React from "react";
import '../styles/Login.css';

function Register() {
    return (
        <div className="register">
            <h1>Login</h1>
            <div className="register-form">
                    <label className="register-form-label">Sähköposti : </label>
                    <input className="register-form-input" type="text" />
                    <label className="register-form-label">Salasana : </label>
                    <input className="register-form-input" type="password" name="salasana" id="salasana" />
                    <div className="nappi-container">
                        <button type="submit">Rekisteröidy</button>
                    </div>
            </div>
        </div>
    );
}

export default Register;
