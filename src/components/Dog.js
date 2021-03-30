import { FaTimes, FaTools } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { DogContext } from './DogContext';

const Dog = (props) => {

    return (
        <div>
            {props.id} {props.name} {props.nickname}
        </div>

    );
};

export default Dog