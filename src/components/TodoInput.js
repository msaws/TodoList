import { useState } from "react";

function TodoInput({addTodo}) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim()){
            addTodo(task);
            setTask("");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Create a task ... " />
            <button type="submit">Add Task</button>
        </form>
    );

}

export default TodoInput;