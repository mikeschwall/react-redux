import { useState } from "react";


const TodoList = ({getdata}) => {
    const [text,setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = event => {
        console.log(text);
        event.preventDefault();
        getdata(text);
        setText('');
    }

    return (
        <div>
            <h2>Todos</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default TodoList;