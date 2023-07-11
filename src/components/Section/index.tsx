import axios from "axios";
import { SetStateAction, useState } from "react";
import { MovieInterface } from "../../interfaces";
import { SectionInfo } from "./components/section-info";
import { NotFound } from "./components/not-found";
import { Instruction } from "./components/instruction";
import { Loading } from "./components/loading";
import { SearchBar } from "./components/search-bar";

const baseURL = "http://localhost:8080"

export const Section = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('movie');
  const [movie, setMovie] = useState<MovieInterface>({});
  const [loading, setLoading] = useState(false);

  const getMovie = () => {
    setLoading(true);
    axios.get(`${baseURL}/${title}/${type}`).then((resp: { data: SetStateAction<MovieInterface>; }) => {
      setMovie(resp.data);
      console.log(resp.data);
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    });
  }

  return (
    <section className='section-film'>
      <div className="section-title">
        <h1> NTTFlix </h1>
        <h2> O melhor site para encontrar o seu filme</h2>
      </div>

      <SearchBar setTitle={setTitle} setType={setType} title={title} type={type} getMovie={getMovie} />

      {loading ?
        <Loading />
        : (Object.keys(movie).length !== 0 ?
          <div className='movie-details'>
            { movie.Response === "False" ? <NotFound title={title} type={type} /> : <SectionInfo {...movie}/> }
          </div>
        : <Instruction />)
      }
    </section>
  );
} 
