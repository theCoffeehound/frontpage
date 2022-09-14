import React, {useContext, useState} from "react";
import CookieFetcher from "../components/cookieFetch";
import { UserContext } from "../contexts/UserContext";



function User() {


    const { user, setUser } = useContext(UserContext);

    CookieFetcher();


    return(
        <div>
            <h1>User</h1>
            <p>{user.con_nimi}</p>
        </div>
    );
}

export default User;
