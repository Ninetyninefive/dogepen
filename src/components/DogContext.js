import React, { useState, createContext } from 'react';


export const DogContext = React.createContext();

export const DogProvider = props => {
    const [dogs, setDogs] = useState([
        {
            "name": "Murkel",
            "nickname": "Jansson",
            "age": "14",
            "bio": "Gillar inte katter",
            "present": true,
            "friends": [],
            "id": 1
        },
        {
            "name": "Hakkepellitta",
            "nickname": "Musmurklarn",
            "age": "55",
            "bio": "Tycker inte om tyska apor",
            "present": true,
            "friends": [],
            "id": 2
        },
        {
            "name": "Herkelurnarn",
            "nickname": "Herkules",
            "age": "55",
            "bio": "Vem vet vart ifrån han kommer.... ?",
            "present": true,
            "friends": [],
            "id": 3
        }
    ]);
    return (
        <DogContext.Provider value={[dogs, setDogs]}>
            {props.children}
        </DogContext.Provider>
    );
}