import { types } from "mobx-state-tree";
import User from "./models/User";
import Auth from "./models/Auth";

const Store = types.model({
  user: User,
  auth: Auth,
})

export default Store;
