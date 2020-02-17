import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from 'mdbreact';
import './Navigation.scss';

export default function Navigation({ click, isOpen }) {
  return (
    <header className="sticky-top">
      <MDBNavbar color="my-primary-color" dark expand="md">
        <MDBNavbarBrand href="/">
          <strong>Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={click} />
        <MDBCollapse isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Opinions</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="#">
                <MDBIcon fab icon="facebook-f" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">
                <MDBIcon fab icon="instagram" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>
  );
}
