import React, {FC} from 'react';
import { observer } from "mobx-react";
import { UserRegistration } from './components/screen/auth/register/register';

const App: FC = () => {
  return (
    <div className="App">
      <UserRegistration />
    </div>
  );
}

export default observer(App);
