import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieLIst'
import Heading from './components/Heading'
import Search from './components/Search'
import Nominate from './components/Nominate'
import Undo from './components/Undo'

const App = () => {
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

  useEffect(()=> {
    const nominatedMovies = JSON.parse(localStorage.getItem('nominatedMovies'));

    setNominated(nominatedMovies)
  }, []);


  const saveToLocalStorage = items => {
    localStorage.setItem('nominatedMovies', JSON.stringify(items));
  }

  const addNominated = movie =>{
    const newNominatedList = [...nominated, movie];
    setNominated(newNominatedList);
    saveToLocalStorage(newNominatedList);
  }

  const removeNominated = movie => {
    const newNominatedList = nominated.filter(
      (nominate) => nominate.i !== movie.i
    )

    setNominated(newNominatedList)
    saveToLocalStorage(newNominatedList);
  }

	
	return (
		<div className='container-fluid movie-app'>
      <div className = 'row d-flex align-items-center mt-4 mb-4'>
        <Heading heading = 'Movies'/>
        <Search searchValue = {searchValue} setSearchValue = {setSearchValue} />
      </div>
			<div className='row'>
        <MovieList movies={movies} nominateComponent = {Nominate} handleNominateClick = {addNominated} />
			</div>
      <div className = 'row d-flex align-items-center mt-4 mb-4'>
        <Heading heading = 'Nominated' />
      </div>
      <div className = 'row'>
        <MovieList movies = {nominated} nominateComponent = {Undo} handleNominateClick = {removeNominated} />
      </div>
		</div>
	);
};

export default App;