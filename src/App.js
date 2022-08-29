import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=82050cd0'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies('')
  }, [])
  return (
    <>
      <div className="app">
        <h1>Moviepedia</h1>
        <p>A Databases for Movie Data</p>

        <div className='search'>
          <input type="text" placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
        </div>

        {movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )}
      </div>

      <footer>
        <p>© 2022 Copyright: <a href="https://github.com/FrinsenFarrelino/movie_data_app"><b>Agustinus Frinsen Farrelino Yoses</b></a></p>
      </footer>
    </>
  );
}

export default App;
