
import { computed, makeAutoObservable } from 'mobx'
class CartStore {
  list = [1, 2, 3, 4, 5]
  constructor() {
    makeAutoObservable(this, {
      filterList: computed
    })
  }
  get filterList() {
    return this.list.filter(item => item > 2)
  }
  addCart = () => {
    this.list.push(6, 7, 8)
  }
}
export default CartStore







