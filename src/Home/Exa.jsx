import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MovieCarousel() {
  return (
    <Carousel
      showThumbs={false}      // Hide thumbnails
      showStatus={false}      // Hide status indicator
      infiniteLoop={true}     // Enable infinite loop
      autoPlay={true}         // Enable auto play
      interval={3000}         // Set auto play interval to 3 seconds
      transitionTime={1000}   // Transition duration of 1 second
    >
      <div>
        <img src="https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg" alt="Movie 1" />
        <p className="legend">Movie 1</p>
      </div>
      <div>
        <img src="https://image.tmdb.org/t/p/w500/another_image_path.jpg" alt="Movie 2" />
        <p className="legend">Movie 2</p>
      </div>
      <div>
        <img src="https://image.tmdb.org/t/p/w500/another_image_path.jpg" alt="Movie 3" />
        <p className="legend">Movie 3</p>
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
}

export default MovieCarousel;
