import React from "react";
import '../styles/Data.css';
import CookieFetcher from "../components/cookieFetch";

function Data() {

    CookieFetcher();



    return(
        <div className="data-body">
            <table>
                <thead>
                    <tr>
                        <th>Tietokone</th>
                        <th>OS</th>
                        <th>Päivämäärä</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Data;