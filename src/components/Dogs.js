import Dog from './Dog'

const Dogs = ({ dogs, onDelete, onToggle }) => {
    
    return (
        <>
        {dogs.map((dog) => (
            <Dog key={dog.id} 
            dog={dog}
            onDelete={onDelete}
            onToggle={onToggle}

            />
            ))}
        </>
    )
}

export default Dogs