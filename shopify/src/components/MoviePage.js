import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
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

  const addedNom = () => {
      toast.success("This movie has been nominated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  }

  const alreadyNom = () => {
    toast.error('This movie is already in your nominations!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  }

  const fiveNom = () => {
    toast.warn('You have 5 nominations', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  }

  const numberCheck = () => {
    const nominatedMovies = localStorage.getItem('nominated-movies');
      if(nominated.length === 4 ||nominatedMovies.length === 4 ){
          fiveNom()
          return false
      } else{
         return true
      }
  }

  const saveToLocalStorage = items => {
      localStorage.setItem('nominated-movies', JSON.stringify(items))
  }
  
  const addNominated = movie =>{
    const nominatedMovies = localStorage.getItem('nominated-movies');

    numberCheck()
    if (nominated.includes(movie) || nominatedMovies.includes(movie.imdbID)){
      alreadyNom()
    }
    else{
      const newNominatedList = [...nominated, movie];
      setNominated(newNominatedList)
      saveToLocalStorage(newNominatedList)
      addedNom()
    }
  }

	
	return (
        <>
        <Navbar />
		<div className='container-fluid movie-app'>
        <ToastContainer />
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