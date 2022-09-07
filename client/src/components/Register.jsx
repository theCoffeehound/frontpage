import React from "react";
import axios from 'axios';
import '../styles/Login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [salasana, setSalasana] = useState("");

    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await axios.post('http://localhost:5000/api/user/signup', { username, email, salasana })
          .then(res => console.log("Signup post status code:", res.status))
          .catch(err => {
            console.log("Signup error:",err);
        });
    
        //  Tilin luomisen jälkeen viedään käyttäjä kirjautumis sivulle, jossa voi heti kirjautua uudelle tilille
        nav("/");
      };


      const handleChange = () => {

        return(
            console.log(`${username},${email},${salasana}`)
        )
      }

    return (
        <div className="register">
            <h1>Register</h1>
            <div className="register-form">
                <form onSubmit={handleSubmit} onChange={handleChange}>
                    <label className="register-form-label">Username : </label>
                    <input 
                        className="register-form-input" 
                        type="text"
                        onChange={(e) => { setUsername(e.target.value) }} 
                    />
                    <br/>
                    <label className="register-form-label">Sähköposti : </label>
                    <input 
                        className="register-form-input" 
                        type="text"
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <br/>
                    <label className="register-form-label">Salasana : </label>
                    <input 
                        className="register-form-input" 
                        type="password" 
                        name="salasana" 
                        id="salasana"
                        onChange={(e) => { setSalasana(e.target.value) }} 
                    />
                    <button type="submit">Rekisteröidy</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
