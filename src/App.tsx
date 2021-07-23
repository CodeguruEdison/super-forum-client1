import React, { FC } from 'react';
import './App.css';
//import ErrorBoundary from './components/common/ErrorBoundary';
import LeftMenu from './components/layout/LeftMenu';
import Main from './components/layout/Main';
import Nav from './components/layout/Nav';
import RightMenu from './components/layout/RightMenu';
import SideBar from './components/layout/sidebar/SideBar';
import { Home } from './components/routes/Home';

import { IApp } from './interfaces/IApp';

const App: FC<IApp> = () => {

  return (
    // <div className="App">
    //   <Nav />
    //   <SideBar></SideBar>
    //   <LeftMenu></LeftMenu>
    //   {/* <ErrorBoundary>{[<Main key="Main" />]}</ErrorBoundary> */}
    //   <Main></Main>
    //   <RightMenu />
    // </div>
    <Home></Home>
  );
}

export default App;
