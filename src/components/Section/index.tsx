import { useState } from "react";
import {
  Instruction,
  Loading,
  NotFound,
  SearchBar,
  SectionInfo,
} from "./components";
import { useAppSelector, useAppDispatch } from "../../store";
import { fetchMovie } from "../../features/apiSlice";

export const Section = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("movie");

  const { movie: testMovie, loading: testLoading } = useAppSelector(
    (state) => state.movie
  );
  const dispatch = useAppDispatch();

  const fetchTest = () => {
    dispatch(fetchMovie({ title, type }));
    console.log(testMovie);
  };

  return (
    <section className="section-film">
      <div className="section-title">
        <h1> NTTFlix </h1>
        <h2> O melhor site para encontrar o seu filme</h2>
      </div>

      <SearchBar
        setTitle={setTitle}
        setType={setType}
        title={title}
        getMovie={fetchTest}
      />

      {testLoading ? (
        <Loading />
      ) : Object.keys(testMovie).length !== 0 ? (
        <div className="movie-details">
          {testMovie.Response === "False" ? (
            <NotFound title={title} type={type} />
          ) : (
            <SectionInfo {...testMovie} />
          )}
        </div>
      ) : (
        <Instruction />
      )}
    </section>
  );
};
