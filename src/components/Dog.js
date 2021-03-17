import { FaTimes } from 'react-icons/fa'

const  Dog = ({ dog, onDelete, onToggle }) => {
    return (
        <div 
            className={`dog ${dog.present ? 'present' : 'notpresent'}`}
            onDoubleClick={() => onToggle(dog.id)}>
            <h3>
            {dog.nickname}
            <FaTimes 
            style={{ 
                color: 'red',
                cursor: 'pointer',
            }} 
            onClick={() => onDelete(dog.id)}

            />
            </h3>
        </div>
    )
}

export default Dog