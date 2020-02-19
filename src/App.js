import React from 'react';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import './App.scss';
import LandingPage from "./LandingPage/LandingPage";
import BorrowerPage from "./BorrowerPage/BorrowerPage";

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/borrow" component={BorrowerPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
