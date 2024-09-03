import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function MainMovieCard({img, title, plot,size}) {
    const baseUrl = 'https://image.tmdb.org/t/p/';
  // const size = 'w500'; // You can change this to 'w200', 'original', etc.
  const posterUrl = `${baseUrl}${size}${img}`;
  const containerStyle = {
    backgroundImage: `url(${posterUrl})`,
    backgroundSize: '80%',
    backgroundPosition: 'center',
    position: 'relative',
    width: '100%',
    height: '500px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    height: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with transparency
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    fontWeight:'bold',
  };
  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>

       <h1>{title}</h1>
     <div className="action">
        <button>Watch Now</button>
        <button>Watch List +</button>
        <button>Details!</button>
     </div>

      </div>
    </div>
  )
}

export default MainMovieCard