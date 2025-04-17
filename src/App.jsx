import { useCallback, useEffect, useState } from 'react'
import './App.css'
import * as containerStyles from "./App.module.css"
import TodoList from './components/TodoList'
import SongList from './components/SongList';


function App() {
  const [todos,setTodos] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
       
        const response = await data.json();
        setTodos(response);
        setLoading(false);
      } catch(e) {
        setError(e);
        setLoading(false);
      }
    }

    fetchTodos();
  },[]);

  const handleData = useCallback((data) => {
    setTodos(mytodos => [{title:data},...mytodos])
  },[]);

  return (
    <div className={containerStyles.container}>
      <SongList/>
      <hr/>
      <TodoList getdata={handleData}/>
      {loading && <h4>Loading ...</h4>}<br/>
      {error && error.message}<br/>
      {todos && todos.map(item => <li key={item.title}>{item.title}</li>)}
    </div>
  )
}

export default App
