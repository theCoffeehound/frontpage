import React, { useState } from "react";
import axios from 'axios';
import '../styles/Todo.css';

function AddTodoItem() {

    const [title, setTitle] = useState("");
    const [listName, setListName] = useState("");
    const [status, setStatus] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/todo/add', { listName, title, status })
          .then(res => console.log("AddTodo post status code:", res.status))
          .catch(err => {
            console.log("Signup error:",err);
        });

            //  Lopuksi viedään käyttäjä tarina sivulle, jossa voi nähä heti uuden tarinan
            setTimeout(()=> {window.location.reload(); }, 100 );     //// THIS IS STUPID, FIX IT
      };


    return (
        <div className="addTodo">
            <h1>TODO</h1>
            <div className="todo-form">
                <form onSubmit={handleSubmit}>
                    <input 
                        className="register-form-input" 
                        type="text"
                        onChange={(e) => { setTitle(e.target.value) }} 
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddTodoItem;