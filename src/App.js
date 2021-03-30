import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { DogProvider } from './components/DogContext'


import Header from './components/Header'
import About from './view/About'
import Footer from './components/Footer'
import Dogs from './components/Dogs'
import AddDog from './components/AddDog'
import Profile from './components/Profile'
import EditDog from './components/EditDog';

function App() {
  const [showAddDog, setShowAddDog] = useState(false)
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const getDogs = async () => {
      let dogs = localStorage.getItem("dogs");
      dogs = (dogs) ? JSON.parse(dogs) : [];
      setDogs(dogs)
    }

    getDogs()
  }, [])

  const fetchDog = async (id) => {
    const res = await fetch(`http://localhost:5000/dogs/${id}`)
    const data = await res.json()
    return data
  }

  // Fetch Dogs
  const fetchDogs = async () => {
    const res = await fetch('http://localhost:5000/dogs')
    const data = await res.json()
    return data
  }


  localStorage.setItem("dogs", JSON.stringify(dogs));

  // Add Dog
  const addDog = async (dog) => {
    dogs.push(dog);

    const data = await localStorage.setItem("dogs", JSON.stringify(dogs));

    setDogs([...dogs, data])
  }

  // Delete Dog
  const deleteDog = async (id) => {
    await fetch(`http://localhost:5000/dogs/${id}`, {
      method: 'DELETE'

    })

    setDogs(dogs.filter((dog) => dog.id !== id))
  }


  const editDog = async (id) => {

    console.log('click', id)

    const dogToEdit = await fetchDog(id)
    const updDog = {
      ...dogToEdit,
      present: dogToEdit.present,
      name: dogToEdit.name,
      nickname: dogToEdit.nickname,
      age: dogToEdit.age,
      bio: dogToEdit.bio,

    }

    const res = await fetch(`http://localhost:5000/dogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updDog)
    })

    const data = await res.json()

    setDogs(
      dogs.map((dog) =>
        dog.id === id ? {
          ...dog,
          present: data.present,
          name: data.name,
          nickname: data.nickname,
          age: data.age,
          bio: data.bio,
        } : dog
      )
    )
  }

  const viewProfile = async (id) => {
    const result = fetchDog(id);
    return result
  }
  // Toggle Presence
  const togglePresence = async (id) => {
    const dogToToggle = await fetchDog(id)
    const updDog = { ...dogToToggle, present: !dogToToggle.present }
    const res = await fetch(`http://localhost:5000/dogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updDog)
    })

    const data = await res.json()

    setDogs(
      dogs.map((dog) =>
        dog.id === id ? {
          ...dog, present:
            data.present
        } : dog
      )
    )
  }

  return (
    <DogProvider>
      <div className="container">
        <Header />

        <Route path='/' exact render={(prop) => (
          <Dogs />
        )} />


        <Route
          path='/about'
          component={About}

        />
        <Route
          path='/profile'
          component={Profile}

        />
        <Route
          path='/AddDog'
          component={AddDog}

        />
        <Route
          path='/edit'
          component={EditDog}

        />
        <Footer />
      </div>
    </DogProvider>
  );
}

export default App;
