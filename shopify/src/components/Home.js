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
          <MDBView src='https://mdbcdn.b-cdn.net/img/Photos/Others/img%20%2848%29.jpg'>
            <MDBMask className='rgba-black-light' />
            <MDBContainer
              className='d-flex justify-content-center align-items-center'
              style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
            >
              <MDBRow>
                <MDBCol md='12' className='mb-4 white-text text-center'>
                  <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    The Shoppies
                  </h1>
                  <hr className='hr-light my-4' />
                  <h5 className='text-uppercase mb-4 white-text '>
                    <strong>Movie Awards for Entrepreneurs</strong>
                  </h5>
                  <Link to = "/movies">
                  <MDBBtn outline color='white'>
                    Search Movies
                  </MDBBtn>
                  </Link>
                  <Link to ="/nominated">
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