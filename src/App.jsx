import { useEffect, useState } from 'react'
import './App.css'
import MainComponent from './MainComponent/MainComponent'
import TodoList from './TodoList/TodoList'
import axios from 'axios';

function App() {

  const [todos,setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => setTodos(response.data));
  },[]);
  

  

  return (
    <div>
      <TodoList/>
      {todos && todos.filter(item => item.id < 11).map(item => <li key={item.id}>{item.title}</li>)}
      <hr/>
      <MainComponent/>
    </div>
  )
}

export default App
