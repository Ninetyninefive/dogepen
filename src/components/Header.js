import PropTypes from 'prop-types'
import { useLocation, Link } from 'react-router-dom'
import Button from './Button'

const Header = ({ title }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Link to='/AddDog'>
                <Button text={'Add dog'} />
            </Link>
        </header>
    )
}

Header.defaultProps = {
    title: 'The Doge Pen',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header