import { useState } from "react";
import "./ToDoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-input">
        <input
          data-testid="todo-input"
          type="text"
          value={input}
          placeholder="Add a task..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button data-testid="add-btn" onClick={handleAdd}>Add</button>
      </div>
      <ul className="todo-items">
        {todos.map((todo, i) => (
          <li key={i} data-testid="todo-item">
            {todo}
            <button data-testid="deleteBtn" onClick={() => handleDelete(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
