import { useRef } from "react";

const TodoList = ({getdata}) => {

    const inputref = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        getdata(inputref.current.value);
        inputref.current.value = ' ';
    }

    return (
        <div>
            <h2>Todos</h2>
            <form onSubmit={handleSubmit}>
            <input ref={inputref} type="text" /> <button type="submit">add</button>
            </form>
        </div>
    )
}

export default TodoList;