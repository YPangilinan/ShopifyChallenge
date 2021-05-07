import React, {useState, useEffect} from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import '../App.css';
import MovieList from './MovieLIst'
import Undo from './Undo'
import Navbar from './Navbar'

export default function NominatedPage() {
    const [nominated, setNominated] = useState([]);
    
    useEffect(()=> {
        checkNominated();
    },[])

    const BreadcrumbPage = () => {
        return (
            <MDBBreadcrumb style = {{background: 'transparent'}}>
              <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
              <MDBBreadcrumbItem>Movies</MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Nominated</MDBBreadcrumbItem>
            </MDBBreadcrumb>
        );
      };
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
    <div className='container-fluid movie-app mx-3'>
      <div className = 'row d-flex align-items-center mb-3'> 
      <div className = 'col-md-12 mb-4 white-text'>
                    {BreadcrumbPage()}
                  <h2 className='text-uppercase ml-3 mt-3  white-text' style = {{letterSpacing: '2.5px'}}>
                    <strong>Nominated</strong>
                  </h2>
    </div> 
      </div>
      <div className = 'row'>
      <MovieList movies = {nominated} handleNominateClick = {removeNominated}  nominateComponent = {Undo}/>
      </div>
		</div>
        </>
    )
}
