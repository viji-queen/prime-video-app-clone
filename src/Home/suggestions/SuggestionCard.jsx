import React, { useState } from "react";

function SuggestionCard({ img, size, title }) {
  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterUrl = `${baseUrl}${size}${img}`;

  return (
    <div
      className="card bg-transparent w-100 h-100"
      style={{ border: "none", padding: "0 20px" }}
    >
      <img src={posterUrl} alt="" srcset="" />
      <p>{title}</p>
    </div>
  );
}

export default SuggestionCard;
