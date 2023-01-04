const API_KEY = '958b0b84a8c5fc6fca7bdd68332f6832';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}trending/movie/day?page=1&api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
}

export async function getSeachMovies(query) {
  const response = await fetch(
    `${BASE_URL}search/movie?query=${query}&page=1&&api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
}

export async function getMovieDetails(id) {
  const response = await fetch(`${BASE_URL}movie/${id}?&api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Fail');
  }
  return await response.json();
}

// export async function getMovieActors(id) {
//   const response = await fetch(
//     `${BASE_URL}${id}/movie/credits?&api_key=${API_KEY}`
//   );
//   if (!response.ok) {
//     throw new Error('Fail');
//   }
//   return await response.json();
// }

// export async function getMovieReviews(id) {
//   const response = await fetch(
//     `${BASE_URL}${id}/movie/reviews?page=1&&api_key=${API_KEY}`
//   );
//   if (!response.ok) {
//     throw new Error('Fail');
//   }
//   return await response.json();
// }
