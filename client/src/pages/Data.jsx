import React from "react";
import "../styles/Data.css";
import CookieFetcher from "../components/cookieFetch";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

function Data() {
    CookieFetcher();

    const [items, setItems] = useState([]);
    const { user, setUser } = useContext(UserContext);

    const Item = ({ _id, username, tietokone, orgos, newos, pvm }) => {
        return (
            <tr>
                <td>{username}</td>
                <td>{tietokone}</td>
                <td>{orgos}</td>
                <td>{newos}</td>
                <td>{pvm}</td>
            </tr>
        );
    };

    const fetchItems = async () => {
        await axios
            .get("http://localhost:5000/api/item/")
            .then((response) => {
                setItems(response.data);
                console.log(
                    "Tarinat haettu tietokannasta statuksella:",
                    response.status
                );
            })
            .catch((err) => console.log("Errori: ", err));
    };


    useEffect(() => {
        fetchItems();
        console.log("Tokeni", user.con_token)
    }, []);

    const ItemList = () => {
        return (
            <>
                {items.map((i) => {
                    return (
                        <Item
                            key={i._id}
                            _id={i._id}
                            username={i.username}
                            tietokone={i.tietokone}
                            orgos={i.orgos}
                            newos={i.newos}
                            pvm={i.pvm}
                        />
                    );
                })}
            </>
        );
    };

    return (
        <div className="container">
            <div className="data-body">
                <div className="button-container">
                    <button className="add-button">
                        <Link to="/data/add">Lisää</Link>
                    </button>
                </div>
                <table className="data-table">
                    <thead className="border">
                        <tr>
                            <th>Username</th>
                            <th>Tietokone</th>
                            <th>Original OS</th>
                            <th>New OS</th>
                            <th>Päivämäärä</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItemList />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Data;
