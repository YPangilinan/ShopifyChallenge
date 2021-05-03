import React from 'react'

export default function MovieDetail(props) {
    return (
        <div className = "text-center">
            <img alt = {props.title} className = "img-fluid" src = {props.src} style = {{margin: "0 auto"}} />
            <h3>Title: {props.tile}</h3>
            <h3>Released: {props.released}</h3>
        </div>
    )
}
