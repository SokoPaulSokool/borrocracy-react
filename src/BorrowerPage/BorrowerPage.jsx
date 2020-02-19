import React, { Component } from 'react';
import SideNav, {
  Toggle,
  Nav,
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
  outerStrokeWidth: 5,
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

   formatSubtitle = (percent)=>{
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
  }

  render() {
    const { percentage, vh_percentage,h_percentage,m_percentage,l_percentage,vl_percentage } = this.state;
    return (
      <div className="container-fluid">
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
        <div className="container  w-100 h-100">
          <div className=" my-circle ">
            {/* <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: 'rounded', // Text size
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                textColor: '#f88bbb',
                trailColor: '#d6d34d',
                backgroundColor: '#3e98c7',
                backgroundPadding: '20px'
              })}
            />   */}

            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'flat',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center'
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: '#d6d6d6',
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'flat',
                  // Rotate the trail
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center'
                },
                // Customize the text
                text: {
                  // Text color
                  fill: '#f88',
                  // Text size
                  fontSize: '16px'
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: '#3e98c7'
                }
              }}
            />
          </div>
        <div className="row">
            <div className="scale min-height-500 w-100 align-self-end ">
                    <ul className="d-flex flex-md-column flex-row list-unstyled my-4
                        flex-wrap w-100">
                        <li className="d-flex flex-nowrap align-items-center w-50 ">
                            <div className={this.formatSubtitle(vh_percentage).class +" scale-item very-high-score-color mr-3"}></div>
                            <p className="text-size-3 m-0">Very High score</p>
                        </li>
                        <li className="d-flex flex-nowrap align-items-center w-50">
                            <div className={this.formatSubtitle(h_percentage).class +" scale-item mr-3"}></div>
                            <p className="text-size-5 m-0">High score</p>
                        </li>
                        <li className="d-flex flex-nowrap align-items-center w-50">
                            <div className={this.formatSubtitle(m_percentage).class +" scale-item medium-score-color mr-3"}></div>
                            <p className="text-size-5 m-0">Medium score</p>
                        </li>
                        <li className="d-flex flex-nowrap align-items-center w-50">
                            <div className={this.formatSubtitle(l_percentage).class +" scale-item low-score-color mr-3"}></div>
                            <p className="text-size-5 m-0"> low score</p>
                        </li>
                        <li className="d-flex flex-nowrap align-items-center w-50">
                            <div className={this.formatSubtitle(vl_percentage).class +" scale-item very-low-score-color mr-3"}></div>
                            <p className="text-size-5 m-0">Very low score</p>
                        </li>

                    </ul>
                </div>

        </div>
        </div>
      </div>
    );
  }
}
