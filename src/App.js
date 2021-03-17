import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Dogs from './components/Dogs'
import AddDog from './components/AddDog'
import EditDog from './components/EditDog'
import Profile from './components/Profile'

function App() {
  const [showAddDog, setShowAddDog] = useState(false)
  const [showEditDog, setShowEditDog] = useState(false)
  const [dogs, setDogs] = useState([

  ])

  useEffect(()=> {
    const getDogs = async () => {
      const dogsFromServer = await fetchDogs()
      setDogs(dogsFromServer)
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


  // Add Dog
  const addDog = async (dog) => {
    const res = await fetch('http://localhost:5000/dogs', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dog)
    })

    const data = await res.json()

    setDogs([...dogs, data])

    //const id = Math.floor(Math.random() * 10000) +1

    //const newDog = { id, ...dog}
    //setDogs([...dogs, newDog])
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
    const updDog = {...dogToEdit, 
      present: dogToEdit.present, 
      name: dogToEdit.name, 
      nickname: dogToEdit.nickname,
      age: dogToEdit.age,
      bio: dogToEdit.bio,

    }

    const res = await fetch(`http://localhost:5000/dogs/${id}`, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updDog)
    })

    const data = await res.json()

    setDogs(
      dogs.map((dog) => 
        dog.id === id ? {...dog, 
          present: data.present,
          name: data.name, 
          nickname: data.nickname,
          age: data.age,
          bio: data.bio,
        } : dog
    )
  )
  }

  // Toggle Presence
  const togglePresence = async (id) => {
    const dogToToggle = await fetchDog(id)
    const updDog = {...dogToToggle, present: !dogToToggle.present }
    const res = await fetch(`http://localhost:5000/dogs/${id}`, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updDog)
    })

    const data = await res.json()

    setDogs(
      dogs.map((dog) => 
        dog.id === id ? {...dog, present:
        data.present} : dog
    )
  )
  }

  return (
    <Router>
    <div className="container">
      <Header 
        onAdd={()=> setShowAddDog(!showAddDog)} 
        showAdd={showAddDog}
        

        />
      
        <Route path='/' exact render={(prop) =>(
          <>
          {showAddDog && <AddDog onAdd={addDog}/>}
          {dogs.length > 0 ? (
          <Dogs 
            dogs={dogs} 
            onDelete={deleteDog}
            onToggle={togglePresence}
            onEdit={editDog}

      />) : (
        'No doges! Add more doges!'
        )}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
