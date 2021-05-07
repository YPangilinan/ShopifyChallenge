import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './Moviepage.css';
import MovieList from './MovieLIst'
import Search from './Search'
import Nominate from './Nominate'
import Navbar from './Navbar'
import { COMPLETIONSTATEMENT_TYPES, exportDefaultSpecifier } from '@babel/types';


const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const [nominated, setNominated] = useState([]);
    const [searchValue, setSearchValue] = useState('');

  const getMovie = async () =>{
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=aa19abbe`;
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

  const BreadcrumbPage = () => {
    return (
        <MDBBreadcrumb style = {{background: 'transparent'}}>
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Movies</MDBBreadcrumbItem>
          <MDBBreadcrumbItem >Nominated</MDBBreadcrumbItem>
        </MDBBreadcrumb>
    );
  };

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

  const nomCheck = (movie) => {
    const nominatedMovies = localStorage.getItem('nominated-movies');
    if(!nominatedMovies){
      const newNominatedList = [...nominated, movie];
      setNominated(newNominatedList)
      saveToLocalStorage(newNominatedList)
      addedNom()
    }
      else if(nominated.length === 4 ||nominatedMovies.length === 4 ){
          fiveNom()
      } else if (nominated.includes(movie) || nominatedMovies.includes(movie.imdbID)){
        alreadyNom()
      } else{
        const newNominatedList = [...nominated, movie];
        setNominated(newNominatedList)
        saveToLocalStorage(newNominatedList)
        addedNom()
      }
  }

  const saveToLocalStorage = items => {
      localStorage.setItem('nominated-movies', JSON.stringify(items))
  }
  
  const addNominated = movie =>{
    nomCheck(movie)
  }

	return (
        <>
        <Navbar />
		<div className='container-fluid movie-app mx-3'>
        <ToastContainer />
        {BreadcrumbPage()}
      <div className = 'row d-flex align-items-center mb-3 ml-2'>
                  <h2 className='text-uppercase ml-3 mt-3  white-text' style = {{letterSpacing: '2.5px'}}>
                    <strong>Search</strong>
                  </h2><Search searchValue = {searchValue} setSearchValue = {setSearchValue} />
   
        </div>
			<div className='row'>
                
        <MovieList movies={movies} 
                nominateComponent = {Nominate} 
                nominatedMovies = {localStorage.getItem('nominated-movies')}
                handleNominateClick = {addNominated} />
			</div>
		</div>
        </>
	);
};

export default MoviePage;