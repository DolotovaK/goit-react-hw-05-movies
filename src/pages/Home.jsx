import { Movies } from "components/Movies/Movies";
import { useEffect } from "react";
import { useState } from "react";
import { getTrendingMovies } from "services/fetchMovies";

export default function Home(){
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTrendingMovies().then(({results})=> setMovies(results)).catch(error=>setError(error))
    }, [])

    return (
        <main>
            {error && <p>{error.message}! Please reload the page.</p>}
            {!error && (
                <>
                    <h1>Trending Today</h1>
                    <Movies movies={movies} />
                </>
            )}
        </main>
    );
};