import React from 'react';

const Search = props => {
    return(
        <div className = 'col col-sm-8'>
            <input
                className = 'form-control p-4'
                value = {props.value}
                onChange = {(event) => props.setSearchValue(event.target.value)}
                placeholder = "Type Movie Name"
                ></input>
        </div>
    )
}

export default Search;