import React from 'react';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import './App.scss';
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
