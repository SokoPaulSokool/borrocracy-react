import React, { Component } from 'react'
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
                  <h1 className="display-4 font-weight-bold">Lorem ipsum </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.
                  </h6>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard className="dark-grey-text">
                    <MDBCardBody className="z-depth-2">
                      <h3 className="dark-grey-text text-center">
                        <strong>Write to us:</strong>
                      </h3>
                      <hr />
                      <MDBInput label="Your name" icon="user" />
                      <MDBInput label="Your email" icon="envelope" />
                      <MDBInput
                        label="Your message"
                        icon="pencil-alt"
                        type="textarea"
                        rows="3"
                      />
                      <div className="text-center mt-3 black-text">
                        <MDBBtn color="indigo">Send</MDBBtn>
                        <hr />
                        <MDBInput
                          type="checkbox"
                          id="checkbox"
                          label="Subscribe me to the newsletter"
                        />
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
   
  )
 }
}



