import { useFetchTodosQuery } from "./store/apis/todoapi";

const TodoList = () => {

    const {data} = useFetchTodosQuery();

    return (
        <div>
            <h2>Todos</h2>
            {data && data.map(item => <li key={item.title}>{item.title}</li>)}
        </div>
    )
}
 

export default TodoList;