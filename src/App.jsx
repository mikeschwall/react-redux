import { useCallback, useEffect, useState } from 'react'
import './App.css'
import MainComponent from './MainComponent/MainComponent'
import TodoList from './TodoList/TodoList'
import axios from 'axios';
<<<<<<< HEAD
import SongList from './SongList/SongList';
=======
>>>>>>> main

function App() {

  const [todos,setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => setTodos(response.data));
  },[]);
  
  const handleData = useCallback((item) => {
    console.log("item",item);
    setTodos(t => [{title:item},...t]);
  },[]);

  return (
    <div>
      <SongList/>
      <hr/>
      <TodoList getdata={handleData}/>
      {todos && todos.map(item => <li key={item.title}>{item.title}</li>)}
      <hr/>
      <MainComponent/>
    </div>
  )
}

export default App
