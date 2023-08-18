import React, { useState, useContext, useEffect } from 'react';
import '../styles/Frontpage.css';
import { UserContext } from '../contexts/UserContext';
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
      <div className='otsikko'>
        <h1>Hyvää huomenta!</h1>
      </div>
      
      <div className='uutis-container'>
        {/* TO BE ADDED*/}
      </div>

      <a href="http://192.168.1.105:3000/home"></a>
      <div className='bookmarks-container'>
        <div className='top-bookmarks'>
            <a className='linkki' id='yt' href="https://www.youtube.com">YouTube</a>
            <a className='linkki' id='reddit' href="https://www.reddit.com">Reddit</a>
            <a className='linkki' id='mail' href="https://www.mail.google.com">Mail</a>
        </div>
        <div className='news-bookmarks'> 
          <a className='linkki' id='yle' href="https://www.yle.fi">Yle</a>
          <a className='linkki' id='is' href="https://www.is.fi">IS</a>
        </div>
        <div className='freetime-bookmarks'>
        <a className='linkki' id='dim' href="https://app.destinyitemmanager.com">DIM</a>
        <a className='linkki' id='bungie' href="https://www.bungie.net">Bungie</a>
        </div>
        <div className='dev-bookmarks'>
            <a href="https://www.github.com/" className='linkki'>GitHub</a>
            <a href="https://www.w3schools.com/" className='linkki'>w3schools</a>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;