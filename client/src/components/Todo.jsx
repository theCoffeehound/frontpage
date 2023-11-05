import React, { useState, useEffect, useRef }from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../styles/Todo.css';


function Todo() {




    const todoDOT = useRef("");
    const empting = useRef("");
    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState("");
    const [title, setTitle] = useState("");
    const [listName, setListName] = useState("");
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("testi");
    const nav = useNavigate();




    const Item = ({ _id, title, description, status, date }) => {

        return (
            <div className="todo-item">
                <a className="dot" id={_id} ref={todoDOT} onClick={() => checkItem(_id, status)}>&#9678;</a>
                <a id="todo-text">{title}
                    <span className="description-text">
                        {description}
                    </span>
                </a>
            </div>
        );
    };




    const ItemList = () => {
        return (
            <div className="todo-list">
                {items.map((i) => {
                    if (i.status != "done") {
                        return (
                            <Item
                                key={i._id}
                                _id={i._id}
                                title={i.title}
                                description={i.description}
                                statu={i.status}
                                date={i.date}
                            />
                        )
                    }
                })
                }
            </div>
        );
    };

    const fetchItems = async () => {
        await axios.get("http://localhost:5000/api/todo/")
            .then((response) => {
                setItems(response.data);
                console.log(
                    "Tehtävät haettu tietokannasta statuksella:",
                    response.status
                );
            })
            .catch((err) => console.log("Errori: ", err));
    };
    const checkItem = async(zyx) => {

        const itemId = zyx;
        const element = document.getElementById(itemId);
        console.log(element);
        todoDOT.current.innerHTML = "&#9673;";
        await axios
            .patch("http://localhost:5000/api/todo/" + itemId)
            .then((response) => {
                setRefresh(Math.random());  // TO REFRESH THE COMPONENT
                console.log(response.status); // TO EMPTY THE VALUE
            })
            .catch((err) => console.log("Error while CHECKING todo item : ", err));


        // Jos haluat suoraan päivittää sivun
        //window.location.reload();
    }

    const handleSubmit = async (e) => {
        console.log("Submit pressed!")
        e.preventDefault();
        await axios.post('http://localhost:5000/api/todo/add', { listName, title, status, description })
            .then(res => {
                {console.log(res.status)}   //  FOR THE LULZ    
                {empting.current.value = ""} //  TO EMPTY THE VALUE
                {setRefresh(Math.random())} //  TO REFRESH THE COMPONENT
            })
            .catch(err => {
                console.log("Signup error:", err);
            });
            
    };

    useEffect(() => {
        fetchItems();
    }, [refresh]);




    return (
        <div>
            <div className="addTodo">
                <div className="todo-form">
                    <form onSubmit={handleSubmit}>
                        <button type="submit">&#128931;</button>
                        <input
                            ref={empting}
                            placeholder="Add a new task"
                            className="register-form-input"
                            type="text"
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </form>
                </div>
            </div>
            <ItemList />
        </div>
    );
}

export default Todo;