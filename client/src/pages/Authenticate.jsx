import React, { useState } from "react";
import { useContext } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { UserContext } from "../contexts/UserContext";
import "../styles/Authentication.css";


function Authentication(){


    const { logorreg } = useContext(UserContext);

    return(
        <div className="container" style={{width: "100%"}}>
            <div className="formi-container" style={{width: "100%"}}>
                
                { logorreg ? <Login /> : <Register />}
                
                
            </div>
            <div className="teksti">

            </div>
        </div>
    );
};

export default Authentication;