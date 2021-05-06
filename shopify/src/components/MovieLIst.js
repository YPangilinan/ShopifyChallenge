import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import '../App.css'
import Nominate from './Nominate';
import Undo from './Undo';


const MovieList = props => {

    const NominateComponent = props.nominateComponent;
    const nominated = props.nominated;
    const nominatedMovies = props.nominatedMovies;
  
    return(
        <>
        <MDBRow className = "ml-1 mr-1 mb-2">
        {props.movies.map((movie, i)=> (
            <MDBCol md='3'className = "nom">
              <MDBCard
                className='card-image mb-3'
                key = {i}
                style={{
                  backgroundImage:
                    `url(${movie.Poster}})`,
                    height: '500px',
                    width: '300px'
                }}
              >
                <div className='text-white text-center d-flex align-items-center py-5 px-4'
                     style = {{height: '500px', justifyContent:'center'}}>    
                </div>
                
              </MDBCard>
              <div style = {{width: '300px'}}>
                    <MDBCardTitle tag='h6' style = {{float:'left', width:'150px'}}>
                      <strong>{movie.Title}</strong><p>({movie.Year})</p>
                    </MDBCardTitle>
                      <MDBBtn rounded size = "sm"
                      style = {{float:'right'}}
                    color='outline-white'
                    onClick = {() => props.handleNominateClick(movie)}
                    className = "button"
                    >
                      <MDBIcon/> <NominateComponent />
                    </MDBBtn>             
                  </div>
            </MDBCol>
            
        ))}
        </MDBRow>
        </>
    )
}

export default MovieList
