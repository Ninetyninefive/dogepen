import Dog from './Dog'

const Dogs = ({ dogs, onDelete, onEdit, onToggle }) => {
    
    return (
        <>
        {dogs.map((dog) => (
            <Dog key={dog.id} 
            dog={dog}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}

            />
            ))}
        </>
    )
}

export default Dogs