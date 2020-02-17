import React, { Component } from 'react';
import './LandingPage.scss';
import Hero from './Hero/Hero';
import Summary from './Summary/Summary';
import HowItWorks from './HowItWorks/HowItWorks';
import InvestReasons from './InvestReasons/InvestReasons';
import Navigation from './Navigation/Navigation';
import IdealBorrower from './IdealBorrower/IdealBorrower';
import LoansVariety from './LoansVariety/LoansVariety';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div>
        <div className="container-fluid header-top bg-dark d-md-block">
          <div className="container">
            <div className="row text-light pt-2">
              <div
                className="mx-2 d-flex flex-row text-center flex-nowrap
                align-baseline"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p className="small-text mx-1">Kampala, CBD +256, Uganda</p>
              </div>
              <div
                className="mx-2 d-flex flex-row text-center flex-nowrap
                align-baseline"
              >
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                <p className="small-text mx-1">info@borrocracy.co.ug</p>
              </div>
              <div
                className="mx-2 d-flex flex-row text-center flex-nowrap
                align-baseline"
              >
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p className="small-text mx-1">+256 (786) 218439</p>
              </div>
            </div>
          </div>
        </div>
        <Navigation click={this.onClick} isOpen={this.state.collapse} />
        <Hero />
        <Summary />
        <HowItWorks />
        <IdealBorrower />
        <InvestReasons />
        <LoansVariety />

        <footer className="page-footer font-small unique-color-dark py-2">
          <div className="footer-copyright py-3 text-center">
            Borrocracy © 2019 | All Rights Reserved
            <a href="/abut">Terms and Conditions</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
