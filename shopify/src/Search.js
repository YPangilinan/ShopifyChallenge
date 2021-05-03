import React from 'react';

function SearchForm(props){
    return(
        <form>
            <div className = "form-group">
                <label htmlFor = "search">Movie:</label>
                <input 
                onChange = {props.handleInputChange}
                value = {props.value}
                name = "search"
                type = "text"
                className = "form-control"
                placeholder = "Search Movie Title"
                id = "search"
                />
                <br />
                <button onClick = {props.handleFormSubmit} className = "btn btn-primary">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm;