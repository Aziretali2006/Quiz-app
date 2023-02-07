
import React from 'react';
import { Route, Routes as Swicth } from 'react-router-dom';
import { MainPath } from '../service/path';
import { Routers } from '../pages';

const Routes = () => {
  return (
    <React.Fragment>
      <Swicth>
        <Route path={MainPath.auth} element={<Routers.AuthRoutes />}/>
        <Route path={MainPath.layout} element={<Routers.LayoutRoutes />}/>
      </Swicth>
    </React.Fragment>
  )
};

export default Routes;
