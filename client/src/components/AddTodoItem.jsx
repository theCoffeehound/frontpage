import React from "react";
import axios from 'axios';
import { useState } from "react";

function AddTodoItem() {

    const [title, setTitle] = useState("");
    const [listName, setListName] = useState("");
    const [status, setStatus] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/todo/add', { listName, title, status })
          .then(res => console.log("AddTodo post status code:", res.status))
          .catch(err => {
            console.log("Signup error:",err);
        });

            //  Lopuksi viedään käyttäjä tarina sivulle, jossa voi nähä heti uuden tarinan
            
            window.location.reload();   //// THIS IS STUPID, FIX IT
      };


    return (
        <div className="addTodo">
            <h1>Add new task to TODO</h1>
            <div className="todo-form">
                <form onSubmit={handleSubmit}>
                    <label className="todo-form-label">List : </label>
                    <label className="todo-form-label">Task : </label>
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
