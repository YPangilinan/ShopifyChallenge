import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import '../App.css'
import NoPoster from '../images/NOPOSTER.png'


const MovieList = props => {

    const NominateComponent = props.nominateComponent;
  
    return(
        <>
        <MDBRow className = "ml-1 mr-1 mb-2">
        {props.movies.map((movie, i)=> (
            <MDBCol className = "nom">
              <MDBCard
                className='card-image mb-3'
                key = {i}
                style={{
                  backgroundImage: movie.Poster.startsWith("http") ?
                    `url(${movie.Poster}})` : `url(${NoPoster})` ,
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
