import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBRow, MDBContainer, MDBCol
} from "mdbreact";
import { Link } from 'react-router-dom';
import shoppies from '../images/TheShoppies.png';
import './Navbar.css'

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
}

componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll);
}

handleScroll = () => {
    if(window.scrollY > 20){
        document.querySelector("img").className = "img scroll"
    }
    else{
        document.querySelector("img").className = "img"
    }
}

render() {
  return (
      <MDBNavbar color="black" dark expand="md">
      <MDBContainer
              className='d-flex justify-content-center align-items-center'
              style={{ height: '100%', width: '100%', paddingTop: '3rem' }}
            >
          <MDBRow>
          <MDBCol md='12' className='mb-4 white-text text-center'>
                  <Link to = "/"> <img src = {shoppies} alt = 'logo' height = "350px" width = "350px" /></Link> 
                  <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav className = "mt-3">
            <Link to = "/movies" style={{color: 'white'}} className = "mr-3">
                 SEARCH MOVIES
                  </Link>
                  <Link to = "/nominated" style={{color: 'white'}} className = "ml-3">
                 NOMINATED MOVIES
                  </Link>
          </MDBNavbarNav>
             </MDBCollapse>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default Navbar;