import { Grid, Typography } from "@mui/material";
import React from "react";
import { Todo } from "../interfaces";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  headingTitle: string;
  filterBy: "all" | "todo" | "done";
  hide?: boolean;
  onStatusChange: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onUpdateTitle: (todo: Todo, value: any) => void;
}

const TodoList = ({
  todos,
  headingTitle,
  filterBy,
  hide,
  onStatusChange,
  onDelete,
  onUpdateTitle,
}: Props) => {
  if (hide) return null;
  return (
    <>
      {headingTitle && (
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          {headingTitle}
        </Typography>
      )}
      <Grid container spacing={4}>
        {todos
          .sort((a, b) => b.createdAt - a.createdAt)
          .filter((todo) => {
            switch (filterBy) {
              case "all":
                return true;
              case "done":
                return todo.completed;
              case "todo":
                return !todo.completed;
            }
          })
          .map((todo) => (
            <Grid item key={todo.id}>
              <TodoCard
                todo={todo}
                onStatusChange={onStatusChange}
                onUpdateTitle={onUpdateTitle}
                onDelete={onDelete}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default TodoList;
