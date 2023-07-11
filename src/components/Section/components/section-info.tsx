import { MovieInterface } from "../../../interfaces";

export const SectionInfo = (movie: MovieInterface) => {
  return (
    <>
      <div className='poster-img'> <img src={movie.Poster} /> </div>
      <div className='movie-infos'>
        <h1 style={{ textAlign: "left" }}> {movie.Title} </h1>
        <p className='movie-description'> {movie.Plot} </p>
        <p className='movie-actor'> <span className='movie-item'> Atores </span> {movie.Actors} </p>
        <p className='movie-actor'> <span className='movie-item'> IMDb Rating </span> {movie.imdbRating} </p>
      </div>
    </>
  );
}
