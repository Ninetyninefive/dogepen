import React from 'react';


// NOT IN USE
const LocalStorage = () => {

    let dogs = localStorage.getItem("dogs");
    dogs = (dogs) ? JSON.parse(dogs) : [];
    
    const newdog = {
    name: name,
    nickname: nickname,
    age: age,
    bio: bio,
    friends: [ friend ],
    present: present,
    }
    
    console.log(`
    Name: ${name}
    Nickname: ${nickname}
    Age: ${age}
    Bio: ${bio}
    Friends: ${friends}
    present: ${present}
    `);

    
    console.log(localStorage.getItem(dogs));
    dogs.push(newdog);
    localStorage.setItem("dogs", JSON.stringify(dogs));

}

const Dog = {
    name: '',
    nick: '',
    age: 0,
    bio: '',
    friends: []
  };
   
   //convert JSON animal into a string
   var dehydratedDog = JSON.stringify(Dog);
   
   //save it with local storage
   window.localStorage.setItem('Dog', Dog);
   
   //get 'animal' and rehydrate it  (convert it back JSON)
   var rehydratedDog = JSON.parse(window.localStorage.getItem('Dog'));