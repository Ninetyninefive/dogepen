import  {useState } from 'react'

const EditDog = ({ dog, onEdit }) => { 
    

    const [name, setName] = useState(dog.name)
    const [nickname, setNickname] = useState(dog.nickname)
    const [age, setAge] = useState(dog.age)
    const [bio, setBio] = useState(dog.bio)
    const [present, setPresent] = useState(dog.present)
    
    const onSubmitEdit = (e) => {
        e.preventDefault()

        if(!name){
            alert('A doge with no name? Please give us name')
            return
        }

        onEdit({ name, nickname, age, bio, present})
    }

    return (
        <form className='edit-form' onSubmit={onSubmitEdit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder='Edit name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Nickname</label>
                <input type='text' placeholder='Edit nickname'
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Age</label>
                <input type='text' placeholder='Edit Age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Bio</label>
                <input type='text' placeholder='Edit bio'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Presence</label>
                <input type='checkbox'
                    checked={present}
                    value={present}
                    onChange={(e) => setPresent(e.currentTarget.checked)}/>
            </div>
            <input className='btn btn-block' type='submit' value='Save Changes' />
        </form>
    )
}

export default EditDog