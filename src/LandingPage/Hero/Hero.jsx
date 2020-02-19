import React, { Component } from 'react';
import {
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdbreact';
import './Hero.scss';
import firebase from 'firebase';
import 'firebase/auth';

export default class Hero extends Component {
  state = {
    showPhone: 'hide-input',
    showCode: 'hide-input',
    showCapture: 'show-input',
    phoneNumber: '',
    verificationCode: '',
    capture: {},
    recaptureDone: false
  };
  componentDidMount() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'small',
        callback: res => {
          if (res) {
            this.setState({
              showPhone: 'show-input',
              showCapture: 'hide-input'
            });
          }
          return 'tess';
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      }
    );
    window.recaptchaVerifier
      .render()
      .then(res => {
        console.log(res);
        if (res) {
          // this.setState({ showPhone: 'show-input' });
        }
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ capture: window.recaptchaVerifier });
  }

  getInputData = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  logInSubmit = e => {
    e.preventDefault();
    const { phoneNumber, capture } = this.state;
    const appVerifier = capture;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmResult => {
        // success
       
        this.setState({
          confirmResult,
          showCode: 'show-input',
          showPhone: 'hide-input'
        });
      })
      .catch(error => {
        // error
      });
  };

  verifySubmit = e => {
    e.preventDefault();
    const { confirmResult, verificationCode } = this.state;
    if ((confirmResult, verificationCode)) {
      confirmResult
        .confirm(verificationCode)
        .then(result => {
          const { uid, refreshToken } = result.user.toJSON();
          console.log(uid);
          localStorage.setItem("userId",uid);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  render() {
    return (
      <MDBView className="hero">
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
              <MDBCol md="6" xl="5" className="mb-4 auth-card">
                <MDBCard className="dark-grey-text">
                  <MDBCardBody className="z-depth-2">
                    <h3 className="dark-grey-text text-center">
                      <strong>Let us connect you to lenders</strong>
                    </h3>
                    <div
                      className={this.state.showCapture}
                      id="recaptcha-container"
                    ></div>
                    <hr />
                    <div className={this.state.showPhone}>
                      <MDBInput
                        onChange={this.getInputData}
                        label="Phone number"
                        icon="phone"
                        name="phoneNumber"
                      />
                    </div>
                    <div className={this.state.showCode}>
                      <MDBInput
                        onChange={this.getInputData}
                        label="Verification Code"
                        name="verificationCode"
                      />
                    </div>

                    <div
                      className={
                        ' text-center mt-3 black-text ' + this.state?.showPhone
                      }
                    >
                      <MDBBtn onClick={this.logInSubmit} color="primary">
                        Login
                      </MDBBtn>
                      <hr />
                    </div>
                    <div
                      className={
                        ' text-center mt-3 black-text ' + this.state?.showCode
                      }
                    >
                      <MDBBtn onClick={this.verifySubmit} color="primary">
                        Verify
                      </MDBBtn>
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
