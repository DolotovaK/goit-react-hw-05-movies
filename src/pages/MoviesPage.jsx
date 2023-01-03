import { Movies } from "components/Movies/Movies";
import { SearchBox } from "components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSeachMovies } from "services/fetchMovies";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('name') ?? '';

    function onQueryString(name){
        const nextParams = name !== '' ? { name } : {};
        setSearchParams(nextParams);
    }

    useEffect(() => {
        if (movieName === '') {
            return;
        }

        getSeachMovies(movieName).then(({ results }) => setMovies(results)).catch(error => setError(error));
    }, [movieName]);

    return (
        <main>
            {error && <p>{error.message}! Please reload the page.</p>}
            {!error && (
                <>
                    <SearchBox value={movieName} onChange={onQueryString} />
                    {movieName !== '' && movies.length === 0 && <p>There are no films with this name</p>}
                    <Movies movies={movies} />
                </>
            )}
        </main>
    );
};