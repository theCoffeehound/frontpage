import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";


function Authentication(){

    return(
        <div className="container">
            <div className="formi-container">
                <Login />
                <Register />
            </div>
            <div className="teksti">

            </div>
        </div>
    );
};

export default Authentication;