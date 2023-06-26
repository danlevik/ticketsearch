import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({ query: () => "movies" }),
    getCinemas: builder.query({ query: () => "cinemas" }),

    getCinemaMovies: builder.query({
      query: (cinemaId) => `movies?cinemaId=${cinemaId}`,
    }),
    getMovie: builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
    getMovieComments: builder.query({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetCinemasQuery,
  useGetMovieQuery,
  useGetCinemaMoviesQuery,
  useGetMovieCommentsQuery,
} = movieApi;
