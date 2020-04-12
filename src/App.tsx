import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResetStyle from './styles/ResetStyle';
import { IndexPage } from './pages';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <ResetStyle />
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <IndexPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
