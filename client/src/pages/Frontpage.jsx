import React, { useState, useContext, useEffect } from 'react';
import '../styles/Frontpage.css';
import { UserContext } from '../contexts/UserContext';
import NewsLine from '../components/NewsLine';
import Todo from '../components/Todo.jsx';
function Frontpage() {

  const { user, setUser } = useContext(UserContext);


  // keksien haku
  const fetchCookies = () => {

    let name = "login_token" + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        setUser(
          {
            con_token: c.substring(name.length, c.length),
          }
        );
        return c.substring(name.length, c.length);
      }
    }
    return "";

  }

  //  Sivun latautumisen aikana tehtävät toimet
  useEffect(() => {
    fetchCookies();
    document.cookie = `testi=${fetchCookies()}`;

    if (fetchCookies) {
      console.log("Yes to token");
      console.log(fetchCookies());
      setUser(
        {
          con_token: fetchCookies(),
        }
      );
      console.log(user.con_token);
      console.log("last")
    }
    else
      console.log("Sory boys no bonus!")

  }, []);



  return (
    <div className='frontpage'>

      <h1 className='Main-title'>HELLO {user.con_token == (null || "") ? 'User' : user.con_token}!</h1>
      <div className='bookmarks-container'>
        <div className='bookmarks'>
          <a className='linkki' id='yt' href="https://www.youtube.com">YouTube</a>
          <a className='linkki' id='yle' href="https://www.yle.fi">Yle</a>
          <a className='linkki' id='reddit' href="https://www.reddit.com">Reddit</a>
          <a className='linkki' id='mail' href="https://www.mail.google.com">Mail</a>
          <a className='linkki' id='dim' href="https://app.destinyitemmanager.com">DIM</a>
        </div>
      </div>
      <div className='part-two'>
        <div className='news-container-front'>
          <h1 className='newsTitle'>uutiset</h1>
          <NewsLine />
        </div>
        <div className='todo-container-front'>
          <h1 className='todoTitle'>todo</h1>
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default Frontpage;