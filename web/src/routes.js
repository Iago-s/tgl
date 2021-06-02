import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Home from './pages/Home';
import Bets from './pages/Bets';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/bets" exact>
          <Bets />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
