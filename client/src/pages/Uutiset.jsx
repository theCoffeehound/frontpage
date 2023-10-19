import React, {useContext, useState} from "react";
import CookieFetcher from "../components/cookieFetch";
import { UserContext } from "../contexts/UserContext";
import '../styles/Uutiset.css';


function Uutiset() {


    const { user, setUser } = useContext(UserContext);

    CookieFetcher();


    return(
        <div className="uutis-kontti">
            <h1 className="Main-title title">Uutiset</h1>
            <p>{user.con_nimi}</p>
        </div>
    );
}

export default Uutiset;
