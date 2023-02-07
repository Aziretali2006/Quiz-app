
import React from 'react';
import { Route, Routes as Switch} from 'react-router-dom';
import { Hooks } from '../../hooks';
import { Providers } from '../../provider';
import { secondaryPath } from '../../service/path';
import { AuthPages } from '../Lazy';

const AuthRoutes = () => {
  const { token } = Providers.useAuth();
  const { actions } = Hooks.useLocations();

  React.useEffect(() => {
    if(token) {
      actions.goToMain();
    }
  } , [token])

  return (
    <React.Fragment>
      <Switch>
        <Route path={secondaryPath.login} element={<AuthPages.Login />}/>
      </Switch>
    </React.Fragment>
  )
};

export default AuthRoutes;