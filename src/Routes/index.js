// Routes/index.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Advisors from '../pages/Advisors';
import Administrators from '../pages/Administrators';
import Clients from '../pages/Clients';
import Banks from '../pages/Banks';
import Logout from '../pages/Logout';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/advisors" component={Advisors} />
        <PrivateRoute path="/administrators" component={Administrators} />
        <PrivateRoute path="/clients" component={Clients} />
        <PrivateRoute path="/banks" component={Banks} />
        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
};

export default Routes;
