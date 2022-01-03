
import {  makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id:1,
      name: '学习react',
      isDone: true
    },
    {
      id:2,
      name: '搞定mobx',
      isDone: true
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }
}
export default TaskStore
