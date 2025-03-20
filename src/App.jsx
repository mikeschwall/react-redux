import './App.css'
import * as containerStyles from "./App.module.css"
import SongList from './SongList'
import TodoList from './TodoList'

function App() {

  return (
    <div className={containerStyles.container}>
      <SongList/>
      <hr/>
      <TodoList/>
    </div>
  )
}

export default App
