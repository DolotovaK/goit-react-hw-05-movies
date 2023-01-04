import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayaut";
import Home from "pages/Home";
import MoviesPage from "pages/MoviesPage";
import MovieDetails from "pages/MovieDetails";
import Actors from "./Actors/Actors";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />  
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetails />} >
          <Route path="cast" element={<Actors />} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Route>
      <Route path="*" element={<Home />}/>
      
    </Routes>
  );
};



