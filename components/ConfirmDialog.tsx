import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

interface Props {
  open: boolean;
  title?: string;
  contentText: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog = ({
  open,
  onConfirm,
  onCancel,
  contentText,
  primaryActionText = "Confirm",
  secondaryActionText = "Cancel",
  title = "Confirm the action",
}: Props) => {
  return (
    <Dialog open={open} maxWidth="xs" fullWidth onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={onCancel}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>{contentText}</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onCancel}>
          {secondaryActionText}
        </Button>
        <Button variant="text" onClick={onConfirm}>
          {primaryActionText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
