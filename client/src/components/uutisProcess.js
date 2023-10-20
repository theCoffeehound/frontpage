import React, {useContext, useState} from "react";
import jason from '../yleapitest.json';



function GetUutiset(){
    
    let uutisRivit = [];
    
    console.log("Uutis format testi: ")
    for (let i = 0; i <= 20; i++) {
        console.log(jason.teletext.page.subpage[0].content[0].line[i].Text);

        if(jason.teletext.page.subpage[0].content[0].line[i].Text != null){
            uutisRivit.push(jason.teletext.page.subpage[0].content[0].line[i].Text);
        }
        
        
    }
    console.log("Uutis format testi: loppuu")

    return uutisRivit;
};

export default GetUutiset;