import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieInterface } from "../interfaces";
const baseURL = "http://localhost:8080";

interface PersonState {
  movie: MovieInterface;
  loading: boolean;
}

const initialState: PersonState = {
  movie: {},
  loading: false,
};

export interface Params {
  title: string;
  type: string;
}

export const fetchMovie = createAsyncThunk(
  "person/fetch",
  async (params: Params) => {
    const response = await fetch(`${baseURL}/${params.title}/${params.type}`, {
      method: "GET",
    });
    const data = response.json();
    return data;
  }
);

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMovie.pending, (state) => {
      setTimeout(() => {}, 1500);
      state.loading = true;
    });
  },
});

export default MovieSlice.reducer;
