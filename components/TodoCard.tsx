import {
  CheckCircle,
  DeleteForeverRounded,
  PendingActions,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Todo } from "../interfaces";

interface Props {
  todo: Todo;
  onStatusChange: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onUpdateTitle: (todo: Todo, newTitleValue: any) => void;
}

const TodoCard = ({ todo, onStatusChange, onDelete, onUpdateTitle }: Props) => {
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  return (
    <Card
      sx={{
        minWidth: 350,
        maxWidth: 350,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: 2,
        borderRadius: 2,
        borderColor: todo.completed ? "green" : "orange",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {!isTitleFocused ? (
            <Typography
              variant="h5"
              component="div"
              onClick={() => {
                setIsTitleFocused(true);
              }}
            >
              {todo.title}
            </Typography>
          ) : (
            <TextField
              variant="standard"
              autoFocus
              value={todo.title}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onUpdateTitle(todo, event.target.value)
              }
              onBlur={() => setIsTitleFocused(false)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                e.code === "Enter" && setIsTitleFocused(false);
              }}
            />
          )}
          {todo.completed ? (
            <CheckCircle color="success" />
          ) : (
            <PendingActions color="warning" />
          )}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "auto",
        }}
      >
        <Button
          variant="contained"
          startIcon={todo.completed ? <PendingActions /> : <CheckCircle />}
          size="small"
          color={todo.completed ? "warning" : "success"}
          onClick={() => onStatusChange(todo)}
        >
          {todo.completed ? "Mark undone" : "Mark completed"}
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteForeverRounded />}
          size="small"
          color="error"
          onClick={() => onDelete(todo)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
