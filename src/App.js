import { useStore } from './store'
import { observer } from 'mobx-react-lite'

function App() {
  const { cartStore } = useStore()
  return (
    <div className="App">
      {/* 原始值 */}
      {cartStore.list.toString()}
      <br />
      {/* 计算值 */}
      {cartStore.filterList.toString()}
      <br />
      <button onClick={cartStore.addCart}>修改原始值</button>
    </div>
  )
}
// 5. 使用observer方法让组件更新
export default observer(App)
