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
        }
    }, [data]);

    return (
        <div>
            <h2 className="mb-4">Characters</h2>
            {loading ? (<div className="text-center">Loading...</div>) : (
                <div className="row g-4">
                    {characters.map((character) => (
                        <div key={character.id} className="col-md-4 col-lg-3">
                            <Character
                                name={character.name}
                                origin={character.origin.name}
                                image={character.image} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default List