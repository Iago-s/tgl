import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './pages/Auth';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="*">
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
