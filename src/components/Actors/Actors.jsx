import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieActors } from "services/FetchMovieActors";
// import { getMovieActors } from "services/fetchMovies";

export default function Actors() {
    const { id } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     getMovieActors(id).then(({ cast }) => setCast(cast)).catch(error => setError(error));
    // }, [id])

    useEffect(() => {
        fetchMovieActors(id).then(({ cast }) => setCast(cast)).catch(error => setError(error));
    }, [id])

    const poster = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            {error && <p>{error.message}. Please reload the page</p>}
            <ul
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '0',
                    justifyContent: 'center',
                    gap: '10px',
                }}
            >
                {cast.map(({ id, name, profile_path }) => (
                    <li key={id}>
                        <img
                            src={profile_path !== null ? poster + profile_path : 'https://via.placeholder.com/300x450'}
                            alt="name"
                            width="300"
                            loading='lazy'
                        />
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};