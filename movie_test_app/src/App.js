import React, { useState } from 'react';

import './App.css';

import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card';
import Search from './Components/Search/Search';
import NoResult from './Components/NoResult/NoResult';

function App() {

  const [movieName, setMovieName] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [found, setFound] = useState("True");

  const getMovies = (movie) => {

    fetch(`http://www.omdbapi.com/?apikey=6af88c21&s=${movie}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "False")
          setFound(data.Response)
        else {
          setFound("True");
          setMovieList(data.Search);
        }
      })
      .catch(err => console.log(err.message));
  }

  const setMovie = (e) => {
    setMovieName(e.target.value);
  }

  const getMovieList = (e) => {
    if (e.key === 'Enter') {
      getMovies(movieName);
    }
  }

  return (
    <>
      <Header />
      <Hero />
      <Search value={movieName} onChange={setMovie} onKeyPress={getMovieList} />
      <div className='movie-container'>
        <div className='movie_list container'>
          {
            (found === "False") ? (<NoResult />) : movieList?.map((value, index) => (
              <Card prop={value} key={index} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;