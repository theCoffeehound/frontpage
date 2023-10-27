import React from "react";
import axios from 'axios';
import '../styles/Login.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TodoList() {

    const [items, setItems] = useState([]);
   
    const Item = ({ _id, title, description, status, date}) => {
        return (
            <ul>
                <li>{title}</li>
            </ul>
        );
    };

    const ItemList = () => {
        return (
            <>
                {items.map((i) => {
                    return (
                        <Item
                            key={i._id}
                            _id={i._id}
                            title={i.title}
                            description={i.description}
                            statu={i.status}
                            date={i.date}
                        />
                    );
                })}
            </>
        );
    };

    const fetchItems = async () => {
        await axios
            .get("http://localhost:5000/api/todo/")
            .then((response) => {
                setItems(response.data);
                console.log(
                    "Tehtävät haettu tietokannasta statuksella:",
                    response.status
                );
            })
            .catch((err) => console.log("Errori: ", err));
    };


    useEffect(() => {
        fetchItems();
    }, []);


    return (
        <div>
            <ul>
                <ItemList />
            </ul>
        </div>
    );
}

export default TodoList;
