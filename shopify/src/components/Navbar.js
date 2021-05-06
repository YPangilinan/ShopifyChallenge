import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBRow, MDBContainer, MDBCol
} from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import shoppies from '../images/TheShoppies.png';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="black" dark expand="md">
      <MDBContainer
              className='d-flex justify-content-center align-items-center'
              style={{ height: '100%', width: '100%', paddingTop: '3rem' }}
            >
          <MDBRow>
          <MDBCol md='12' className='mb-4 white-text text-center'>
                    <img src = {shoppies} alt = 'logo' height = '350px' width = '350px'/>
                  <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/movies">Search Movies</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/nominated">Nominated Movies</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
             </MDBCollapse>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navbar;