import React, {FC} from 'react';
import { observer } from "mobx-react";
import { Header } from './components/header';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './components/screen/home';
import { Login } from './components/screen/auth/login';
import { UserRegistration } from './components/screen/auth/register';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registrate" exact component={UserRegistration} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </main>
    </div>
  );
}

export default observer(App);
