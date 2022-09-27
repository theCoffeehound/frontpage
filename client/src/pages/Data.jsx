import React from "react";
import '../styles/Data.css';
import CookieFetcher from "../components/cookieFetch";
import { useState, useEffect } from "react";
import axios from "axios";

function Data() {

    CookieFetcher();

    const[ items, setItems ] = useState([]);

    const Item = ({ _id, username, tietokone, orgos, newos, pvm }) => {

        return(
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
        await axios.get('http://localhost:5000/api/item/')
            .then(response => {
                setItems(response.data);
                console.log("Tarinat haettu tietokannasta statuksella:", response.status);
            })
            .catch((err => console.log("Errori: ", err)));
    };

    useEffect(() => {
        fetchItems();
    }, []);




    const ItemList = () => {

        return (
            <>
                {
                    items.map((i) => {
                        return(
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
                    })
                }
            </>
        );
    }



    return(
        <div className="data-body">
            <table className="data-table">
                <thead>
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
    )
}

export default Data;