import { FaTimes, FaTools } from 'react-icons/fa'
import EditDog from './EditDog'

const  Dog = ({ dog, onDelete, onEdit, onToggle }) => {

    const callsign = `${dog.nickname}`;

    return (
        <div 
            className={`dog ${dog.present ? 'present' : 'notpresent'}`}
            onDoubleClick={() => onToggle(dog.id)}>
            <h3>
            @{callsign}
            <div>
            <FaTools 
            style={{ 
                color: 'green',
                cursor: 'pointer',
            }} 
            onClick={() => onEdit(dog.id)}

            />
            <FaTimes 
            style={{ 
                color: 'red',
                cursor: 'pointer',
            }} 
            onClick={() => onDelete(dog.id)}
            
            />
            <EditDog dog={dog} onEdit={onEdit}

            />
            </div>
            </h3>
        </div>
    )
}

export default Dog