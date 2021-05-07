import React from 'react';

const Search = props => {
    return(
        <div className = "col col-sm-10">
            <input
                className = 'form-control p-4'
                value = {props.value}
                onChange = {(event) => props.setSearchValue(event.target.value)}
                placeholder = "Type Movie Name"
                style = {{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    height: "20px",
                    width: "100%",
                    padding: "2px 23px 2px 30px",
                    outline: '0',
                    backgroundColor: "black",
                    color: "white"
                }}
                ></input>
        </div>
    )
}

export default Search;