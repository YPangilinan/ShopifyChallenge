import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MovieList from './MovieLIst'
import Heading from './Heading'
import Undo from './Undo'
import Navbar from './Navbar'

export default function NominatedPage() {
    const [nominated, setNominated] = useState([]);
    
    useEffect(()=> {
        checkNominated();
    },[])

    const checkNominated = () => {
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
      </div>
      <div className = 'row'>
      <MovieList movies = {nominated} handleNominateClick = {removeNominated}  nominateComponent = {Undo}/>
      </div>
		</div>
        </>
    )
}
