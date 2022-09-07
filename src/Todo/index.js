import './index.css'
import {useStore} from "../store";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import uuid from 'react-uuid'

function Task() {
  //useStore
  const {taskStore} = useStore()
  //单选受控
  // const [check,setCheck] = useState()
  //思想: mobx Store 去维护状态, input只需要把e.taget.value 交给store让它来进行修改
  function onChange(e, id) {
    taskStore.singleCheck(id, e.target.checked)
  }

  //全选
  function allChange(e) {
    taskStore.allCheck(e.target.checked)
  }

  //删除
  function delTask(id) {
    taskStore.delTask(id)
  }

  //新增
  const [taskValue, setTaskValue] = useState('')

  function addTask(e) {
    if (e.keyCode===13){
      taskStore.addTask({
        id: uuid(),
        name: taskValue,
        isDone: false
      })
     //这一行的效果是 添加了 之后立即将上面输入的那行清空
      setTaskValue('')

    }

  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          value={taskValue}
          // e.target.value是为了获取input里面的数据
          onChange={(e) => setTaskValue(e.target.value)}
          //回车事件
          onKeyUp={addTask}
          placeholder="What needs to be done?"
        />
      </header>

      <section className="main">
        {/*全选*/}
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={taskStore.isAll}
          onChange={allChange}
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">

          {/*completed类标识名*/}
          {
            taskStore.list.map(item => (
              <li
                className={item.isDone ? "todo completed" : "todo"}
                key={item.id}
              >
                <div className="view">
                  {/*单选框   受控和非受控方式*/}
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={item.isDone}
                    onChange={(e) => onChange(e, item.id)}
                  />
                  <label>{item.name}</label>
                  <button className="destroy" onClick={() => delTask(item.id)}></button>
                </div>
              </li>
            ))
          }

        </ul>
      </section>
      <foot className="footer">
        <span className="todo-count">
          任务总数: {taskStore.list.length} 已经完成：{taskStore.isFinishedLength}
        </span>
      </foot>
    </section>
  )
}

export default observer(Task)