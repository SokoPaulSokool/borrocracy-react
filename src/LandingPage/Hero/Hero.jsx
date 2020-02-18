import React, { Component } from 'react';
import {
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBCard,
  MDBCardBody
} from 'mdbreact';
import './Hero.scss';

export default class Hero extends Component {
  render() {
    return (
      <MDBView>
        <MDBMask
          className="d-flex justify-content-center align-items-center"
          overlay="indigo-strong"
        >
          <MDBContainer>
            <MDBRow>
              <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <div className="hero-text  col-md-12">
                  <hr />
                  <div className="main-heading">
                    <h1>Get Affordable</h1>
                    <h1>Loans</h1>
                  </div>
                  <div>
                    <p>Single Monthly Payments</p>
                    <p>Fixed Terms – 6 Months or 1 Year.</p>
                    <p>Low Interest Rates.</p>
                  </div>
                  <hr />
                </div>
              </div>
              <MDBCol md="6" xl="5" className="mb-4">
                <MDBCard className="dark-grey-text">
                  <MDBCardBody className="z-depth-2">
                    <h3 className="dark-grey-text text-center">
                      <strong>Let us connect you to lenders</strong>
                    </h3>
                    <hr />
                  
                    <div className="text-center mt-3 black-text">
                      <MDBBtn color="primary">Login</MDBBtn>
                      <hr />
              
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    );
  }
}
