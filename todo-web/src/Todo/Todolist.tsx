import React from "react";
import { Todo } from "./type";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = (props) => {
  const todoItems: JSX.Element[] = [];

  for (const todo of props.todos) {
    todoItems.push(
      <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
    );
  }

  return <ul>{todoItems}</ul>;
};

export default TodoList;
