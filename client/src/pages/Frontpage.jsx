import React, { useState, useContext, useEffect } from 'react';
import '../styles/Frontpage.css';
import kuva from '../images/background_2.jpg';
import { UserContext } from '../contexts/UserContext';
function Frontpage() {

  const { user, setUser } = useContext(UserContext);



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
      <div id="otsikko-kuva">
        <img src={kuva} alt='this is where phot should is' width={"100%"} />
        <div className='center' id="kuvateksti">
          <h1>Hei siellä!</h1>
          <h2>Tervetuloa minun nettisivulleni!</h2>
        </div>
      </div>
      <div id="lore-ipsum">
        <h1>HTML Ipsum Presents</h1>

        <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

        <h2>Header Level 2</h2>


      </div>
    </div>
  );
};

export default Frontpage;