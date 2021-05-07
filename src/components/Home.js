import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
import './Home.css';
import Background from '../images/theatre.png'
import Shoppies from '../images/TheShoppies.png'

class Home extends React.Component {
    state = {
      collapsed: false
    };
  
    handleTogglerClick = () => {
      const { collapsed } = this.state;
  
      this.setState({
        collapsed: !collapsed
      });
    };
  
    componentDidMount() {
     
    }
  
    render() {
    
      return (
        <div id='minimalistintro'>
          <MDBView src={Background}>
            <MDBMask className='rgba-black-light' />
            <MDBContainer
              className='d-flex justify-content-center align-items-center'
              style={{ height: '100%', width: '100%', paddingTop: '7rem' }}
            >
              <MDBRow>
                <MDBCol md='12' className='mb-4 white-text text-center'>
                    <img src = {Shoppies} alt = 'logo' height = '400px' width = '400px'/>
                  <hr className='hr-light my-2' />
                  <h5 className='text-uppercase mt-3 mb-4 white-text '>
                    <strong>Movie Awards for Entrepreneurs</strong>
                  </h5>
                  <Link to = "/ShopifyChallenge/movies">
                  <MDBBtn outline color='white'>
                    Search Movies
                  </MDBBtn>
                  </Link>
                  <Link to ="/ShopifyChallenge/nominated">
                  <MDBBtn outline color='white'>
                    Nominated Movies
                  </MDBBtn>
                  </Link>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBView>
        </div>
      );
    }
  }
export default Home;