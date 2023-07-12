import { Link } from "@ui5/webcomponents-react";
import { MovieInterface } from "../../../interfaces";

export const SectionInfo = (movie: MovieInterface) => {
  return (
    <>
      <div className="poster-img">
        <img alt="movie poster" src={movie.Poster} />
      </div>
      <div className="movie-infos">
        <h1 style={{ textAlign: "left" }}> {movie.Title} </h1>
        <p className="movie-description"> {movie.Plot} </p>
        <p className="movie-actor">
          <span className="movie-item"> Atores </span> {movie.Actors}
        </p>
        <p className="movie-actor">
          <span className="movie-item"> IMDb Rating </span> {movie.imdbRating}
        </p>
        <p className="movie-actor">
          <Link href={`https://www.imdb.com/title/${movie.imdbID}`}>
            <span className="movie-item">IMDb movie page</span>
          </Link>
        </p>
      </div>
    </>
  );
};
