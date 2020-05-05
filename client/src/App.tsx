import React, {FC, useEffect} from 'react';
import { observer } from "mobx-react";
import { Header } from './components/header';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './components/screen/home';
import { Login } from './components/screen/auth/login';
import { UserRegistration } from './components/screen/auth/register';
import Store from './stores/Store';
import { PrivateRoute } from './services/private-route';

const store = Store.create({
  user: {
    name: '',
    last_name: '',
    email: '',
    role: ''
  },
  auth: {
    isLogin: false
  }
})

const App: FC = () => {
  return (
    <div className="App">
      <Header store={store} />
      <main>
        <Switch>
          <PrivateRoute path="/" exact store={store}>
            <Home store={store}/>
          </PrivateRoute>
          <Route path="/registrate" exact component={UserRegistration} />
          <Route path="/login" exact render={(props) => <Login {...props} store={store} />}/>
        </Switch>
      </main>
    </div>
  );
}

export default observer(App);
