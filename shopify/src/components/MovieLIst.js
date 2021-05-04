import React from 'react'

const MovieList = props => {

    const NominateComponent = props.nominateComponent; 

    return(
        <>
        {props.movies.map((movie, i)=> (
            <div className = "image-container d-flex justify-content-start m-3" key = {i}>
                <img src= {movie.Poster} alt = 'movie'></img>
                <div 
                    onClick = {() => props.handleNominateClick(movie)}
                    className = 'overlay d-flex align-items-center justify-content-center'>
                    <NominateComponent />
                </div>
            </div>
        ))}
        </>
    )
}

export default MovieList