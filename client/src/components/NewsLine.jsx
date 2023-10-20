import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/NewsLine.css';

function NewsLine() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/fetchNews'); // Replace with the correct API endpoint
            if (
                response.data.teletext &&
                response.data.teletext.page.subpage[0].content[0].line
            ) {
                console.log("DATA FETCHING STARTS");
                const lines = response.data.teletext.page.subpage[0].content[0].line;
                // Extract the text from each line object and create a new array
                const textLines = lines.map((line) => line.Text);
                const filteredTextLines = textLines.filter((line) => line != null);
                const newTextLines = filteredTextLines.filter((line, index) => index > 2);
                const trimmedTextLines = newTextLines.slice(0, newTextLines.length - 5);
                setData(trimmedTextLines);
            } else {
                console.log("Network property not found in the JSON data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div className="newsline">
            {data.map((line, index) => (

                    <p key={index}>{line}</p>
                )
            )}
        </div>

    );
}

export default NewsLine;
