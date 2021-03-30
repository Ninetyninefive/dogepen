import { render } from '@testing-library/react';
import { FaTimes, FaTools } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import EditDog from './EditDog'

const Profile = ({ dog, onProfile }) => {

    const callsign = `${dog.nickname}`;

    return (
        <div 
            className={`dog ${dog.present ? 'present' : 'notpresent'}`}
            onDoubleClick={() => onProfile(dog.id)}
            >{callsign}
        </div>
    )
}
export default Profile