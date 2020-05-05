import { types } from "mobx-state-tree";

const Auth = types
  .model('Auth', {
    isLogin: types.boolean,
  })
  .actions(self => ({
    login() {
      self.isLogin = true;
    },
    logOut() {
      self.isLogin = false;
    }
  }))

export default Auth;