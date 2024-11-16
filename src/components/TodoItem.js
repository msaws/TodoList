function TodoItem({ todo }) {
    return (
      <li>
        <span>{todo.text}</span>
      </li>
    );
  }
  
  export default TodoItem;