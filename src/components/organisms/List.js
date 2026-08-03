import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch.js'
import Character from '../molecules/Character.js'

function List() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const { data, error, isError } = useFetch('https://rickandmortyapi.com/api/character');

    useEffect(() => {
        if (!isError &&data?.results) {
            setCharacters(data.results);
            setLoading(false);
            console.log('Results: ', data.results);
        }
    }, [data]);

    return (
        <div>
            <h2>Characters</h2>
            {loading ? (<div>Loading...</div>) : (
                characters.map((character) => (
                    <Character 
                        key={character.id}
                        name={character.name}
                        origin={character.origin.name}
                        image={character.image} />
                ))
            )}
        </div>
    )
}

export default List