import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

const Modal = ({ children, title, open, onClose, onSubmit, action }) => {
  return (
    <Dialog dir="rtl" open={open} onClose={onClose} className="modal">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onSubmit();
            onClose();
          }}
          autoFocus
        >
          {action}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
