import React, { useState } from "react";
import { useContext } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { UserContext } from "../contexts/UserContext";


function Authentication(){


    const { logorreg } = useContext(UserContext);

    return(
        <div className="container">
            <div className="formi-container">
                
                { logorreg ? <Login /> : <Register />}
                
                
            </div>
            <div className="teksti">

            </div>
        </div>
    );
};

export default Authentication;