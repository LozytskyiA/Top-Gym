import { types } from "mobx-state-tree";

const testModel = types
  .model('testModel', {
    currency: types.string,
    is_paid: false
   })
    .actions(self => ({
      markPaid() {
        self.is_paid = !self.is_paid
      }
   }))
    .views(self => ({
      status() {
        return self.is_paid ? 'Paid' : 'Not Paid'
      }
  }))

export default testModel;
