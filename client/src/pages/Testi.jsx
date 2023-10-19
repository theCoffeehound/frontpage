import React, { useContext, useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import CookieFetcher from "../components/cookieFetch";
import { UserContext } from "../contexts/UserContext";
import "../styles/Home.css"
import kuva from "../images/background_2.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import uuti from "../components/uutisProcess";
import axios from 'axios';
import jason from '../yleapitest.json';

function Testi() {


    const { user, setUser } = useContext(UserContext);

    const [items, setItems] = useState([]);

    /*
    <img src={kuva} alt="testi" class="d-block w-100" />
    */

    CookieFetcher();

    var array = [
        {
            "teletext": {
             "network": "YLE",
             "xml": "preserve",
             "page": {
              "number": "100",
              "name": "Uutiset",
              "time": "2022-09-20T15:48:42",
              "subpagecount": "1",
              "nextpg": "101",
              "toptype": "Block",
              "animated": "yes",
              "subpage": [
               {
                "number": "1",
                "time": "8",
                "content": [
                 {
                  "type": "text",
                  "line": [
                   {
                    "number": "1"
                   },{
                    "number": "2",
                    "Text": "           Teksti-TV                    "
                   },{
                    "number": "3"
                   },{
                    "number": "4",
                    "Text": "    yle.fi/tekstitv    199 PÄÄHAKEMISTO "
                   },{
                    "number": "5"
                   },{
                    "number": "6",
                    "Text": " 166 Marimekko paransi tulostaan        "
                   },{
                    "number": "7"
                   },{
                    "number": "8"
                   },{
                    "number": "9",
                    "Text": " 104 Hoitajakoulutuksen suosio lastussa "
                   },{
                    "number": "10"
                   },{
                    "number": "11"
                   },{
                    "number": "12",
                    "Text": " 135 WHO: Omikron leviää Euroopassa     "
                   },{
                    "number": "13"
                   },{
                    "number": "14"
                   },{
                    "number": "15",
                    "Text": " 107 Suomessa 10 000 koronatartuntaa    "
                   },{
                    "number": "16"
                   },{
                    "number": "17"
                   },{
                    "number": "18",
                    "Text": "   101 UUTISET  160 TALOUS 190 ENGLISH  "
                   },{
                    "number": "19",
                    "Text": "   201 URHEILU  350 RADIOT 470 VEIKKAUS "
                   },{
                    "number": "20",
                    "Text": "   300 OHJELMAT 400 SÄÄ    575 TEKSTI-TV"
                   },{
                    "number": "21",
                    "Text": "   799 SVENSKA  500 ALUEET 890 KALENTERI"
                   },{
                    "number": "22",
                    "Text": "   Ajatus päivälle                  895 "
                   },{
                    "number": "23",
                    "Text": "   Sää paikkakunnittain         406-408 "
                   },{
                    "number": "24"
                   }]
                 },{
                  "type": "all",
                  "line": [
                   {
                    "number": "1",
                    "Text": "{Blue}{NB}{GWhite}h hh p                               "
                   },{
                    "number": "2",
                    "Text": "{Blue}{NB}{GWhite}\"d&jj,%{White}Teksti-TV                    "
                   },{
                    "number": "3",
                    "Text": "{Blue}{NB}{GWhite} * *\",!                              "
                   },{
                    "number": "4",
                    "Text": "{Cyan}{NB}{Blue} yle.fi/tekstitv    199 PÄÄHAKEMISTO "
                   },{
                    "number": "5",
                    "Text": "{GBlue}#######################################"
                   },{
                    "number": "6",
                    "Text": "{DH}166 Marimekko paransi tulostaan        "
                   },{
                    "number": "7"
                   },{
                    "number": "8",
                    "Text": "{SB}                                       "
                   },{
                    "number": "9",
                    "Text": "{DH}104 Hoitajakoulutuksen suosio lastussa "
                   },{
                    "number": "10"
                   },{
                    "number": "11",
                    "Text": "{SB}                                       "
                   },{
                    "number": "12",
                    "Text": "{DH}135 WHO: Omikron leviää Euroopassa     "
                   },{
                    "number": "13"
                   },{
                    "number": "14",
                    "Text": "{SB}                                       "
                   },{
                    "number": "15",
                    "Text": "{DH}107 Suomessa 10 000 koronatartuntaa    "
                   },{
                    "number": "16"
                   },{
                    "number": "17",
                    "Text": "{GGreen}ppppppppppppppppppppppppppppppppppppppp"
                   },{
                    "number": "18",
                    "Text": "{Green}{NB}{Blue}101 UUTISET  160 TALOUS 190 ENGLISH  "
                   },{
                    "number": "19",
                    "Text": "{Green}{NB}{Blue}201 URHEILU  350 RADIOT 470 VEIKKAUS "
                   },{
                    "number": "20",
                    "Text": "{Green}{NB}{Blue}300 OHJELMAT 400 SÄÄ    575 TEKSTI-TV"
                   },{
                    "number": "21",
                    "Text": "{Green}{NB}{Blue}799 SVENSKA  500 ALUEET 890 KALENTERI"
                   },{
                    "number": "22",
                    "Text": "{Blue}{NB}{White}Ajatus päivälle                  895 "
                   },{
                    "number": "23",
                    "Text": "{Blue}{NB}{White}Sää paikkakunnittain         406-408 "
                   },{
                    "number": "24"
                   }]
                 },{
                  "type": "structured",
                  "line": [
                   {
                    "number": "1",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "blue",
                      "fg": "blue",
                      "length": "2"
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "68h",
                      "length": "1",
                      "Text": "h"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "68h",
                      "length": "2",
                      "Text": "hh"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "70h",
                      "length": "1",
                      "Text": "p"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "31"
                     }]
                   },{
                    "number": "2",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "blue",
                      "fg": "blue",
                      "length": "2"
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "22h",
                      "length": "1",
                      "Text": "\""
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "64h",
                      "length": "1",
                      "Text": "d"
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "26h",
                      "length": "1",
                      "Text": "&"
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "6Ah",
                      "length": "2",
                      "Text": "jj"
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "2Ch",
                      "length": "1",
                      "Text": ","
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "25h",
                      "length": "1",
                      "Text": "%"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "30",
                      "Text": " Teksti-TV                    "
                     }]
                   },{
                    "number": "3",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "blue",
                      "fg": "blue",
                      "length": "3"
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "2Ah",
                      "length": "1",
                      "Text": "*"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "2Ah",
                      "length": "1",
                      "Text": "*"
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "22h",
                      "length": "1",
                      "Text": "\""
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "2Ch",
                      "length": "1",
                      "Text": ","
                     },{
                      "bg": "blue",
                      "fg": "gwhite",
                      "charcode": "21h",
                      "length": "1",
                      "Text": "!"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "30"
                     }]
                   },{
                    "number": "4",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "cyan",
                      "fg": "cyan",
                      "length": "3"
                     },{
                      "bg": "cyan",
                      "fg": "blue",
                      "link": "https://yle.fi/tekstitv",
                      "length": "15",
                      "Text": "yle.fi/tekstitv"
                     },{
                      "bg": "cyan",
                      "fg": "blue",
                      "length": "4"
                     },{
                      "bg": "cyan",
                      "fg": "blue",
                      "link": "199",
                      "length": "3",
                      "Text": "199"
                     },{
                      "bg": "cyan",
                      "fg": "blue",
                      "length": "14",
                      "Text": " PÄÄHAKEMISTO "
                     }]
                   },{
                    "number": "5",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "black",
                      "fg": "gblue",
                      "charcode": "23h",
                      "length": "39",
                      "Text": "#######################################"
                     }]
                   },{
                    "number": "6",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "link": "166",
                      "length": "3",
                      "Text": "166"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "length": "36",
                      "Text": " Marimekko paransi tulostaan        "
                     }]
                   },{
                    "number": "7",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "link": "166",
                      "length": "3"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "length": "36"
                     }]
                   },{
                    "number": "8",
                    "run": {
                     "bg": "black",
                     "fg": "white",
                     "length": "40"
                    }
                   },{
                    "number": "9",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "link": "104",
                      "length": "3",
                      "Text": "104"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "length": "36",
                      "Text": " Hoitajakoulutuksen suosio lastussa "
                     }]
                   },{
                    "number": "10",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "link": "104",
                      "length": "3"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "length": "36"
                     }]
                   },{
                    "number": "11",
                    "run": {
                     "bg": "black",
                     "fg": "white",
                     "length": "40"
                    }
                   },{
                    "number": "12",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "link": "135",
                      "length": "3",
                      "Text": "135"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "length": "36",
                      "Text": " WHO: Omikron leviää Euroopassa     "
                     }]
                   },{
                    "number": "13",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "link": "135",
                      "length": "3"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "length": "36"
                     }]
                   },{
                    "number": "14",
                    "run": {
                     "bg": "black",
                     "fg": "white",
                     "length": "40"
                    }
                   },{
                    "number": "15",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "link": "107",
                      "length": "3",
                      "Text": "107"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "length": "36",
                      "Text": " Suomessa 10 000 koronatartuntaa    "
                     }]
                   },{
                    "number": "16",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "link": "107",
                      "length": "3"
                     },{
                      "bg": "black",
                      "fg": "white",
                      "size": "double height",
                      "length": "36"
                     }]
                   },{
                    "number": "17",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "black",
                      "fg": "ggreen",
                      "charcode": "70h",
                      "length": "39",
                      "Text": "ppppppppppppppppppppppppppppppppppppppp"
                     }]
                   },{
                    "number": "18",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "green",
                      "fg": "green",
                      "length": "2"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "101",
                      "length": "3",
                      "Text": "101"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "10",
                      "Text": " UUTISET  "
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "160",
                      "length": "3",
                      "Text": "160"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "8",
                      "Text": " TALOUS "
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "190",
                      "length": "3",
                      "Text": "190"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "10",
                      "Text": " ENGLISH  "
                     }]
                   },{
                    "number": "19",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "green",
                      "fg": "green",
                      "length": "2"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "201",
                      "length": "3",
                      "Text": "201"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "10",
                      "Text": " URHEILU  "
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "350",
                      "length": "3",
                      "Text": "350"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "8",
                      "Text": " RADIOT "
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "470",
                      "length": "3",
                      "Text": "470"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "10",
                      "Text": " VEIKKAUS "
                     }]
                   },{
                    "number": "20",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "green",
                      "fg": "green",
                      "length": "2"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "300",
                      "length": "3",
                      "Text": "300"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "10",
                      "Text": " OHJELMAT "
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "400",
                      "length": "3",
                      "Text": "400"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "8",
                      "Text": " SÄÄ    "
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "575",
                      "length": "3",
                      "Text": "575"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "10",
                      "Text": " TEKSTI-TV"
                     }]
                   },{
                    "number": "21",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "green",
                      "fg": "green",
                      "length": "2"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "799",
                      "length": "3",
                      "Text": "799"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "10",
                      "Text": " SVENSKA  "
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "500",
                      "length": "3",
                      "Text": "500"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "8",
                      "Text": " ALUEET "
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "link": "890",
                      "length": "3",
                      "Text": "890"
                     },{
                      "bg": "green",
                      "fg": "blue",
                      "length": "10",
                      "Text": " KALENTERI"
                     }]
                   },{
                    "number": "22",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "blue",
                      "fg": "blue",
                      "length": "2"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "33",
                      "Text": "Ajatus päivälle                  "
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "link": "895",
                      "length": "3",
                      "Text": "895"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "1"
                     }]
                   },{
                    "number": "23",
                    "run": [
                     {
                      "bg": "black",
                      "fg": "white",
                      "length": "1"
                     },{
                      "bg": "blue",
                      "fg": "blue",
                      "length": "2"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "29",
                      "Text": "Sää paikkakunnittain         "
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "link": "406",
                      "length": "3",
                      "Text": "406"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "1",
                      "Text": "-"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "link": "408",
                      "length": "3",
                      "Text": "408"
                     },{
                      "bg": "blue",
                      "fg": "white",
                      "length": "1"
                     }]
                   },{
                    "number": "24",
                    "run": {
                     "bg": "black",
                     "fg": "white",
                     "length": "40"
                    }
                   }]
                 }]
               }]
             }
            }
           }
    ] 




    const getUutiset = () => {
        let data = array[0].teletext.page.subpage[0].content[0].line[1].Text
        let uutiset1 = array[0].teletext.page.subpage[0].content[0].line
        console.log(data)
        console.log(uutiset1)
        console.log("Uutiset[5]: " + uutiset1[5].Text)

        
        let kaikkiUutiset = []

        // var page = JSON.parse(jason);
        console.log("Uutis format testi: ")
        for(let i = 0; i <= 20; i++){
            console.log(jason.teletext.page.subpage[0].content[0].line[i].Text);
        }
        console.log("Uutis format testi: ")
        console.log(kaikkiUutiset)
    }


    useEffect(() => {
        getUutiset();
        console.log(uuti);
        console.log("Tokeni", user.con_token)
    }, []);

    return (
        <div>

            <div className="bookmarks-container">
                <h1>bookmarks</h1>
            </div>
            <div>
                <h1>Uutiset</h1>
                
            </div>

        </div>
    );
}

export default Testi;
