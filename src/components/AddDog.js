import  {useState } from 'react'

const AddDog = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [age, setAge] = useState('')
    const [bio, setBio] = useState('')
    const [present, setPresent] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('A doge with no name? Please give us name')
            return
        }

        onAdd({name, nickname, age, bio, present})

        setName('')
        setNickname('')
        setAge('')
        setBio('')
        setPresent(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder='Add name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Nickname</label>
                <input type='text' placeholder='Add nickname'
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Age</label>
                <input type='text' placeholder='Enter Age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Bio</label>
                <input type='text' placeholder='Add bio'
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
            <input className='btn btn-block' type='submit' value='Save Dog' />
        </form>
    )
}

export default AddDog