import React, { Component } from 'react'

export class Nominate extends Component {

    handleNominate = event => {
        console.log("this has been nominated")
    }
    render() {
        return (
           <button onClick = {this.handleNominate}>Nominate</button>
        )
    }
}

export default Nominate
