import React, { useContext, useState, useEffect } from "react";
import CookieFetcher from "../components/cookieFetch";
import { UserContext } from "../contexts/UserContext";
import '../styles/Todo.css';

function Testi() {


  const { user, setUser } = useContext(UserContext);

  const [items, setItems] = useState([]);

  CookieFetcher();

  return (
    <div>
      <h1 className="Main-title">TESTI</h1>
      <div className="todo-container">
        <div className="center-container">
        </div>
      </div>
    </div>
  );
}

export default Testi;
