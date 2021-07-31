import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/routes/Home';
import Thread from './components/routes/thread/Thread';
import { IApp } from './interfaces/IApp';
import { IHome } from './interfaces/IHome';
import { IThread } from './interfaces/IThread';


const App: FC<IApp> = () => {

  const renderHome = (props: IHome) => <Home {...props}></Home>
  const renderThread = (props: IThread) => <Thread {...props}></Thread>

  return (
    <Switch>
      <Route exact={true} path="/" render={renderHome}></Route>
      <Route path="/categorythreads/:categoryId" render={renderHome}></Route>
      <Route path="/thread/:id" render={renderThread}></Route>
    </Switch>


  );
}

export default App;
