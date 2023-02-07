import { Button, Stack, TextField } from "@mui/material";
import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const TodoInput = ({ value, onChange, onClick }: Props) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent={"center"}
      sx={{
        mt: 4,
      }}
    >
      <TextField
        label="Todo title"
        type="text"
        size="small"
        value={value}
        onChange={onChange}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          e.code === "Enter" && onClick();
        }}
      />
      <Button variant="contained" disabled={!value} onClick={onClick}>
        Create
      </Button>
    </Stack>
  );
};

export default TodoInput;
