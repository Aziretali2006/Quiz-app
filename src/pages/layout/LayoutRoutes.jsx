
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Components } from '../../components';
import { Hooks } from '../../hooks';
import { Providers } from '../../provider';
import { secondaryPath } from '../../service/path';
import { LayoutPages } from '../Lazy';

const LayoutRoutes = () => {
  const { token , currentUser} = Providers.useAuth();
  const { actions } = Hooks.useLocations();

  React.useEffect(() => {
    if(!token && !currentUser) {
      actions.goToLogin();
    }
  }, [token , currentUser])

  return (
    <React.Fragment>
      <Components.Header />
      <Switch>
        <Route path={secondaryPath.main} element={<LayoutPages.Main />}/>
      </Switch>
    </React.Fragment>
  )
}

export default LayoutRoutes;