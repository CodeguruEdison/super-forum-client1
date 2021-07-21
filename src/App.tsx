import React, { FC } from 'react';
import './App.css';
import LeftMenu from './components/layout/LeftMenu';
import Main from './components/layout/Main';
import Nav from './components/layout/Nav';
import RightMenu from './components/layout/RightMenu';
import SideBar from './components/layout/SideBar';
import { IApp } from './interfaces/IApp';

const App: FC<IApp> = () => {

  return (
    <div className="App">
      <Nav />
      <SideBar></SideBar>
      <LeftMenu></LeftMenu>
      <Main></Main>
      <RightMenu />
    </div>
  );
}

export default App;
