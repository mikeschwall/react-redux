import { useFetchTodosQuery } from "./store/apis/Todoapi";

const TodoList = () => {

    const {data} = useFetchTodosQuery();

    return (
        <div>
            <h2>Todos</h2>
            {data && data.filter(item => item.id < 11)
            .map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;