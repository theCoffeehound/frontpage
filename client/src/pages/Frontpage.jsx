import React from 'react';
import '../styles/Frontpage.css';
import kuva from '../images/background_2.jpg';
function Frontpage() {

    return( 
        <div>
            <div id="otsikko-kuva">
                <img src={kuva} alt='etukuva is ' width={"100%"}/>
                <div className='center frontpage' id="kuvateksti">
                    <h1>Hei siellä!</h1>
                    <h2>Tervetuloa minun nettisivulleni!</h2>
                </div>
            </div>  
        </div>
    );
};

export default Frontpage;