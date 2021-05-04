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
  const [searchValue, setSearchValue] = useState('');
  const [nominated, setNominated] = useState([]);

  const getMovie = async () =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=aa19abbe`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search){
      setMovies(responseJson.Search);
    };
  };

  
  const addNominated = movie =>{
    if (nominated.includes(movie)){
      alert("Movie has already been nominated. Please select another movie.")
    }
    else{
      const newNominatedList = [...nominated, movie];
      setNominated(newNominatedList)
    }
  }

  const removeNominated = movie => {
    const newNominatedList = nominated.filter(
      (nominate) => nominate.imdbID !== movie.imdbID
    )

    setNominated(newNominatedList)
  }

  useEffect(()=>{
    getMovie(searchValue)
  },[searchValue]);
	
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
        <MovieList movies = {nominated} handleNominateClick = {removeNominated}  nominateComponent = {Undo}/>
      </div>
		</div>
	);
};

export default App;