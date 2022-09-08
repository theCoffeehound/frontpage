import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {


    const [user, setUser] = useState({
        con_uid: "",
        con_nimi: "",
        con_token: "",
        con_loginState: false
    });

    const [haku, setHaku] = useState({
        haku_nimi: "",
        haku_uid: ""
    });

    const [logorreg, setLogorreg] = useState(
        {
            logorreg_state: false
        }
    );

    const [muokkaus, setMuokkaus] = useState({
        muokkaus_url: "/",
        muokkaus_storyid: "",
        muokkaus_userid: "",
        muokkaus_pvm: "",
        muokkaus_paikkakunta: "",
        muokkaus_tarina: "",
        muokkaus_kuva: "",

    });

    return(
        <UserContext.Provider value={{user, setUser, haku, setHaku, muokkaus, setMuokkaus, logorreg, setLogorreg}}>
            { children }
        </UserContext.Provider>
    );

};