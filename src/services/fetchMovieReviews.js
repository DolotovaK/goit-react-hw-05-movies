const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '958b0b84a8c5fc6fca7bdd68332f6832';

export function fetchMovieReviews(id) {
  return fetch(`${BASE_URL}${id}/reviews?page=1&&api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error('Fail');
      }

      return response.json();
    }
  );
}
