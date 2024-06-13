import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    number: 0,
    isLoading: false,
    Watched: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
    setWatched: (state, action) => {
      state.Watched = [...state.Watched, action.payload];
    },
    removeWatched: (state, action) => {
      state.Watched = state.Watched.filter((movie) => movie !== action.payload);
    },
  },
});

export const { setMovies, setNumber, setIsloading, setWatched, removeWatched } =
  movieSlice.actions;

export default movieSlice.reducer;
