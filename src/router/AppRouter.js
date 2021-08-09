import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import RedirectPage from '../components/RedirectPage/RedirectPage';
import Dashboard from '../components/DashBoard/Dashboard';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

class AppRouter extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route
              path="/"
              exact={true}
              render={(props) => (
                <Home {...props} />
              )}
            />
            <Route
              path="/redirect"
              render={(props) => (
                <RedirectPage
                  {...props}
                />
              )}
            />


            <Route
              path="/dashboard"
              render={(props) => (
                <Dashboard {...props} />
              )}
            />

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
