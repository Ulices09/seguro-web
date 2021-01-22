import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { paths } from './paths';
import { Login, Quote } from '../scenes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to={paths.LOGIN} />
      </Route>
      <Route exact path={paths.LOGIN} component={Login} />
      <Route exact path={paths.QUOTE} component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
