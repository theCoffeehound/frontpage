import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/Login.css";

import { UserContext, UserProvider } from "../contexts/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [salasana, setSalasana] = useState("");

  const nav = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/api/user/login", { email, salasana })
      .then((res) => {
        //  Backendissä tarkastetaan täsmäävätkö email ja salasana
        //  Tämän jälkeen asetetaan useContextiin user_id, nimi, sekä loginState
        if (res.data.message === "Right password") {

            console.log(res.data);
        
            console.log("Username: ",res.data.user.username);
          
            setUser(
                {
                    con_uid: res.data.user.uid,
                    con_nimi: res.data.user.username,
                    con_loginState: true,
                }
            );

            const d = new Date();
            d.setTime(d.getTime());

            var now = new Date();
            now.setTime(now.getTime() + 1 * 3600 * 1000);

            console.log(user.con_nimi);
            document.cookie = `login_token=${res.data.user.username}_${d.getTime()}; expires=${now}; path=/`;
            console.log({now})
          
          //  Lopuksi viedään käyttäjä etusivulle
          nav("/");
        } else console.log("Kirjautuminen epäonnistui!");
      })
      .catch((err) => console.log("Error: ", err));
  };

  const handleChange = () => {
    return console.log(
      `Username:${username}, Email:${email}, Salasana:${salasana}`
    );
  };

  const { logorreg, setLogorreg } = useContext(UserContext);

  return (
    <div className="login">
      <h1>Login</h1>
      <form
        className="login-form"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <label className="login-form-label">Sähköposti : </label>
        <input
          className="login-form-input"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="login-form-label">Salasana : </label>
        <input
          className="login-form-input"
          type="password"
          name="salasana"
          id="salasana"
          onChange={(e) => {
            setSalasana(e.target.value);
          }}
        />
        <button type="submit">Kirjaudu</button>
      </form>
      <div>
        <span>
          Eikö sinulla ole vielä tiliä?{" "}
          <button
            onClick={() => {
              setLogorreg(false);
              console.log(`${logorreg}`);
            }}
          >
            Luo se nyt!
          </button>
        </span>
      </div>
    </div>
  );
}

export default Login;
