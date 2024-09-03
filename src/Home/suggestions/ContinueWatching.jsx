import React, { useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import useFetch from "../../custom/useFetch";
import CustomSlider from "../../custom/CustomSlider";

function ContinueWatching() {
  const baseUrl = "https://api.themoviedb.org/3/movie/upcoming";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const movies = useFetch(`${baseUrl}?api_key=${API_KEY}`);

  return (
    <>
      <div className="heading">
        <h4>Recommended movies</h4>
      </div>

      <div>
        <CustomSlider>
          {movies.map((movie) => (
            <div className="card-wrapper" key={movie.id}>
              <SuggestionCard
                title={movie.title}
                img={movie.backdrop_path}
                size={"w500"}
              />
            </div>
          ))}
        </CustomSlider>
      </div>
    </>
  );
}

export default ContinueWatching;
