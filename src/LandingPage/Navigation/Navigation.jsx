import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from 'mdbreact';
import './Navigation.scss';

export default function Navigation({ click, isOpen }) {
  return (
    <header className="sticky-top">
      <MDBNavbar color="my-primary-color" dark expand="md">
        <MDBNavbarBrand href="/">
          <strong>Borrocracy</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={click} />
        <MDBCollapse isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="#">Lend</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="borrow">Borrow</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>
  );
}
