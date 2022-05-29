import {
  Collapse as MUICollapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Collapse = ({ name, icon, children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse-filter">
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ListItemButton>
      <MUICollapse in={open} timeout="auto" unmountOnExit>
        {children}
      </MUICollapse>
    </div>
  );
};

export default Collapse;
