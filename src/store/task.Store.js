import {makeAutoObservable} from 'mobx'

class TaskStore {
  list = [
    {
      id: 1,
      name: '学习react',
      isDone: true
    },
    {
      id: 2,
      name: '搞定mobx',
      isDone: true
    }
  ]

  constructor() {
    makeAutoObservable(this)
  }

  //单选操作
  singleCheck(id, isDone) {
    //查找 find findIndex
    const item = this.list.find(item => item.id === id)
    item.isDone = isDone
  }

  //全选操作
  allCheck(checked) {
    //把所有项的isDone属性按照 传入的最新的状态修改
    this.list.forEach(item => {
      item.isDone = checked
    })
  }

  //计算属性, 只有所有属性选中的时候才是选中的状态
  //前面有get,其实就是getter
  get isAll() {
    return this.list.every(item => item.isDone)
  }
}

export default TaskStore
