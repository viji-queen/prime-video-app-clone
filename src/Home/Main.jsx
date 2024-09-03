import React, { useEffect, useState } from "react";
import MainMovieCard from "./MainMovieCard";
import Carousel from 'react-bootstrap/Carousel';
import useFetch from "../custom/useFetch";

function Main() {
  const baseUrl = "https://api.themoviedb.org/3/movie/top_rated";
  const API_KEY = process.env.REACT_APP_API_KEY;

const movies = useFetch(`${baseUrl}?api_key=${API_KEY}`)


  return (
   <>
      <Carousel>
      {movies.map((movie) => (
       <Carousel.Item interval={1500} key={movie.id}>
         <MainMovieCard
          title={movie.title}
          plot={movie.overview}
          img={movie.backdrop_path}
          size={'w500'}
        />
       </Carousel.Item >
      ))}
      </Carousel>
      {/* {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })} */}
</>
  );
}

export default Main;
