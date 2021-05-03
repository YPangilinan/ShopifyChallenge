import React from 'react'
import Nominate from './Nominate'

export default function MovieDetail(props) {
    return (
        <div className = "text-center">
            <img alt = {props.title} className = "img-fluid" src = {props.src} style = {{margin: "0 auto"}} />
            <h3>Released: {props.released}</h3>
            <Nominate />
        </div>
    )
}
