import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MovieList from './MovieLIst'
import Heading from './Heading'
import Search from './Search'
import Nominate from './Nominate'
import Navbar from './Navbar'

const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const [nominated, setNominated] = useState([]);
    const [searchValue, setSearchValue] = useState('');

  const getMovie = async () =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=aa19abbe`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search){
      setMovies(responseJson.Search);
    };
  };

  useEffect(()=>{
    getMovie(searchValue)
  },[searchValue]);

  useEffect(()=>{
      checkNominated();
  }, [])

  const checkNominated = () =>{
    const nominatedMovies = JSON.parse(localStorage.getItem('nominated-movies'));

    if(!nominatedMovies){
        console.log('nothing is nominated')
    }
    else{
        setNominated(nominatedMovies);
    }
  }

  const saveToLocalStorage = items => {
      localStorage.setItem('nominated-movies', JSON.stringify(items))
  }
  
  const addNominated = movie =>{
    const nominatedMovies = localStorage.getItem('nominated-movies');

    if (nominated.includes(movie) || nominatedMovies.includes(movie.imdbID)){
      alert("Movie has already been nominated. Please select another movie.")
    }
    else{
      const newNominatedList = [...nominated, movie];
      setNominated(newNominatedList)
      saveToLocalStorage(newNominatedList)
    }
  }

  const removeNominated = movie => {
    const newNominatedList = nominated.filter(
      (nominate) => nominate.imdbID !== movie.imdbID
    )

    setNominated(newNominatedList)
    saveToLocalStorage(newNominatedList)
  }

	
	return (
        <>
        <Navbar />
		<div className='container-fluid movie-app'>
      <div className = 'row d-flex align-items-center mt-4 mb-4'>
        <Heading heading = 'Movies'/>
        <Search searchValue = {searchValue} setSearchValue = {setSearchValue} />
      </div>
			<div className='row'>
        <MovieList movies={movies} nominateComponent = {Nominate} handleNominateClick = {addNominated} />
			</div>
		</div>
        </>
	);
};

export default MoviePage;