import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../contexts/UserContext";
import CookieFetcher from "../components/cookieFetch";
import '../styles/AddItem.css';






function AddItem() {


    CookieFetcher();

    const [username, setUsername] = useState("");
    const [tietokone, setTietokone] = useState("");
    const [orgos, setOrgos] = useState("");
    const [newos, setNewos] = useState("");
    const [pvm, setPvm] = useState("");

    const { user, setUser } = useContext(UserContext);
    const nav = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:5000/api/item/add', { username, tietokone, orgos, newos, pvm })
            .then(res => {
                console.log("Story post status code:", res.status);
            })
            .catch(err => {
                console.log(err);
            });

        //  Lopuksi viedään käyttäjä tarina sivulle, jossa voi nähä heti uuden tarinan
        nav("/data");
    };


    useEffect(() => {
        setUsername(user.con_token)
        console.log("Asetetaan usernameksi tokeni : ", user.con_token )
    }, []);


    return(
        <>
            <h1>Lisää puhdistus</h1>
            <div>

            </div>
            <form onSubmit={handleSubmit} className="formi">
                <div className="formi-item">
                    <label htmlFor="tietokone">Tietokone : </label>
                    <input type="text" name="tietokone" id="tietokone" onChange={(e) => setTietokone(e.target.value)}/>
                </div>

                <div className="formi-item">
                    <label htmlFor="">Original OS : </label>
                    <input type="text" onChange={(e) => setOrgos(e.target.value)} />
                </div>


                <div className="formi-item">
                    <label htmlFor="">New OS : </label>
                    <input type="text" onChange={(e) => setNewos(e.target.value)} />
                </div>



                <div className="formi-item">
                    <label htmlFor="">PVM : </label>
                    <input type="date" onChange={(e) => setPvm(e.target.value)} />
                </div>

                <button type="submit">Tallenna</button>

            </form>
        </>
    );
};



export default AddItem