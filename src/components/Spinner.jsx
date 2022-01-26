import { CircularProgress } from "@mui/material";
import React from "react";

const Spinner = (props) => {
  if (props.fullPage) {
    return (
      <div className="w-screen h-screen flex">
        <div className="m-auto">
          <CircularProgress />
        </div>
      </div>
    );
  } else {
    return <CircularProgress />;
  }
};

export default Spinner;
