import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const MovieList = props => {

    const NominateComponent = props.nominateComponent; 

    return(
        <>
        <MDBRow className = "ml-1 mr-1 mb-2">
        {props.movies.map((movie, i)=> (
            <MDBCol md='3'>
              <MDBCard
                className='card-image mb-5'
                key = {i}
                style={{
                  backgroundImage:
                    `url(${movie.Poster}})`,
                    height: '300px',
                    width: '300px'
                }}
              >
                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'
                     style = {{height: '300px', justifyContent:'center'}}>
                  <div>
                    <MDBCardTitle tag='h4' className='pt-2'>
                      <strong>{movie.Title}</strong>
                    </MDBCardTitle>
                    <p>
                      {movie.Year}
                    </p>
                    <MDBBtn color='pink'>
                      <MDBIcon icon='clone left' /> View project
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            
        ))}
        </MDBRow>
        </>
    )
}

export default MovieList

{/* <div className = "image-container d-flex justify-content-start m-3" key = {i}>
                <figure className = "figure">
                <img src= {movie.Poster} alt = 'movie'></img>
                <figcaption className = "figure-caption">
                    {movie.Title}({movie.Year})
                </figcaption>
                </figure>
                <div 
                    onClick = {() => props.handleNominateClick(movie)}
                    className = 'overlay d-flex align-items-center justify-content-center'>
                    <NominateComponent />
                </div>
            </div> */}