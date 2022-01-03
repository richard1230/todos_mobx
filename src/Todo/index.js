import './index.css'
function Cart() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
        />
        <label for="toggle-all"></label>
        <ul className="todo-list">
          <li
            className="todo"
          >
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label >learn react</label>
              <button className="destroy"></button>
            </div>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Cart