import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
//import ErrorBoundary from './components/common/ErrorBoundary';
import LeftMenu from './components/layout/LeftMenu';
import Main from './components/layout/Main';
import Nav from './components/layout/Nav';
import RightMenu from './components/layout/rightMenu/RightMenu';
import SideBar from './components/layout/sidebar/SideBar';
import { Home } from './components/routes/Home';

import { IApp } from './interfaces/IApp';
import { IHome } from './interfaces/IHome';

const App: FC<IApp> = () => {

  const renderHome = (props: IHome) => <Home {...props}></Home>
  return (
    <Switch>
      <Route exact={true} path="/" render={renderHome}></Route>
      <Route path="/categorythreads/:categoryId" render={renderHome}></Route>
    </Switch>


  );
}

export default App;
