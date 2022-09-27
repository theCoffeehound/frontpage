import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

function CookieFetcher() {
    const { user, setUser } = useContext(UserContext);

    const fetchCookies = () => {
        let name = "login_token" + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                setUser({
                    con_token: c.substring(name.length, c.length),
                });
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };






    useEffect(() => {
        fetchCookies();
        document.cookie = `testi=${fetchCookies()}`;

        if (fetchCookies) {
            console.log("Yes to token");
            console.log(fetchCookies());
            setUser({
                con_token: fetchCookies(),
            });
            console.log("cookieFetch last debug");
        } else console.log("Sory boys no bonus!");



    }, []);
}

export default CookieFetcher;
