import React, { useContext, useState } from "react";
import CookieFetcher from "../components/cookieFetch";
import thing from "../components/uutisProcess";
import { UserContext } from "../contexts/UserContext";
import '../styles/Uutiset.css';


function Uutiset() {


    const { user, setUser } = useContext(UserContext);

    CookieFetcher();
    let uutisrivit = thing();

    return (
        <div className="uutis-kontti">
            <h1 className="Main-title title">Uutiset</h1>
            <div>
                <ul>
                    {uutisrivit.map((rivi, index) => (
                        <li key={index}>{rivi}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Uutiset;
