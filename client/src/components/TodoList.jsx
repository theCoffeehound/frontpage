import React, { useState, useEffect }from "react";
import axios from 'axios';
import '../styles/Todo.css';
import AddTodoItem from "./AddTodoItem";

function TodoList() {

    const [items, setItems] = useState([]);
    const [dot, setDot] = useState(<>&#9678;</>);

    const Item = ({ _id, title, description, status, date }) => {
        return (
            <div className="todo-item">
                <a id="todo-dot" onClick={() => checkItem(_id, status)}>{dot}</a><a id="todo-text">{title}</a>
            </div>
        );
    };


    const checkItem = async (_id) => {

        const itemId = _id;

        await axios
        .patch("http://localhost:5000/api/todo/" + itemId)
        .then((response) => {
            console.log("Todo item marked as done:", response.status);
        })
        .catch((err) => console.log("Error while compliting todo item : ", err));

        setDot(<>&#9673;</>);

        //window.location.reload();
    }

    const ItemList = () => {
        return (
            <div className="todo-list">
                {items.map((i) => {
                    if(i.status != "done"){
                        return (
                            <Item
                                key={i._id}
                                _id={i._id}
                                title={i.title}
                                description={i.description}
                                statu={i.status}
                                date={i.date}
                            />
                    )}
                    })
                }
            </div>
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
        <div className="todo-board">
            <AddTodoItem />
            <ItemList />
        </div>
    );
}

export default TodoList;
