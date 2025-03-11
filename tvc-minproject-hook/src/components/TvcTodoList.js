import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/TvcTodoReducer";
import TvcAddTodo from "./TvcAddTodo";
import TvcTodoItem from "./TvcTodoItem";

function TvcTodoList() {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h2>Danh Sách Công Việc</h2>
      <TvcAddTodo dispatch={dispatch} />
      <ul>
        {todos.map(todo => (
          <TvcTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default TvcTodoList;
