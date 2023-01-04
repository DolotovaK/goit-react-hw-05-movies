import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/fetchMovieReviews";
// import { getMovieReviews } from "services/fetchMovies";

export default function Reviews() {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     getMovieReviews(id).then(({ results }) => setReviews(results)).catch(error => setError(error));
    // }, [id]);

    useEffect(() => {
        fetchMovieReviews(id).then(({ results }) => setReviews(results)).catch(error => setError(error));
    }, [id]);

    return (
        <>
            {error && <p>{error.message}. Please reload the page</p>}
            {reviews.length > 0 ? <ul>
                {reviews.map(({ author, content, id }) => (
                    <li key={id} style={{ marginBottom: '20px' }}>
                        <p style={{ marginBottom: '10px' }}>
                            <b>Author:</b> {author}
                        </p>
                        <p>{content}</p>
                    </li>
                ))}
            </ul> : <p>We don't have any reviews for this movie</p>}
        </>
    );
};