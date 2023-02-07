import { v4 as uuidv4 } from "uuid";
import Layout from "../components/Layout";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ConfirmDialog from "../components/ConfirmDialog";
import { Todo } from "../interfaces";
import TodoCard from "../components/TodoCard";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const IndexPage = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [todoMarkedForDeletion, setTodoMarkedForDeletion] = useState(null);

  const onTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoTitle(e.target.value);

  const createTodo = () => {
    if (!todoTitle) return;
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: todoTitle,
        createdAt: Date.now(),
        completed: false,
      },
    ]);
    setTodoTitle("");
  };

  const deleteTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const onStatusChange = (todo: Todo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) return { ...todo, completed: !todo.completed };
        return t;
      })
    );
  };

  const onDelete = (todo: Todo) => {
    setTodoMarkedForDeletion(todo.id);
    setShowConfirmationModal(true);
  };

  const onUpdateTitle = (todo: Todo, value: string) => {
    const filteredTodos = todos.filter((t) => todo.id !== t.id);
    setTodos([...filteredTodos, { ...todo, title: value }]);
  };

  return (
    <Layout title="Todo app">
      <TodoInput
        value={todoTitle}
        onChange={onTodoInputChange}
        onClick={createTodo}
      />
      <Box sx={{ mt: 4 }} />
      <TodoList
        todos={todos}
        headingTitle={"Todos"}
        filterBy={"todo"}
        onDelete={onDelete}
        onUpdateTitle={onUpdateTitle}
        onStatusChange={onStatusChange}
      />
      <Box sx={{ mt: 4 }} />
      <TodoList
        todos={todos}
        headingTitle={"Done"}
        filterBy={"done"}
        hide={todos.filter((todo) => todo.completed).length <= 0}
        onDelete={onDelete}
        onUpdateTitle={onUpdateTitle}
        onStatusChange={onStatusChange}
      />
      <ConfirmDialog
        open={showConfirmationModal}
        contentText="Are you sure you want to remove the todo?"
        onCancel={() => setShowConfirmationModal(false)}
        onConfirm={() => {
          deleteTodo(todoMarkedForDeletion);
          setShowConfirmationModal(false);
        }}
      />
    </Layout>
  );
};

export default IndexPage;
