import React, { useState, useContext } from 'react';
import Dog from './Dog'
import { DogContext } from './DogContext';

const Dogs = () => {

    const [dogs, setDogs] = useContext(DogContext)

    return (

        <div>
            {dogs.map(dog =>
                <Dog key={dog.id} name={dog.name} present={dog.present} />
            )
            }
        </div >
    );
};

export default Dogs