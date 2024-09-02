import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import MainMovieCard from "./MainMovieCard";
import Carousel from 'react-bootstrap/Carousel';
const GET_DATA = gql`
  query GetData {
    yourQueryField {
      id
      name
    }
  }
`;
function Main() {
  const baseUrl = "https://api.themoviedb.org/3/movie/top_rated";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}?api_key=${API_KEY}`);
      const moviesJson = await response.json();
      setMovies(moviesJson.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
   <>
      <Carousel>
      {movies.map((movie) => (
       <Carousel.Item interval={1500}>
         <MainMovieCard
          title={movie.title}
          plot={movie.overview}
          img={movie.backdrop_path}
        />
       </Carousel.Item >
      ))}
      </Carousel>
</>
  );
}

export default Main;
