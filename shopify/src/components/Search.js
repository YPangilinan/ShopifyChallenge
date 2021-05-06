import React from 'react';

const Search = props => {
    return(
        <div className = "col col-lg-8 mt-2">
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