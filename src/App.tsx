import { useEffect, useState } from 'react';
import './App.scss';
import findIcon from './static/findIcon.svg';
import Header from './components/Header';
import axios from 'axios';

const baseURL = "http://localhost:8080"

interface MovieInterface {
  Title?: string,
  Plot?: string,
  Actors?: string,
  imdbRating?: string,
  Poster?: string,
  Writer?: string
}

function App() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('movie');
  const [movie, setMovie] = useState<MovieInterface>({});
  const [loading, setLoading] = useState(false);

  const getMovie = () => {
    setLoading(true);
    axios.get(`${baseURL}/${title}/${type}`).then((resp) => {
      setMovie(resp.data);
      console.log(resp.data);
      setLoading(false)
    });
  }

  return (
    <div className="App">
      <Header />
      <section className='section-film'>
        <h1> NTTFlix </h1>
        <h2> O melhor site para achar o seu filme</h2>
        
        <div className='search-bar'>
          <select name="select" value={type} defaultValue={"movie"} onChange={(e) => setType(e.target.value)}>
            <option value="movie">Filme</option>
            <option value="series">Série</option>
          </select>
          <input onSubmit={() => {getMovie()}} type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Procure por filmes ou séries'/>
          <img className="search-icon" onClick={() => {if(title.length) getMovie()}} src={findIcon} width={17} height={17}/>
        </div>

        {loading ? 
          <div className="lds-ring">
            <div></div><div></div><div></div><div></div>
          </div>
          : (Object.keys(movie).length !== 0 ? 
              <div className='movie-details'>
                <div className='movie-infos'>
                  <h1 style={{textAlign: "left"}}> {movie.Title} </h1>
                  <p className='movie-description'> {movie.Plot} </p>
                  <p className='movie-actor'> <span className='movie-item'> Atores </span> {movie.Actors} </p>
                  <p className='movie-actor'> <span className='movie-item'> IMDb Rating </span> {movie.imdbRating} </p>
                </div>
                <div className='poster-img'> <img src={movie.Poster} /></div>
              </div>
          : <div className='movie-details'>
              <div style={{margin: "auto"}}>
                <h2> Insira o nome do título desejado na barra de procura </h2>
              </div>
            </div>)
        }
      </section>
    </div>
  );
}

export default App;
