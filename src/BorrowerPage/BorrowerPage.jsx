import React, { Component } from 'react';
import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './BorrowerPage.scss';

export const colors = {
  veryHigh: '#4CAF50',
  high: '#8BC34A',
  medium: '#FFEB3B',
  low: '#FF9800',
  veryLow: '#F44336'
};
export default class BorrowerPage extends Component {
  state = {
    isOpen: false,
    percentage: 20,
    random: 0,
    vh_percentage: 100,
    h_percentage: 60,
    m_percentage: 50,
    l_percentage: 35,
    vl_percentage: 10,
    titleFontSize: 80,
    outerStrokeWidth: 5
  };

  componentDidMount() {
    this.autoPercent();
  }

  autoPercent() {
    const min = 1;
    const max = 100;
    setInterval(() => {
      const rand = Math.round(min + Math.random() * (max - min));
      this.setState({ percentage: this.state.random + rand });
    }, 1000);
  }

  formatSubtitle = percent => {
    if (percent >= 75 && percent <= 100) {
      return { class: 'very-high-score-color', color: colors.veryHigh };
    } else if (percent >= 56 && percent <= 74) {
      return { class: 'high-score-color', color: colors.high };
    } else if (percent >= 31 && percent <= 55) {
      return { class: 'medium-score-color', color: colors.medium };
    } else if (percent >= 21 && percent <= 30) {
      return { class: 'low-score-color', color: colors.low };
    } else if (percent >= 0 && percent <= 20) {
      return { class: 'very-low-score-color', color: colors.veryLow };
    }
  };

  render() {
    const {
      percentage,
      vh_percentage,
      h_percentage,
      m_percentage,
      l_percentage,
      vl_percentage
    } = this.state;
    return (
      <div className="container-fluid borrower">
        <SideNav
          onSelect={selected => {
            // Add your code here
          }}
          className="bg-primary"
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="profile">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="profile">
              <NavIcon>
                <i
                  className="fa fa-fw fa-oil-can"
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Profile</NavText>
            </NavItem>

            <NavItem eventKey="currentLoan">
              <NavIcon>
                <i
                  className="fa fa-fw fa-money-bill"
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Current Loan Request</NavText>
            </NavItem>
            <NavItem eventKey="loanHistory">
              <NavIcon>
                <i
                  className="fa fa-fw fa-paint-roller"
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Loan History</NavText>
            </NavItem>
            <NavItem eventKey="logout">
              <NavIcon>
                <i
                  className="fa fa-fw fa-gavel"
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Logout</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <div className="container-fluid details-body w-100 h-100">
          <div className=" my-circle ">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: 'rounded', // Text size
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                textColor: '#0c0d0e',
                trailColor: '#a0b2bd',
                backgroundColor: '#3e98c7',
                backgroundPadding: '20px'
              })}
            />
          </div>
          <div className="row px-5 ">
            <div className="scale min-height-500 w-100  align-self-end ">
              <ul
                className="d-flex flex-md-column flex-row list-unstyled my-4
                        flex-wrap w-100"
              >
                <li className="d-flex flex-nowrap align-items-center w-50 ">
                  <div
                    className={
                      this.formatSubtitle(vh_percentage).class +
                      ' scale-item very-high-score-color mr-3'
                    }
                  ></div>
                  <p className="text-size-3 m-0">Very High score</p>
                </li>
                <li className="d-flex flex-nowrap align-items-center w-50">
                  <div
                    className={
                      this.formatSubtitle(h_percentage).class +
                      ' scale-item mr-3'
                    }
                  ></div>
                  <p className="text-size-5 m-0">High score</p>
                </li>
                <li className="d-flex flex-nowrap align-items-center w-50">
                  <div
                    className={
                      this.formatSubtitle(m_percentage).class +
                      ' scale-item medium-score-color mr-3'
                    }
                  ></div>
                  <p className="text-size-5 m-0">Medium score</p>
                </li>
                <li className="d-flex flex-nowrap align-items-center w-50">
                  <div
                    className={
                      this.formatSubtitle(l_percentage).class +
                      ' scale-item low-score-color mr-3'
                    }
                  ></div>
                  <p className="text-size-5 m-0"> low score</p>
                </li>
                <li className="d-flex flex-nowrap align-items-center w-50">
                  <div
                    className={
                      this.formatSubtitle(vl_percentage).class +
                      ' scale-item very-low-score-color mr-3'
                    }
                  ></div>
                  <p className="text-size-5 m-0">Very low score</p>
                </li>
              </ul>
            </div>
              <button className="my-4 bg-primary white-text"  color="primary" >Request Loan</button>
            <div className=" d-flex justify-content-center align-items-center py-2 position-relative my-1 w-100 
                    text-center">
    
                
                        <div className="bg-primary views ml-1 py-2 px-3 float-left white-text">
                            20 views
                        </div>

                    <div className="mx-4">
                        {/* <mat-spinner  diameter="50"
                            strokeWidth="2" color="primary"
                            class="mx-auto"></mat-spinner> */}
                    </div>

            </div>

          </div>

          <div className="h-20 w-100 mb-5 align-items-stretch justify-content-between row ">
            <div className="position-relative my-2  text-center  col-md-4 col-12">
              <div className="m-1 p-2 h-100 w-100 d-flex flex-column justify-content-center bgl-gray ">
                <p className="clr-primary ">Current Requested Loan</p>
                <h2 className="text-center my-2 h5-responsive bold ">100000</h2>
              </div>
            </div>
            <div className="position-relative my-2  text-center  col-md-4 col-12">
              <div className="m-1 p-2 h-100 w-100 d-flex flex-column justify-content-center bgl-gray ">
                <p className="clr-primary ">No. of loans Requested</p>
                <h2 className="text-center my-2 h5-responsive bold ">1</h2>
              </div>
            </div>
            <div className="position-relative my-2  text-center  col-md-4 col-12">
              <div className="m-1 p-2 h-100 w-100 d-flex flex-column justify-content-center bgl-gray ">
                <p className="clr-primary ">No. of loans Approved</p>
                <h2 className="text-center my-2 h5-responsive bold ">0</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
