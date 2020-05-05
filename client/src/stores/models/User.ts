import { types } from "mobx-state-tree";

const User = types
  .model('User', {
    name: types.string,
    last_name: types.string,
    email: types.string,
    role: types.string,
  })
  .actions(self => ({
    loginUser(user: any) {
      self.name = user.name;
      self.last_name = user.last_name;
      self.email = user.email;
      self.role = user.role;
    }
  }))

export default User;