import { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';

import Auth from './pages/Auth';
import UpdatePassword from './pages/UpdatePassword';
import Home from './pages/Home';
import Bets from './pages/Bets';
import Account from './pages/Account';
import NotFound from './pages/NotFound';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        authContext.isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/reset-password/:token" component={UpdatePassword} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/bets" component={Bets} />
        <PrivateRoute path="/account" component={Account} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
