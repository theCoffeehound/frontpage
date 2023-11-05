import React, { useContext, useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import CookieFetcher from "../components/cookieFetch";
import { UserContext } from "../contexts/UserContext";
import "../styles/Home.css"
import kuva from "../images/background_2.jpg";
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Home() {


    const { user, setUser } = useContext(UserContext);

    const [items, setItems] = useState([]);

    /*
    <img src={kuva} alt="testi" class="d-block w-100" />
    */

    CookieFetcher();


    const Item = (items) => {
        return (
            <></>
        );
    };

    const fetchNews = async () => {
        await axios
            .get("https://external.api.yle.fi/v1/teletext/pages/100.json?" + "app_id=" + "app_key=" + ":80")
            .then((response) => {
                setItems(response.data);
                console.log(
                    "Tarinat haettu tietokannasta statuksella:",
                    response.status
                );
                console.log(
                    response.data.teltext.page.supbage
                );
            })
            .catch((err) => console.log("Errori: ", err));
    };

    useEffect(() => {
        fetchNews();
        console.log("Tokeni", user.con_token)
    }, []);


    

    const ItemList = () => {
        return (
            <>
                {items.map((i) => {
                    return (
                        <Item
                            key={i._id}
                            _id={i._id}
                            username={i.username}
                            tietokone={i.tietokone}
                            orgos={i.orgos}
                            newos={i.newos}
                            pvm={i.pvm}
                        />
                    );
                })}
            </>
        );
    };

    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img src={kuva} alt="testi" class="d-block w-100" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={kuva} alt="testi" class="d-block w-100" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={kuva} alt="testi" class="d-block w-100" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            {/*     Edellinen/seuraava kontrollerit     */}

            <div className="bookmarks-container">
                <h1>bookmarks</h1>
            </div>
            <div>
                <h1>Uutiset</h1>
                <ItemList />
            </div>
        </div>
    );
}

export default Home;
