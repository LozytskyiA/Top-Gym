import React, {FC} from 'react';
import { observer } from "mobx-react";
import { UserRegistration } from './components/screen/auth/register/register';
import { Header } from './components/header';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './components/screen/home';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registrate" exact component={UserRegistration} />
        </Switch>
      </main>
    </div>
  );
}

export default observer(App);
